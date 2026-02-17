<template>
    <div class="text-center p-10">
        <div v-if="verifying" class="loader">Verifying your payment...</div>
        <div v-else class="success-message">
            <h2>🚗 Welcome to HQ Motorservice!</h2>
            <p>Your subscription is now active. Check your email for the receipt.</p>
            <router-link to="/dashboard" class="btn">Go to Dashboard</router-link>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useSubscriptionStore } from '@/stores/subscription';
    
    const store = useSubscriptionStore();
    const verifying = ref(true);
    
    onMounted(async () => {
        await store.fetchSubscriptionStatus();
        verifying.value = false;
    });
</script>