<template>
  <div class="min-h-screen bg-slate-50">
    <Header />
    
    <main class="py-12">
      <div class="container mx-auto px-4">
        <!-- Page Title -->
        <div class="text-center mb-12">
          <h1 class="text-3xl font-bold text-slate-900 mb-4">Stato Pratica</h1>
          <p class="text-lg text-slate-600">Controlla lo stato della tua richiesta di sinistro</p>
        </div>

        <!-- Access Form (when not authenticated) -->
        <div v-if="!isAuthenticated" class="max-w-md mx-auto">
          <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
            <h2 class="text-xl font-semibold text-slate-900 mb-6 text-center">Accedi alla tua pratica</h2>
            
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div class="space-y-2">
                <label for="claimCode" class="text-sm font-medium text-slate-700">Codice Pratica *</label>
                <input
                  id="claimCode"
                  v-model="loginForm.claimCode"
                  type="text"
                  placeholder="HQ-XXXXXX-XXXX"
                  class="flex h-12 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div class="space-y-2">
                <label for="otp" class="text-sm font-medium text-slate-700">Codice OTP *</label>
                <div class="flex gap-2">
                  <input
                    v-for="(digit, index) in otpDigits"
                    :key="index"
                    :ref="el => otpRefs[index] = el"
                    v-model="otpDigits[index]"
                    type="text"
                    maxlength="1"
                    class="flex h-12 w-12 rounded-lg border border-slate-300 bg-white text-center text-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                    @input="handleOtpInput(index)"
                    @keydown.backspace="handleOtpBackspace(index)"
                  />
                </div>
                <button
                  type="button"
                  @click="requestOtp"
                  :disabled="otpSent && otpCountdown > 0"
                  class="text-sm text-sky-600 hover:text-sky-700 disabled:text-slate-400"
                >
                  {{ otpSent && otpCountdown > 0 ? `Richiedi nuovo OTP tra ${otpCountdown}s` : 'Richiedi OTP via SMS/Email' }}
                </button>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-3 px-4 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors disabled:opacity-60"
              >
                {{ isLoading ? 'Accesso in corso...' : 'Accedi' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Claim Status Dashboard (when authenticated) -->
        <div v-else class="max-w-4xl mx-auto space-y-8">
          <!-- Claim Header -->
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p class="text-sm text-slate-500">Codice Pratica</p>
                <p class="text-xl font-bold text-slate-900 font-mono">{{ claimDetails.code }}</p>
              </div>
              <div class="flex items-center gap-3">
                <span
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium',
                    getStatusClass(claimDetails.status)
                  ]"
                >
                  {{ getStatusLabel(claimDetails.status) }}
                </span>
                <button
                  @click="logout"
                  class="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm hover:bg-slate-50"
                >
                  Esci
                </button>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-slate-900 mb-6">Cronologia Pratica</h3>
            <div class="space-y-0">
              <div
                v-for="(event, index) in claimDetails.timeline"
                :key="index"
                class="flex gap-4"
              >
                <div class="flex flex-col items-center">
                  <div
                    :class="[
                      'w-4 h-4 rounded-full border-2',
                      event.completed ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-300'
                    ]"
                  />
                  <div
                    v-if="index < claimDetails.timeline.length - 1"
                    :class="[
                      'w-0.5 h-16',
                      event.completed ? 'bg-emerald-500' : 'bg-slate-200'
                    ]"
                  />
                </div>
                <div class="pb-8">
                  <p class="font-medium text-slate-900">{{ event.title }}</p>
                  <p class="text-sm text-slate-500">{{ event.description }}</p>
                  <p v-if="event.date" class="text-xs text-slate-400 mt-1">{{ event.date }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Documents Section -->
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-slate-900">Documenti</h3>
              <label class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium cursor-pointer hover:bg-sky-600 transition-colors">
                <Upload class="h-4 w-4" />
                Carica Documento
                <input type="file" class="hidden" @change="handleDocumentUpload" multiple accept="image/*,.pdf" />
              </label>
            </div>
            <div class="space-y-3">
              <div
                v-for="doc in claimDetails.documents"
                :key="doc.id"
                class="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50"
              >
                <div class="flex items-center gap-3">
                  <FileText class="h-5 w-5 text-slate-500" />
                  <div>
                    <p class="font-medium text-slate-900">{{ doc.name }}</p>
                    <p class="text-xs text-slate-500">{{ doc.uploadDate }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span
                    :class="[
                      'px-2 py-1 rounded text-xs font-medium',
                      doc.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                      doc.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    ]"
                  >
                    {{ doc.status === 'approved' ? 'Approvato' : doc.status === 'pending' ? 'In revisione' : 'Da rifare' }}
                  </span>
                  <button class="p-2 hover:bg-slate-100 rounded">
                    <Download class="h-4 w-4 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Messages Section -->
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-slate-900 mb-6">Messaggi</h3>
            <div class="space-y-4 max-h-80 overflow-y-auto mb-4">
              <div
                v-for="message in claimDetails.messages"
                :key="message.id"
                :class="[
                  'p-4 rounded-lg',
                  message.from === 'user' ? 'bg-sky-50 ml-8' : 'bg-slate-100 mr-8'
                ]"
              >
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-sm font-medium text-slate-900">
                    {{ message.from === 'user' ? 'Tu' : 'HQ Motorservice' }}
                  </span>
                  <span class="text-xs text-slate-500">{{ message.date }}</span>
                </div>
                <p class="text-sm text-slate-700">{{ message.text }}</p>
              </div>
            </div>
            <div class="flex gap-2">
              <input
                v-model="newMessage"
                type="text"
                placeholder="Scrivi un messaggio..."
                class="flex-1 h-10 rounded-lg border border-slate-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                @keyup.enter="sendMessage"
              />
              <button
                @click="sendMessage"
                class="px-4 py-2 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors"
              >
                <Send class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Upload, FileText, Download, Send } from 'lucide-vue-next'

const isAuthenticated = ref(false)
const isLoading = ref(false)
const otpSent = ref(false)
const otpCountdown = ref(0)
const newMessage = ref('')

const loginForm = reactive({
  claimCode: ''
})

const otpDigits = ref(['', '', '', '', '', ''])
const otpRefs = ref([])

// Demo claim details
const claimDetails = reactive({
  code: 'HQ-M1ABCD-XY12',
  status: 'in_progress',
  timeline: [
    { title: 'Pratica Aperta', description: 'La tua richiesta è stata ricevuta', date: '25 Gen 2026, 10:30', completed: true },
    { title: 'Documenti Verificati', description: 'I documenti sono stati approvati', date: '26 Gen 2026, 14:15', completed: true },
    { title: 'Perizia in Corso', description: 'Il perito sta valutando il danno', date: '27 Gen 2026, 09:00', completed: true },
    { title: 'Preventivo Approvato', description: 'In attesa di approvazione assicurazione', date: '', completed: false },
    { title: 'Riparazione', description: 'Veicolo in riparazione', date: '', completed: false },
    { title: 'Pratica Chiusa', description: 'Sinistro liquidato', date: '', completed: false }
  ],
  documents: [
    { id: 1, name: 'Documento Identità.pdf', uploadDate: '25 Gen 2026', status: 'approved' },
    { id: 2, name: 'Polizza Assicurativa.pdf', uploadDate: '25 Gen 2026', status: 'approved' },
    { id: 3, name: 'Foto Danno 1.jpg', uploadDate: '25 Gen 2026', status: 'approved' },
    { id: 4, name: 'Modulo CAI.pdf', uploadDate: '26 Gen 2026', status: 'pending' }
  ],
  messages: [
    { id: 1, from: 'support', text: 'Buongiorno! La sua pratica è stata presa in carico. Le faremo sapere appena ci saranno aggiornamenti.', date: '25 Gen 2026, 11:00' },
    { id: 2, from: 'user', text: 'Grazie! Quanto tempo ci vorrà per la perizia?', date: '25 Gen 2026, 11:30' },
    { id: 3, from: 'support', text: 'La perizia è prevista entro 3-5 giorni lavorativi. Le invieremo una notifica appena completata.', date: '25 Gen 2026, 12:00' }
  ]
})

function handleOtpInput(index) {
  if (otpDigits.value[index] && index < 5) {
    otpRefs.value[index + 1]?.focus()
  }
}

function handleOtpBackspace(index) {
  if (!otpDigits.value[index] && index > 0) {
    otpRefs.value[index - 1]?.focus()
  }
}

function requestOtp() {
  if (!loginForm.claimCode) {
    alert('Inserisci il codice pratica')
    return
  }
  otpSent.value = true
  otpCountdown.value = 60
  const interval = setInterval(() => {
    otpCountdown.value--
    if (otpCountdown.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
  // TODO: Call API to send OTP
  alert('OTP inviato! (Demo: usa 123456)')
}

function handleLogin() {
  const otp = otpDigits.value.join('')
  if (!loginForm.claimCode || otp.length < 6) {
    alert('Compila tutti i campi')
    return
  }
  isLoading.value = true
  // Demo: accept any OTP
  setTimeout(() => {
    isLoading.value = false
    claimDetails.code = loginForm.claimCode.toUpperCase()
    isAuthenticated.value = true
  }, 1000)
}

function logout() {
  isAuthenticated.value = false
  loginForm.claimCode = ''
  otpDigits.value = ['', '', '', '', '', '']
}

function getStatusClass(status) {
  switch (status) {
    case 'completed': return 'bg-emerald-100 text-emerald-700'
    case 'in_progress': return 'bg-sky-100 text-sky-700'
    case 'pending': return 'bg-amber-100 text-amber-700'
    default: return 'bg-slate-100 text-slate-700'
  }
}

function getStatusLabel(status) {
  switch (status) {
    case 'completed': return 'Completata'
    case 'in_progress': return 'In Lavorazione'
    case 'pending': return 'In Attesa'
    default: return 'Sconosciuto'
  }
}

function handleDocumentUpload(e) {
  const files = Array.from(e.target.files || [])
  files.forEach(file => {
    claimDetails.documents.push({
      id: Date.now(),
      name: file.name,
      uploadDate: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'pending'
    })
  })
}

function sendMessage() {
  if (!newMessage.value.trim()) return
  claimDetails.messages.push({
    id: Date.now(),
    from: 'user',
    text: newMessage.value,
    date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  })
  newMessage.value = ''
}
</script>

<style scoped></style>
