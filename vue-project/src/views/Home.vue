// Home.vue
<template>
  <div class="page home">
    <h1>Welcome to Eco Pakalpojumi</h1>
    <p>Your go-to place for eco-friendly products and services.</p>
  </div>
</template>

<style scoped>
.page {
  padding: 4rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #4caf50;
}

.home {
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.dark-mode .page {
  background-color: #3a3a3a;
  color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.dark-mode h1 {
  font-size: 2.5rem;
  color: #e0e0e0;
  margin-bottom: 1rem;
}
</style>

