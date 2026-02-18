// src/stores/subscription.js

import { defineStore } from 'pinia';

export const useSubscriptionStore = defineStore('subscription', {
    state: () => ({
        plan: 'monthly', // 'monthly' or 'annual'
        status: 'inactive', // 'active', 'past_due', 'inactive'
        loading: false,
        error: null,
    }),

    actions: {
        setPlan(newPlan) {
            this.plan = newPlan;
        },
        
        async fetchSubscriptionStatus() {
            this.loading = true;
            try {
                const response = await fetch('/api/v1/subscriptions/subscribe');
                const data = await response.json();
                this.status = data.status;
            } catch (err) {
                this.error = "Failed to load subscription";
            } finally {
                this.loading = false;
            }
        }
    }
});

