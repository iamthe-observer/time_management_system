import { createRouter, createWebHistory } from 'vue-router';
import Authorize from '../views/Authorize.vue';
import Dashboard from '../views/Dashboard.vue';
import HomePage from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard',
    },
    {
      path: '/',
      component: HomePage,
      name: 'HomePage',
    },
    {
      path: '/authorize',
      component: Authorize,
      name: 'Authorize',
    },
  ],
});

export default router;
