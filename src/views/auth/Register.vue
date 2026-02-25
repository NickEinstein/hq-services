<template>
  <div class="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden px-4 py-12">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

    <div class="relative z-10 w-full max-w-md">
      <router-link to="/login" class="inline-flex items-center text-slate-500 hover:text-sky-600 text-sm mb-6 transition-colors font-medium">
        <span class="mr-2">←</span> Torna al Login
      </router-link>

      <div class="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/60">
        <div class="mb-8 text-center">
          <h1 class="text-2xl font-bold text-slate-900 mb-1">Crea un Account</h1>
          <p class="text-slate-500">Inizia a gestire i tuoi sinistri con HQ</p>
        </div>

        <div v-if="errorMessage" class="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Cognome</label>
            <input v-model="form.last_name" type="text" required class="form-input" placeholder="Mario Rossi" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Nome di battesimo</label>
            <input v-model="form.first_name" type="text" required class="form-input" placeholder="Mario Rossi" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Numero Di Telefono</label>
            <input v-model="form.phone_number" type="tel" required class="form-input" placeholder="+33984756374" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">E-mail</label>
            <input v-model="form.email" type="email" required class="form-input" placeholder="mario@esempio.it" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
            <input v-model="form.password" type="password" required class="form-input" placeholder="••••••••" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Conferma Password</label>
            <input v-model="form.confirmPassword" type="password" required class="form-input" placeholder="••••••••" />
          </div>

          <button type="submit" :disabled="isLoading" class="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-sky-100 disabled:opacity-70 mt-4">
            <div v-if="isLoading" class="loader"></div>
            <span v-else>Registrati</span>
          </button>
        </form>

        <p class="mt-8 text-center text-slate-500 text-sm">
          Hai già un account? 
          <router-link to="/login" class="text-sky-600 font-bold hover:text-sky-700">Accedi</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const isLoading = ref(false)
    const errorMessage = ref('')

    // Use 'reactive' for objects - it's cleaner for forms!
    const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
    })

    const handleRegister = async () => {
    // 1. Basic Client-side Validation
    if (form.password !== form.confirmPassword) {
        errorMessage.value = "Le password non corrispondono!"
        return
    }

    isLoading.value = true
    errorMessage.value = ''

    try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL
        
        const response = await fetch(`${baseUrl}/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password
        })
        })

        const data = await response.json()

        if (!response.ok) {
        throw new Error(data.message || 'Errore durante la registrazione')
        }

        alert("Registrazione completata! Ora puoi accedere.")
        router.push('/login')

    } catch (err) {
        errorMessage.value = err.message
        } finally {
            isLoading.value = false
        }
    }
</script>

<style scoped>
/* Scoped styles to keep things tidy */
.form-input {
  @apply w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all;
}

.loader {
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #ffffff;
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