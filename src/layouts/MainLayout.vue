<template>
  <div class="flex relative">
    <SideBar />
    <!-- <TopNav /> -->

    <div class="flex-1 md:px-6 md:ml-56 ml-0  md:pt-0 relative border-red-600 pb-20 md:pb-0">
      <router-view />
    </div>

    <!-- Mobile Navigation -->
    <MobileNav />
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
import MobileNav from '@/components/MobileNav.vue'
// import TopNav from '@/components/TopNav.vue'
</script>
