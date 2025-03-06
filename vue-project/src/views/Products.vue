<template>
  <section class="products">
    <h1>Our Eco-Friendly Products</h1>

    <!-- Filter section -->
    <div class="filters">
      <!-- Filter by type -->
      <div class="filter-group">
        <h2>Filter by Type</h2>
        <div class="filter-buttons">
          <button @click="filterProducts('All')" :class="{ active: activeFilter === 'All' }">All</button>
          <button @click="filterProducts('Bottle')" :class="{ active: activeFilter === 'Bottle' }">Bottles</button>
          <button @click="filterProducts('Toothbrush')" :class="{ active: activeFilter === 'Toothbrush' }">Toothbrushes</button>
          <button @click="filterProducts('Bag')" :class="{ active: activeFilter === 'Bag' }">Bags</button>
        </div>
      </div>

      <!-- Filter by price -->
      <div class="filter-group">
        <h2>Filter by Price</h2>
        <input type="range" min="0" max="50" v-model="maxPrice" @input="filterByPrice" class="price-slider" />
        <p>Max Price: ${{ maxPrice }}</p>
      </div>

      <!-- Filter by eco rating -->
      <div class="filter-group">
        <h2>Filter by Eco Rating</h2>
        <transition name="dropdown">
          <select v-model="selectedRating" @change="filterByRating">
            <option value="All">All Ratings</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
        </transition>
      </div>
    </div>

    <!-- Animated product list -->
    <transition-group name="fade" tag="div" class="product-list">
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        :description="product.description"
      />
    </transition-group>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      activeFilter: 'All',
      maxPrice: 50,
      selectedRating: 'All',
      products: [
        { name: 'Reusable Water Bottle', price: 15, image: '/assets/bottle.jfif', description: 'Durable, BPA-free bottle.', type: 'Bottle', rating: 5 },
        { name: 'Bamboo Toothbrush', price: 5, image: '/assets/toothbrush.jfif', description: 'Sustainable toothbrush.', type: 'Toothbrush', rating: 4 },
        { name: 'Organic Cotton Bag', price: 12, image: '/assets/bag.jfif', description: 'Reusable shopping bag.', type: 'Bag', rating: 3 },
        { name: 'Glass Water Bottle', price: 20, image: '/assets/glass-bottle.jfif', description: 'Eco-friendly glass bottle.', type: 'Bottle', rating: 5 }
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.products
        .filter(product => this.activeFilter === 'All' || product.type === this.activeFilter)
        .filter(product => product.price <= this.maxPrice)
        .filter(product => this.selectedRating === 'All' || product.rating >= parseInt(this.selectedRating));
    }
  },
  methods: {
    filterProducts(type) {
      this.activeFilter = type;
    },
    filterByPrice() {},
    filterByRating() {}
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
  margin-bottom: 2rem;
}

/* Filter section */
.filters {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.filter-group {
  text-align: left;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

/* Filter buttons */
.filter-buttons {
  display: flex;
  gap: 0.5rem;
}

.filter-buttons button,
select,
input[type="range"] {
  background-color: #2c7a2c;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.filter-buttons button:hover,
select:hover {
  background-color: #1f5c1f;
}

.filter-buttons .active {
  background-color: #1f5c1f;
  box-shadow: 0 0 10px rgba(44, 122, 44, 0.6);
}

/* Price slider animation */
.price-slider {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.price-slider:hover {
  transform: scale(1.05);
}

/* Dropdown animation */
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
}

/* Fade animation for product cards */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Product list */
.product-list {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
