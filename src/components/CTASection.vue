<template>
  <section class="bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div
        class="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl border border-slate-100 md:p-12"
      >
        <div class="text-center">
          <h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Pronto a risolvere il tuo sinistro?
          </h2>
          <p class="mx-auto mb-8 max-w-lg text-lg text-slate-600">
            Inizia subito la pratica online o contattaci su WhatsApp per assistenza immediata.
          </p>

          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              @click="onStartClaim"
              class="inline-flex items-center px-8 py-3 rounded-lg font-semibold bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-600 hover:shadow-sky-500/40 text-lg"
            >
              Avvia la pratica online
              <ArrowRight class="ml-2 h-5 w-5" />
            </button>
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-3 rounded-lg font-semibold bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/40 text-lg"
            >
              <MessageCircle class="mr-2 h-5 w-5" />
              Scrivi su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, MessageCircle } from 'lucide-vue-next'

const props = defineProps({
  onStartClaim: Function
})

const whatsappNumber = '390123456789'
const whatsappMessage = encodeURIComponent(
  'Ciao! Vorrei informazioni sulla gestione del mio sinistro.'
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
</script>

<style scoped></style>
