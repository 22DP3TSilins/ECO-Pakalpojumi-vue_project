import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Services from '../views/Services.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/services', name: 'Services', component: Services }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
