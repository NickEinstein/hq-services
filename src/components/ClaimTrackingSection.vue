<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
        Traccia la tua Pratica
      </h2>
      <div
        class="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-8 shadow flex flex-col items-center"
      >
        <p class="mb-4 text-slate-700 text-center">
          Inserisci il tuo <span class="font-semibold text-sky-600">ID Pratica</span> per vedere lo
          stato della tua richiesta e i prossimi passi.
        </p>
        <form class="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder="ID Pratica"
            class="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:border-sky-500 outline-none"
          />
          <button
            type="submit"
            class="px-6 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            Cerca
          </button>
        </form>
        <div class="mt-6 w-full">
          <!-- Placeholder for status/result -->
          <div class="text-center text-slate-500 text-sm">
            (Demo) Stato pratica e dettagli appariranno qui.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// In a real app, add logic to fetch claim status by ID
</script>

<style scoped></style>
