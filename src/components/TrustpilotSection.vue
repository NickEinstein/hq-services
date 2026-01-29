<template>
  <section class="py-12 bg-white border-t border-slate-200">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Trustpilot Logo & Rating -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <Star class="h-8 w-8 text-emerald-500 fill-emerald-500" />
            <span class="text-2xl font-bold text-slate-900">Trustpilot</span>
          </div>
          <div class="flex flex-col">
            <div class="flex gap-1">
              <Star v-for="n in 5" :key="n" class="h-5 w-5 text-emerald-500 fill-emerald-500" />
            </div>
            <span class="text-sm text-slate-600">TrustScore <strong>4.8</strong> | <strong>2,456</strong> recensioni</span>
          </div>
        </div>

        <!-- Recent Reviews -->
        <div class="flex gap-4 overflow-x-auto pb-2 max-w-full">
          <div
            v-for="review in reviews"
            :key="review.id"
            class="flex-shrink-0 w-64 rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="flex gap-0.5">
                <Star v-for="n in review.rating" :key="n" class="h-4 w-4 text-emerald-500 fill-emerald-500" />
              </div>
              <span class="text-xs text-slate-500">{{ review.date }}</span>
            </div>
            <p class="text-sm text-slate-700 line-clamp-2">{{ review.text }}</p>
            <p class="text-xs text-slate-500 mt-2">— {{ review.author }}</p>
          </div>
        </div>

        <!-- CTA -->
        <a
          href="https://www.trustpilot.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors"
        >
          Vedi tutte le recensioni
          <ExternalLink class="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star, ExternalLink } from 'lucide-vue-next'

const reviews = [
  {
    id: 1,
    rating: 5,
    text: 'Servizio eccellente! Hanno gestito tutto in modo impeccabile.',
    author: 'Marco R.',
    date: '2 giorni fa'
  },
  {
    id: 2,
    rating: 5,
    text: 'Professionali e veloci. Consiglio vivamente HQ Motorservice.',
    author: 'Laura B.',
    date: '1 settimana fa'
  },
  {
    id: 3,
    rating: 5,
    text: 'Pratica gestita in tempi record. Ottima esperienza!',
    author: 'Giuseppe M.',
    date: '2 settimane fa'
  }
]
</script>

<style scoped></style>
