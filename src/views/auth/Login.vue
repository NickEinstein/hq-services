<template>
  <div class="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden px-4">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

    <div class="relative z-10 w-full max-w-md">
      <router-link to="/" class="inline-flex items-center text-slate-500 hover:text-sky-600 text-sm mb-6 transition-colors font-medium">
        <span class="mr-2">←</span> Torna alla Home
      </router-link>

      <div class="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/60">
        <div class="mb-8 text-center">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 mb-4 shadow-lg shadow-sky-200">
            <span class="font-bold text-xl text-white">HQ</span>
          </div>
          <h1 class="text-2xl font-bold text-slate-900 mb-1">Bentornato</h1>
          <p class="text-slate-500">Accedi per gestire i tuoi sinistri</p>
        </div>

        <div v-if="errorMessage" class="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
            <input 
              v-model="email"
              type="email" 
              class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              placeholder="nome@esempio.it"
              required
            />
          </div>

          <div>
            <div class="flex justify-between mb-1.5">
              <label class="text-sm font-semibold text-slate-700">Password</label>
              <router-link to="/forgot-password" class="text-sm font-medium text-sky-600 hover:text-sky-700">Dimenticata?</router-link>
            </div>
            <input 
              v-model="password"
              type="password" 
              class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-sky-100 disabled:opacity-70 mt-2"
          >
            <div v-if="isLoading" class="loader"></div>
            <span v-else>Accedi al Portale</span>
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-slate-100 text-center">
          <p class="text-slate-500 text-sm">
            Non hai un account? Registrati
            <router-link to="/register" class="text-sky-600 font-bold hover:text-sky-700">Clicca qui</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // 1. Create 'reactive' variables for the form
  const email = ref('')
  const password = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('') // To show if login fails

  const handleLogin = async () => {
    isLoading.value = true
    errorMessage.value = ''

    try {
      // Base backend code
      const baseUrl = import.meta.env.VITE_BACKEND_URL
    
      const response = await fetch(`${baseUrl}/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.value,
          password: password.value
        })
      })

      const data = await response.json();

      // If Error
      if (!response.ok) {
        throw new Error(data.message || 'Credenziali non valide')
      }

      // If Success
      if (data.success) {
          // We go inside responseData.data to find the user and token
          const actualData = data.data; 
          
          localStorage.setItem('auth_token', actualData.token);
          
          // Check if user exists before saving
          if (actualData.user) {
              localStorage.setItem('user_data', JSON.stringify(actualData.user));
          }

          router.push('/app/user/dashboard');
      }

    } catch (err) {
      errorMessage.value = err.message
    } finally {
      isLoading.value = false
    }
  }
</script>

<style scoped>
  .loader {
    border: 2px solid rgba(255, 255, 255, 0.3); /* Semi-transparent white */
    border-top: 2px solid #ffffff; /* Solid white tip */
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>