import { createRouter, createWebHashHistory } from 'vue-router';
import AddCurrency from '../views/AddCurrency.vue';
import CurrenciesTablePage from '../views/CurrenciesTablePage.vue'

const routes = [
  {
    path: '/add',
    component:AddCurrency
  },
  {
    path:'/currencies',
    component:CurrenciesTablePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
