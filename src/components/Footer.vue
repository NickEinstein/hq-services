<template>
  <footer class="border-t border-slate-200 bg-slate-900">
    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <a href="/" class="mb-4 flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600"
            >
              <span class="font-bold text-lg text-white">HQ</span>
            </div>
            <div class="flex flex-col">
              <span class="font-semibold text-lg leading-tight text-white">HQ Motorservice</span>
              <span class="text-xs text-slate-400">Gestione Sinistri</span>
            </div>
          </a>
          <p class="mb-4 max-w-sm text-sm text-slate-400">
            Il tuo partner di fiducia per la gestione completa dei sinistri automobilistici. Dalla
            denuncia al risarcimento, pensiamo a tutto noi.
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contatti</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="tel:+390123456789"
                class="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <Phone class="h-4 w-4" />
                +39 012 345 6789
              </a>
            </li>
            <li>
              <a
                href="mailto:sinistri@hqmotorservice.it"
                class="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <Mail class="h-4 w-4" />
                sinistri@hqmotorservice.it
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/390123456789"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                <MessageCircle class="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <!-- Address -->
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Dove siamo</h3>
          <div class="flex items-start gap-2 text-sm text-slate-400">
            <MapPin class="mt-0.5 h-4 w-4 shrink-0" />
            <address class="not-italic">
              Via Roma 123
              <br />
              20100 Milano (MI)
              <br />
              Italia
            </address>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 border-t border-slate-800 pt-8">
        <div
          class="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left"
        >
          <p>© {{ currentYear }} HQ Motorservice. Tutti i diritti riservati.</p>
          <div class="flex gap-6">
            <a href="/privacy" class="transition-colors hover:text-sky-400"> Privacy Policy </a>
            <a href="/terms" class="transition-colors hover:text-sky-400"> Termini e Condizioni </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<style scoped></style>
