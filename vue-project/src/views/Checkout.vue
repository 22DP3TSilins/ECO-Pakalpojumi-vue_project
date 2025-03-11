<template>
  <section class="checkout">
    <h1>Checkout</h1>

    <!-- Order Summary -->
    <div class="order-summary" v-if="cart.length > 0">
      <h2>🛒 Order Summary</h2>
      <div v-for="(item, index) in cart" :key="index" class="order-item">
        <img :src="item.image" :alt="item.name" class="order-image" />
        <div class="order-details">
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p class="price">{{ formatPrice(item.price * item.quantity) }}</p>
        </div>
      </div>
      <h2>Total: {{ formatPrice(totalPrice) }}</h2>
    </div>

    <!-- Checkout Form -->
    <form @submit.prevent="processPayment">
      <label for="name">Full Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="address">Shipping Address:</label>
      <textarea id="address" v-model="address" required></textarea>

      <label for="payment">Payment Method:</label>
      <select id="payment" v-model="paymentMethod" required>
        <option value="stripe">💳 Credit Card (Stripe)</option>
        <option value="paypal">🅿️ PayPal</option>
      </select>

      <button type="submit" class="checkout-button">Proceed to Payment</button>
    </form>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { loadStripe } from '@stripe/stripe-js';

export default {
  props: ['cart'],
  setup(props) {
    const router = useRouter();
    const name = ref('');
    const email = ref('');
    const address = ref('');
    const paymentMethod = ref('stripe');

    const totalPrice = computed(() => {
      return props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

    const processPayment = async () => {
      if (!name.value || !email.value || !address.value) {
        alert("Please fill in all fields.");
        return;
      }

      if (paymentMethod.value === 'stripe') {
        await processStripePayment();
      } else {
        alert("PayPal integration coming soon!");
      }
    };

    const processStripePayment = async () => {
      const stripe = await loadStripe("pk_test_51R1QqOPwDi1ty0iBo5TDLKKYQgTViMs2eBFaQz5MXisUL4ZPNqQ55E5G7SJ4IDyZ1k2KKjIhBwvNZfukk4SI31ZA00W1hil1jT"); // Replace with your Stripe Publishable Key

      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: props.cart, total: totalPrice.value, email: email.value })
      });

      const session = await response.json();

      if (session.id) {
        stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        alert("Payment failed, please try again.");
      }
    };

    return { name, email, address, paymentMethod, processPayment, totalPrice, formatPrice };
  }
};
</script>

<style scoped>
.checkout {
  text-align: center;
  padding: 2rem;
}

/* Checkout Form */
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

label {
  margin-top: 1rem;
  font-weight: bold;
}

input,
textarea,
select {
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

.checkout-button {
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
}

.checkout-button:hover {
  background-color: #ff8c00;
}
</style>
