<template>
  <div class="min-h-screen bg-slate-50">
    <Header />
    
    <main class="py-12">
      <div class="container mx-auto px-4">
        <!-- Page Title -->
        <div class="text-center mb-12">
          <h1 class="text-3xl font-bold text-slate-900 mb-4">Centri Convenzionati</h1>
          <p class="text-lg text-slate-600">Trova il centro riparazioni più vicino a te</p>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg mb-8">
          <div class="grid gap-4 md:grid-cols-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">CAP / Città</label>
              <div class="relative">
                <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  v-model="filters.location"
                  type="text"
                  placeholder="Es. 20100, Milano"
                  class="h-10 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Distanza</label>
              <select
                v-model="filters.distance"
                class="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="5">Entro 5 km</option>
                <option value="10">Entro 10 km</option>
                <option value="25">Entro 25 km</option>
                <option value="50">Entro 50 km</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Servizio</label>
              <select
                v-model="filters.service"
                class="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Tutti i servizi</option>
                <option value="carrozzeria">Carrozzeria</option>
                <option value="meccanica">Meccanica</option>
                <option value="cristalli">Cristalli</option>
                <option value="elettrauto">Elettrauto</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Opzioni</label>
              <div class="flex gap-4 h-10 items-center">
                <label class="flex items-center gap-2 text-sm">
                  <input type="checkbox" v-model="filters.courtesyCar" class="rounded border-slate-300 text-sky-500" />
                  Auto sostitutiva
                </label>
                <label class="flex items-center gap-2 text-sm">
                  <input type="checkbox" v-model="filters.pickup" class="rounded border-slate-300 text-sky-500" />
                  Ritiro a domicilio
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">&nbsp;</label>
              <button
                @click="searchPartners"
                class="h-10 w-full rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors"
              >
                Cerca
              </button>
            </div>
          </div>
        </div>

        <!-- Map and Results -->
        <div class="grid gap-6 lg:grid-cols-2">
          <!-- Map Placeholder -->
          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
            <div class="aspect-[4/3] bg-slate-200 flex items-center justify-center">
              <div class="text-center">
                <MapPin class="h-12 w-12 text-slate-400 mx-auto mb-2" />
                <p class="text-slate-500">Mappa interattiva</p>
                <p class="text-xs text-slate-400">Integrazione Google Maps</p>
              </div>
            </div>
          </div>

          <!-- Partner List -->
          <div class="space-y-4">
            <p class="text-sm text-slate-500">{{ partners.length }} centri trovati</p>
            <div class="space-y-4 max-h-[600px] overflow-y-auto">
              <div
                v-for="partner in partners"
                :key="partner.id"
                class="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                @click="selectPartner(partner)"
              >
                <div class="flex gap-4">
                  <img
                    :src="partner.image"
                    :alt="partner.name"
                    class="w-24 h-24 rounded-lg object-cover bg-slate-100"
                  />
                  <div class="flex-1">
                    <div class="flex items-start justify-between">
                      <div>
                        <h3 class="font-semibold text-slate-900">{{ partner.name }}</h3>
                        <p class="text-sm text-slate-500">{{ partner.address }}</p>
                      </div>
                      <span class="text-sm text-sky-600 font-medium">{{ partner.distance }} km</span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                      <Star v-for="n in 5" :key="n" :class="['h-4 w-4', n <= partner.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300']" />
                      <span class="text-xs text-slate-500 ml-1">({{ partner.reviews }})</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span
                        v-for="service in partner.services"
                        :key="service"
                        class="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                      >
                        {{ service }}
                      </span>
                    </div>
                    <div class="flex gap-4 mt-2 text-xs text-slate-500">
                      <span v-if="partner.courtesyCar" class="flex items-center gap-1">
                        <Car class="h-3 w-3" /> Auto sostitutiva
                      </span>
                      <span v-if="partner.pickup" class="flex items-center gap-1">
                        <Truck class="h-3 w-3" /> Ritiro/Consegna
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Partner Detail Modal -->
        <div
          v-if="selectedPartner"
          class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          @click.self="selectedPartner = null"
        >
          <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="relative">
              <img
                :src="selectedPartner.image"
                :alt="selectedPartner.name"
                class="w-full h-48 object-cover"
              />
              <button
                @click="selectedPartner = null"
                class="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:bg-slate-100"
              >
                <X class="h-5 w-5" />
              </button>
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h2 class="text-2xl font-bold text-slate-900">{{ selectedPartner.name }}</h2>
                  <p class="text-slate-500">{{ selectedPartner.address }}</p>
                </div>
                <div class="text-right">
                  <div class="flex items-center gap-1">
                    <Star v-for="n in 5" :key="n" :class="['h-5 w-5', n <= selectedPartner.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300']" />
                  </div>
                  <p class="text-sm text-slate-500">{{ selectedPartner.reviews }} recensioni</p>
                </div>
              </div>

              <div class="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <h3 class="font-semibold text-slate-900 mb-2">Servizi</h3>
                  <ul class="space-y-1">
                    <li v-for="service in selectedPartner.services" :key="service" class="flex items-center gap-2 text-sm text-slate-600">
                      <Check class="h-4 w-4 text-emerald-500" />
                      {{ service }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900 mb-2">Info</h3>
                  <ul class="space-y-2 text-sm text-slate-600">
                    <li class="flex items-center gap-2">
                      <Clock class="h-4 w-4 text-slate-400" />
                      Tempo stimato: {{ selectedPartner.estimatedTime }}
                    </li>
                    <li v-if="selectedPartner.courtesyCar" class="flex items-center gap-2">
                      <Car class="h-4 w-4 text-slate-400" />
                      Auto sostitutiva disponibile
                    </li>
                    <li v-if="selectedPartner.pickup" class="flex items-center gap-2">
                      <Truck class="h-4 w-4 text-slate-400" />
                      Ritiro e consegna a domicilio
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mb-6">
                <h3 class="font-semibold text-slate-900 mb-2">Orari</h3>
                <p class="text-sm text-slate-600">{{ selectedPartner.hours }}</p>
              </div>

              <div class="flex gap-3">
                <a
                  :href="`tel:${selectedPartner.phone}`"
                  class="flex-1 py-3 px-4 rounded-lg border border-slate-300 text-slate-700 font-medium text-center hover:bg-slate-50 transition-colors"
                >
                  <Phone class="h-4 w-4 inline mr-2" />
                  Chiama
                </a>
                <button
                  class="flex-1 py-3 px-4 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors"
                >
                  <Calendar class="h-4 w-4 inline mr-2" />
                  Prenota Appuntamento
                </button>
              </div>
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
import { MapPin, Star, Car, Truck, X, Check, Clock, Phone, Calendar } from 'lucide-vue-next'

const filters = reactive({
  location: '',
  distance: '25',
  service: '',
  courtesyCar: false,
  pickup: false
})

const selectedPartner = ref(null)

const partners = ref([
  {
    id: 1,
    name: 'Carrozzeria Milano Centro',
    address: 'Via Torino 45, 20123 Milano',
    distance: 2.3,
    rating: 5,
    reviews: 127,
    image: '/assets/partner1.png',
    services: ['Carrozzeria', 'Verniciatura', 'Cristalli'],
    courtesyCar: true,
    pickup: true,
    estimatedTime: '3-5 giorni',
    hours: 'Lun-Ven 8:00-18:00, Sab 8:00-12:00',
    phone: '+39 02 1234567'
  },
  {
    id: 2,
    name: 'Officina Rossi',
    address: 'Viale Monza 120, 20125 Milano',
    distance: 4.1,
    rating: 4,
    reviews: 89,
    image: '/assets/partner2.png',
    services: ['Meccanica', 'Elettrauto', 'Tagliandi'],
    courtesyCar: true,
    pickup: false,
    estimatedTime: '1-3 giorni',
    hours: 'Lun-Ven 8:30-18:30',
    phone: '+39 02 2345678'
  },
  {
    id: 3,
    name: 'Glass Express Milano',
    address: 'Via Padova 88, 20127 Milano',
    distance: 5.8,
    rating: 5,
    reviews: 234,
    image: '/assets/partner3.png',
    services: ['Cristalli', 'Parabrezza', 'Oscuramento vetri'],
    courtesyCar: false,
    pickup: true,
    estimatedTime: '1 giorno',
    hours: 'Lun-Sab 8:00-19:00',
    phone: '+39 02 3456789'
  },
  {
    id: 4,
    name: 'AutoService Pro',
    address: 'Via Ripamonti 200, 20141 Milano',
    distance: 7.2,
    rating: 4,
    reviews: 156,
    image: '/assets/partner1.png',
    services: ['Carrozzeria', 'Meccanica', 'Gommista'],
    courtesyCar: true,
    pickup: true,
    estimatedTime: '5-7 giorni',
    hours: 'Lun-Ven 7:30-19:00, Sab 8:00-13:00',
    phone: '+39 02 4567890'
  }
])

function searchPartners() {
  // TODO: Implement actual search with API
  console.log('Searching with filters:', filters)
}

function selectPartner(partner) {
  selectedPartner.value = partner
}
</script>

<style scoped></style>
