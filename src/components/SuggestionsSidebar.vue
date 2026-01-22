<template>
  <div
    class="min-w-[340px] bg-white dark:bg-gray-900 flex flex-col border-l border-gray-100 dark:border-gray-800 w-[30%] fixed right-0 top-0 min-h-screen overflow-y-auto h-full transition-colors duration-300"
  >
    <div class="px-6 py-4 border-gray-100 dark:border-gray-800">
      <input
        type="text"
        placeholder="Search posts"
        class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-200 focus:outline-none !h-[40px] transition-colors duration-300"
      />
    </div>
    <div class="px-6 pt-2 pb-4 border-b border-gray-100 dark:border-gray-800">
      <div class="flex justify-between items-center">
        <div class="text-xs font-bold text-gray-400 dark:text-gray-300 mb-2">SUGGESTIONS</div>
        <div class="flex gap-2 mb-2">
          <button
            class="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-300 text-lg"
          >
            <font-awesome-icon icon="fa-link" />
          </button>
          <button
            class="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-300 text-lg"
          >
            <font-awesome-icon icon="fa-sync" />
          </button>
          <button
            class="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-300 text-lg"
          >
            <font-awesome-icon icon="fa-arrow-right" />
          </button>
        </div>
      </div>
      <!-- Suggestions List -->
      <div class="space-y-3">
        <div v-if="loading" class="text-gray-400 dark:text-gray-300">Loading users...</div>
        <div v-if="error" class="text-red-500 dark:text-red-400">{{ error }}</div>
        <div
          v-for="user in users.filter((u) => u.role === 'creator')"
          :key="user.id"
          @click="navigateToUserProfile(user.slug)"
          class="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-2 relative overflow-hidden transition-colors duration-300 cursor-pointer hover:opacity-90"
          style="height: 180px"
        >
          <img
            :src="user.profile_image || require('@/assets/default-avatar.png')"
            :alt="user.name"
            class="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-40"
          />
          <div class="relative z-10 flex items-center gap-3 w-full">
            <img
              :src="user.profile_image || require('@/assets/default-avatar.png')"
              :alt="user.name"
              class="w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 object-cover"
            />
            <div class="flex-1">
              <div class="flex items-center gap-1">
                <span class="font-bold text-gray-800 dark:text-gray-200 text-base">{{
                  user.name
                }}</span>
                <span
                  class="ml-1 px-2 py-0.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded text-xs text-gray-500 dark:text-gray-300"
                  >{{ user.username }}</span
                >
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ user.email }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Links -->
    <div
      class="px-6 py-4 flex gap-4 text-xs text-gray-400 dark:text-gray-300 justify-center border-t border-gray-100 dark:border-gray-800"
    >
      <a href="#" class="hover:underline">Privacy</a>
      <a href="#" class="hover:underline">Cookie Notice</a>
      <a href="#" class="hover:underline">Terms of Service</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '@/api-services/fetch'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = useRouter()
const users = ref([])
const loading = ref(false)
const error = ref(null)

const fetchUsers = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await get({ endpoint: 'getAllUsers', auth: true })
    if (response.data && response.data.success) {
      users.value = response.data.data
    } else {
      error.value = 'Failed to load users'
    }
  } catch (err) {
    error.value = 'Error fetching users'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const navigateToUserProfile = (userId) => {
  router.push({ name: 'user-profile', params: { id: userId } })
}

onMounted(() => {
  fetchUsers()
})
</script>
