<template>
  <div v-if="shouldShow">
    <router-link
      :to="to"
      class="flex items-center gap-3 px-6 py-4 rounded-md transition-all duration-200"
      :class="isActive ? 'bg-[#747CDA1A] text-[#747CDA]' : 'hover:bg-[#747CDA1A]'"
      :aria-current="isActive ? 'page' : null"
      v-if="to"
    >
      <font-awesome-icon :icon="iconName" class="w-5 text-center my-icon" />
      <span>{{ label }}</span>
      <i v-if="hasChildren" class="fa-solid fa-chevron-down ml-auto text-xs"></i>
    </router-link>

    <!-- Parent Item without a direct route -->
    <div
      class="flex items-center gap-3 px-6 py-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#747CDA1A]"
      @click="toggleOpen"
      v-else
    >
      <!-- <img :src="icon" class="w-5 text-center" /> -->
      <font-awesome-icon :icon="iconName" class="w-5 text-center my-icon" />
      <!-- <component :is="icon" fill= "iconColor" :stroke="iconColor"  class="w-5 text-center !text-red-800 my-icon" /> -->

      <span>{{ label }}</span>
      <i class="fa-solid" :class="open ? 'fa-chevron-up' : 'fa-chevron-down'" />
    </div>

    <!-- Children -->
    <div v-if="open && children?.length" class="pl-8 mt-1 flex flex-col gap-1">
      <router-link
        v-for="(child, idx) in children"
        :key="idx"
        :to="child.to"
        class="px-3 py-2 rounded-md transition-all duration-200 text-sm"
        :class="route.path === child.to ? 'bg-[#747CDA1A] text-[#747CDA]' : 'hover:bg-[#747CDA1A]'"
      >
        {{ child.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  icon: String,
  label: String,
  to: String,
  hasChildren: Boolean,
  children: Array
})

// Get user from localStorage
let user = null
try {
  const userData = localStorage.getItem('user')
  if (userData) {
    user = JSON.parse(userData).user
  }
} catch (e) {
  user = null
}

// Hide certain items for role 'user'
const shouldShow = computed(() => {
  if (!user || user.role !== 'user') return true
  const lowerLabel = (props.label || '').toLowerCase()
  if (['collections', 'subscriptions', 'more'].includes(lowerLabel)) {
    return false
  }
  return true
})

const iconMap = {
  home: ['fas', 'home'],
  bell: ['fas', 'bell'],
  message: ['fas', 'envelope'],
  collection: ['fas', 'star'],
  subscription: ['fas', 'user'],
  card: ['fas', 'credit-card'],
  profile: ['fas', 'user'],
  more: ['fas', 'ellipsis-h']
}
const iconName = computed(() => iconMap[props.icon] || ['fas', 'circle'])

const route = useRoute()
const open = ref(false)

const isActive = computed(() => route.path === props.to)

function toggleOpen() {
  open.value = !open.value
}
</script>
<style scoped>
.my-icon path {
  fill: #747cda !important;
}
</style>
