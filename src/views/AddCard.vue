<template>
  <div
    class="flex flex-col md:flex-row w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <!-- Main Add Card Form -->
    <div class="flex-1 max-w-2xl mx-auto p-6">
      <div class="flex items-center mb-6">
        <button
          @click="$router.back()"
          class="mr-2 text-gray-500 dark:text-gray-300 hover:text-[#e82264]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">ADD CARD</h2>
        <span class="ml-auto text-[#e82264] font-semibold cursor-pointer">VERIFY</span>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-colors duration-300">
        <h3 class="text-sm font-bold text-gray-400 dark:text-gray-300 mb-2">BILLING DETAILS</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">
          We are fully compliant with Payment Card Industry Data Security Standards.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >Country</label
            >
            <CountrySelect
              :countries="countries"
              v-model="selectedCountry"
              @select="onCountrySelect"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >State / Province</label
            >
            <CustomSelect
              :items="states"
              v-model="selectedState"
              placeholder="Select State"
              @select="onStateSelect"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
            >Address</label
          >
          <input
            type="text"
            class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >City</label
            >
            <CustomSelect
              :items="cities"
              v-model="selectedCity"
              placeholder="Select City"
              @select="onCitySelect"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >ZIP / Postal Code</label
            >
            <input
              type="text"
              class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
        </div>
        <!-- <h3 class="text-sm font-bold text-gray-400 dark:text-gray-300 mb-2 mt-6">CARD DETAILS</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >E-mail</label
            >
            <input
              type="email"
              class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
              placeholder="nickacad26@gmail.com"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >Name on the card</label
            >
            <input
              type="text"
              class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
        </div>
        <div class="mb-2 relative">
          <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
            >Card Number</label
          >
          <input
            type="text"
            class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 pr-10"
          />
          <button class="absolute right-2 top-7 text-gray-400 hover:text-[#e82264]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <a href="#" class="block text-xs text-[#2196f3] dark:text-[#90caf9] mt-1 ml-1"
            >My card number is longer</a
          >
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >Expiration</label
            >
            <input
              type="text"
              v-model="expiration"
              ref="expirationInput"
              maxlength="5"
              class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
              placeholder="MM/YY"
              @input="onExpirationInput"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1"
              >CVV</label
            >
            <input
              type="text"
              ref="cvvInput"
              v-model="cvv"
              maxlength="4"
              class="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
              @input="onCVVInput"
            />
          </div>
        </div> -->
        <!-- Age Confirmation, Submit, Card Icons, Legal -->
        <div class="flex flex-col items-center mt-6 mb-2">
          <div class="flex items-center w-full mb-4">
            <input
              type="checkbox"
              id="ageConfirm"
              v-model="ageConfirmed"
              class="accent-[#03a9f4] h-5 w-5 mr-2"
            />
            <label for="ageConfirm" class="text-base text-gray-700 dark:text-gray-200 text-left"
              >Tick here to confirm that you are at least 18 years old and the age of majority in
              your place of residence</label
            >
          </div>
          <button
            @click="handleSubmit"
            class="bg-[#e82264] text-white font-bold py-2 px-8 rounded-full text-lg transition duration-200 hover:bg-[#ea3f78] mb-4 self-end"
            :disabled="!ageConfirmed || isSubmitting"
          >
            <span v-if="isSubmitting" class="loader mr-2 align-middle"></span>
            <span v-else>SUBMIT</span>
          </button>
          <div class="flex justify-center items-center space-x-2 mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              class="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              class="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
              alt="Maestro"
              class="h-6"
            />
            <!-- <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Diners_Club_logo.svg"
              alt="Diners Club"
              class="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Discover_Card_logo.svg"
              alt="Discover"
              class="h-6"
            /> -->
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg"
              alt="JCB"
              class="h-6"
            />
          </div>
          <div class="text-xs text-gray-400 dark:text-gray-300 text-center leading-tight">
            Fenix International Limited, 9th Floor, 107 Cheapside, London, EC2V 6DN<br />
            Fenix Internet LLC, 1000 N.West Street, Suite 1200, Wilmington, Delaware, 19801 USA
          </div>
        </div>
        <!-- <button
          class="w-full bg-[#e82264] text-white font-bold py-3 rounded-xl transition duration-300 hover:bg-[#e82264]/80 focus:outline-none focus:ring-4 focus:ring-[#e82264]/50 shadow-md text-lg tracking-wide mb-2"
        >
          ADD CARD
        </button> -->
      </div>
    </div>
    <!-- Wallet Sidebar -->
    <div
      class="w-full md:w-96 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6 flex flex-col min-h-screen transition-colors duration-300"
    >
      <div class="mb-6">
        <div class="text-3xl font-bold text-gray-800 dark:text-gray-200">${{ walletCredits }}</div>
        <div class="text-xs text-gray-500 dark:text-gray-300">Wallet credits</div>
      </div>
      <div class="mb-6">
        <div class="text-xs font-bold text-gray-400 dark:text-gray-300 mb-2">
          ADD FUNDS TO YOUR WALLET
        </div>
        <button
          class="w-full bg-[#e82264] text-white font-bold py-3 rounded-full transition duration-300 hover:bg-[#ea3f78] mb-2"
        >
          ADD A PAYMENT CARD
        </button>
        <div class="flex items-center mt-2">
          <span class="text-xs text-gray-500 dark:text-gray-300 mr-2"
            >Make wallet primary method for rebills</span
          >
          <label class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" />
            <div
              class="w-9 h-5 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#e82264] peer-checked:bg-[#e82264] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"
            ></div>
          </label>
        </div>
      </div>
      <div>
        <div class="text-xs font-bold text-gray-400 dark:text-gray-300 mb-2">
          LATEST TRANSACTIONS
        </div>
        <div
          class="flex flex-col items-center justify-center h-32 text-gray-400 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
            />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>No Payments done yet.</span>
        </div>
      </div>
      <div class="flex-1"></div>
      <button
        class="fixed bottom-6 right-6 bg-[#e82264] text-white rounded-full p-3 shadow-lg md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h8m-4-4v8"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { post, get } from '@/api-services/fetch'
import { loadStripe } from '@stripe/stripe-js'
import CountrySelect from '@/components/CountrySelect.vue'
import CustomSelect from '@/components/CustomSelect.vue'

const expiration = ref('')
const expirationInput = ref(null)
const cvvInput = ref(null)
const cvv = ref('')
const ageConfirmed = ref(false)
const isSubmitting = ref(false)

const walletCredits = ref(0)
const user = ref(null)

const countries = ref([])
const states = ref([])
const cities = ref([])
const selectedCountry = ref('')
const selectedState = ref('')
const selectedCity = ref('')

async function fetchCountries() {
  const res = await get({ endpoint: '/locations/countries' })
  console.log('Countries fetch response:', res)
  countries.value = res?.data.data || []
}

async function fetchStates(countryId) {
  const res = await get({ endpoint: `/locations/countries/${countryId}/states` })
  states.value = res?.data?.data || []
}

async function fetchCities(stateId) {
  const res = await get({ endpoint: `/locations/states/${stateId}/cities` })
  cities.value = res?.data?.data || []
}

onMounted(() => {
  fetchCountries()
  fetchCities(1)
  // Example: fetch wallet credits from API or set a default value
  // walletCredits.value = 500 // Replace with API call if needed
  walletCredits.value =('User data:', JSON.parse(localStorage.getItem('user')).user.relationships.wallet.balance)
  // Get user from localStorage
  try {
    const userData = localStorage.getItem('user')
    // console.log('Retrieved user data from localStorage:', userData) 
    if (userData) {
    const  user = JSON.parse(userData)
      console.log('User data:', user.relationships.wallet.balance)
    }
  } catch (e) {
    user.value = null
  }
})

function onCountrySelect(country) {
  console.log('Country selected:', country)
  selectedCountry.value = country.id
  fetchStates(country.id)
  states.value = []
  cities.value = []
  selectedState.value = ''
  selectedCity.value = ''
}

function onStateSelect(state) {
  console.log('State selected:', state)
  selectedState.value = state.id
  fetchCities(state.id)
  cities.value = []
  selectedCity.value = ''
}

function onCitySelect(city) {
  console.log('City selected:', city)
  selectedCity.value = city.id
}

async function handleSubmit() {
  isSubmitting.value = true
  try {
    const selectedCountryObj = countries.value.find((c) => c.id === selectedCountry.value)
    const selectedCityObj = cities.value.find((c) => c.id === selectedCity.value)

    const location = `${selectedCityObj?.name || ''} ${selectedCountryObj?.name || ''}`.trim()

    const payload = {
      amount: '500',
      location: location,
      gateway: 'stripe'
    }

    const response = await post({ endpoint: '/transactions/create', body: payload, auth: true })
    console.log('Transaction response:', response)

    if (response?.data?.success) {
      // Stripe integration
      const clientSecret = response.data.data?.client_secret
      if (clientSecret) {
        // Load Stripe.js
        const stripe = await loadStripe(
          'pk_test_51SV6exClq5k0SGPuvpif6OkR2qx6gpP7u8XV09PLs477RjEVOPvLqkeAlIsCn1ovPk6EaRAA4LwLZnIahC3yicW900sRs9aMkr'
        ) // Replace with your Stripe public key
        if (!stripe) {
          alert('Stripe.js failed to load.')
          return
        }
        // Confirm card payment
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            // You should use Stripe Elements for card input, here is a placeholder
            card: { token: 'tok_visa' }, // Replace with Stripe Elements reference
            billing_details: { name: 'Cardholder Name' }
          }
        })
        if (result.error) {
          alert(result.error.message || 'Stripe payment failed')
        } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
          alert('Payment successful!')
        } else {
          alert('Payment not completed.')
        }
      } else {
        alert('No client secret returned for Stripe payment.')
      }
    } else {
      // Handle error
      alert(response?.data?.message || 'Transaction failed')
    }
  } catch (error) {
    console.error('Transaction error:', error)
    alert('An error occurred while processing your transaction')
  } finally {
    isSubmitting.value = false
  }
}

function onExpirationInput(e) {
  let value = e.target.value.replace(/[^\d]/g, '')
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4)
  }
  if (value.length > 5) {
    value = value.slice(0, 5)
  }
  expiration.value = value
  // Auto-focus CVV when MM/YY is complete
  if (value.length === 5) {
    nextTick(() => {
      cvvInput.value && cvvInput.value.focus()
    })
  }
}

function onCVVInput(e) {
  cvv.value = e.target.value.replace(/[^\d]/g, '').slice(0, 4)
}
</script>

<style scoped>
/* Custom styles for toggle switch */
input[type='checkbox'].peer:checked + div {
  background-color: #e82264;
}

.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #e82264;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;
  display: inline-block;
  vertical-align: middle;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
