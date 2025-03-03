<template>
  <section class="products">
    <h1>Our Eco-Friendly Products</h1>
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in products"
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
      products: [
        { 
          name: 'Reusable Water Bottle', 
          price: '$15', 
          image: '/assets/bottle.jfif',
          description: 'A durable, BPA-free bottle to reduce single-use plastics.'
        },
        { 
          name: 'Bamboo Toothbrush', 
          price: '$5', 
          image: '/assets/toothbrush.jfif',
          description: 'Sustainably sourced bamboo toothbrush for a greener smile.'
        },
        { 
          name: 'Organic Cotton Bag', 
          price: '$12', 
          image: '/assets/bag.jfif',
          description: 'Reusable cotton bag for eco-conscious shopping.'
        }
      ]
    };
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

.product-list {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
