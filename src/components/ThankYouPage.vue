<template>
  <div class="min-h-screen bg-gradient-hero">
    <div class="container py-12 md:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Success icon -->
        <div
          class="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-success/10"
        >
          <CheckCircle class="h-12 w-12 text-success" />
        </div>

        <!-- Title -->
        <h1 class="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
          Richiesta Inviata con Successo!
        </h1>
        <p class="mb-8 text-lg text-muted-foreground">
          Grazie per averci scelto. Il nostro team prenderà in carico la tua pratica entro 24 ore
          lavorative.
        </p>

        <!-- Next steps card -->
        <div class="mb-8 rounded-2xl border border-border bg-card p-6 text-left shadow-card md:p-8">
          <h2 class="mb-6 font-display text-xl font-semibold text-foreground">Prossimi passi</h2>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
              >
                1
              </div>
              <div>
                <p class="font-medium text-foreground">Riceverai una conferma via email</p>
                <p class="text-sm text-muted-foreground">
                  Entro pochi minuti riceverai un'email con il riepilogo della tua richiesta.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
              >
                2
              </div>
              <div>
                <p class="font-medium text-foreground">Ti contattiamo entro 24 ore</p>
                <p class="text-sm text-muted-foreground">
                  Un nostro consulente ti chiamerà per confermare i dettagli e pianificare i
                  prossimi passi.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
              >
                3
              </div>
              <div>
                <p class="font-medium text-foreground">Avviamo la pratica con l'assicurazione</p>
                <p class="text-sm text-muted-foreground">
                  Ci occuperemo di tutti i contatti con la tua compagnia assicurativa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact options -->
        <div class="mb-8 grid gap-4 sm:grid-cols-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142,70%,45%)]/10"
            >
              <MessageCircle class="h-6 w-6 text-[hsl(142,70%,45%)]" />
            </div>
            <span class="text-sm font-medium text-foreground">WhatsApp</span>
          </a>
          <a
            href="tel:+390123456789"
            class="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Phone class="h-6 w-6 text-accent" />
            </div>
            <span class="text-sm font-medium text-foreground">Chiamaci</span>
          </a>
          <a
            href="#"
            class="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Calendar class="h-6 w-6 text-accent" />
            </div>
            <span class="text-sm font-medium text-foreground">Prenota</span>
          </a>
        </div>

        <!-- Back button -->
        <button
          type="button"
          @click="onBackToHome"
          class="inline-flex items-center px-6 py-2 rounded-lg font-bold border border-border bg-background text-foreground shadow transition-colors hover:bg-secondary text-lg"
        >
          <ArrowLeft class="mr-2 h-4 w-4" />
          Torna alla Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, MessageCircle, Phone, Calendar, ArrowLeft } from 'lucide-vue-next'

defineProps({
  onBackToHome: Function
})

const whatsappNumber = '390123456789'
const whatsappMessage = encodeURIComponent(
  'Ciao! Ho appena inviato una richiesta sinistro. Il mio riferimento è...'
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
</script>

<style scoped></style>
