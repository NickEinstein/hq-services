<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Come funziona la gestione sinistri
        </h2>
        <p class="text-lg text-slate-600">
          Un processo semplice e trasparente, gestito interamente da professionisti del settore.
        </p>
      </div>

      <!-- Steps grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in steps"
          :key="step.step"
          class="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-200"
        >
          <!-- Step number -->
          <div
            class="absolute -top-3 left-6 rounded-full bg-sky-500 px-3 py-1 text-sm font-bold text-white"
          >
            {{ step.step }}
          </div>

          <!-- Icon -->
          <div
            class="mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 transition-colors group-hover:bg-sky-100"
          >
            <component :is="step.icon" class="h-7 w-7 text-sky-600" />
          </div>

          <!-- Content -->
          <h3 class="mb-2 text-lg font-semibold text-slate-900">
            {{ step.title }}
          </h3>
          <p class="text-sm leading-relaxed text-slate-600">
            {{ step.description }}
          </p>

          <!-- Connector line (desktop) -->
          <div
            v-if="index < steps.length - 1"
            class="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-slate-200 lg:block"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileText, Upload, Search, Banknote } from 'lucide-vue-next'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Compila il modulo',
    description: 'Inserisci i tuoi dati e le informazioni sul sinistro in pochi minuti.'
  },
  {
    icon: Upload,
    step: '02',
    title: 'Carica i documenti',
    description: "Allega foto del danno, documenti d'identità e polizza assicurativa."
  },
  {
    icon: Search,
    step: '03',
    title: 'Gestiamo la pratica',
    description:
      "Il nostro team si occupa di tutto: perizia, contatti con l'assicurazione, riparazioni."
  },
  {
    icon: Banknote,
    step: '04',
    title: 'Ottieni il risarcimento',
    description: 'Riceviamo il pagamento e ripariamo il tuo veicolo senza pensieri.'
  }
]
</script>

<style scoped></style>
