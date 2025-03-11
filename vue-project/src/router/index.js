import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import OrderConfirmation from '../views/OrderConfirmation.vue';
import OrderHistory from '../views/OrderHistory.vue';
import TrackOrder from '../views/TrackOrder.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/order-confirmation', name: 'OrderConfirmation', component: OrderConfirmation },
  { path: '/order-history', component: OrderHistory },
  { path: '/track-order', component: TrackOrder }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
