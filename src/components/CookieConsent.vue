<template>
  <div v-if="!accepted" class="fixed bottom-0 left-0 w-full z-50 flex justify-center">
    <div
      class="bg-white border border-gray-300 shadow-lg rounded-t-lg px-6 py-4 flex flex-col sm:flex-row items-center gap-4 max-w-2xl w-full sm:w-auto"
    >
      <span class="text-gray-700 text-sm">
        This site uses cookies to enhance your experience. By continuing to browse, you agree to our
        <router-link to="/privacy-policy" class="text-[#e82264] underline"
          >Privacy Policy</router-link
        >.
      </span>
      <button
        @click="acceptCookies"
        class="bg-[#e82264] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#d01f56] transition-colors"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const accepted = ref(false)
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true')
  accepted.value = true
}
onMounted(() => {
  if (localStorage.getItem('cookieConsent') === 'true') {
    accepted.value = true
  }
})
</script>

<style scoped></style>
