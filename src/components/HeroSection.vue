<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 pb-16 pt-12 md:pb-24 md:pt-16"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Badge -->
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700"
        >
          <Shield class="h-4 w-4" />
          <span>Servizio Gestione Sinistri Professionale</span>
        </div>

        <!-- Main heading -->
        <h1
          class="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
        >
          Hai avuto un <span class="text-sky-600">incidente?</span>
          <br />
          Pensiamo a tutto noi.
        </h1>

        <!-- Subheading -->
        <p class="mx-auto mb-8 max-w-xl text-lg text-slate-600 md:text-xl">
          Gestisci il tuo sinistro online in modo semplice e veloce. Ti assistiamo dalla denuncia
          fino al risarcimento completo.
        </p>

        <!-- CTA Buttons -->
        <div class="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            @click="onStartClaim"
            class="inline-flex items-center px-8 py-3 rounded-lg font-semibold bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-600 hover:shadow-sky-500/40 text-lg"
          >
            Avvia il tuo sinistro
            <ArrowRight class="ml-2 h-5 w-5" />
          </button>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-sky-500 text-sky-600 bg-white shadow transition-all hover:bg-sky-50 text-base"
          >
            Scopri come funziona
          </button>
        </div>

        <!-- Trust indicators -->
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div class="flex items-center gap-2 text-sm text-slate-600">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
              <Clock class="h-4 w-4 text-emerald-600" />
            </div>
            <span>Risposta in 24h</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-slate-600">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
              <FileCheck class="h-4 w-4 text-emerald-600" />
            </div>
            <span>Pratica gratuita</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-slate-600">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
              <Shield class="h-4 w-4 text-emerald-600" />
            </div>
            <span>100% Assistenza</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, Clock, FileCheck, ArrowRight } from 'lucide-vue-next'

defineProps({
  onStartClaim: Function
})
</script>

<style scoped></style>
