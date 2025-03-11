<template>
  <section class="cart">
    <h1>🛒 Your Shopping Cart</h1>

    <div v-if="cart.length === 0">
      <p>Your cart is empty.</p>
      <router-link to="/products" class="shop-button">🛍️ Continue Shopping</router-link>
    </div>

    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-image" />
        <div class="cart-details">
          <h3>{{ item.name }}</h3>
          <p class="price">{{ formatPrice(item.price * item.quantity) }}</p>
          
          <!-- Quantity Controls -->
          <div class="quantity-controls">
            <button @click="decreaseQuantity(index)">➖</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">➕</button>
          </div>
        </div>
        <button @click="removeFromCart(index)" class="remove-button">🗑️ Remove</button>
      </div>

      <h2>Total: {{ formatPrice(totalPrice) }}</h2>
      <router-link to="/checkout" class="checkout-button">✅ Proceed to Checkout</router-link>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const cart = ref([]);

    onMounted(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        cart.value = JSON.parse(savedCart);
      }
    });

    const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

    const increaseQuantity = (index) => {
      cart.value[index].quantity++;
      updateCart();
    };

    const decreaseQuantity = (index) => {
      if (cart.value[index].quantity > 1) {
        cart.value[index].quantity--;
        updateCart();
      }
    };

    const removeFromCart = (index) => {
      cart.value.splice(index, 1);
      updateCart();
    };

    const updateCart = () => {
      localStorage.setItem("cart", JSON.stringify(cart.value));
    };

    const totalPrice = computed(() => {
      return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    return { cart, formatPrice, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice };
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
  justify-content: space-between;
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
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
  margin-top: 0.5rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
}

.quantity-controls button:hover {
  background-color: #e68900;
}

.remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.remove-button:hover {
  background-color: darkred;
}

.checkout-button {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #2c7a2c;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
}

.checkout-button:hover {
  background-color: #1f5c1f;
}

.shop-button {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #ff9800;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
}

.shop-button:hover {
  background-color: #e68900;
}
</style>
