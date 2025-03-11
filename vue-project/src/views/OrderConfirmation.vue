<template>
  <section class="order-confirmation">
    <transition name="fade">
      <div class="confirmation-card" v-if="orderDetails">
        <h1>🎉 Thank you, {{ orderDetails.name }}!</h1>
        <p>Your order has been placed successfully.</p>
        <p>📦 Estimated Delivery: <strong>{{ orderDetails.delivery }}</strong></p>
        <p>A confirmation email has been sent to <strong>{{ orderDetails.email }}</strong>.</p>

        <!-- Tracking Information -->
        <div class="tracking-info">
          <h2>🚚 Tracking Number: <span>{{ trackingNumber }}</span></h2>
          <router-link to="/track-order" class="track-button">🔍 Track Your Order</router-link>
        </div>

        <router-link to="/" class="home-button">🏠 Back to Home</router-link>
      </div>
    </transition>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const orderDetails = ref(null);
    const trackingNumber = ref("");

    onMounted(() => {
      const savedOrder = localStorage.getItem('orderDetails');
      if (savedOrder) {
        orderDetails.value = JSON.parse(savedOrder);
        trackingNumber.value = generateTrackingNumber();
        localStorage.setItem("trackingNumber", trackingNumber.value);
      }
    });

    const generateTrackingNumber = () => {
      return `ECO-${Math.floor(10000000 + Math.random() * 90000000)}`;
    };

    return { orderDetails, trackingNumber };
  }
};
</script>

<style scoped>
.order-confirmation {
  text-align: center;
  padding: 2rem;
}

.confirmation-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #2c7a2c;
}

p {
  font-size: 1.1rem;
  margin: 1rem 0;
}

.tracking-info {
  margin-top: 1.5rem;
  background: #e8f5e9;
  padding: 1rem;
  border-radius: 10px;
}

.track-button {
  display: inline-block;
  background-color: #ff9800;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
}

.track-button:hover {
  background-color: #e68900;
}

.home-button {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #2c7a2c;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
}
</style>
