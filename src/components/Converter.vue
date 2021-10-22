<template>
  <form @submit.prevent="convert" v-if="hasCurrencies">
    <input
      type="text"
      placeholder="Value to convert"
      v-model="valueToConvert"
    />
    <select v-model="activeCurrency">
      <option v-for="(value, name) in currencies" :value="name" :key="name">{{
        name
      }}</option>
    </select>
    <button>Convert</button>
    <p>In PLN: {{ convertResult }}</p>
  </form>
  <p v-else>Add some values to currencies first</p>
  
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const currencies = computed(() => store.getters.getCurrenciesWithValue);
    const activeCurrency = ref(null);
    const valueToConvert = ref(null);
    const convertResult = ref(0);
    const hasCurrencies = computed(()=>Object.keys(currencies.value).length > 0)

    const convert = () => {
      convertResult.value = (
        valueToConvert.value * currencies.value[activeCurrency.value]
      ).toFixed(2);
    };

    return {
      currencies,
      activeCurrency,
      valueToConvert,
      convertResult,
      hasCurrencies,
      convert
    };
  },
};
</script>
