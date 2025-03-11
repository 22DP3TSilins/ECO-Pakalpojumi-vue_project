<template>
  <section class="order-confirmation">
    <h1>Order Confirmed! 🎉</h1>

    <p>Thank you for your purchase, <strong>{{ orderDetails.name }}</strong>!</p>
    <p>Your order has been successfully placed and a confirmation email has been sent to <strong>{{ orderDetails.email }}</strong>.</p>

    <div class="order-summary" v-if="orderDetails.items.length > 0">
      <h2>Order Summary</h2>
      <div v-for="(item, index) in orderDetails.items" :key="index" class="order-item">
        <img :src="item.image" :alt="item.name" class="order-image" />
        <div class="order-details">
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p class="price">{{ formatPrice(item.price * item.quantity) }}</p>
        </div>
      </div>
      <h2>Total Paid: {{ formatPrice(orderDetails.total) }}</h2>
    </div>

    <router-link to="/" class="home-button">Back to Home</router-link>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const orderDetails = ref({
      name: '',
      email: '',
      address: '',
      total: 0,
      items: []
    });

    onMounted(() => {
      const savedOrder = localStorage.getItem('orderDetails');
      if (savedOrder) {
        orderDetails.value = JSON.parse(savedOrder);
      }
    });

    const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

    return { orderDetails, formatPrice };
  }
};
</script>

<style scoped>
.order-confirmation {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #4caf50;
}

.order-summary {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.order-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.order-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}

.price {
  font-weight: bold;
}

.home-button {
  display: inline-block;
  margin-top: 2rem;
  background-color: #2c7a2c;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
}
</style>
