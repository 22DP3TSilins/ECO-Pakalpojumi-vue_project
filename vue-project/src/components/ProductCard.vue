<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h2>{{ name }}</h2>
    <p class="price">{{ price }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'image', 'description']
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: bold;
  color: #2c7a2c;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.9rem;
  color: #555;
}
</style>
