<template>
    <section class="order-history">
      <h1>Order History 📦</h1>
  
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
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const orders = ref([]);
  
      onMounted(() => {
        const savedOrders = localStorage.getItem('orderHistory');
        if (savedOrders) {
          orders.value = JSON.parse(savedOrders);
        }
      });
  
      const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;
  
      return { orders, formatPrice };
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
  </style>
  