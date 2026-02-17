import axios from 'axios';

export const stripeService = {
    async createCheckoutSession(priceId) {
        // Send priceId to your backend to get a Stripe Session ID
        const response = await axios.post('no_endpoint_yet', {
            priceId: priceId
        });

        // Redirect user to Stripe Checkout
        window.location.href = response.data.url;
    }
};