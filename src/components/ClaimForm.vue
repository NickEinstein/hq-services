<template>
  <div class="mx-auto max-w-2xl">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
      <!-- Header -->
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Denuncia Sinistro</h2>
          <p class="text-sm text-slate-500">Compila il modulo per avviare la pratica</p>
        </div>
        <button
          type="button"
          @click="props.onCancel"
          class="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
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
                    ? 'border-sky-500 bg-sky-500 text-white'
                    : currentStep === step.id
                      ? 'border-sky-500 bg-sky-50 text-sky-600'
                      : 'border-slate-300 bg-white text-slate-400'
                ]"
              >
                <Check v-if="currentStep > step.id" class="h-5 w-5" />
                <component v-else :is="step.icon" class="h-5 w-5" />
              </div>
              <span
                :class="[
                  'mt-2 hidden text-xs font-medium sm:block',
                  currentStep >= step.id ? 'text-slate-900' : 'text-slate-400'
                ]"
              >
                {{ step.title }}
              </span>
            </div>
            <div
              v-if="index < steps.length - 1"
              :class="[
                'mx-2 h-0.5 flex-1 transition-colors',
                currentStep > step.id ? 'bg-sky-500' : 'bg-slate-200'
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Form content -->
      <div class="min-h-[300px]">
        <!-- Step 1: Personal Info -->
        <div v-if="currentStep === 1" class="space-y-4">
          <!-- Individual / Company Toggle -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-700">Tipo di Cliente *</label>
            <div class="flex gap-4">
              <label
                :class="[
                  'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 p-3 transition-all',
                  formData.clientType === 'individual'
                    ? 'border-sky-500 bg-sky-50 text-sky-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                ]"
              >
                <input
                  type="radio"
                  v-model="formData.clientType"
                  value="individual"
                  class="sr-only"
                />
                <User class="h-5 w-5" />
                <span class="font-medium">Privato</span>
              </label>
              <label
                :class="[
                  'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 p-3 transition-all',
                  formData.clientType === 'company'
                    ? 'border-sky-500 bg-sky-50 text-sky-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                ]"
              >
                <input
                  type="radio"
                  v-model="formData.clientType"
                  value="company"
                  class="sr-only"
                />
                <Building2 class="h-5 w-5" />
                <span class="font-medium">Azienda</span>
              </label>
            </div>
          </div>

          <!-- Company fields (shown when company is selected) -->
          <div v-if="formData.clientType === 'company'" class="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div class="space-y-2">
              <label for="companyName" class="text-sm font-medium text-slate-700">Ragione Sociale *</label>
              <input
                id="companyName"
                v-model="formData.companyName"
                type="text"
                placeholder="HQ Motorservice S.r.l."
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.companyName ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.companyName" class="text-xs text-red-500">{{ errors.companyName }}</p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="vatNumber" class="text-sm font-medium text-slate-700">Partita IVA *</label>
                <input
                  id="vatNumber"
                  v-model="formData.vatNumber"
                  type="text"
                  placeholder="IT12345678901"
                  :class="[
                    'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                    errors.vatNumber ? 'border-red-500' : 'border-slate-300'
                  ]"
                />
                <p v-if="errors.vatNumber" class="text-xs text-red-500">{{ errors.vatNumber }}</p>
              </div>
              <div class="space-y-2">
                <label for="pec" class="text-sm font-medium text-slate-700">PEC</label>
                <input
                  id="pec"
                  v-model="formData.pec"
                  type="email"
                  placeholder="azienda@pec.it"
                  class="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
          </div>

          <!-- Personal fields -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="firstName" class="text-sm font-medium text-slate-700">
                {{ formData.clientType === 'company' ? 'Nome Referente *' : 'Nome *' }}
              </label>
              <input
                id="firstName"
                v-model="formData.firstName"
                type="text"
                placeholder="Mario"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.firstName ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.firstName" class="text-xs text-red-500">{{ errors.firstName }}</p>
            </div>
            <div class="space-y-2">
              <label for="lastName" class="text-sm font-medium text-slate-700">
                {{ formData.clientType === 'company' ? 'Cognome Referente *' : 'Cognome *' }}
              </label>
              <input
                id="lastName"
                v-model="formData.lastName"
                type="text"
                placeholder="Rossi"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.lastName ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.lastName" class="text-xs text-red-500">{{ errors.lastName }}</p>
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-slate-700">Email *</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="mario.rossi@email.com"
              :class="[
                'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                errors.email ? 'border-red-500' : 'border-slate-300'
              ]"
            />
            <p v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="phone" class="text-sm font-medium text-slate-700">Telefono *</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="+39 333 1234567"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.phone ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.phone" class="text-xs text-red-500">{{ errors.phone }}</p>
            </div>
            <div class="space-y-2">
              <label for="fiscalCode" class="text-sm font-medium text-slate-700">
                {{ formData.clientType === 'company' ? 'Codice Fiscale Referente' : 'Codice Fiscale *' }}
              </label>
              <input
                id="fiscalCode"
                v-model="formData.fiscalCode"
                type="text"
                placeholder="RSSMRA80A01H501U"
                maxlength="16"
                @input="formData.fiscalCode = formData.fiscalCode.toUpperCase()"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.fiscalCode ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.fiscalCode" class="text-xs text-red-500">{{ errors.fiscalCode }}</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Vehicle Info -->
        <div v-if="currentStep === 2" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="vehiclePlate" class="text-sm font-medium text-slate-700">Targa *</label>
              <input
                id="vehiclePlate"
                v-model="formData.vehiclePlate"
                type="text"
                placeholder="AA123BB"
                @input="formData.vehiclePlate = formData.vehiclePlate.toUpperCase()"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.vehiclePlate ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.vehiclePlate" class="text-xs text-red-500">{{ errors.vehiclePlate }}</p>
            </div>
            <div class="space-y-2">
              <label for="vehicleYear" class="text-sm font-medium text-slate-700">Anno *</label>
              <input
                id="vehicleYear"
                v-model="formData.vehicleYear"
                type="text"
                placeholder="2020"
                maxlength="4"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.vehicleYear ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.vehicleYear" class="text-xs text-red-500">{{ errors.vehicleYear }}</p>
            </div>
          </div>

          <!-- Searchable Brand Dropdown -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="vehicleBrand" class="text-sm font-medium text-slate-700">Marca *</label>
              <div class="relative">
                <input
                  id="vehicleBrand"
                  v-model="brandSearch"
                  type="text"
                  placeholder="Cerca marca..."
                  @focus="showBrandDropdown = true"
                  @blur="handleBrandBlur"
                  :class="[
                    'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                    errors.vehicleBrand ? 'border-red-500' : 'border-slate-300'
                  ]"
                />
                <ChevronDown class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <div
                  v-if="showBrandDropdown && filteredBrands.length > 0"
                  class="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg"
                >
                  <button
                    v-for="brand in filteredBrands"
                    :key="brand"
                    type="button"
                    class="w-full px-3 py-2 text-left text-sm hover:bg-sky-50 hover:text-sky-700"
                    @mousedown.prevent="selectBrand(brand)"
                  >
                    {{ brand }}
                  </button>
                </div>
              </div>
              <p v-if="errors.vehicleBrand" class="text-xs text-red-500">{{ errors.vehicleBrand }}</p>
            </div>

            <!-- Searchable Model Dropdown -->
            <div class="space-y-2">
              <label for="vehicleModel" class="text-sm font-medium text-slate-700">Modello *</label>
              <div class="relative">
                <input
                  id="vehicleModel"
                  v-model="modelSearch"
                  type="text"
                  placeholder="Cerca modello..."
                  @focus="showModelDropdown = true"
                  @blur="handleModelBlur"
                  :disabled="!formData.vehicleBrand"
                  :class="[
                    'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:bg-slate-100',
                    errors.vehicleModel ? 'border-red-500' : 'border-slate-300'
                  ]"
                />
                <ChevronDown class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <div
                  v-if="showModelDropdown && filteredModels.length > 0"
                  class="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg"
                >
                  <button
                    v-for="model in filteredModels"
                    :key="model"
                    type="button"
                    class="w-full px-3 py-2 text-left text-sm hover:bg-sky-50 hover:text-sky-700"
                    @mousedown.prevent="selectModel(model)"
                  >
                    {{ model }}
                  </button>
                </div>
              </div>
              <p v-if="errors.vehicleModel" class="text-xs text-red-500">{{ errors.vehicleModel }}</p>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="insuranceCompany" class="text-sm font-medium text-slate-700">Compagnia Assicurativa *</label>
              <div class="relative">
                <input
                  id="insuranceCompany"
                  v-model="insuranceSearch"
                  type="text"
                  placeholder="Cerca assicurazione..."
                  @focus="showInsuranceDropdown = true"
                  @blur="handleInsuranceBlur"
                  :class="[
                    'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                    errors.insuranceCompany ? 'border-red-500' : 'border-slate-300'
                  ]"
                />
                <ChevronDown class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <div
                  v-if="showInsuranceDropdown && filteredInsuranceCompanies.length > 0"
                  class="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg"
                >
                  <button
                    v-for="company in filteredInsuranceCompanies"
                    :key="company"
                    type="button"
                    class="w-full px-3 py-2 text-left text-sm hover:bg-sky-50 hover:text-sky-700"
                    @mousedown.prevent="selectInsurance(company)"
                  >
                    {{ company }}
                  </button>
                </div>
              </div>
              <p v-if="errors.insuranceCompany" class="text-xs text-red-500">{{ errors.insuranceCompany }}</p>
            </div>
            <div class="space-y-2">
              <label for="policyNumber" class="text-sm font-medium text-slate-700">Numero Polizza *</label>
              <input
                id="policyNumber"
                v-model="formData.policyNumber"
                type="text"
                placeholder="123456789"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.policyNumber ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.policyNumber" class="text-xs text-red-500">{{ errors.policyNumber }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Claim Info -->
        <div v-if="currentStep === 3" class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="claimType" class="text-sm font-medium text-slate-700">Tipo di Sinistro *</label>
              <select
                id="claimType"
                v-model="formData.claimType"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.claimType ? 'border-red-500' : 'border-slate-300'
                ]"
              >
                <option value="">Seleziona...</option>
                <option v-for="type in claimTypes" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
              <p v-if="errors.claimType" class="text-xs text-red-500">{{ errors.claimType }}</p>
            </div>
            <div class="space-y-2">
              <label for="accidentDate" class="text-sm font-medium text-slate-700">Data Sinistro *</label>
              <input
                id="accidentDate"
                v-model="formData.accidentDate"
                type="date"
                :max="maxDate"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.accidentDate ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.accidentDate" class="text-xs text-red-500">{{ errors.accidentDate }}</p>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="accidentTime" class="text-sm font-medium text-slate-700">Ora Sinistro *</label>
              <input
                id="accidentTime"
                v-model="formData.accidentTime"
                type="time"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.accidentTime ? 'border-red-500' : 'border-slate-300'
                ]"
              />
              <p v-if="errors.accidentTime" class="text-xs text-red-500">{{ errors.accidentTime }}</p>
            </div>
            <div class="space-y-2">
              <label for="thirdPartyInvolved" class="text-sm font-medium text-slate-700">Terzi Coinvolti? *</label>
              <select
                id="thirdPartyInvolved"
                v-model="formData.thirdPartyInvolved"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.thirdPartyInvolved ? 'border-red-500' : 'border-slate-300'
                ]"
              >
                <option value="">Seleziona...</option>
                <option value="yes">Sì</option>
                <option value="no">No</option>
              </select>
              <p v-if="errors.thirdPartyInvolved" class="text-xs text-red-500">{{ errors.thirdPartyInvolved }}</p>
            </div>
          </div>

          <div class="space-y-2">
            <label for="accidentLocation" class="text-sm font-medium text-slate-700">Luogo del Sinistro *</label>
            <div class="relative">
              <MapPin class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="accidentLocation"
                v-model="formData.accidentLocation"
                type="text"
                placeholder="Inserisci indirizzo (es. Via Roma 123, Milano)"
                :class="[
                  'flex h-10 w-full rounded-lg border bg-white pl-10 pr-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                  errors.accidentLocation ? 'border-red-500' : 'border-slate-300'
                ]"
              />
            </div>
            <p class="text-xs text-slate-500">Inizia a digitare per suggerimenti automatici</p>
            <p v-if="errors.accidentLocation" class="text-xs text-red-500">{{ errors.accidentLocation }}</p>
          </div>

          <div class="space-y-2">
            <label for="accidentDescription" class="text-sm font-medium text-slate-700">Descrizione del Sinistro *</label>
            <textarea
              id="accidentDescription"
              v-model="formData.accidentDescription"
              placeholder="Descrivi cosa è successo, dinamica dell'incidente, danni visibili..."
              rows="4"
              :class="[
                'flex w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500',
                errors.accidentDescription ? 'border-red-500' : 'border-slate-300'
              ]"
            ></textarea>
            <p v-if="errors.accidentDescription" class="text-xs text-red-500">{{ errors.accidentDescription }}</p>
          </div>

          <!-- Third party details if involved -->
          <div v-if="formData.thirdPartyInvolved === 'yes'" class="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h4 class="font-medium text-slate-900">Dati Controparte</h4>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="thirdPartyName" class="text-sm font-medium text-slate-700">Nome e Cognome</label>
                <input
                  id="thirdPartyName"
                  v-model="formData.thirdPartyName"
                  type="text"
                  placeholder="Nome controparte"
                  class="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div class="space-y-2">
                <label for="thirdPartyPlate" class="text-sm font-medium text-slate-700">Targa Controparte</label>
                <input
                  id="thirdPartyPlate"
                  v-model="formData.thirdPartyPlate"
                  type="text"
                  placeholder="AA123BB"
                  @input="formData.thirdPartyPlate = formData.thirdPartyPlate.toUpperCase()"
                  class="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label for="thirdPartyInsurance" class="text-sm font-medium text-slate-700">Assicurazione Controparte</label>
              <input
                id="thirdPartyInsurance"
                v-model="formData.thirdPartyInsurance"
                type="text"
                placeholder="Nome compagnia assicurativa"
                class="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>

        <!-- Step 4: Documents -->
        <div v-if="currentStep === 4" class="space-y-6">
          <div class="rounded-lg bg-amber-50 border border-amber-200 p-4 mb-4">
            <div class="flex gap-3">
              <AlertTriangle class="h-5 w-5 shrink-0 text-amber-600" />
              <div class="text-sm">
                <p class="font-medium text-amber-800">Documenti obbligatori</p>
                <p class="text-amber-700">Per procedere, carica almeno: foto del danno, documento d'identità e polizza assicurativa.</p>
              </div>
            </div>
          </div>

          <!-- Document upload categories -->
          <div class="space-y-4">
            <div
              v-for="docType in documentTypes"
              :key="docType.id"
              class="rounded-lg border border-slate-200 p-4"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <component :is="docType.icon" class="h-5 w-5 text-slate-600" />
                  <span class="font-medium text-slate-900">{{ docType.label }}</span>
                  <span v-if="docType.required" class="text-red-500">*</span>
                </div>
                <span
                  v-if="getDocumentsByType(docType.id).length > 0"
                  class="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700"
                >
                  {{ getDocumentsByType(docType.id).length }} caricato
                </span>
              </div>

              <div class="flex flex-wrap gap-2">
                <div
                  v-for="(file, index) in getDocumentsByType(docType.id)"
                  :key="index"
                  class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  <FileText class="h-4 w-4 text-slate-500" />
                  <span class="text-sm text-slate-700 max-w-[150px] truncate">{{ file.name }}</span>
                  <button
                    type="button"
                    @click="removeFile(docType.id, index)"
                    class="rounded-full p-0.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
                  >
                    <X class="h-3 w-3" />
                  </button>
                </div>
                <label
                  class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-sm text-slate-600 transition-colors hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600"
                >
                  <input
                    type="file"
                    :accept="docType.accept"
                    multiple
                    @change="(e) => handleFileUpload(e, docType.id)"
                    class="hidden"
                  />
                  <Upload class="h-4 w-4" />
                  <span>Aggiungi</span>
                </label>
              </div>
              <p v-if="errors[`doc_${docType.id}`]" class="mt-2 text-xs text-red-500">{{ errors[`doc_${docType.id}`] }}</p>
            </div>
          </div>

          <div class="rounded-lg bg-sky-50 p-4">
            <div class="flex gap-3">
              <AlertCircle class="h-5 w-5 shrink-0 text-sky-600" />
              <div class="text-sm">
                <p class="font-medium text-slate-900">Formati accettati:</p>
                <p class="text-slate-600">JPG, PNG, PDF • Max 10MB per file</p>
              </div>
            </div>
          </div>

          <!-- Privacy consent -->
          <div class="space-y-3">
            <label class="flex items-start gap-3">
              <input
                type="checkbox"
                v-model="formData.privacyConsent"
                class="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span class="text-sm text-slate-600">
                Acconsento al trattamento dei miei dati personali ai sensi del GDPR per la gestione della pratica di sinistro. *
              </span>
            </label>
            <p v-if="errors.privacyConsent" class="text-xs text-red-500">{{ errors.privacyConsent }}</p>

            <label class="flex items-start gap-3">
              <input
                type="checkbox"
                v-model="formData.marketingConsent"
                class="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span class="text-sm text-slate-600">
                Acconsento a ricevere comunicazioni commerciali e aggiornamenti sui servizi HQ Motorservice.
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
        <button
          type="button"
          @click="handlePrev"
          :disabled="currentStep === 1"
          :class="[
            'inline-flex items-center px-4 py-2 border border-slate-300 rounded-lg font-medium transition-colors bg-white text-slate-700 hover:bg-slate-50',
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
          class="inline-flex items-center px-6 py-2 rounded-lg font-semibold bg-sky-500 text-white shadow transition-colors hover:bg-sky-600"
        >
          Avanti
          <ArrowRight class="ml-2 h-4 w-4" />
        </button>
        <button
          v-else
          type="button"
          @click="handleSubmit"
          :disabled="isSubmitting"
          class="inline-flex items-center px-6 py-2 rounded-lg font-semibold bg-emerald-500 text-white shadow transition-colors hover:bg-emerald-600 disabled:opacity-60"
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
import { ref, reactive, computed } from 'vue'
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
  AlertCircle,
  AlertTriangle,
  Building2,
  ChevronDown,
  MapPin,
  CreditCard,
  Image,
  FileCheck
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

// Vehicle brands and models database
const vehicleBrands = [
  'Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Citroën', 'Dacia', 'Fiat', 'Ford',
  'Honda', 'Hyundai', 'Jeep', 'Kia', 'Land Rover', 'Lancia', 'Mazda', 'Mercedes-Benz',
  'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Seat',
  'Škoda', 'Smart', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'
]

const vehicleModels = {
  'Fiat': ['500', '500L', '500X', 'Panda', 'Tipo', 'Punto', 'Bravo', 'Doblò', 'Ducato'],
  'Alfa Romeo': ['Giulia', 'Stelvio', 'Giulietta', 'Tonale', 'MiTo'],
  'Audi': ['A1', 'A3', 'A4', 'A5', 'A6', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
  'BMW': ['Serie 1', 'Serie 2', 'Serie 3', 'Serie 4', 'Serie 5', 'X1', 'X2', 'X3', 'X5', 'X6'],
  'Citroën': ['C1', 'C3', 'C4', 'C5', 'Berlingo', 'Jumper'],
  'Dacia': ['Sandero', 'Duster', 'Logan', 'Spring', 'Jogger'],
  'Ford': ['Fiesta', 'Focus', 'Puma', 'Kuga', 'Mustang', 'Transit'],
  'Honda': ['Civic', 'CR-V', 'HR-V', 'Jazz', 'ZR-V'],
  'Hyundai': ['i10', 'i20', 'i30', 'Tucson', 'Kona', 'Santa Fe'],
  'Jeep': ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Sportage', 'Sorento', 'Niro', 'EV6'],
  'Mercedes-Benz': ['Classe A', 'Classe B', 'Classe C', 'Classe E', 'GLA', 'GLC', 'GLE'],
  'Nissan': ['Micra', 'Juke', 'Qashqai', 'X-Trail', 'Leaf', 'Ariya'],
  'Opel': ['Corsa', 'Astra', 'Mokka', 'Crossland', 'Grandland'],
  'Peugeot': ['208', '308', '508', '2008', '3008', '5008'],
  'Renault': ['Clio', 'Captur', 'Megane', 'Arkana', 'Kadjar', 'Scenic', 'Zoe'],
  'Seat': ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco'],
  'Škoda': ['Fabia', 'Scala', 'Octavia', 'Karoq', 'Kodiaq', 'Enyaq'],
  'Smart': ['fortwo', 'forfour', '#1'],
  'Tesla': ['Model 3', 'Model Y', 'Model S', 'Model X'],
  'Toyota': ['Yaris', 'Corolla', 'C-HR', 'RAV4', 'Aygo', 'Land Cruiser'],
  'Volkswagen': ['Polo', 'Golf', 'T-Cross', 'T-Roc', 'Tiguan', 'Passat', 'ID.3', 'ID.4'],
  'Volvo': ['XC40', 'XC60', 'XC90', 'V40', 'V60', 'S60']
}

const insuranceCompanies = [
  'Allianz', 'Generali', 'UnipolSai', 'AXA', 'Zurich', 'Cattolica',
  'Reale Mutua', 'Prima Assicurazioni', 'Verti', 'Direct Line', 'Quixa',
  'Linear', 'Genialloyd', 'Sara Assicurazioni', 'Vittoria Assicurazioni',
  'Groupama', 'Italiana Assicurazioni', 'HDI', 'Tua Assicurazioni', 'Altro'
]

const claimTypes = [
  { value: 'collision', label: 'Incidente stradale' },
  { value: 'theft', label: 'Furto' },
  { value: 'vandalism', label: 'Atti vandalici' },
  { value: 'natural', label: 'Eventi atmosferici' },
  { value: 'fire', label: 'Incendio' },
  { value: 'glass', label: 'Cristalli' },
  { value: 'parking', label: 'Danno da parcheggio' },
  { value: 'animal', label: 'Urto con animale' },
  { value: 'other', label: 'Altro' }
]

const documentTypes = [
  { id: 'damage_photos', label: 'Foto del Danno', icon: Image, required: true, accept: 'image/*' },
  { id: 'id_document', label: 'Documento d\'Identità', icon: CreditCard, required: true, accept: 'image/*,.pdf' },
  { id: 'insurance_policy', label: 'Polizza Assicurativa', icon: FileCheck, required: true, accept: 'image/*,.pdf' },
  { id: 'cai_form', label: 'Modulo CAI/CID', icon: FileText, required: false, accept: 'image/*,.pdf' },
  { id: 'other_docs', label: 'Altri Documenti', icon: FileText, required: false, accept: 'image/*,.pdf' }
]

const initialFormData = {
  clientType: 'individual',
  companyName: '',
  vatNumber: '',
  pec: '',
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
  accidentTime: '',
  accidentLocation: '',
  accidentDescription: '',
  thirdPartyInvolved: '',
  thirdPartyName: '',
  thirdPartyPlate: '',
  thirdPartyInsurance: '',
  documents: {
    damage_photos: [],
    id_document: [],
    insurance_policy: [],
    cai_form: [],
    other_docs: []
  },
  privacyConsent: false,
  marketingConsent: false
}

const currentStep = ref(1)
const formData = reactive({ ...initialFormData })
const errors = ref({})
const isSubmitting = ref(false)

// Searchable dropdown states
const brandSearch = ref('')
const modelSearch = ref('')
const insuranceSearch = ref('')
const showBrandDropdown = ref(false)
const showModelDropdown = ref(false)
const showInsuranceDropdown = ref(false)

// Computed max date (today)
const maxDate = computed(() => {
  return new Date().toISOString().split('T')[0]
})

// Filtered lists for searchable dropdowns
const filteredBrands = computed(() => {
  const search = brandSearch.value.toLowerCase()
  return vehicleBrands.filter(b => b.toLowerCase().includes(search))
})

const filteredModels = computed(() => {
  if (!formData.vehicleBrand) return []
  const models = vehicleModels[formData.vehicleBrand] || []
  const search = modelSearch.value.toLowerCase()
  return models.filter(m => m.toLowerCase().includes(search))
})

const filteredInsuranceCompanies = computed(() => {
  const search = insuranceSearch.value.toLowerCase()
  return insuranceCompanies.filter(c => c.toLowerCase().includes(search))
})

// Dropdown handlers
function selectBrand(brand) {
  formData.vehicleBrand = brand
  brandSearch.value = brand
  formData.vehicleModel = ''
  modelSearch.value = ''
  showBrandDropdown.value = false
}

function selectModel(model) {
  formData.vehicleModel = model
  modelSearch.value = model
  showModelDropdown.value = false
}

function selectInsurance(company) {
  formData.insuranceCompany = company
  insuranceSearch.value = company
  showInsuranceDropdown.value = false
}

function handleBrandBlur() {
  setTimeout(() => {
    showBrandDropdown.value = false
    if (!formData.vehicleBrand) brandSearch.value = ''
  }, 200)
}

function handleModelBlur() {
  setTimeout(() => {
    showModelDropdown.value = false
    if (!formData.vehicleModel) modelSearch.value = ''
  }, 200)
}

function handleInsuranceBlur() {
  setTimeout(() => {
    showInsuranceDropdown.value = false
    if (!formData.insuranceCompany) insuranceSearch.value = ''
  }, 200)
}

// Document handling
function getDocumentsByType(typeId) {
  return formData.documents[typeId] || []
}

function handleFileUpload(e, typeId) {
  const files = Array.from(e.target.files || [])
  formData.documents[typeId].push(...files)
  e.target.value = ''
}

function removeFile(typeId, index) {
  formData.documents[typeId].splice(index, 1)
}

function validateStep(step) {
  const newErrors = {}

  if (step === 1) {
    if (formData.clientType === 'company') {
      if (!formData.companyName.trim()) newErrors.companyName = 'Ragione sociale richiesta'
      if (!formData.vatNumber.trim()) newErrors.vatNumber = 'Partita IVA richiesta'
    }
    if (!formData.firstName.trim()) newErrors.firstName = 'Nome richiesto'
    if (!formData.lastName.trim()) newErrors.lastName = 'Cognome richiesto'
    if (!formData.email.trim()) newErrors.email = 'Email richiesta'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email non valida'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefono richiesto'
    if (formData.clientType === 'individual' && !formData.fiscalCode.trim()) {
      newErrors.fiscalCode = 'Codice fiscale richiesto'
    }
  }

  if (step === 2) {
    if (!formData.vehiclePlate.trim()) newErrors.vehiclePlate = 'Targa richiesta'
    if (!formData.vehicleBrand) newErrors.vehicleBrand = 'Marca richiesta'
    if (!formData.vehicleModel) newErrors.vehicleModel = 'Modello richiesto'
    if (!formData.vehicleYear.trim()) newErrors.vehicleYear = 'Anno richiesto'
    if (!formData.insuranceCompany) newErrors.insuranceCompany = 'Assicurazione richiesta'
    if (!formData.policyNumber.trim()) newErrors.policyNumber = 'Numero polizza richiesto'
  }

  if (step === 3) {
    if (!formData.claimType) newErrors.claimType = 'Tipo sinistro richiesto'
    if (!formData.accidentDate) newErrors.accidentDate = 'Data richiesta'
    if (!formData.accidentTime) newErrors.accidentTime = 'Ora richiesta'
    if (!formData.accidentLocation.trim()) newErrors.accidentLocation = 'Luogo richiesto'
    if (!formData.thirdPartyInvolved) newErrors.thirdPartyInvolved = 'Seleziona un\'opzione'
    if (!formData.accidentDescription.trim()) {
      newErrors.accidentDescription = 'Descrizione richiesta'
    }
  }

  if (step === 4) {
    // Check required documents
    documentTypes.forEach(docType => {
      if (docType.required && formData.documents[docType.id].length === 0) {
        newErrors[`doc_${docType.id}`] = `${docType.label} richiesto`
      }
    })
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Consenso privacy richiesto'
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

function generateClaimCode() {
  const prefix = 'HQ'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

function handleSubmit() {
  if (!validateStep(currentStep.value)) return

  isSubmitting.value = true
  
  // Generate claim code
  const claimCode = generateClaimCode()
  
  // TODO: Integrate with Zoho CRM and WhatsApp notification
  // TODO: Send confirmation email/WhatsApp to customer
  
  setTimeout(() => {
    isSubmitting.value = false
    props.onComplete && props.onComplete({ claimCode, formData: { ...formData } })
  }, 1500)
}
</script>

<style scoped></style>
