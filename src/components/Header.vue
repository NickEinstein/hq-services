<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
  >
    <div class="container mx-auto px-4 flex h-16 items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600"
        >
          <span class="font-bold text-lg text-white">HQ</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-lg leading-tight text-slate-900">HQ Motorservice</span>
          <span class="text-xs text-slate-500">Gestione Sinistri</span>
        </div>
      </a>

      <!-- Contact Info - Desktop -->
      <div class="hidden items-center gap-6 md:flex">
        <a
          href="tel:+390123456789"
          class="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-sky-600"
        >
          <Phone class="h-4 w-4 text-sky-500" />
          <span>+39 012 345 6789</span>
        </a>
        <a
          href="mailto:sinistri@hqmotorservice.it"
          class="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-sky-600"
        >
          <Mail class="h-4 w-4 text-sky-500" />
          <span>sinistri@hqmotorservice.it</span>
        </a>
      </div>

      <!-- Mobile Contact -->
      <div class="flex items-center gap-2 md:hidden">
        <a
          href="tel:+390123456789"
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors hover:bg-sky-500 hover:text-white"
        >
          <Phone class="h-5 w-5" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Phone, Mail } from 'lucide-vue-next'
</script>

<style scoped></style>
