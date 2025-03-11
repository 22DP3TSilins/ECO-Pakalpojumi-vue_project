<template>
  <section class="cart">
    <h1>Your Cart</h1>

    <div v-if="cart.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-image" />
        <div class="cart-details">
          <h2>{{ item.name }}</h2>
          <p class="price">{{ formatPrice(item.price * item.quantity) }}</p>

          <!-- Quantity Controls -->
          <div class="quantity-controls">
            <button @click="decreaseQuantity(index)">➖</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">➕</button>
          </div>

          <button class="remove-button" @click="$emit('remove-from-cart', index)">Remove</button>
        </div>
      </div>

      <!-- Total Price Section -->
      <div class="cart-total">
        <h2>Total: {{ formatPrice(totalPrice) }}</h2>
      </div>

      <!-- Clear Cart & Checkout Buttons -->
      <div class="cart-actions">
        <button class="clear-cart-button" @click="$emit('clear-cart')">🗑️ Clear Cart</button>
        <button class="checkout-button" @click="proceedToCheckout">Proceed to Checkout</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
    }
  },
  methods: {
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.$emit('remove-from-cart', index);
      }
    },
    formatPrice(price) {
      return `$${parseFloat(price).toFixed(2)}`;
    },
    proceedToCheckout() {
      this.$router.push('/checkout');
    }
  }
};
</script>

<style scoped>
.cart {
  text-align: center;
  padding: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.cart-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}

.cart-details {
  flex-grow: 1;
  text-align: left;
}

.price {
  font-weight: bold;
}

/* Quantity Controls */
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-controls button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
}

.quantity-controls button:hover {
  background-color: #388e3c;
}

/* Clear Cart & Checkout Buttons */
.cart-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
}

.clear-cart-button {
  background-color: red;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-cart-button:hover {
  background-color: darkred;
}

.cart-actions button {
  background-color: #2c7a2c;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cart-actions button:hover {
  background-color: #1f5c1f;
  transform: scale(1.05);
}

.checkout-button {
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #ff8c00;
}

/* Total Price */
.cart-total {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>