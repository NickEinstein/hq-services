<template>
  <div class="flex w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Main Notifications Feed -->
    <div
      class="flex-1 flex flex-col border-r relative top-0 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 w-full md:mr-[35%] md:w-[65%] transition-colors duration-300"
    >
      <!-- Header -->
      <div
        class="px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800 sticky top-14 md:top-0 w-full bg-white dark:bg-gray-900 z-10 flex items-center justify-between gap-2 md:gap-12 transition-colors duration-300"
      >
        <div class="flex gap-2 md:gap-3 items-center">
          <button
            @click="isSearch = false"
            class="text-gray-500 dark:text-gray-300 hover:text-[#e82264]"
          >
            <font-awesome-icon icon="fa-arrow-left" class="w-4 h-4" />
          </button>
          <h1
            v-if="!isSearch"
            class="text-base md:text-lg font-bold tracking-tight dark:text-white"
          >
            NOTIFICATIONS
          </h1>
        </div>
        <div class="ml-auto flex items-center justify-end gap-2 w-full max-w-md">
          <input
            v-if="isSearch"
            ref="searchInput"
            type="text"
            placeholder="Search notifications"
            class="bg-gray-50 dark:bg-gray-800 !h-[36px] md:!h-[40px] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1 w-full text-gray-600 dark:text-gray-200 text-sm focus:outline-none transition-colors duration-300"
          />
          <button
            @click="showsearch"
            class="text-gray-400 dark:text-gray-300 hover:text-[#e82264] w-9 h-9 flex items-center justify-center"
          >
            <font-awesome-icon icon="fa-search" class="w-4 h-4" />
          </button>
          <button
            class="text-gray-400 dark:text-gray-300 hover:text-[#e82264] w-9 h-9 flex items-center justify-center"
          >
            <font-awesome-icon icon="fa-cog" class="w-4 h-4" />
          </button>
        </div>
      </div>
      <!-- Filter Tabs -->
      <div
        class="px-4 md:px-6 py-3 flex gap-2 items-center border-b border-gray-100 dark:border-gray-800 overflow-x-auto transition-colors duration-300"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap',
            activeTab === tab
              ? 'bg-[#e3f2fd] text-[#e82264]'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200'
          ]"
        >
          {{ tab }}
        </button>
        <button
          class="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-300 text-xs md:text-sm font-semibold ml-2"
        >
          <font-awesome-icon icon="fa-pen" />
        </button>
      </div>
      <!-- Empty State -->
      <div class="flex-1 flex items-center justify-center px-4">
        <span class="text-gray-300 dark:text-gray-500 text-sm md:text-base font-semibold"
          >No notifications currently!</span
        >
      </div>
    </div>
    <!-- Suggestions Sidebar -->
    <div class="hidden md:block">
      <SuggestionsSidebar />
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import SuggestionsSidebar from '@/components/SuggestionsSidebar.vue'

const isSearch = ref(false)
const searchInput = ref(null)
const tabs = ['All', 'Tags', 'Comments', 'Mentions', 'Subscriptions', 'Promotions']
const activeTab = ref('All')
function showsearch() {
  isSearch.value = true
  if (searchInput.value) {
    searchInput.value.focus()
  }
}
import { get, post } from '@/api-services/fetch'

// import { getStatusTextColor, capitalizeWords } from '@/utility/status'
import dayjs from 'dayjs'
</script>
