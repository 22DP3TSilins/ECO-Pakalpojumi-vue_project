<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/services">Services</router-link>
  </nav>
</template>

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

.navbar a:hover {
  text-decoration: underline;
}
</style>
