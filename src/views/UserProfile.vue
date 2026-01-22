<template>
  <div class="flex w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header with Back Button -->
      <div
        class="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10"
      >
        <button
          @click="goBack"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
        >
          <font-awesome-icon icon="fa-arrow-left" class="text-lg" />
        </button>
      </div>

      <!-- Cover Image -->
      <div
        class="relative w-full h-48 md:h-64 bg-gradient-to-br from-pink-200 to-purple-300 dark:from-gray-800 dark:to-gray-900"
      >
        <img
          v-if="user.cover_image"
          :src="user.cover_image"
          alt="Cover"
          class="w-full h-full object-cover"
        />
        <!-- Profile Avatar -->
        <div class="absolute -bottom-12 left-6">
          <div class="relative">
            <img
              v-if="user.profile_image"
              :src="user.profile_image"
              :alt="user.name"
              class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-lg"
            />
            <div
              v-else
              class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#e82264] flex items-center justify-center text-white text-3xl font-bold border-4 border-white dark:border-gray-900 shadow-lg"
            >
              {{ getUserInitials(user.name) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Info Card -->
      <div
        class="bg-white dark:bg-gray-900 mt-16 px-6 py-6 border-b border-gray-200 dark:border-gray-800"
      >
        <!-- User Name and Actions -->
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <h1 class="text-xl font-bold text-gray-900 dark:text-white">{{ user.name }}</h1>
              <font-awesome-icon
                v-if="user.verified"
                icon="fa-check-circle"
                class="text-[#1da1f2] text-lg"
              />
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>@{{ user.username }}</span>
              <span v-if="user.status" class="flex items-center gap-1">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                {{ user.status }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2">
            <button
              v-if="!isSubscribed"
              @click="handleSubscribe"
              :disabled="subscribing"
              class="px-6 py-2 bg-[#1da1f2] text-white rounded-full font-semibold hover:bg-[#0d8ddb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
            >
              {{ subscribing ? 'SUBSCRIBING...' : subscriptionPrice }}
            </button>
            <button
              v-else
              class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full font-semibold text-sm"
            >
              SUBSCRIBED
            </button>
            <button
              class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <font-awesome-icon icon="fa-ellipsis" class="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <!-- Bio -->
        <p
          v-if="user.bio"
          class="text-gray-700 dark:text-gray-300 text-sm mb-4 whitespace-pre-line"
        >
          {{ user.bio }}
        </p>

        <!-- More Info Link -->
        <button
          v-if="user.website || user.location"
          class="text-[#1da1f2] text-sm font-medium hover:underline mb-4"
        >
          More info
        </button>

        <!-- Subscription Info -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">SUBSCRIPTION</div>
          <button
            @click="handleSubscribe"
            :disabled="subscribing || isSubscribed"
            class="w-full py-3 bg-[#1da1f2] text-white rounded-full font-bold hover:bg-[#0d8ddb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isSubscribed ? 'SUBSCRIBED' : subscriptionPrice }}
          </button>
        </div>

        <!-- Links -->
        <div
          class="flex gap-4 text-xs text-gray-500 dark:text-gray-400 justify-center border-t border-gray-200 dark:border-gray-700 pt-4"
        >
          <a href="#" class="hover:underline">Privacy</a>
          <a href="#" class="hover:underline">Cookie Notice</a>
          <a href="#" class="hover:underline">Terms of Service</a>
        </div>
      </div>

      <!-- Stats and Tabs -->
      <div class="bg-white dark:bg-gray-900 px-6 border-b border-gray-200 dark:border-gray-800">
        <!-- Stats -->
        <div class="flex gap-6 py-3 text-sm">
          <div class="flex items-center gap-1">
            <font-awesome-icon icon="fa-image" class="text-gray-400 dark:text-gray-500" />
            <span class="font-bold text-gray-900 dark:text-white">{{ user.posts_count || 0 }}</span>
          </div>
          <div class="flex items-center gap-1">
            <font-awesome-icon icon="fa-photo-film" class="text-gray-400 dark:text-gray-500" />
            <span class="font-bold text-gray-900 dark:text-white">{{ user.media_count || 0 }}</span>
          </div>
          <div class="flex items-center gap-1">
            <font-awesome-icon icon="fa-heart" class="text-gray-400 dark:text-gray-500" />
            <span class="font-bold text-gray-900 dark:text-white">{{ user.likes_count || 0 }}</span>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-8 text-sm font-semibold">
          <button
            @click="activeTab = 'posts'"
            :class="[
              'pb-3 transition-colors',
              activeTab === 'posts'
                ? 'border-b-2 border-[#1da1f2] text-[#1da1f2]'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            ]"
          >
            {{ user.posts_count || 0 }} POSTS
          </button>
          <button
            @click="activeTab = 'media'"
            :class="[
              'pb-3 transition-colors',
              activeTab === 'media'
                ? 'border-b-2 border-[#1da1f2] text-[#1da1f2]'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            ]"
          >
            {{ user.media_count || 0 }} MEDIA
          </button>
        </div>
      </div>

      <!-- Content Area -->
      <div class="flex-1 bg-white dark:bg-gray-900">
        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center py-20">
          <div class="text-gray-400 dark:text-gray-500">Loading...</div>
        </div>

        <!-- Locked Content (Not Subscribed) -->
        <div v-else-if="!isSubscribed" class="flex flex-col items-center justify-center py-20 px-6">
          <font-awesome-icon
            icon="fa-lock"
            class="text-6xl text-gray-300 dark:text-gray-600 mb-6"
          />
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">Subscribe to see user's posts</p>
          <button
            @click="handleSubscribe"
            :disabled="subscribing"
            class="px-8 py-3 bg-[#1da1f2] text-white rounded-full font-bold hover:bg-[#0d8ddb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ subscribing ? 'SUBSCRIBING...' : 'SUBSCRIBE TO SEE USERS POSTS' }}
          </button>
        </div>

        <!-- Posts Tab -->
        <div v-else-if="activeTab === 'posts'" class="px-6 py-6">
          <div v-if="posts.length === 0" class="flex flex-col items-center justify-center py-20">
            <font-awesome-icon
              icon="fa-image"
              class="text-5xl text-gray-300 dark:text-gray-600 mb-4"
            />
            <p class="text-gray-500 dark:text-gray-400 text-sm">No posts yet</p>
          </div>
          <div v-else class="space-y-6">
            <!-- Post items would go here -->
            <div
              v-for="post in posts"
              :key="post.id"
              class="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">{{ post.caption }}</p>
            </div>
          </div>
        </div>

        <!-- Media Tab -->
        <div v-else-if="activeTab === 'media'" class="px-6 py-6">
          <div v-if="posts.length === 0" class="flex flex-col items-center justify-center py-20">
            <font-awesome-icon
              icon="fa-photo-film"
              class="text-5xl text-gray-300 dark:text-gray-600 mb-4"
            />
            <p class="text-gray-500 dark:text-gray-400 text-sm">No media yet</p>
          </div>
          <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <!-- Media items would go here -->
            <div
              v-for="post in posts"
              :key="post.id"
              class="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                v-if="post.thumbnail_url"
                :src="post.thumbnail_url"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (optional, for desktop) -->
    <div
      class="hidden lg:block w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
    >
      <div class="text-xs text-gray-500 dark:text-gray-400 mb-4">SUGGESTIONS</div>
      <!-- Suggestions would go here -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get, post } from '@/api-services/fetch'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const user = ref({
  id: null,
  name: '',
  username: '',
  bio: '',
  profile_image: '',
  cover_image: '',
  verified: false,
  status: '',
  posts_count: 0,
  media_count: 0,
  likes_count: 0,
  website: '',
  location: ''
})

const posts = ref([])
const activeTab = ref('posts')
const loading = ref(false)
const isSubscribed = ref(false)
const subscribing = ref(false)

const subscriptionPrice = computed(() => {
  return user.value.subscription_price
    ? `SUBSCRIBE FOR $${user.value.subscription_price}`
    : 'SUBSCRIBE FOR FREE'
})

const getUserInitials = (name) => {
  if (!name) return 'U'
  const names = name.split(' ')
  return names.length > 1 ? `${names[0][0]}${names[1][0]}`.toUpperCase() : names[0][0].toUpperCase()
}

const fetchUserProfile = async () => {
  loading.value = true
  try {
    const userId = route.params.id || route.query.id
    const response = await get({
      endpoint: `/users/single/${userId}`,
      auth: true
    })

    if (response?.data?.success) {
      user.value = response.data.data
      // Check subscription status
      isSubscribed.value = response.data.data.is_subscribed || false
    }
  } catch (error) {
    console.error('Error fetching user profile:', error)
  } finally {
    loading.value = false
  }
}

const fetchUserPosts = async () => {
  if (!isSubscribed.value) return

  try {
    const userId = route.params.id || route.query.id
    const response = await get({
      endpoint: `/users/${userId}/contents`,
      auth: true
    })

    if (response?.data?.success) {
      posts.value = response.data.data
    }
  } catch (error) {
    console.error('Error fetching user posts:', error)
  }
}

const handleSubscribe = async () => {
  subscribing.value = true
  try {
    // const userId = route.params.id || route.query.id
    // Example: 3 months duration, can be dynamic
    const response = await post({
      endpoint: `createSubscription`,
      auth: true,
      body: {
        creator: user.value.id,
        duration: 3
      }
    })

    if (response?.data?.success) {
      isSubscribed.value = true
      await fetchUserPosts()
    }
  } catch (error) {
    console.error('Error subscribing:', error)
    alert('Failed to subscribe. Please try again.')
  } finally {
    subscribing.value = false
  }
}

const goBack = () => {
  router.back()
}

onMounted(() => {
  fetchUserProfile()
  if (isSubscribed.value) {
    fetchUserPosts()
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
