<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
        Tipi di Sinistro Gestiti
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="type in claimTypes"
          :key="type.title"
          class="rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
        >
          <component :is="type.icon" class="h-8 w-8 text-sky-500 mb-3" />
          <h3 class="font-semibold text-slate-800 mb-1">{{ type.title }}</h3>
          <p class="text-sm text-slate-500">{{ type.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car, Shield, Flame, Zap, User, Home, KeyRound, Users } from 'lucide-vue-next'

const claimTypes = [
  { icon: Car, title: 'Collisione', description: 'Danni da incidente stradale.' },
  {
    icon: KeyRound,
    title: 'Furto & Vandalismo',
    description: 'Furto, tentato furto, atti vandalici.'
  },
  { icon: Flame, title: 'Incendio', description: 'Danni da incendio o esplosione.' },
  { icon: Zap, title: 'Eventi Naturali', description: 'Danni da grandine, alluvione, tempesta.' },
  { icon: Shield, title: 'Cristalli', description: 'Rottura vetri e parabrezza.' },
  { icon: User, title: 'Infortunio', description: 'Danni a conducente o passeggeri.' },
  { icon: Users, title: 'Responsabilità Civile', description: 'Danni a terzi.' },
  { icon: Home, title: 'Casa & Proprietà', description: 'Danni a immobili o contenuto.' }
]
</script>

<style scoped></style>
