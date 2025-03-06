<template>
    <section class="checkout">
      <h1>Checkout</h1>
  
      <!-- Order Summary -->
      <div class="order-summary" v-if="cart.length > 0">
        <h2>Order Summary</h2>
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
      <form @submit.prevent="submitOrder">
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="address">Shipping Address:</label>
        <textarea id="address" v-model="address" required></textarea>
  
        <label for="payment">Payment Method:</label>
        <select id="payment" v-model="paymentMethod" required>
          <option value="" disabled>Select a payment method</option>
          <option value="credit_card">💳 Credit Card</option>
          <option value="paypal">🅿️ PayPal</option>
          <option value="cash_on_delivery">💵 Cash on Delivery</option>
        </select>
  
        <button type="submit" class="checkout-button">Place Order</button>
      </form>
    </section>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    props: ['cart'],
    setup(props) {
      const router = useRouter();
      const name = ref('');
      const email = ref('');
      const address = ref('');
      const paymentMethod = ref('');
  
      const totalPrice = computed(() => {
        return props.cart.reduce(
          (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
          0
        );
      });
  
      const formatPrice = (price) => {
        return `$${parseFloat(price).toFixed(2)}`;
      };
  
      const submitOrder = () => {
  if (name.value && email.value && address.value && paymentMethod.value) {
    // Save order details
    localStorage.setItem('orderDetails', JSON.stringify({
      name: name.value,
      email: email.value,
      address: address.value
    }));

    // 🧹 Clear the cart after order submission
    localStorage.removeItem('cart');

    // Redirect to order confirmation
    router.push('/order-confirmation');
  }
};

  
      return { name, email, address, paymentMethod, submitOrder, totalPrice, formatPrice };
    }
  };
  </script>  
  
  <style scoped>
  .checkout {
    text-align: center;
    padding: 2rem;
  }
  
  /* Order Summary */
  .order-summary {
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
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
  
  .order-details {
    flex-grow: 1;
    text-align: left;
  }
  
  .price {
    font-weight: bold;
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
  
  textarea {
    height: 100px;
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
  