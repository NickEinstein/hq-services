<template>
  <div class="register-page">
    <!-- Header Navigation -->
    <header
      class="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white shadow-sm"
    >
      <div class="logo">
        <img src="@/assets/logo.png" alt="FansEngage Logo" class="h-12 w-auto" />
      </div>
      <nav class="flex gap-4">
        <button
          @click="navigateToHome"
          class="px-8 py-2 bg-gray-100 text-gray-800 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Back to Home
        </button>
        <button
          @click="navigateToLogin"
          class="px-8 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
        >
          Login
        </button>
      </nav>
    </header>

    <!-- Main Content -->
    <section class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-32 pb-20">
      <div class="container mx-auto px-8">
        <!-- Page Title -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Join FansEngage Today
          </h1>
          <p class="text-lg md:text-xl text-gray-600">
            Create your account and start your journey as a creator or fan
          </p>
        </div>

        <!-- Registration Form Container -->
        <div >
          <div class="p-8">
            <!-- Embedded Zoho Form -->
            <iframe
              aria-label="User Profile Form"
              frameborder="0"
              style="height: 900px; width: 100%; border: none"
              src="https://forms.zohopublic.com/hqservice1/form/UserProfileForm/formperma/5mCjOKimKw_lfC1-uAxCX6ALBFhhjw9H8hU1N6AK3V0"
            ></iframe>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="text-center mt-12">
          <p class="text-gray-600">
            Already have an account?
            <button
              @click="navigateToLogin"
              class="text-pink-500 font-semibold hover:text-pink-600 underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const navigateToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

.register-page {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
}
</style>
