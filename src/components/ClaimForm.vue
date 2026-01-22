<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
      <!-- Header -->
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="font-display text-2xl font-bold text-foreground">Denuncia Sinistro</h2>
          <p class="text-sm text-muted-foreground">Compila il modulo per avviare la pratica</p>
        </div>
        <button
          type="button"
          @click="props.onCancel"
          class="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X class="h-5 w-5" />
        </button>
      </div>

      <!-- Step indicator -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div v-for="(step, index) in steps" :key="step.id" class="flex flex-1 items-center">
            <div class="flex flex-col items-center">
              <div
                :class="[
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all',
                  currentStep > step.id
                    ? 'border-accent bg-accent text-accent-foreground'
                    : currentStep === step.id
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-border bg-background text-muted-foreground'
                ]"
              >
                <Check v-if="currentStep > step.id" class="h-5 w-5" />
                <component v-else :is="step.icon" class="h-5 w-5" />
              </div>
              <span
                :class="[
                  'mt-2 hidden text-xs font-medium sm:block',
                  currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                ]"
              >
                {{ step.title }}
              </span>
            </div>
            <div
              v-if="index < steps.length - 1"
              :class="[
                'mx-2 h-0.5 flex-1 transition-colors',
                currentStep > step.id ? 'bg-accent' : 'bg-border'
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Form content -->
      <div class="min-h-[300px]">
        <!-- Step 1: Personal Info -->
        <div v-if="currentStep === 1" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="firstName" class="text-sm font-medium leading-none">Nome *</label>
              <input
                id="firstName"
                v-model="formData.firstName"
                type="text"
                placeholder="Mario"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.firstName ? 'border-destructive' : ''
                ]"
              />
              <p v-if="errors.firstName" class="text-xs text-destructive">{{ errors.firstName }}</p>
            </div>
            <div class="space-y-2">
              <label for="lastName" class="text-sm font-medium leading-none">Cognome *</label>
              <input
                id="lastName"
                v-model="formData.lastName"
                type="text"
                placeholder="Rossi"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.lastName ? 'border-destructive' : ''
                ]"
              />
              <p v-if="errors.lastName" class="text-xs text-destructive">{{ errors.lastName }}</p>
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium leading-none">Email *</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="mario.rossi@email.com"
              :class="[
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                errors.email ? 'border-destructive' : ''
              ]"
            />
            <p v-if="errors.email" class="text-xs text-destructive">{{ errors.email }}</p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="phone" class="text-sm font-medium leading-none">Telefono *</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="+39 333 1234567"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.phone ? 'border-destructive' : ''
                ]"
              />
              <p v-if="errors.phone" class="text-xs text-destructive">{{ errors.phone }}</p>
            </div>
            <div class="space-y-2">
              <label for="fiscalCode" class="text-sm font-medium leading-none"
                >Codice Fiscale</label
              >
              <input
                id="fiscalCode"
                v-model="formData.fiscalCode"
                type="text"
                placeholder="RSSMRA80A01H501U"
                maxlength="16"
                @input="formData.fiscalCode = formData.fiscalCode.toUpperCase()"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        <!-- Step 2: Vehicle Info -->
        <div v-if="currentStep === 2" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="vehiclePlate" class="text-sm font-medium leading-none">Targa *</label>
              <input
                id="vehiclePlate"
                v-model="formData.vehiclePlate"
                type="text"
                placeholder="AA123BB"
                @input="formData.vehiclePlate = formData.vehiclePlate.toUpperCase()"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.vehiclePlate ? 'border-destructive' : ''
                ]"
              />
              <p v-if="errors.vehiclePlate" class="text-xs text-destructive">
                {{ errors.vehiclePlate }}
              </p>
            </div>
            <div class="space-y-2">
              <label for="vehicleYear" class="text-sm font-medium leading-none">Anno</label>
              <input
                id="vehicleYear"
                v-model="formData.vehicleYear"
                type="text"
                placeholder="2020"
                maxlength="4"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="vehicleBrand" class="text-sm font-medium leading-none">Marca *</label>
              <input
                id="vehicleBrand"
                v-model="formData.vehicleBrand"
                type="text"
                placeholder="Fiat"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.vehicleBrand ? 'border-destructive' : ''
                ]"
              />
              <p v-if="errors.vehicleBrand" class="text-xs text-destructive">
                {{ errors.vehicleBrand }}
              </p>
            </div>
            <div class="space-y-2">
              <label for="vehicleModel" class="text-sm font-medium leading-none">Modello</label>
              <input
                id="vehicleModel"
                v-model="formData.vehicleModel"
                type="text"
                placeholder="500"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="insuranceCompany" class="text-sm font-medium leading-none"
                >Compagnia Assicurativa *</label
              >
              <select
                id="insuranceCompany"
                v-model="formData.insuranceCompany"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.insuranceCompany ? 'border-destructive' : ''
                ]"
              >
                <option value="">Seleziona...</option>
                <option v-for="company in insuranceCompanies" :key="company" :value="company">
                  {{ company }}
                </option>
              </select>
              <p v-if="errors.insuranceCompany" class="text-xs text-destructive">
                {{ errors.insuranceCompany }}
              </p>
            </div>
            <div class="space-y-2">
              <label for="policyNumber" class="text-sm font-medium leading-none"
                >Numero Polizza</label
              >
              <input
                id="policyNumber"
                v-model="formData.policyNumber"
                type="text"
                placeholder="123456789"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        <!-- Step 3: Claim Info -->
        <div v-if="currentStep === 3" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="claimType" class="text-sm font-medium leading-none"
                >Tipo di Sinistro *</label
              >
              <select
                id="claimType"
                v-model="formData.claimType"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.claimType ? 'border-destructive' : ''
                ]"
              >
                <option value="">Seleziona...</option>
                <option v-for="type in claimTypes" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
              <p v-if="errors.claimType" class="text-xs text-destructive">{{ errors.claimType }}</p>
            </div>
            <div class="space-y-2">
              <label for="accidentDate" class="text-sm font-medium leading-none"
                >Data Sinistro *</label
              >
              <input
                id="accidentDate"
                v-model="formData.accidentDate"
                type="date"
                :class="[
                  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  errors.accidentDate ? 'border-destructive' : ''
                ]"
              />
              <p v-if="errors.accidentDate" class="text-xs text-destructive">
                {{ errors.accidentDate }}
              </p>
            </div>
          </div>

          <div class="space-y-2">
            <label for="accidentLocation" class="text-sm font-medium leading-none"
              >Luogo del Sinistro</label
            >
            <input
              id="accidentLocation"
              v-model="formData.accidentLocation"
              type="text"
              placeholder="Via Roma 123, Milano"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div class="space-y-2">
            <label for="accidentDescription" class="text-sm font-medium leading-none"
              >Descrizione del Sinistro *</label
            >
            <textarea
              id="accidentDescription"
              v-model="formData.accidentDescription"
              placeholder="Descrivi cosa è successo..."
              rows="4"
              :class="[
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                errors.accidentDescription ? 'border-destructive' : ''
              ]"
            ></textarea>
            <p v-if="errors.accidentDescription" class="text-xs text-destructive">
              {{ errors.accidentDescription }}
            </p>
          </div>
        </div>

        <!-- Step 4: Documents -->
        <div v-if="currentStep === 4" class="space-y-6">
          <div
            class="rounded-lg border-2 border-dashed border-border bg-secondary/30 p-6 text-center"
          >
            <input
              type="file"
              id="fileUpload"
              ref="fileInput"
              multiple
              accept="image/*,.pdf"
              @change="handleFileUpload"
              class="hidden"
            />
            <label for="fileUpload" class="flex cursor-pointer flex-col items-center gap-2">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Upload class="h-7 w-7 text-accent" />
              </div>
              <div>
                <p class="font-medium text-foreground">Clicca per caricare i documenti</p>
                <p class="text-sm text-muted-foreground">
                  Foto del danno, documento d'identità, polizza assicurativa
                </p>
              </div>
            </label>
          </div>

          <div v-if="formData.documents.length > 0" class="space-y-2">
            <label class="text-sm font-medium leading-none"
              >Documenti caricati ({{ formData.documents.length }})</label
            >
            <div class="space-y-2">
              <div
                v-for="(file, index) in formData.documents"
                :key="index"
                class="flex items-center justify-between rounded-lg border border-border bg-card p-3"
              >
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <FileText class="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p class="text-sm font-medium text-foreground">{{ file.name }}</p>
                    <p class="text-xs text-muted-foreground">
                      {{ (file.size / 1024).toFixed(1) }} KB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  @click="removeFile(index)"
                  class="rounded-full p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                >
                  <X class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-accent/5 p-4">
            <div class="flex gap-3">
              <AlertCircle class="h-5 w-5 shrink-0 text-accent" />
              <div class="text-sm">
                <p class="font-medium text-foreground">Documenti consigliati:</p>
                <ul class="mt-1 list-inside list-disc text-muted-foreground">
                  <li>Foto del danno (più angolazioni possibili)</li>
                  <li>Documento d'identità (fronte e retro)</li>
                  <li>Attestato di polizza assicurativa</li>
                  <li>Modulo CAI / CID (se compilato)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-8 flex items-center justify-between border-t border-border pt-6">
        <button
          type="button"
          @click="handlePrev"
          :disabled="currentStep === 1"
          :class="[
            'inline-flex items-center px-4 py-2 border border-border rounded-lg font-medium transition-colors bg-background text-foreground hover:bg-secondary',
            currentStep === 1 ? 'invisible' : ''
          ]"
        >
          <ArrowLeft class="mr-2 h-4 w-4" />
          Indietro
        </button>

        <button
          v-if="currentStep < 4"
          type="button"
          @click="handleNext"
          class="inline-flex items-center px-6 py-2 rounded-lg font-bold bg-accent text-accent-foreground shadow transition-colors hover:bg-accent/90"
        >
          Avanti
          <ArrowRight class="ml-2 h-4 w-4" />
        </button>
        <button
          v-else
          type="button"
          @click="handleSubmit"
          :disabled="isSubmitting"
          class="inline-flex items-center px-6 py-2 rounded-lg font-bold bg-accent text-accent-foreground shadow transition-colors hover:bg-accent/90 disabled:opacity-60"
        >
          <span v-if="isSubmitting">Invio in corso...</span>
          <template v-else>
            Invia Richiesta
            <Check class="ml-2 h-4 w-4" />
          </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  Check,
  User,
  Car,
  FileText,
  Camera,
  X,
  AlertCircle
} from 'lucide-vue-next'

const props = defineProps({
  onComplete: Function,
  onCancel: Function
})

const steps = [
  { id: 1, title: 'Dati personali', icon: User },
  { id: 2, title: 'Veicolo', icon: Car },
  { id: 3, title: 'Sinistro', icon: FileText },
  { id: 4, title: 'Documenti', icon: Camera }
]

const insuranceCompanies = [
  'Allianz',
  'Generali',
  'UnipolSai',
  'AXA',
  'Zurich',
  'Cattolica',
  'Reale Mutua',
  'Prima Assicurazioni',
  'Verti',
  'Direct Line',
  'Quixa',
  'Altro'
]

const claimTypes = [
  { value: 'collision', label: 'Incidente stradale' },
  { value: 'theft', label: 'Furto' },
  { value: 'vandalism', label: 'Atti vandalici' },
  { value: 'natural', label: 'Eventi atmosferici' },
  { value: 'fire', label: 'Incendio' },
  { value: 'glass', label: 'Cristalli' },
  { value: 'other', label: 'Altro' }
]

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  fiscalCode: '',
  vehiclePlate: '',
  vehicleBrand: '',
  vehicleModel: '',
  vehicleYear: '',
  insuranceCompany: '',
  policyNumber: '',
  claimType: '',
  accidentDate: '',
  accidentLocation: '',
  accidentDescription: '',
  documents: []
}

const currentStep = ref(1)
const formData = reactive({ ...initialFormData })
const errors = ref({})
const isSubmitting = ref(false)
const fileInput = ref(null)

function validateStep(step) {
  const newErrors = {}

  if (step === 1) {
    if (!formData.firstName.trim()) newErrors.firstName = 'Nome richiesto'
    if (!formData.lastName.trim()) newErrors.lastName = 'Cognome richiesto'
    if (!formData.email.trim()) newErrors.email = 'Email richiesta'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email non valida'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefono richiesto'
  }

  if (step === 2) {
    if (!formData.vehiclePlate.trim()) newErrors.vehiclePlate = 'Targa richiesta'
    if (!formData.vehicleBrand.trim()) newErrors.vehicleBrand = 'Marca richiesta'
    if (!formData.insuranceCompany) newErrors.insuranceCompany = 'Assicurazione richiesta'
  }

  if (step === 3) {
    if (!formData.claimType) newErrors.claimType = 'Tipo sinistro richiesto'
    if (!formData.accidentDate) newErrors.accidentDate = 'Data richiesta'
    if (!formData.accidentDescription.trim()) {
      newErrors.accidentDescription = 'Descrizione richiesta'
    }
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

function handleNext() {
  if (validateStep(currentStep.value)) {
    currentStep.value = Math.min(currentStep.value + 1, 4)
  }
}

function handlePrev() {
  currentStep.value = Math.max(currentStep.value - 1, 1)
}

function handleSubmit() {
  if (!validateStep(currentStep.value)) return

  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    props.onComplete && props.onComplete()
  }, 1500)
}

function handleFileUpload(e) {
  const files = Array.from(e.target.files || [])
  formData.documents.push(...files)
}

function removeFile(index) {
  formData.documents.splice(index, 1)
}
</script>

<style scoped></style>
