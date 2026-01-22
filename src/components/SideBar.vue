<template>
  <!-- Desktop Sidebar -->
  <div
    class="w-64 fixed z-[100000] h-screen bg-white dark:bg-gray-900 flex-col items-start space-y-4 overflow-y-auto hidden md:flex"
  >
    <div
      class="flex flex-row items-center justify-between mb-6 px-4 fixed top-0 w-64 py-3 bg-white dark:bg-gray-900 gap-3"
    >
      <img src="@/assets/logo.png" alt="Logo" class="h-12" />
      <div v-if="user" class="flex items-center cursor-pointer group" @click="goToProfile">
        <template v-if="user.profile_image">
          <img
            :src="user.profile_image"
            alt="Avatar"
            class="h-10 w-10 rounded-full object-cover border-2 border-[#e82264] group-hover:ring-2 group-hover:ring-[#e82264] transition"
          />
        </template>
        <template v-else>
          <div
            class="h-10 w-10 rounded-full flex items-center justify-center bg-[#e82264] text-white font-bold text-lg border-2 border-[#e82264] group-hover:ring-2 group-hover:ring-[#e82264] transition"
          >
            {{ initials }}
          </div>
        </template>
      </div>
    </div>
    <!-- :icon="item.icon" -->

    <nav
      class="w-full flex flex-col gap-1 text-sm font-medium text-gray-500 dark:text-gray-200 pt-20"
    >
      <div v-for="(item, index) in sidebarData" :key="index">
        <SidebarItem
          :label="item.label"
          :to="item.to"
          :has-children="!!item.children"
          :children="item.children"
        />
      </div>
      <!-- Logout Button -->
      <button
        @click="handleLogout"
        class="flex items-center gap-3 px-6 py-4 mt-8 rounded-md transition-all duration-200 text-[#e82264] font-bold hover:bg-gray-100"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
          />
        </svg>
        Logout
      </button>
    </nav>
  </div>

  <!-- Mobile Top Bar -->
  <!-- <div class="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-[100000] md:hidden">
    <div class="flex items-center justify-between h-14 px-4">
      <button
        @click="router.push('/dashboard')"
        class="text-gray-700 hover:text-[#e82264] transition"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>

      <button
        @click="router.push('/notifications')"
        class="text-gray-700 hover:text-[#e82264] transition relative"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>

      <button
        @click="router.push('/new-post')"
        class="text-gray-700 hover:text-[#e82264] transition"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <button
        @click="router.push('/messages')"
        class="text-gray-700 hover:text-[#e82264] transition relative"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </button>

      <button @click="toggleMobileMenu" class="text-gray-700 hover:text-[#e82264] transition">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="showMobileMenu"
      class="absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
    >
      <nav class="flex flex-col py-2">
        <button
          v-for="(item, index) in sidebarData"
          :key="index"
          @click="navigateTo(item.to)"
          class="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-gray-700"
        >
          {{ item.label }}
        </button>
        <button
          @click="handleLogout"
          class="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-[#e82264] font-bold"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
          Logout
        </button>
      </nav>
    </div>
  </div> -->
</template>

<script setup>
import SidebarItem from './SideBarView.vue'
// import Logo from '@/assets/pedivel/pedivel-logo.svg'
// import Dashboard from '@/assets/pedivel/sidebar/grid-3.svg'
// import Orders from '@/assets/pedivel/sidebar/bag-11.svg'
// import Inventory from '@/assets/pedivel/sidebar/clipboard-text-12.svg'
// import Reservation from '@/assets/pedivel/sidebar/menu-board-13.svg'
// import Tables from '@/assets/pedivel/sidebar/side-14.svg'
// import Settings from '@/assets/pedivel/sidebar/Setting.svg'
// import Staff from '@/assets/pedivel/sidebar/Staff.svg'
// import Customer from '@/assets/pedivel/sidebar/Customers.svg'
// import Transactions from '@/assets/pedivel/sidebar/Transaction.svg'
// import Request from '@/assets/pedivel/sidebar/Request.svg'

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const user = computed(() => userStore.user)
const initials = computed(() => userStore.userInitials)
const showMobileMenu = ref(false)

const sidebarData = [
  { label: 'Home', to: '/dashboard', icon: 'home' },
  { label: 'Stories', to: '/stories', icon: 'stories' },
  { label: 'Notifications', to: '/notifications', icon: 'bell' },
  { label: 'Messages', to: '/messages', icon: 'message' },
  { label: 'Collections', to: '/collections', icon: 'collection' },
  { label: 'Subscriptions', to: '/subscriptions', icon: 'subscription' },
  {
    label: 'Analytics',
    icon: 'analytics',
    children: [
      { label: 'Dashboard', to: '/creator-dashboard' },
      { label: 'Earnings', to: '/dashboard/earnings' },
      { label: 'Payouts', to: '/dashboard/payouts' },
      { label: 'Analytics', to: '/dashboard/analytics' }
    ]
  },
  { label: 'Add card', to: '/add-card', icon: 'card' },
  { label: 'My profile', to: '/profile', icon: 'profile' },
  { label: 'More', to: '/more', icon: 'more' }
]

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}

function navigateTo(path) {
  router.push(path)
  showMobileMenu.value = false
}

function handleLogout() {
  userStore.logout()
  router.push('/')
}

function goToProfile() {
  router.push('/profile')
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #c4c4c4;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #999;
}
</style>
