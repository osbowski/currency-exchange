<template>
  <form @submit.prevent="convert">
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
  </form>
  <p>In PLN: {{ convertResult }}</p>
  <p v-if="isNotValid">Please add value to converte and select currency</p>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const currencies = computed(() => store.getters.getCurrencies);
    const activeCurrency = ref(null);
    const valueToConvert = ref(null);
    const convertResult = ref(0);
    const isNotValid = ref(false);

    const convert = () => {
      isNotValid.value = false;
      if (valueToConvert.value === null || activeCurrency.value === null) {
        isNotValid.value = true;
      } else {
        isNotValid.value = false;
        convertResult.value = (
          valueToConvert.value * currencies.value[activeCurrency.value]
        ).toFixed(2);
      }
    };

    return {
      currencies,
      activeCurrency,
      valueToConvert,
      convertResult,
      isNotValid,
      convert,
    };
  },
};
</script>
