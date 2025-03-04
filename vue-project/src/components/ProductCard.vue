<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h2>{{ name }}</h2>
    <p class="price">{{ price }}</p>
    <p class="description">{{ description }}</p>
    <button class="buy-button" @click="buyProduct">Buy Now</button>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'image', 'description'],
  methods: {
    buyProduct() {
      alert(`You selected: ${this.name}`);
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
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
  margin-bottom: 1rem;
}

.buy-button {
  background-color: #2c7a2c;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.buy-button:hover {
  background-color: #1f5c1f;
  box-shadow: 0 0 15px rgba(44, 122, 44, 0.6);
}
</style>
