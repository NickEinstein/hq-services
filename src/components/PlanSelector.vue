<template>
    <div class="plan-container">
        <div class="flex items-center justify-center gap-4 mb-8">
            <span>Monthly</span>
            <input type="checkbox" v-model="isAnnual" @change="togglePlan" class="toggle-checkbox" />
            <span>Annual (Save 20%)</span>
        </div>

        <div class="card p-6 border rounded-lg shadow-md">
            <h3 class="text-xl font-bold">{{ currentPlanName }}</h3>
            <p class="text-3xl font-bold">${{ currentPrice }}/mo</p>
            
            <button 
                @click="handleCheckout" 
                :disabled="loading"
                class="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
            >
                {{ loading ? 'Processing...' : 'Subscribe Now' }}
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useSubscriptionStore } from '@/stores/subscription';
    import { stripeService } from '@/services/stripe';
    
    const store = useSubscriptionStore();
    const isAnnual = ref(false);
    const loading = ref(false);
    
    const currentPrice = computed(() => isAnnual.value ? 99 : 12);
    const currentPlanName = computed(() => isAnnual.value ? 'Annual Pro' : 'Monthly Starter');
    
    const handleCheckout = async () => {
        loading.value = true;
        const priceId = isAnnual.value ? 'price_annual_id' : 'price_monthly_id'; // no specific id yet
        await stripeService.createCheckoutSession(priceId);
    };
</script>