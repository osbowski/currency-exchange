<template>
  <form @submit.prevent="convert">
    <input type="text" placeholder="Value to convert" />
    <select v-model="activeCurrency">
        <option v-for="(value,name) in currencies" :value="name" :key="name">{{name}}</option>
    </select>
    <button>Convert</button>
  </form>
  <p>In PLN:</p>
</template>

<script>
import { useStore } from "vuex";
import {computed, ref} from 'vue'
export default {
  setup() {
    const store = useStore();
    const currencies = computed(()=>store.getters.getCurrencies)
    const activeCurrency = ref(null)

    const convert = ()=>{
        console.log(activeCurrency.value)
    }


    return {
        currencies,
        activeCurrency,
        convert
    }
  },
};
</script>
