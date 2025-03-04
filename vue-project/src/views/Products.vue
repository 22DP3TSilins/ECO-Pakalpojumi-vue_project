<template>
  <section class="products">
    <h1>Our Eco-Friendly Products</h1>

    <!-- Filter buttons -->
    <div class="filter-buttons">
      <button @click="filterProducts('All')" :class="{ active: activeFilter === 'All' }">All</button>
      <button @click="filterProducts('Bottle')" :class="{ active: activeFilter === 'Bottle' }">Bottles</button>
      <button @click="filterProducts('Toothbrush')" :class="{ active: activeFilter === 'Toothbrush' }">Toothbrushes</button>
      <button @click="filterProducts('Bag')" :class="{ active: activeFilter === 'Bag' }">Bags</button>
    </div>

    <!-- Product cards -->
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        :description="product.description"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      activeFilter: 'All',
      products: [
        { name: 'Reusable Water Bottle', price: '$15', image: '/assets/bottle.jfif', description: 'Durable, BPA-free bottle.', type: 'Bottle' },
        { name: 'Bamboo Toothbrush', price: '$5', image: '/assets/toothbrush.jfif', description: 'Sustainable toothbrush.', type: 'Toothbrush' },
        { name: 'Organic Cotton Bag', price: '$12', image: '/assets/bag.jfif', description: 'Reusable shopping bag.', type: 'Bag' },
        { name: 'Glass Water Bottle', price: '$20', image: '/assets/glass-bottle.jfif', description: 'Eco-friendly glass bottle.', type: 'Bottle' }
      ]
    };
  },
  computed: {
    filteredProducts() {
      if (this.activeFilter === 'All') {
        return this.products;
      }
      return this.products.filter(product => product.type === this.activeFilter);
    }
  },
  methods: {
    filterProducts(type) {
      this.activeFilter = type;
    }
  }
};
</script>

<style scoped>
.products {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.filter-buttons {
  margin-bottom: 2rem;
}

.filter-buttons button {
  background-color: #2c7a2c;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-buttons button:hover {
  background-color: #1f5c1f;
}

.filter-buttons .active {
  background-color: #1f5c1f;
  box-shadow: 0 0 10px rgba(44, 122, 44, 0.6);
}

.product-list {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
