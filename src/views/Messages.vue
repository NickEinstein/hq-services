<template>
  <div class="flex w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Sidebar -->
    <div
      class="w-full md:w-[340px] border-r border-gray-100 dark:border-gray-800 flex flex-col transition-colors duration-300"
    >
      <div
        class="flex items-center px-4 md:px-6 py-4 border-b border-gray-100 dark:border-gray-800 sticky top-14 md:top-0 bg-white dark:bg-gray-900 z-10 transition-colors duration-300"
      >
        <button
          class="mr-2 text-gray-400 dark:text-gray-300 w-9 h-9 flex items-center justify-center md:text-xl"
        >
          <font-awesome-icon icon="fa-arrow-left" class="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <span class="font-bold text-base md:text-lg text-gray-700 dark:text-gray-200"
          >MESSAGES</span
        >
        <div class="ml-auto flex items-center gap-1 md:gap-2">
          <button
            class="text-gray-400 dark:text-gray-300 w-9 h-9 flex items-center justify-center md:text-lg"
          >
            <font-awesome-icon icon="fa-search" class="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            class="text-gray-400 dark:text-gray-300 w-9 h-9 flex items-center justify-center md:text-lg"
          >
            <font-awesome-icon icon="fa-plus" class="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
      <div
        class="px-4 md:px-6 py-2 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between transition-colors duration-300"
      >
        <div class="flex gap-2">
          <button class="px-3 py-1 rounded-full bg-[#e0f4ff] text-[#009de0] text-xs font-semibold">
            All
          </button>
          <button
            class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-300 text-xs font-semibold"
          >
            <font-awesome-icon icon="fa-pen" />
          </button>
        </div>
        <button class="text-gray-400 dark:text-gray-300 w-8 h-8 flex items-center justify-center">
          <font-awesome-icon icon="fa-filter" />
        </button>
      </div>
      <div
        class="flex-1 flex flex-col items-center justify-center text-gray-300 dark:text-gray-500 text-sm px-4"
      >
        <span>Nothing found</span>
      </div>
    </div>
    <!-- Main Content -->
    <div class="hidden md:flex flex-1 items-center justify-center">
      <div class="text-center px-4">
        <div class="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
          Please subscribe to a creator to access this feature.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
