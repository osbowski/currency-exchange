import { createRouter, createWebHashHistory } from 'vue-router';
import AddCurrency from '../views/AddCurrency.vue';
import CurrenciesTablePage from '../views/CurrenciesTablePage.vue'
import ConvertCurrency from '../views/ConvertCurrency.vue'

const routes = [
  {
    path:'/',
    redirect:'/currencies'
  },
  {
    path: '/add',
    component:AddCurrency
  },
  {
    path:'/currencies',
    component:CurrenciesTablePage
  },
  {
    path:'/converter',
    component:ConvertCurrency
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
