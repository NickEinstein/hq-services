<template>
  <div>
    <Header />
    <template v-if="currentView === 'thankyou'">
      <ThankYouPage :onBackToHome="handleBackToHome" :claimData="claimData" />
      <Footer />
    </template>
    <template v-else-if="currentView === 'form'">
      <main class="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 py-8 md:py-12">
        <div class="container mx-auto px-4">
          <ClaimForm :onComplete="handleFormComplete" :onCancel="handleBackToHome" />
        </div>
      </main>
      <Footer />
    </template>
    <template v-else>
      <main>
        <HeroSection :onStartClaim="handleStartClaim" />
        <ProcessSection />
        <ClaimTypesSection />
        <PricingSection @selectPackage="handleSelectPackage" />
        <BenefitsSection />
        <ClaimTrackingSection />
        <PartnerNetworkSection />
        <SupportSection />
        <CTASection :onStartClaim="handleStartClaim" />
        <TrustpilotSection />
      </main>
      <Footer />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ClaimTypesSection from '@/components/ClaimTypesSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import PartnerNetworkSection from '@/components/PartnerNetworkSection.vue'
import ClaimTrackingSection from '@/components/ClaimTrackingSection.vue'
import TrustpilotSection from '@/components/TrustpilotSection.vue'
import SupportSection from '@/components/SupportSection.vue'
import BenefitsSection from '@/components/Benefit.vue'
import CTASection from '@/components/CTASection.vue'
import ClaimForm from '@/components/ClaimForm.vue'
import ThankYouPage from '@/components/ThankYouPage.vue'
import Footer from '@/components/Footer.vue'

const currentView = ref('landing')
const claimData = ref(null)

function handleStartClaim() {
  currentView.value = 'form'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleFormComplete(data) {
  claimData.value = data
  currentView.value = 'thankyou'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleSelectPackage(packageType) {
  console.log('Selected package:', packageType)
  // TODO: Store selected package and redirect to form
  handleStartClaim()
}

function handleBackToHome() {
  currentView.value = 'landing'
  claimData.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped></style>
