<template>
  <div id="app">
    <Navbar :cartItems="cart.length" />
    <transition name="fade" mode="out-in">
      <router-view 
        :cart="cart" 
        @add-to-cart="addToCart" 
        @remove-from-cart="removeFromCart" 
        @clear-cart="clearCart" 
      />
    </transition>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar },
  setup() {
    const cart = ref([]);

    // Load cart from local storage when the app starts
    onMounted(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        cart.value = JSON.parse(savedCart);
      }
    });

    // Watch for cart changes and store them
    watch(cart, (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }, { deep: true });

    const addToCart = (product) => {
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

<style>
/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
