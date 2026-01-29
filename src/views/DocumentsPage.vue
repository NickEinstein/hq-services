<template>
  <div class="min-h-screen bg-slate-50">
    <Header />
    
    <main class="py-12">
      <div class="container mx-auto px-4">
        <!-- Page Title -->
        <div class="text-center mb-12">
          <h1 class="text-3xl font-bold text-slate-900 mb-4">Documenti e Modulistica</h1>
          <p class="text-lg text-slate-600">Scarica i moduli necessari per la gestione del sinistro</p>
        </div>

        <!-- Document Categories -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div
            v-for="category in documentCategories"
            :key="category.id"
            class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-4 mb-4">
              <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', category.bgClass]">
                <component :is="category.icon" :class="['h-6 w-6', category.iconClass]" />
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ category.title }}</h3>
            </div>
            <p class="text-sm text-slate-500 mb-4">{{ category.description }}</p>
            <div class="space-y-2">
              <a
                v-for="doc in category.documents"
                :key="doc.name"
                :href="doc.url"
                target="_blank"
                class="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div class="flex items-center gap-3">
                  <FileText class="h-5 w-5 text-slate-400" />
                  <span class="text-sm font-medium text-slate-700">{{ doc.name }}</span>
                </div>
                <Download class="h-4 w-4 text-sky-500" />
              </a>
            </div>
          </div>
        </div>

        <!-- Upload Section for Existing Claims -->
        <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg max-w-2xl mx-auto">
          <h2 class="text-xl font-semibold text-slate-900 mb-6 text-center">Carica Documenti per una Pratica Esistente</h2>
          
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="claimCode" class="text-sm font-medium text-slate-700">Codice Pratica *</label>
              <input
                id="claimCode"
                v-model="uploadForm.claimCode"
                type="text"
                placeholder="HQ-XXXXXX-XXXX"
                class="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Tipo Documento *</label>
              <select
                v-model="uploadForm.documentType"
                class="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Seleziona tipo...</option>
                <option value="id">Documento d'Identità</option>
                <option value="policy">Polizza Assicurativa</option>
                <option value="damage_photos">Foto del Danno</option>
                <option value="cai">Modulo CAI/CID</option>
                <option value="estimate">Preventivo</option>
                <option value="other">Altro</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">File *</label>
              <div
                class="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-sky-400 transition-colors cursor-pointer"
                @click="triggerFileInput"
                @dragover.prevent
                @drop.prevent="handleFileDrop"
              >
                <input
                  ref="fileInput"
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  class="hidden"
                  @change="handleFileSelect"
                />
                <Upload class="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <p class="text-sm text-slate-600">Clicca o trascina i file qui</p>
                <p class="text-xs text-slate-400 mt-1">PDF, JPG, PNG • Max 10MB per file</p>
              </div>
            </div>

            <!-- Selected files list -->
            <div v-if="uploadForm.files.length > 0" class="space-y-2">
              <div
                v-for="(file, index) in uploadForm.files"
                :key="index"
                class="flex items-center justify-between p-3 rounded-lg border border-slate-200 bg-slate-50"
              >
                <div class="flex items-center gap-3">
                  <FileText class="h-5 w-5 text-slate-500" />
                  <div>
                    <p class="text-sm font-medium text-slate-700">{{ file.name }}</p>
                    <p class="text-xs text-slate-500">{{ (file.size / 1024).toFixed(1) }} KB</p>
                  </div>
                </div>
                <button
                  @click="removeFile(index)"
                  class="p-1 hover:bg-red-50 rounded text-slate-400 hover:text-red-500"
                >
                  <X class="h-4 w-4" />
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <label for="notes" class="text-sm font-medium text-slate-700">Note (opzionale)</label>
              <textarea
                id="notes"
                v-model="uploadForm.notes"
                placeholder="Aggiungi eventuali note..."
                rows="3"
                class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>

            <button
              @click="submitUpload"
              :disabled="!canSubmit || isUploading"
              class="w-full py-3 px-4 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ isUploading ? 'Caricamento in corso...' : 'Carica Documenti' }}
            </button>
          </div>
        </div>

        <!-- Success Modal -->
        <div
          v-if="showSuccess"
          class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <div class="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check class="h-8 w-8 text-emerald-600" />
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Documenti Caricati!</h3>
            <p class="text-slate-600 mb-6">I tuoi documenti sono stati caricati con successo e saranno esaminati dal nostro team.</p>
            <button
              @click="showSuccess = false"
              class="px-6 py-2 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { FileText, Download, Upload, X, Check, Shield, FileCheck, Car, ClipboardList } from 'lucide-vue-next'

const fileInput = ref(null)
const isUploading = ref(false)
const showSuccess = ref(false)

const uploadForm = reactive({
  claimCode: '',
  documentType: '',
  files: [],
  notes: ''
})

const canSubmit = computed(() => {
  return uploadForm.claimCode && uploadForm.documentType && uploadForm.files.length > 0
})

const documentCategories = [
  {
    id: 'cai',
    title: 'Modulo CAI/CID',
    description: 'Constatazione Amichevole di Incidente per la denuncia del sinistro',
    icon: ClipboardList,
    bgClass: 'bg-sky-100',
    iconClass: 'text-sky-600',
    documents: [
      { name: 'Modulo CAI - PDF', url: '/documents/modulo-cai.pdf' },
      { name: 'Guida Compilazione CAI', url: '/documents/guida-cai.pdf' }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy e Consensi',
    description: 'Moduli per il trattamento dei dati personali',
    icon: Shield,
    bgClass: 'bg-emerald-100',
    iconClass: 'text-emerald-600',
    documents: [
      { name: 'Informativa Privacy', url: '/documents/privacy.pdf' },
      { name: 'Consenso Trattamento Dati', url: '/documents/consenso.pdf' }
    ]
  },
  {
    id: 'delegation',
    title: 'Deleghe e Autorizzazioni',
    description: 'Moduli per delegare la gestione del sinistro',
    icon: FileCheck,
    bgClass: 'bg-amber-100',
    iconClass: 'text-amber-600',
    documents: [
      { name: 'Delega Gestione Sinistro', url: '/documents/delega.pdf' },
      { name: 'Autorizzazione Riparazione', url: '/documents/autorizzazione.pdf' },
      { name: 'Cessione del Credito', url: '/documents/cessione-credito.pdf' }
    ]
  },
  {
    id: 'vehicle',
    title: 'Documenti Veicolo',
    description: 'Moduli relativi al veicolo e alla polizza',
    icon: Car,
    bgClass: 'bg-purple-100',
    iconClass: 'text-purple-600',
    documents: [
      { name: 'Dichiarazione Proprietà', url: '/documents/dichiarazione-proprieta.pdf' },
      { name: 'Checklist Documenti', url: '/documents/checklist.pdf' }
    ]
  }
]

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileSelect(e) {
  const files = Array.from(e.target.files || [])
  uploadForm.files.push(...files)
}

function handleFileDrop(e) {
  const files = Array.from(e.dataTransfer.files || [])
  uploadForm.files.push(...files)
}

function removeFile(index) {
  uploadForm.files.splice(index, 1)
}

function submitUpload() {
  if (!canSubmit.value) return
  
  isUploading.value = true
  // TODO: Implement actual upload API
  setTimeout(() => {
    isUploading.value = false
    showSuccess.value = true
    // Reset form
    uploadForm.claimCode = ''
    uploadForm.documentType = ''
    uploadForm.files = []
    uploadForm.notes = ''
  }, 1500)
}
</script>

<style scoped></style>
