<template>
    <section class="tracking">
      <h1>📦 Track Your Order</h1>
  
      <div v-if="trackingNumber">
        <h2>🚚 Tracking Number: <strong>{{ trackingNumber }}</strong></h2>
        <p class="status">Current Status: <strong>{{ orderStatus }}</strong></p>
  
        <div class="progress-bar">
          <div :class="statusClass" class="progress"></div>
        </div>
  
        <p class="estimated">Estimated Delivery: <strong>{{ estimatedDelivery }}</strong></p>
      </div>
  
      <div v-else>
        <p>No tracking number found. Please place an order first.</p>
      </div>
  
      <router-link to="/" class="home-button">🏠 Back to Home</router-link>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const trackingNumber = ref(localStorage.getItem("trackingNumber") || "");
      const estimatedDelivery = ref(localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")).delivery : "Unknown");
      const orderStatus = ref("Processing");
      const statuses = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
      
      onMounted(() => {
        let statusIndex = 0;
        const updateStatus = () => {
          if (statusIndex < statuses.length - 1) {
            statusIndex++;
            orderStatus.value = statuses[statusIndex];
          }
        };
        setInterval(updateStatus, 5000);
      });
  
      return { trackingNumber, estimatedDelivery, orderStatus };
    }
  };
  </script>
  
  <style scoped>
  .tracking {
    text-align: center;
    padding: 2rem;
  }
  
  h1 {
    color: #4caf50;
  }
  
  h2 {
    margin-top: 1rem;
  }
  
  .status {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #ff9800;
  }
  
  .estimated {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #2c7a2c;
  }
  
  .progress-bar {
    margin: 1.5rem auto;
    width: 80%;
    height: 20px;
    background: #ddd;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    width: 20%;
    background: #ff9800;
    transition: width 1s ease-in-out;
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
  