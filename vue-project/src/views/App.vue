<template>
  <div id="app">
    <Navbar :cartItems="cart.length" />
    <router-view 
      :cart="cart" 
      @add-to-cart="addToCart" 
      @remove-from-cart="removeFromCart" 
      @clear-cart="clearCart" 
    />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar },
  setup() {
    const cart = ref([]);

    // 🛒 Load cart from local storage when the app starts
    onMounted(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          cart.value = JSON.parse(savedCart);
        } catch (error) {
          console.error("Error parsing cart data:", error);
          cart.value = [];
        }
      }
    });

    // 💾 Save cart to local storage whenever it changes
    watch(cart, (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }, { deep: true });

    const addToCart = (product) => {
      // Check if product already exists in cart
      const existingProduct = cart.value.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    const removeFromCart = (index) => {
      cart.value.splice(index, 1);
    };

    const clearCart = () => {
      cart.value = [];
      localStorage.removeItem('cart');
    };

    return { cart, addToCart, removeFromCart, clearCart };
  }
};
</script>
