<template>
  <section class="py-12 bg-slate-50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
        Centri Convenzionati HQ
      </h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="rounded-xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col items-center text-center"
        >
          <img :src="partner.logo" :alt="partner.name" class="h-12 mb-3" />
          <h3 class="font-semibold text-slate-800 mb-1">{{ partner.name }}</h3>
          <ul class="text-sm text-slate-500 space-y-1">
            <li v-for="feature in partner.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  {
    name: 'Carrozzeria Blu',
    logo: '/assets/partner1.png',
    features: [
      'Riparazione prioritaria',
      'Auto sostitutiva gratuita',
      'Ritiro e consegna a domicilio',
      'Tracciamento costi online',
      'Tempi di riparazione stimati'
    ]
  },
  {
    name: 'Officina Verde',
    logo: '/assets/partner2.png',
    features: [
      'Ricambi originali',
      'Garanzia lavori',
      'Assistenza a domicilio',
      'Preventivo trasparente'
    ]
  },
  {
    name: 'Glass Express',
    logo: '/assets/partner3.png',
    features: ['Sostituzione cristalli rapida', 'Prenotazione online', 'Servizio mobile']
  }
]
</script>

<style scoped></style>
