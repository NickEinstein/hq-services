<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
  >
    <div class="container mx-auto px-4 flex h-16 items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600"
        >
          <span class="font-bold text-lg text-white">HQ</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-lg leading-tight text-slate-900">HQ Motorservice</span>
          <span class="text-xs text-slate-500">Gestione Sinistri</span>
        </div>
      </router-link>

      <!-- Navigation - Desktop -->
      <nav class="hidden items-center gap-6 lg:flex">
        <router-link
          to="/"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
        >
          Home
        </router-link>
        <router-link
          to="/stato-pratica"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
        >
          Stato Pratica
        </router-link>
        <router-link
          to="/centri-convenzionati"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
        >
          Centri Convenzionati
        </router-link>
        <router-link
          to="/documenti"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
        >
          Documenti
        </router-link>
      </nav>

      <!-- Contact Info - Desktop -->
      <div class="hidden items-center gap-4 md:flex">
        <a
          href="tel:+390123456789"
          class="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-sky-600"
        >
          <Phone class="h-4 w-4 text-sky-500" />
          <span class="hidden xl:inline">+39 012 345 6789</span>
        </a>
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white transition-colors hover:bg-emerald-600"
          title="WhatsApp"
        >
          <MessageCircle class="h-5 w-5" />
        </a>

        <router-link
          to="/login"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium transition-colors hover:bg-slate-800"
        >
          Accedi
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 lg:hidden">
        <a
          href="tel:+390123456789"
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors hover:bg-sky-500 hover:text-white"
        >
          <Phone class="h-5 w-5" />
        </a>
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
        >
          <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden border-t border-slate-200 bg-white"
    >
      <nav class="container mx-auto px-4 py-4 space-y-2">
        <router-link
          to="/"
          class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          @click="mobileMenuOpen = false"
        >
          Home
        </router-link>
        <router-link
          to="/stato-pratica"
          class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          @click="mobileMenuOpen = false"
        >
          Stato Pratica
        </router-link>
        <router-link
          to="/centri-convenzionati"
          class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          @click="mobileMenuOpen = false"
        >
          Centri Convenzionati
        </router-link>
        <router-link
          to="/documenti"
          class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          @click="mobileMenuOpen = false"
        >
          Documenti
        </router-link>
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-white font-medium text-sm"
        >
          <MessageCircle class="h-5 w-5" />
          WhatsApp
        </a>
        
        <router-link
          to="/login"
          class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm"
          @click="mobileMenuOpen = false"
        >
          Accedi
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, MessageCircle, Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const whatsappNumber = '390123456789'
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sulla gestione sinistri.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
</script>

<style scoped></style>
