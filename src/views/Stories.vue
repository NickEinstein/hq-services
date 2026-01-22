<template>
  <div class="flex w-full min-h-screen bg-black">
    <!-- Stories Feed (Instagram Reels Style) -->
    <div class="flex-1 flex items-center justify-center relative">
      <!-- Previous Story Button -->
      <button
        v-if="currentStoryIndex > 0"
        @click="previousStory"
        class="absolute left-4 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
      >
        <font-awesome-icon icon="fa-chevron-left" class="text-xl" />
      </button>

      <!-- Story Container -->
      <div
        class="w-full max-w-md h-screen bg-black relative overflow-hidden"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Progress Bars -->
        <div class="absolute top-0 left-0 right-0 z-30 flex gap-1 p-3">
          <div
            v-for="(story, index) in stories"
            :key="story.id"
            class="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              class="h-full bg-white transition-all duration-300"
              :style="{
                width: index < currentStoryIndex ? '100%' : index === currentStoryIndex ? progress + '%' : '0%'
              }"
            ></div>
          </div>
        </div>

        <!-- Story Header -->
        <div class="absolute top-12 left-0 right-0 z-30 px-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              :src="currentStory?.creator?.avatar || '/default-avatar.png'"
              class="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <div>
              <p class="text-white font-semibold text-sm">{{ currentStory?.creator?.username }}</p>
              <p class="text-white/70 text-xs">{{ currentStory?.timeAgo }}</p>
            </div>
          </div>
          <button
            @click="closeStories"
            class="w-8 h-8 flex items-center justify-center text-white"
          >
            <font-awesome-icon icon="fa-xmark" class="text-2xl" />
          </button>
        </div>

        <!-- Story Media -->
        <div
          class="w-full h-full flex items-center justify-center bg-black"
          @click="handleStoryTap"
        >
          <video
            v-if="currentStory?.type === 'video'"
            ref="videoPlayer"
            :src="currentStory?.media"
            class="w-full h-full object-contain"
            autoplay
            loop
            muted
            playsinline
            @ended="nextStory"
          ></video>
          <img
            v-else
            :src="currentStory?.media"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Story Caption (if exists) -->
        <div
          v-if="currentStory?.caption"
          class="absolute bottom-20 left-0 right-0 z-30 px-4"
        >
          <p class="text-white text-sm bg-black/50 backdrop-blur-sm rounded-xl p-3">
            {{ currentStory?.caption }}
          </p>
        </div>

        <!-- Story Actions -->
        <div class="absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div class="flex items-center gap-4">
            <div class="flex-1 relative">
              <input
                v-model="replyMessage"
                type="text"
                placeholder="Send message"
                class="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/40"
                @keypress.enter="sendReply"
              />
            </div>
            <button
              @click="toggleLike"
              class="w-10 h-10 flex items-center justify-center"
            >
              <font-awesome-icon
                :icon="currentStory?.isLiked ? 'fa-heart-solid' : 'fa-heart'"
                :class="currentStory?.isLiked ? 'text-red-500' : 'text-white'"
                class="text-2xl transition-all"
              />
            </button>
            <button class="w-10 h-10 flex items-center justify-center text-white">
              <font-awesome-icon icon="fa-paper-plane" class="text-xl" />
            </button>
          </div>
        </div>

        <!-- Pause Indicator -->
        <div
          v-if="isPaused"
          class="absolute inset-0 z-40 bg-black/30 flex items-center justify-center pointer-events-none"
        >
          <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <font-awesome-icon icon="fa-pause" class="text-white text-3xl" />
          </div>
        </div>
      </div>

      <!-- Next Story Button -->
      <button
        v-if="currentStoryIndex < stories.length - 1"
        @click="nextStory"
        class="absolute right-4 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
      >
        <font-awesome-icon icon="fa-chevron-right" class="text-xl" />
      </button>
    </div>

    <!-- Stories Sidebar (All Stories) -->
    <div
      class="hidden lg:block w-96 bg-gray-900 overflow-y-auto border-l border-gray-800"
      v-if="allCreatorStories.length > 0"
    >
      <div class="p-6">
        <h2 class="text-white text-xl font-bold mb-6">All Stories</h2>
        <div class="space-y-4">
          <div
            v-for="creatorStory in allCreatorStories"
            :key="creatorStory.creatorId"
            @click="jumpToCreatorStories(creatorStory)"
            class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 cursor-pointer transition-all"
          >
            <div class="relative">
              <img
                :src="creatorStory.avatar"
                class="w-14 h-14 rounded-full object-cover"
                :class="creatorStory.viewed ? 'opacity-60' : 'border-2 border-[#e82264]'"
              />
              <div
                v-if="!creatorStory.viewed"
                class="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e82264] rounded-full flex items-center justify-center text-white text-xs font-bold"
              >
                {{ creatorStory.count }}
              </div>
            </div>
            <div class="flex-1">
              <p class="text-white font-semibold text-sm">{{ creatorStory.username }}</p>
              <p class="text-gray-400 text-xs">{{ creatorStory.timeAgo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// State
const currentStoryIndex = ref(0)
const progress = ref(0)
const isPaused = ref(false)
const replyMessage = ref('')
const videoPlayer = ref(null)

// Touch handling for mobile
let touchStartX = 0
let touchStartTime = 0

// Mock stories data (replace with API call)
const stories = ref([
  {
    id: 1,
    creator: {
      username: '@creator1',
      avatar: null
    },
    media: '/placeholder-story1.jpg',
    type: 'image',
    caption: 'Check out my new content! 🔥',
    timeAgo: '2h ago',
    isLiked: false,
    likes: 234,
    views: 1542
  },
  {
    id: 2,
    creator: {
      username: '@creator1',
      avatar: null
    },
    media: '/placeholder-story2.jpg',
    type: 'video',
    caption: 'Behind the scenes 🎬',
    timeAgo: '4h ago',
    isLiked: false,
    likes: 456,
    views: 2341
  },
  {
    id: 3,
    creator: {
      username: '@creator1',
      avatar: null
    },
    media: '/placeholder-story3.jpg',
    type: 'image',
    caption: null,
    timeAgo: '6h ago',
    isLiked: true,
    likes: 789,
    views: 3215
  }
])

// All creator stories for sidebar
const allCreatorStories = ref([
  {
    creatorId: 1,
    username: '@creator1',
    avatar: null,
    count: 3,
    timeAgo: '2h ago',
    viewed: false
  },
  {
    creatorId: 2,
    username: '@creator2',
    avatar: null,
    count: 5,
    timeAgo: '5h ago',
    viewed: false
  },
  {
    creatorId: 3,
    username: '@creator3',
    avatar: null,
    count: 2,
    timeAgo: '8h ago',
    viewed: true
  }
])

// Computed
const currentStory = computed(() => stories.value[currentStoryIndex.value])

// Progress timer
let progressInterval = null

function startProgress() {
  stopProgress()
  progress.value = 0
  
  const duration = currentStory.value?.type === 'video' ? 15000 : 5000 // 15s for video, 5s for image
  const incrementValue = 100 / (duration / 100)
  
  progressInterval = setInterval(() => {
    if (!isPaused.value) {
      progress.value += incrementValue
      if (progress.value >= 100) {
        nextStory()
      }
    }
  }, 100)
}

function stopProgress() {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
}

function pauseStory() {
  isPaused.value = true
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
}

function resumeStory() {
  isPaused.value = false
  if (videoPlayer.value) {
    videoPlayer.value.play()
  }
}

function nextStory() {
  if (currentStoryIndex.value < stories.value.length - 1) {
    currentStoryIndex.value++
    startProgress()
  } else {
    // End of stories, go to next creator or close
    closeStories()
  }
}

function previousStory() {
  if (currentStoryIndex.value > 0) {
    currentStoryIndex.value--
    startProgress()
  }
}

function handleStoryTap(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const threshold = rect.width / 2
  
  if (x < threshold) {
    previousStory()
  } else {
    nextStory()
  }
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX
  touchStartTime = Date.now()
  pauseStory()
}

function handleTouchEnd(event) {
  const touchEndX = event.changedTouches[0].clientX
  const touchDuration = Date.now() - touchStartTime
  const swipeDistance = touchEndX - touchStartX
  
  // Long press (hold to pause)
  if (touchDuration > 200) {
    resumeStory()
    return
  }
  
  // Swipe detection
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      // Swipe right - previous story
      previousStory()
    } else {
      // Swipe left - next story
      nextStory()
    }
  } else {
    // Tap detection
    const rect = event.target.getBoundingClientRect()
    const x = touchStartX - rect.left
    const threshold = rect.width / 2
    
    if (x < threshold) {
      previousStory()
    } else {
      nextStory()
    }
  }
  
  resumeStory()
}

function toggleLike() {
  currentStory.value.isLiked = !currentStory.value.isLiked
  if (currentStory.value.isLiked) {
    currentStory.value.likes++
  } else {
    currentStory.value.likes--
  }
}

function sendReply() {
  if (replyMessage.value.trim()) {
    console.log('Sending reply:', replyMessage.value)
    // TODO: Implement reply API call
    replyMessage.value = ''
  }
}

function jumpToCreatorStories(creatorStory) {
  // TODO: Load stories for selected creator
  console.log('Jumping to creator:', creatorStory.username)
}

function closeStories() {
  stopProgress()
  router.push('/dashboard')
}

// Keyboard navigation
function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowLeft':
      previousStory()
      break
    case 'ArrowRight':
      nextStory()
      break
    case 'Escape':
      closeStories()
      break
    case ' ':
      event.preventDefault()
      if (isPaused.value) {
        resumeStory()
      } else {
        pauseStory()
      }
      break
  }
}

// Lifecycle
onMounted(() => {
  startProgress()
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  stopProgress()
  document.removeEventListener('keydown', handleKeyPress)
})

// Watch for story changes
watch(currentStoryIndex, () => {
  progress.value = 0
})
</script>

<style scoped>
/* Custom scrollbar for sidebar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
