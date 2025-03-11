<template>
  <section class="order-history">
    <h1>📦 Order History</h1>

    <div v-if="orders.length === 0">
      <p>No previous orders found.</p>
    </div>

    <div v-else>
      <div v-for="(order, index) in orders" :key="index" class="order-item">
        <h2>Order #{{ index + 1 }}</h2>
        <p><strong>Name:</strong> {{ order.name }}</p>
        <p><strong>Email:</strong> {{ order.email }}</p>
        <p><strong>Address:</strong> {{ order.address }}</p>
        <p><strong>Payment Method:</strong> {{ order.paymentMethod }}</p>
        <h3>Total: {{ formatPrice(order.total) }}</h3>

        <h3>Items:</h3>
        <ul>
          <li v-for="(item, i) in order.items" :key="i">
            {{ item.name }} - {{ item.quantity }}x (${{ item.price }})
          </li>
        </ul>

        <!-- Repeat Order Button -->
        <button @click="repeatOrder(order.items)" class="repeat-button">🔄 Repeat Order</button>
      </div>
    </div>

    <router-link to="/" class="home-button">🏠 Back to Home</router-link>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const orders = ref([]);
    const router = useRouter();

    onMounted(() => {
      const savedOrders = localStorage.getItem('orderHistory');
      if (savedOrders) {
        orders.value = JSON.parse(savedOrders);
      }
    });

    const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

    const repeatOrder = (items) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      items.forEach((item) => {
        const existingProduct = cart.find((cartItem) => cartItem.name === item.name);
        if (existingProduct) {
          existingProduct.quantity += item.quantity;
        } else {
          cart.push({ ...item });
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirect user to cart page
      router.push("/cart");
    };

    return { orders, formatPrice, repeatOrder };
  }
};
</script>

<style scoped>
.order-history {
  text-align: center;
  padding: 2rem;
}

.order-item {
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

h2 {
  color: #4caf50;
}

.repeat-button {
  background-color: #ff9800;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.repeat-button:hover {
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
