import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    name: 'Dashboard',
  },
  {
    path: '/dashboardv2',
    component: () => import('../views/Dashboardv2.vue'),
    name: 'Dashboardv2',
  },
  {
    path: '/',
    component: () => import('../views/HomePage.vue'),
    name: 'Home',
  },
  {
    path: '/authorize',
    component: () => import('../views/Authorize.vue'),
    name: 'Authorize',
  },
  {
    path: '/tasks',
    component: () => import('../views/Tasks.vue'),
    name: 'Tasks',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
