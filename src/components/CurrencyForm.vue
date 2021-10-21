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
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currencies = computed(()=>{
        const currenciesToMap = store.getters.getCurrencies;
        const currenciesArr = [];
        for (let key in currenciesToMap){
            currenciesArr.push(key)
        }
        return currenciesArr;
    })
    const selectedCurrency = ref(null);
    const currencyValue = ref(null);
    const isNotValid = ref(false);

    const saveCurrency = () => {
      isNotValid.value = false;

      if (selectedCurrency.value === null || currencyValue.value === null) {
        isNotValid.value = true;
      } else {
        store.dispatch("addCurrencyValue", {
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
