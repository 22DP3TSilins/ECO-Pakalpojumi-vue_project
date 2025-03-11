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
    <form @submit.prevent="submitOrder">
      <label for="name">Full Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="address">Shipping Address:</label>
      <textarea id="address" v-model="address" required></textarea>

      <!-- Estimated Delivery Time -->
      <p v-if="estimatedDelivery" class="delivery-estimate">
        📦 Estimated Delivery: <strong>{{ estimatedDelivery }}</strong>
      </p>

      <button type="submit" class="checkout-button">Place Order</button>
    </form>

    <!-- Email Sent Confirmation -->
    <p v-if="emailSent" class="success-message">✅ Confirmation email sent to {{ email }}!</p>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from 'emailjs-com';

export default {
  props: ['cart'],
  setup(props) {
    const router = useRouter();
    const name = ref('');
    const email = ref('');
    const address = ref('');
    const estimatedDelivery = ref('');
    const emailSent = ref(false);

    const totalPrice = computed(() => {
      return props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

    const generateDeliveryEstimate = () => {
      const minDays = 3;
      const maxDays = 7;
      const deliveryDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
      estimatedDelivery.value = `${deliveryDays} days`;
    };

    watch(address, () => {
      if (address.value.length > 5) {
        generateDeliveryEstimate();
      } else {
        estimatedDelivery.value = '';
      }
    });

    const submitOrder = () => {
      if (!name.value || !email.value || !address.value) {
        alert("Please fill in all fields.");
        return;
      }

      const orderData = {
        name: name.value,
        email: email.value,
        address: address.value,
        delivery: estimatedDelivery.value,
        total: totalPrice.value,
        items: props.cart
      };

      // Save order history
      const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
      orderHistory.push(orderData);
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

      // Send email
      sendEmail(orderData);

      // Clear cart
      localStorage.removeItem('cart');

      // Redirect to confirmation page
      router.push('/order-confirmation');
    };

    const sendEmail = (orderData) => {
      emailjs.send(
        "your_service_id",
        "your_template_id",
        {
          user_name: orderData.name,
          user_email: orderData.email,
          order_details: JSON.stringify(orderData.items, null, 2),
          order_total: orderData.total,
          delivery_time: orderData.delivery
        },
        "your_public_key"
      )
      .then(() => {
        emailSent.value = true;
      })
      .catch(error => {
        console.error("Error sending email:", error);
      });
    };

    return { name, email, address, estimatedDelivery, submitOrder, totalPrice, formatPrice, emailSent };
  }
};
</script>

<style scoped>
.checkout {
  text-align: center;
  padding: 2rem;
}

.delivery-estimate {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #ff9800;
}

.success-message {
  color: #2c7a2c;
  font-weight: bold;
  margin-top: 1rem;
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
textarea {
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
