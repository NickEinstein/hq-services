<template>
  <div class="flex w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Profile Main -->
    <div class="flex-1 flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <!-- Header -->
      <div
        class="relative h-32 md:h-40 bg-gradient-to-b from-[#e0f4ff] to-white dark:to-gray-900 flex items-end transition-colors duration-300"
      >
        <button
          class="absolute top-16 md:top-4 left-4 text-gray-500 dark:text-gray-300 w-9 h-9 flex items-center justify-center md:text-xl"
        >
          <font-awesome-icon icon="fa-arrow-left" class="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <span
          class="absolute top-16 md:top-4 left-14 md:left-16 font-bold text-base md:text-lg text-gray-700 dark:text-gray-200"
          >{{ userName }}</span
        >
      </div>
      <!-- Avatar and Info -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center px-4 md:px-8 gap-4 md:gap-0"
      >
        <div class="relative">
          <div
            v-if="userStore.user?.profile_image"
            class="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow"
          >
            <img
              :src="userStore.user.profile_image"
              alt="Profile"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            v-else
            class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold text-[#009de0] border-4 border-white dark:border-gray-900 shadow"
          >
            {{ initials }}
          </div>
          <span
            class="absolute bottom-1 right-1 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"
          ></span>
        </div>
        <div class="md:ml-6 flex-1 w-full md:w-auto">
          <div class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">
            {{ userName }}
          </div>
          <div class="text-gray-400 dark:text-gray-300 text-xs md:text-sm">
            @{{ userUsername }} &bull; <span class="text-green-500">Available</span>
          </div>
        </div>
        <div class="flex gap-2 w-full md:w-auto">
          <button
            @click="goToSettings"
            class="flex-1 md:flex-initial px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            EDIT PROFILE
          </button>
          <button
            class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <font-awesome-icon icon="fa-share" class="text-sm" />
          </button>
        </div>
      </div>
      <!-- Tabs -->
      <div
        class="flex gap-4 md:gap-8 px-4 md:px-8 mt-6 md:mt-8 border-b border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-400 dark:text-gray-300 transition-colors duration-300"
      >
        <button
          @click="activeTab = 'posts'"
          :class="[
            'pb-2 transition-colors',
            activeTab === 'posts'
              ? 'border-b-2 border-[#009de0] text-[#009de0]'
              : 'hover:text-gray-600 dark:hover:text-gray-200'
          ]"
        >
          {{ contents.length }} POSTS
        </button>
        <button
          @click="activeTab = 'media'"
          :class="[
            'pb-2 transition-colors',
            activeTab === 'media'
              ? 'border-b-2 border-[#009de0] text-[#009de0]'
              : 'hover:text-gray-600 dark:hover:text-gray-200'
          ]"
        >
          {{ contents.length }} MEDIA
        </button>
      </div>

      <!-- Posts Tab -->
      <div v-if="activeTab === 'posts'" class="flex-1 px-4 md:px-8 py-6">
        <!-- Loading Skeleton -->
        <div v-if="isLoading" class="space-y-6">
          <div
            v-for="n in 2"
            :key="n"
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse"
          >
            <!-- Header Skeleton -->
            <div
              class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700"
            >
              <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div class="flex-1">
                <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div class="h-3 w-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
              </div>
            </div>
            <!-- Content Skeleton -->
            <div class="px-4 py-3">
              <div class="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div class="h-4 w-48 bg-gray-100 dark:bg-gray-800 rounded mb-4"></div>
              <div
                class="relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 h-[400px] md:h-[500px]"
              ></div>
            </div>
            <!-- Actions Skeleton -->
            <div
              class="flex items-center gap-6 px-4 py-3 border-t border-gray-100 dark:border-gray-700"
            >
              <div class="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div class="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div class="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded ml-auto"></div>
            </div>
          </div>
        </div>
        <!-- Empty State -->
        <div
          v-else-if="contents.length === 0"
          class="flex flex-col items-center justify-center h-full"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No posts"
            class="w-24 h-24 md:w-32 md:h-32 mb-4 opacity-30"
          />
          <div class="text-gray-300 dark:text-gray-500 text-sm">No posts yet</div>
        </div>
        <!-- Posts Grid -->
        <div v-else class="space-y-6">
          <div
            v-for="content in contents"
            :key="content.id"
            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300"
          >
            <!-- Post Header -->
            <div
              class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700"
            >
              <div
                v-if="content.relationships.creator.profile_image"
                class="w-10 h-10 rounded-full overflow-hidden"
              >
                <img
                  :src="content.relationships.creator.profile_image"
                  alt="Creator"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                v-else
                class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-[#009de0]"
              >
                {{ getInitials(content.relationships.creator.name) }}
              </div>
              <div class="flex-1">
                <div class="font-semibold text-sm text-gray-800 dark:text-gray-200">
                  {{ content.relationships.creator.name }}
                </div>
                <div class="text-xs text-gray-400 dark:text-gray-500">
                  {{ formatDate(content.created_at) }}
                </div>
              </div>
              <button
                v-if="content.relationships.creator.id === userStore.user?.id"
                @click="openEditModal(content)"
                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <font-awesome-icon icon="fa-pen" class="text-sm" />
              </button>
            </div>
            <!-- Post Content -->
            <div class="px-4 py-3">
              <h3 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {{ content.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ content.caption }}</p>
              <!-- Video Player -->
              <div class="relative rounded-lg overflow-hidden bg-black aspect-video">
                <video
                  :poster="content.thumbnail_url"
                  controls
                  class="w-full h-full object-cover"
                  :src="content.media_url"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <!-- Post Actions -->
            <div
              class="flex items-center gap-6 px-4 py-3 border-t border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400"
            >
              <button class="flex items-center gap-2 hover:text-[#e82264] transition-colors">
                <font-awesome-icon icon="fa-heart" class="text-sm" />
                <span class="text-sm">{{ content.relationships.likes_count }}</span>
              </button>
              <button class="flex items-center gap-2 hover:text-[#009de0] transition-colors">
                <font-awesome-icon icon="fa-comment" class="text-sm" />
                <span class="text-sm">{{ content.relationships.comments_count }}</span>
              </button>
              <button
                class="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors ml-auto"
              >
                <font-awesome-icon icon="fa-share" class="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Media Tab -->
      <div v-if="activeTab === 'media'" class="flex-1 px-4 md:px-8 py-6">
        <!-- Loading Skeleton -->
        <div v-if="isLoading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          <div
            v-for="n in 6"
            :key="n"
            class="relative h-48 md:h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 animate-pulse"
          ></div>
        </div>
        <!-- Empty State -->
        <div
          v-else-if="contents.length === 0"
          class="flex flex-col items-center justify-center h-full"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No media"
            class="w-24 h-24 md:w-32 md:h-32 mb-4 opacity-30"
          />
          <div class="text-gray-300 dark:text-gray-500 text-sm">No media yet</div>
        </div>
        <!-- Media Grid -->
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          <div
            v-for="content in contents"
            :key="content.id"
            class="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer group"
          >
            <img
              :src="content.thumbnail_url"
              :alt="content.title"
              class="w-full h-full object-cover"
            />
            <!-- Play Icon Overlay -->
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <font-awesome-icon icon="fa-play" class="text-white text-3xl drop-shadow-lg" />
            </div>
            <!-- Stats Overlay -->
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white text-xs flex gap-3"
            >
              <span class="flex items-center gap-1">
                <font-awesome-icon icon="fa-heart" />
                {{ content.relationships.likes_count }}
              </span>
              <span class="flex items-center gap-1">
                <font-awesome-icon icon="fa-comment" />
                {{ content.relationships.comments_count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sidebar: Spotify Card -->
    <div
      class="hidden md:flex min-w-[340px] w-[340px] border-l border-gray-100 dark:border-gray-800 flex-col pt-8 px-8 transition-colors duration-300"
    >
      <input
        type="text"
        placeholder="Search user`s post"
        class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-200 focus:outline-none mb-6 transition-colors duration-300"
      />
      <div
        class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-6 transition-colors duration-300"
      >
        <div
          class="flex items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-100 dark:border-gray-700"
        >
          <span class="font-bold text-gray-700 dark:text-gray-200 text-sm">SPOTIFY</span>
          <font-awesome-icon
            icon="fa-chevron-down"
            class="text-gray-400 dark:text-gray-300 text-xs"
          />
        </div>
        <div class="px-4 py-4 flex flex-col items-center">
          <button
            class="w-full flex items-center justify-center gap-2 bg-[#1db954] text-white font-bold rounded-full py-3 text-base"
          >
            <font-awesome-icon icon="fa-spotify" /> SIGN IN WITH SPOTIFY
          </button>
        </div>
      </div>
      <div
        class="flex gap-4 text-xs text-gray-400 dark:text-gray-300 justify-center border-t border-gray-100 dark:border-gray-800 pt-4 transition-colors duration-300"
      >
        <a href="#" class="hover:underline">Privacy</a>
        <a href="#" class="hover:underline">Cookie Notice</a>
        <a href="#" class="hover:underline">Terms of Service</a>
      </div>
    </div>

    <!-- Edit Content Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="closeEditModal"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto transition-colors duration-300"
      >
        <!-- Modal Header -->
        <div
          class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700"
        >
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Edit Content</h3>
          <button
            @click="closeEditModal"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <font-awesome-icon icon="fa-times" class="text-xl" />
          </button>
        </div>

        <!-- Modal Body -->
        <div class="px-6 py-4 space-y-4">
          <!-- Title -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              v-model="editForm.title"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009de0]"
              placeholder="Enter title"
            />
          </div>

          <!-- Caption -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Caption
            </label>
            <textarea
              v-model="editForm.caption"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009de0]"
              placeholder="Enter caption"
            ></textarea>
          </div>

          <!-- Media Upload -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Update Media (Max 2MB)
            </label>
            <input
              type="file"
              accept="video/*"
              @change="handleMediaChange"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009de0]"
            />
            <div
              v-if="mediaPreview"
              class="mt-2 relative rounded-lg overflow-hidden bg-black aspect-video"
            >
              <video :src="mediaPreview" controls class="w-full h-full object-cover">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <!-- Thumbnail Upload -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Update Thumbnail (Max 1MB)
            </label>
            <input
              type="file"
              accept="image/*"
              @change="handleThumbnailChange"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009de0]"
            />
            <div v-if="thumbnailPreview" class="mt-2">
              <img
                :src="thumbnailPreview"
                alt="Thumbnail preview"
                class="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          <!-- Visibility -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Visibility
            </label>
            <select
              v-model="editForm.visibility"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009de0]"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="subscribers">Subscribers Only</option>
            </select>
          </div>

          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Status
            </label>
            <select
              v-model="editForm.status"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009de0]"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        <!-- Modal Footer -->
        <div
          class="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 dark:border-gray-700"
        >
          <button
            @click="closeEditModal"
            class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            @click="updateContent"
            :disabled="isUpdating"
            class="px-4 py-2 text-sm font-medium text-white bg-[#009de0] rounded-lg hover:bg-[#007ab8] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isUpdating ? 'Updating...' : 'Update' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { get, patch, post } from '@/api-services/fetch'

const router = useRouter()
const userStore = useUserStore()
const activeTab = ref('posts')
const contents = ref([])
const isLoading = ref(false)
const showEditModal = ref(false)
const editingContent = ref(null)
const editForm = ref({
  title: '',
  caption: '',
  visibility: '',
  status: ''
})
const isUpdating = ref(false)
const newMedia = ref(null)
const newThumbnail = ref(null)
const mediaPreview = ref('')
const thumbnailPreview = ref('')

const userName = computed(() => {
  return userStore.user?.name || 'User'
})

const userUsername = computed(() => {
  return userStore.user?.username || 'username'
})

const initials = computed(() => {
  if (!userStore.user?.name) return 'U'
  const parts = userStore.user.name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
})

function getInitials(name) {
  if (!name) return 'U'
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

async function fetchContents() {
  isLoading.value = true
  try {
    const response = await get({
      endpoint: '/contents/all',
      auth: true
    })

    if (response?.data?.success && response.data.data) {
      contents.value = response.data.data
    }
  } catch (error) {
    console.error('Error fetching contents:', error)
  } finally {
    isLoading.value = false
  }
}

function openEditModal(content) {
  editingContent.value = content
  editForm.value = {
    title: content.title,
    caption: content.caption,
    visibility: content.visibility,
    status: content.status
  }
  mediaPreview.value = content.media_url
  thumbnailPreview.value = content.thumbnail_url
  showEditModal.value = true
}

function closeEditModal() {
  showEditModal.value = false
  editingContent.value = null
  editForm.value = {
    title: '',
    caption: '',
    visibility: '',
    status: ''
  }
  newMedia.value = null
  newThumbnail.value = null
  mediaPreview.value = ''
  thumbnailPreview.value = ''
}

function handleMediaChange(event) {
  const file = event.target.files[0]
  if (file) {
    // Validate file size (2MB limit)
    if (file.size > 2 * 1024 * 1024) {
      alert('Media file size should not exceed 2MB')
      event.target.value = ''
      return
    }
    newMedia.value = file
    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      mediaPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function handleThumbnailChange(event) {
  const file = event.target.files[0]
  if (file) {
    // Validate file size (1MB limit)
    if (file.size > 1 * 1024 * 1024) {
      alert('Thumbnail file size should not exceed 1MB')
      event.target.value = ''
      return
    }
    newThumbnail.value = file
    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      thumbnailPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

async function updateContent() {
  if (!editingContent.value) return

  isUpdating.value = true
  try {
    const formData = new FormData()
    formData.append('title', editForm.value.title)
    formData.append('caption', editForm.value.caption)
    formData.append('visibility', editForm.value.visibility)
    formData.append('status', editForm.value.status)

    if (newMedia.value) {
      formData.append('media', newMedia.value)
    }
    if (newThumbnail.value) {
      formData.append('thumbnail', newThumbnail.value)
    }

    const response = await post({
      endpoint: `/contents/update/${editingContent.value.slug}`,
      body: formData,
      auth: true,
      multipart: true
    })

    if (response?.data?.success) {
      // Refresh the content list to get updated data from server
      await fetchContents()
      closeEditModal()
      alert('Content updated successfully!')
    } else {
      alert('Failed to update content')
    }
  } catch (error) {
    console.error('Error updating content:', error)
    alert('An error occurred while updating content')
  } finally {
    isUpdating.value = false
  }
}

function goToSettings() {
  router.push('/settings?page=profile')
}

onMounted(() => {
  fetchContents()
})
</script>
