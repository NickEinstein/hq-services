<template>
  <div class="min-h-screen bg-slate-50">
    
    <nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            HQ
          </div>
          <span class="font-bold text-slate-800 hidden sm:block">Motorservice</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-right hidden sm:block">
            <p class="text-xs text-slate-500 font-medium">Ciao</p>
            <p class="text-sm font-bold text-slate-900">{{ userName }}</p>
          </div>
          
          <div class="h-8 w-px bg-slate-200 mx-2"></div>

          <button 
            @click="handleLogout" 
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all font-medium text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Esci
          </button>
        </div>
      </div>
    </nav>

    <div class="max-w-6xl mx-auto px-4 py-8">
      
      <div class="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-10 mb-12 text-white relative overflow-hidden shadow-lg">
        <div class="relative z-10 max-w-2xl">
          <h1 class="text-4xl font-bold mb-4">
            Ciao, {{ userName }}! 👋
          </h1>
          <p class="text-sky-100 mb-8 text-lg">
            Benvenuto nel tuo portale HQ Motorservice. Scegli un piano per attivare la tua copertura e iniziare a gestire i tuoi sinistri in totale tranquillità.
          </p>
          <button @click="scrollToPlans" class="bg-white text-sky-600 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-all shadow-md active:scale-95">
            Guarda i Piani
          </button>
        </div>
        <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold text-slate-800 text-center mb-10">Il tuo percorso verso la protezione</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-2xl border border-slate-100 text-center">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
            <h3 class="font-bold text-slate-800">Seleziona</h3>
            <p class="text-slate-500 text-sm mt-2">Scegli il piano Basic, Plus o Premium in base alle tue necessità.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-100 text-center">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
            <h3 class="font-bold text-slate-800">Sincronizza</h3>
            <p class="text-slate-500 text-sm mt-2">I tuoi dati vengono inviati al nostro CRM Zoho per un'assistenza personalizzata.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-100 text-center">
            <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
            <h3 class="font-bold text-slate-800">Proteggi</h3>
            <p class="text-slate-500 text-sm mt-2">Ricevi la fattura e attiva il tuo profilo partner su GoAffPro.</p>
          </div>
        </div>
      </div>

      <div id="plans" class="scroll-mt-24">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-slate-900">I Nostri Piani</h2>
          <p class="text-slate-500 mt-2">Abbonamenti mensili trasparenti, senza costi nascosti.</p>
        </div>

        <div v-if="isLoading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-sky-600"></div>
        </div>

        <div v-else class="grid md:grid-cols-3 gap-8 mb-16">
          <div v-for="plan in plans" :key="plan.id" 
               class="bg-white border border-slate-200 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col relative"
               :class="{'ring-2 ring-sky-500 scale-105 shadow-xl z-10': plan.popular}">
            
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
              RACCOMANDATO
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 mb-2 mt-2">{{ plan.name }}</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold text-slate-900">€{{ plan.price }}</span>
              <span class="text-slate-500">/mese</span>
            </div>
            
            <ul class="space-y-4 mb-8 flex-grow text-left">
              <li class="flex items-start text-slate-600 text-sm">
                <CheckIcon class="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                <span>{{ plan.claims }} Sinistri all'anno</span>
              </li>
              <li v-for="feat in plan.features" :key="feat" class="flex items-start text-slate-600 text-sm">
                <CheckIcon class="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                <span class="capitalize">{{ feat.replace('_', ' ') }}</span>
              </li>
            </ul>

            <button @click="purchasePlan(plan)" 
                    class="w-full py-3.5 rounded-xl font-bold transition-all shadow-lg active:scale-95"
                    :class="plan.popular ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'">
              Seleziona Piano
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { CheckIcon } from '@heroicons/vue/24/solid'

  const router = useRouter()
  const userName = ref('Utente')
  const plans = ref([])
  const isLoading = ref(true)
  const errorMessage = ref('')

  const fetchPlans = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const token = localStorage.getItem('auth_token')

    try {
      const response = await fetch(`${baseUrl}/v1/subscriptions/plans`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      const responseData = await response.json()
      
      if (responseData.success) {
        // Correcting path to the array according to your JSON: responseData.data.plans
        plans.value = responseData.data.plans
      }
    } catch (error) {
      console.error("Fetch error:", error)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    const accessToken = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');

    if (!accessToken || accessToken === 'undefined') {
      router.replace('/login');
      return;
    }

    if (userData && userData !== 'undefined') {
      try {
        const user = JSON.parse(userData);
        // Using name or full_name based on common API responses
        userName.value = user.full_name || user.email || 'Utente';
      } catch (e) {
        console.error("Parse error", e);
      }
    }

    // CRITICAL: Call the fetch function here
    fetchPlans()
  });

  const handleLogout = () => {
    localStorage.clear() 
    router.replace('/login').then(() => {
      window.location.reload()
    })
  }

  const purchasePlan = async (plan) => {
    errorMessage.value = '' // Reset error message
    console.log(`Iniziando checkout per: ${plan.name}`)
    
    const token = localStorage.getItem('auth_token')
    const baseUrl = import.meta.env.VITE_BACKEND_URL

    if (!token) {
      router.replace('/login')
      return
    }

    try {
      const response = await fetch(`${baseUrl}/v1/subscriptions/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          plan_id: plan.id
        })
      })

      const result = await response.json()

      if (response.ok && result.success && result.data.url) {
        // SUCCESS: Redirect to the URL provided by the backend
        window.location.href = result.data.url
      } else {
        // ERROR: Display the message from the backend
        errorMessage.value = result.message || "Errore durante la creazione del checkout."
      }
    } catch (error) {
      console.error("Checkout error:", error)
      errorMessage.value = "Impossibile connettersi al server. Riprova più tardi."
    }
  }

  const scrollToPlans = () => {
    const element = document.getElementById('plans')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>