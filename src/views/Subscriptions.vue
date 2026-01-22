<template>
  <div class="flex w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Sidebar: User Lists -->
    <div
      class="w-[340px] border-r border-gray-100 dark:border-gray-800 flex flex-col transition-colors duration-300"
    >
      <div
        class="flex items-center px-6 py-4 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
      >
        <button class="mr-2 text-gray-400 dark:text-gray-300 text-xl" @click="clicked('back')">
          <font-awesome-icon icon="fa-arrow-left" />
        </button>
        <span class="font-bold text-lg text-gray-700 dark:text-gray-200">COLLECTIONS</span>
        <div class="ml-auto flex items-center gap-2">
          <button
            class="text-gray-400 dark:text-gray-300 text-lg"
            @click="clicked('search-sidebar')"
          >
            <font-awesome-icon icon="fa-search" />
          </button>
          <button class="text-gray-400 dark:text-gray-300 text-lg" @click="clicked('add-sidebar')">
            <font-awesome-icon icon="fa-plus" />
          </button>
        </div>
      </div>
      <div>
        <div
          class="flex gap-8 px-6 pt-2 border-b border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-400 dark:text-gray-300 transition-colors duration-300"
        >
          <button
            :class="
              sidebarTab === 'userlists'
                ? 'border-b-2 border-[#009de0] text-[#009de0] pb-2'
                : 'pb-2'
            "
            @click="sidebarTab = 'userlists'"
          >
            USER LISTS
          </button>
          <button
            :class="
              sidebarTab === 'bookmarks'
                ? 'border-b-2 border-[#009de0] text-[#009de0] pb-2'
                : 'pb-2'
            "
            @click="sidebarTab = 'bookmarks'"
          >
            BOOKMARKS
          </button>
        </div>
      </div>
      <div
        class="px-6 py-2 border-b border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-400 dark:text-gray-300 transition-colors duration-300"
      >
        CUSTOM ORDER
      </div>
      <div class="flex-1 overflow-y-auto">
        <div class="border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div
            :class="
              selectedList === 'Fans'
                ? 'px-6 py-3 bg-[#e0f4ff] text-[#009de0] font-semibold cursor-pointer'
                : 'px-6 py-3 cursor-pointer dark:text-gray-200'
            "
            @click="selectedList = 'Fans'"
          >
            Fans
          </div>
          <div class="px-6 pb-2 text-xs text-gray-400 dark:text-gray-300">empty</div>
        </div>
        <div class="border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div
            :class="
              selectedList === 'Following'
                ? 'px-6 py-3 bg-[#e0f4ff] text-[#009de0] font-semibold cursor-pointer'
                : 'px-6 py-3 cursor-pointer dark:text-gray-200'
            "
            @click="selectedList = 'Following'"
          >
            Following
          </div>
          <div class="px-6 pb-2 text-xs text-gray-400 dark:text-gray-300">empty</div>
        </div>
        <div class="border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div
            :class="
              selectedList === 'Restricted'
                ? 'px-6 py-3 bg-[#e0f4ff] text-[#e82264] font-semibold cursor-pointer'
                : 'px-6 py-3 text-[#e82264] font-semibold cursor-pointer dark:text-[#e82264]'
            "
            @click="selectedList = 'Restricted'"
          >
            Restricted
          </div>
          <div class="px-6 pb-2 text-xs text-gray-400 dark:text-gray-300">empty</div>
        </div>
        <div class="border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div
            :class="
              selectedList === 'Blocked'
                ? 'px-6 py-3 bg-[#e0f4ff] text-gray-700 font-semibold cursor-pointer dark:text-gray-200'
                : 'px-6 py-3 text-gray-700 font-semibold cursor-pointer dark:text-gray-200'
            "
            @click="selectedList = 'Blocked'"
          >
            Blocked
          </div>
          <div class="px-6 pb-2 text-xs text-gray-400 dark:text-gray-300">empty</div>
        </div>
      </div>
    </div>
    <!-- Main Content: Users -->
    <div class="flex-1 flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="flex gap-2 items-center mt-4 px-4">
        <button class="mr-2 text-gray-400 dark:text-gray-300 text-xl" @click="clicked('back')">
          <font-awesome-icon icon="fa-arrow-left" />
        </button>
        <span class="font-bold text-lg text-gray-700 dark:text-gray-200">FOLLOWING</span>
      </div>
      <div
        class="flex gap-8 px-8 pt-6 border-b border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-400 dark:text-gray-300 transition-colors duration-300"
      >
        <button
          :class="mainTab === 'users' ? 'border-b-2 border-[#009de0] text-[#009de0] pb-2' : 'pb-2'"
          @click="mainTab = 'users'"
        >
          USERS
        </button>
        <button
          :class="mainTab === 'posts' ? 'border-b-2 border-[#009de0] text-[#009de0] pb-2' : 'pb-2'"
          @click="mainTab = 'posts'"
        >
          POSTS
        </button>
      </div>
      <div class="flex items-center justify-between px-8 pt-4 pb-2">
        <div class="text-xs font-bold text-gray-400 dark:text-gray-300">RECENT</div>
        <div class="flex gap-2">
          <button class="text-gray-400 dark:text-gray-300 text-lg" @click="clicked('search-main')">
            <font-awesome-icon icon="fa-search" />
          </button>
          <button class="text-gray-400 dark:text-gray-300 text-lg" @click="clicked('filter-main')">
            <font-awesome-icon icon="fa-filter" />
          </button>
        </div>
      </div>
      <div class="flex gap-2 px-8 pb-4">
        <button
          v-for="filter in filters"
          :key="filter"
          :class="
            selectedFilter === filter
              ? 'px-3 py-1 rounded-full bg-[#e0f4ff] text-[#009de0] text-xs font-semibold'
              : 'px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-300 text-xs font-semibold'
          "
          @click="selectedFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="No users"
          class="w-32 h-32 mb-4 opacity-30"
        />
        <div class="text-gray-300 dark:text-gray-500 text-sm">No users yet</div>
        <div v-if="lastClicked" class="mt-4 text-xs text-[#e82264]">Clicked: {{ lastClicked }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const sidebarTab = ref('userlists')
const mainTab = ref('users')
const selectedList = ref('Fans')
const filters = ['All 0', 'Active 0', 'Expired 0', 'Attention Required 0']
const selectedFilter = ref(filters[0])
const lastClicked = ref('')

function clicked(name) {
  lastClicked.value = name
}
</script>
