<template>
  <section class="py-16 bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">Scegli il Piano Giusto per Te</h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Gestione sinistri professionale con servizi premium per ogni esigenza
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <!-- Basic Package -->
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
          <div class="text-center mb-6">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">Base</span>
            <div class="flex items-baseline justify-center gap-1">
              <span class="text-4xl font-bold text-slate-900">€3.99</span>
              <span class="text-slate-500">/pratica</span>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li v-for="feature in basicFeatures" :key="feature" class="flex items-start gap-2">
              <Check class="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-600">{{ feature }}</span>
            </li>
          </ul>
          <button
            @click="selectPackage('basic')"
            class="w-full py-3 px-4 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            Seleziona Base
          </button>
        </div>

        <!-- Standard Package (Popular) -->
        <div class="rounded-2xl border-2 border-sky-500 bg-white p-6 shadow-lg relative">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="inline-block px-4 py-1 rounded-full bg-sky-500 text-white text-sm font-semibold">
              Più Popolare
            </span>
          </div>
          <div class="text-center mb-6 pt-2">
            <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">Standard</span>
            <div class="flex items-baseline justify-center gap-1">
              <span class="text-4xl font-bold text-slate-900">€6.99</span>
              <span class="text-slate-500">/pratica</span>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li v-for="feature in standardFeatures" :key="feature" class="flex items-start gap-2">
              <Check class="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-600">{{ feature }}</span>
            </li>
          </ul>
          <button
            @click="selectPackage('standard')"
            class="w-full py-3 px-4 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors shadow"
          >
            Seleziona Standard
          </button>
        </div>

        <!-- Premium Package -->
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
          <div class="text-center mb-6">
            <span class="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">Premium</span>
            <div class="flex items-baseline justify-center gap-1">
              <span class="text-4xl font-bold text-slate-900">€9.99</span>
              <span class="text-slate-500">/pratica</span>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li v-for="feature in premiumFeatures" :key="feature" class="flex items-start gap-2">
              <Check class="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-600">{{ feature }}</span>
            </li>
          </ul>
          <button
            @click="selectPackage('premium')"
            class="w-full py-3 px-4 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow"
          >
            Seleziona Premium
          </button>
        </div>
      </div>

      <p class="text-center text-sm text-slate-500 mt-8">
        Tutti i piani includono IVA. Nessun costo nascosto.
      </p>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next'

const emit = defineEmits(['selectPackage'])

const basicFeatures = [
  'Apertura pratica sinistro',
  'Raccolta documenti base',
  'Invio denuncia all\'assicurazione',
  'Aggiornamenti via email',
  'Supporto telefonico base'
]

const standardFeatures = [
  'Tutto del piano Base +',
  'Gestione completa pratica',
  'Auto sostitutiva (3 giorni)',
  'Assistenza dedicata',
  'Aggiornamenti WhatsApp',
  'Priorità nella coda'
]

const premiumFeatures = [
  'Tutto del piano Standard +',
  'Auto sostitutiva illimitata',
  'Perito dedicato',
  'Assistenza legale inclusa',
  'Supporto 24/7',
  'Garanzia soddisfazione'
]

function selectPackage(packageType) {
  emit('selectPackage', packageType)
}
</script>

<style scoped></style>
