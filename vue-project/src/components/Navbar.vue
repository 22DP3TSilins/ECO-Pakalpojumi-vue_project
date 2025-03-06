<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart" class="cart">
      🛒 Cart <span v-if="cartItems > 0">({{ cartItems }})</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['cartItems']
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #4caf50;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.cart {
  font-weight: bold;
}
</style>
