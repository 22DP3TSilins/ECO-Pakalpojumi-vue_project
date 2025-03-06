<template>
    <section class="confirmation">
      <h1>🎉 Order Confirmed!</h1>
      <p>Thank you, <strong>{{ name }}</strong>! Your order has been placed successfully.</p>
      <p>A confirmation email has been sent to <strong>{{ email }}</strong>.</p>
      <p>Your order will be shipped to:</p>
      <p class="address">{{ address }}</p>
  
      <div v-if="emailSent" class="email-message">
        ✅ Email sent successfully! (Simulated)
      </div>
  
      <router-link to="/" class="home-button">🏠 Back to Home</router-link>
    </section>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const name = ref('');
      const email = ref('');
      const address = ref('');
      const emailSent = ref(false);
  
      // Load order details from local storage
      onMounted(() => {
        const orderData = JSON.parse(localStorage.getItem('orderDetails'));
        if (orderData) {
          name.value = orderData.name;
          email.value = orderData.email;
          address.value = orderData.address;
          localStorage.removeItem('orderDetails'); // Clear after use
  
          // Simulate sending an email (console log & success message)
          setTimeout(() => {
            console.log(`📧 Simulated email sent to ${email.value} with order details.`);
            emailSent.value = true;
          }, 2000);
        } else {
          router.push('/'); // Redirect if no order data
        }
      });
  
      return { name, email, address, emailSent };
    }
  };
  </script>
  
  <style scoped>
  .confirmation {
    text-align: center;
    padding: 2rem;
  }
  
  h1 {
    color: #4caf50;
  }
  
  .address {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  
  .email-message {
    background-color: #dff0d8;
    color: #3c763d;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
  }
  
  .home-button {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }
  
  .home-button:hover {
    background-color: #388e3c;
  }
  </style>
  