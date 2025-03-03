// Services.vue
<template>
  <div class="page services">
    <h1>Our Services</h1>
    <div class="service-grid">
      <ProductCard 
        v-for="(service, index) in services" 
        :key="index" 
        :image="service.image" 
        :title="service.title" 
        :description="service.description" 
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';


export default {
  components: { ProductCard },
  data() {
    return {
      services: [
        { image: 'https://via.placeholder.com/300', title: 'Recycling Consultation', description: 'Helping businesses reduce waste effectively.' },
        { image: 'https://via.placeholder.com/300', title: 'Green Energy Solutions', description: 'Providing sustainable energy options.' },
        { image: 'https://via.placeholder.com/300', title: 'Eco-Friendly Packaging', description: 'Custom packaging solutions for eco-conscious brands.' }
      ]
    };
  }
};
</script>

<style scoped>
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}
</style>