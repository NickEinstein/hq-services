<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50">
    <div class="container mx-auto px-4 py-12 md:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Success icon -->
        <div class="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle class="h-12 w-12 text-emerald-600" />
        </div>

        <!-- Title -->
        <h1 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Richiesta Inviata con Successo!
        </h1>
        <p class="mb-8 text-lg text-slate-600">
          Grazie per averci scelto. Il nostro team prenderà in carico la tua pratica entro 24 ore lavorative.
        </p>

        <!-- Claim ID -->
        <div class="mb-8 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p class="text-sm font-medium text-slate-600 mb-2">Il tuo codice pratica:</p>
          <div class="flex items-center justify-center gap-3">
            <span class="text-2xl font-bold text-sky-700 font-mono tracking-wider">{{ claimId }}</span>
            <button
              @click="copyClaimCode"
              class="p-2 rounded-lg hover:bg-sky-100 transition-colors"
              :title="copied ? 'Copiato!' : 'Copia codice'"
            >
              <ClipboardCheck v-if="copied" class="h-5 w-5 text-emerald-600" />
              <Copy v-else class="h-5 w-5 text-sky-600" />
            </button>
          </div>
          <p class="text-xs text-slate-500 mt-2">Conserva questo codice per tracciare la tua pratica</p>
        </div>

        <!-- Next steps card -->
        <div class="mb-8 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-lg md:p-8">
          <h2 class="mb-6 text-xl font-semibold text-slate-900">Prossimi passi</h2>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
                1
              </div>
              <div>
                <p class="font-medium text-slate-900">Riceverai una conferma via email e WhatsApp</p>
                <p class="text-sm text-slate-500">
                  Entro pochi minuti riceverai un messaggio con il riepilogo della tua richiesta.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
                2
              </div>
              <div>
                <p class="font-medium text-slate-900">Ti contattiamo entro 24 ore</p>
                <p class="text-sm text-slate-500">
                  Un nostro consulente ti chiamerà per confermare i dettagli e pianificare i prossimi passi.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
                3
              </div>
              <div>
                <p class="font-medium text-slate-900">Avviamo la pratica con l'assicurazione</p>
                <p class="text-sm text-slate-500">
                  Ci occuperemo di tutti i contatti con la tua compagnia assicurativa.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
                4
              </div>
              <div>
                <p class="font-medium text-slate-900">Ripariamo il tuo veicolo</p>
                <p class="text-sm text-slate-500">
                  Organizziamo la riparazione presso i nostri centri convenzionati.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact options -->
        <div class="mb-8 grid gap-4 sm:grid-cols-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <MessageCircle class="h-6 w-6 text-emerald-600" />
            </div>
            <span class="text-sm font-medium text-slate-900">WhatsApp</span>
          </a>
          <a
            href="tel:+390123456789"
            class="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <Phone class="h-6 w-6 text-sky-600" />
            </div>
            <span class="text-sm font-medium text-slate-900">Chiamaci</span>
          </a>
          <a
            href="#"
            class="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <Calendar class="h-6 w-6 text-sky-600" />
            </div>
            <span class="text-sm font-medium text-slate-900">Prenota Appuntamento</span>
          </a>
        </div>

        <!-- Back button -->
        <button
          type="button"
          @click="onBackToHome"
          class="inline-flex items-center px-6 py-2 rounded-lg font-semibold border border-slate-300 bg-white text-slate-700 shadow transition-colors hover:bg-slate-50 text-lg"
        >
          <ArrowLeft class="mr-2 h-4 w-4" />
          Torna alla Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CheckCircle, MessageCircle, Phone, Calendar, ArrowLeft, Copy, ClipboardCheck } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps({
  onBackToHome: Function,
  claimData: {
    type: Object,
    default: () => ({})
  }
})

// Use claim code from props or generate one
const claimId = computed(() => props.claimData?.claimCode || `HQ-${Date.now().toString(36).toUpperCase()}`)

const copied = ref(false)

async function copyClaimCode() {
  try {
    await navigator.clipboard.writeText(claimId.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const whatsappNumber = '390123456789'
const whatsappMessage = computed(() => 
  encodeURIComponent(`Ciao! Ho appena inviato una richiesta sinistro. Il mio riferimento è ${claimId.value}.`)
)
const whatsappUrl = computed(() => `https://wa.me/${whatsappNumber}?text=${whatsappMessage.value}`)
</script>

<style scoped></style>
