<template>
  <va-form>
    <div class="form-control">
      <select
        name="currencies"
        id="currencies"
        v-model="selectedCurrency"
        class="select-input"
      >
        <option
          v-for="currency in currencies"
          :key="currency"
          :value="currency"
          >{{ currency }}</option
        >
      </select>
      <va-input
        type="number"
        step="0.01"
        v-model="currencyValue"
        placeholder="Exchange rate"
        outline
      />
    </div>
    <va-button @click.prevent="saveCurrency">Save Currency</va-button>
  </va-form>
  <p v-if="isNotValid">Please select currency and/or add some value.</p>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currencies = computed(() => {
      const currenciesToMap = store.getters.getCurrencies;
      const currenciesArr = [];
      for (let key in currenciesToMap) {
        currenciesArr.push(key);
      }
      return currenciesArr;
    });
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
          value: parseInt(currencyValue.value).toFixed(2),
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
<style scoped>
.select-input {
  border: 1px solid #f5f9fb;
  margin-right: 20px;
}

.form-control {
  display: flex;
  margin-bottom: 40px;
}
</style>
