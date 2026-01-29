<template>
  <section class="py-12 bg-slate-50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
        Supporto & Aiuto
      </h2>
      <p class="text-slate-600 text-center mb-8 max-w-xl mx-auto">
        Hai domande? Consulta le FAQ o contattaci direttamente.
      </p>
      <div class="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <!-- FAQ Section -->
        <div>
          <h3 class="font-semibold text-slate-800 mb-4 text-lg">Domande Frequenti</h3>
          <div class="space-y-3">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                @click="toggleFaq(index)"
                class="w-full flex items-center justify-between p-4 text-left"
              >
                <span class="font-medium text-slate-800">{{ faq.question }}</span>
                <ChevronDown :class="['h-5 w-5 text-slate-400 transition-transform', openFaq === index ? 'rotate-180' : '']" />
              </button>
              <div v-show="openFaq === index" class="px-4 pb-4 text-sm text-slate-600">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h3 class="font-semibold text-slate-800 mb-4 text-lg">Contatta il Supporto</h3>
          <form class="space-y-3 bg-white p-6 rounded-lg border border-slate-200" @submit.prevent="submitSupport">
            <input
              v-model="supportForm.name"
              type="text"
              placeholder="Nome e Cognome"
              class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 outline-none"
            />
            <input
              v-model="supportForm.email"
              type="email"
              placeholder="Email"
              class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 outline-none"
            />
            <input
              v-model="supportForm.phone"
              type="tel"
              placeholder="Telefono"
              class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 outline-none"
            />
            <textarea
              v-model="supportForm.message"
              placeholder="Come possiamo aiutarti?"
              rows="3"
              class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 outline-none"
            ></textarea>
            <button
              type="submit"
              class="w-full px-6 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
            >
              Invia richiesta
            </button>
          </form>
          <div class="mt-4 flex flex-col sm:flex-row gap-4 text-sm">
            <a href="tel:800123456" class="flex items-center gap-2 text-slate-600 hover:text-sky-600">
              <Phone class="h-4 w-4" />
              <span>800-123-456 (gratuito)</span>
            </a>
            <a href="https://wa.me/390123456789" target="_blank" class="flex items-center gap-2 text-slate-600 hover:text-emerald-600">
              <MessageCircle class="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ChevronDown, Phone, MessageCircle } from 'lucide-vue-next'

const openFaq = ref(null)

const faqs = [
  {
    question: 'Come posso inviare una denuncia sinistro?',
    answer: 'Clicca su "Avvia il tuo sinistro" nella homepage, compila il modulo online con i tuoi dati, le informazioni sul veicolo e sul sinistro, carica i documenti richiesti e invia. Riceverai conferma via email e WhatsApp.'
  },
  {
    question: 'Quali documenti servono per aprire una pratica?',
    answer: 'Ti servono: documento d\'identità, patente di guida, libretto di circolazione, attestato di polizza assicurativa, foto dei danni e il modulo CAI/CID se disponibile.'
  },
  {
    question: 'Come posso seguire lo stato della mia pratica?',
    answer: 'Dopo l\'invio riceverai un ID pratica. Potrai tracciare lo stato nella sezione "Traccia la tua Pratica" inserendo il codice, oppure contattandoci via WhatsApp o telefono.'
  },
  {
    question: 'Quanto tempo ci vuole per gestire un sinistro?',
    answer: 'I tempi variano in base alla complessità del caso. In genere, prendiamo in carico la pratica entro 24 ore e la perizia avviene entro 3-5 giorni lavorativi.'
  },
  {
    question: 'Il servizio ha un costo?',
    answer: 'No, il nostro servizio di gestione sinistri è completamente gratuito per te. Lavoriamo direttamente con le assicurazioni.'
  }
]

const supportForm = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

function submitSupport() {
  // TODO: Integrate with Zoho CRM / email service
  console.log('Support form submitted:', supportForm)
  alert('Grazie! Ti risponderemo entro 24 ore.')
}
</script>

<style scoped></style>
