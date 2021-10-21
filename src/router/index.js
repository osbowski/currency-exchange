import { createRouter, createWebHashHistory } from 'vue-router';
import AddCurrency from '../views/AddCurrency.vue';

const routes = [
  {
    path: '/add',
    component:AddCurrency
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
