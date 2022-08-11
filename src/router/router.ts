import { createRouter, createWebHistory } from 'vue-router';
import Authorize from '../views/Authorize.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Authorize,
      name: 'Authorize',
    },
  ],
});

export default router;
