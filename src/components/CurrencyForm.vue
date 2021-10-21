<template>
  <form @submit.prevent="saveCurrency">
    <select name="currencies" id="currencies" v-model="selectedCurrency">
      <option
        v-for="currency in currencies"
        :key="currency"
        :value="currency"
        >{{ currency }}</option
      >
    </select>
    <input type="number" step="0.01" v-model="currencyValue" />
    <button>Save Currency</button>
  </form>
  <p v-if="isNotValid">Please select currency and/or add some value.</p>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const currencies = ref(["USD", "GBP", "EURO"]);
    const selectedCurrency = ref(null);
    const currencyValue = ref(null);
    const isNotValid = ref(false);

    const saveCurrency = () => {
      isNotValid.value = false;

      if (selectedCurrency.value === null || currencyValue.value === null) {
        isNotValid.value = true;
      } else {
        console.log({
          currency: selectedCurrency.value,
          value: currencyValue.value.toFixed(2),
        });
      }
    };

    return {
      currencyValue,
      currencies,
      selectedCurrency,
      isNotValid,
      saveCurrency,
    };
  },
};
</script>
