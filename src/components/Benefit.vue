<template>
  <section class="bg-slate-900 py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
          Perché scegliere HQ Motorservice
        </h2>
        <p class="text-lg text-slate-300">
          Non siamo solo un'officina. Siamo il tuo partner per la gestione completa dei sinistri.
        </p>
      </div>

      <!-- Benefits grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="group rounded-2xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800 border border-slate-700/50 hover:border-sky-500/30"
        >
          <!-- Icon -->
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20">
            <component :is="benefit.icon" class="h-6 w-6 text-sky-400" />
          </div>

          <!-- Content -->
          <h3 class="mb-2 text-lg font-semibold text-white">
            {{ benefit.title }}
          </h3>
          <p class="text-sm leading-relaxed text-slate-400">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, Clock, Users, Award, Wrench, FileCheck } from 'lucide-vue-next'

const benefits = [
  {
    icon: Shield,
    title: 'Assistenza Completa',
    description: 'Ti seguiamo in ogni fase, dalla denuncia al risarcimento finale.'
  },
  {
    icon: Clock,
    title: 'Risposta Rapida',
    description: 'Rispondiamo entro 24 ore e iniziamo subito la pratica.'
  },
  {
    icon: Users,
    title: 'Team Specializzato',
    description: 'Professionisti del settore automotive e assicurativo al tuo servizio.'
  },
  {
    icon: Award,
    title: 'Zero Costi Anticipati',
    description: 'Non paghi nulla in anticipo. Lavoriamo con le assicurazioni.'
  },
  {
    icon: Wrench,
    title: 'Riparazioni Certificate',
    description: 'Officina autorizzata con ricambi originali e garanzia sui lavori.'
  },
  {
    icon: FileCheck,
    title: 'Pratiche Semplificate',
    description: 'Gestiamo tutta la burocrazia assicurativa per te.'
  }
]
</script>

<style scoped></style>
