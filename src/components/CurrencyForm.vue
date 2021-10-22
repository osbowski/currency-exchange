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
    <div class="action-wrapper">
      <va-button @click.prevent="saveCurrency">Save Currency</va-button>
    </div>
  </va-form>
  <p v-if="isNotValid" class="text-alert text-center mt-4">Please select currency and/or add some value.</p>
  <p v-if="formConfirmation" class="text-confirmation text-center mt-4">Currency saved</p>
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
    const formConfirmation = ref(false);

    const saveCurrency = () => {
      isNotValid.value = false;

      if (selectedCurrency.value === null || currencyValue.value === null) {
        isNotValid.value = true;
      } else {
        formConfirmation.value=true;
        store.dispatch("addCurrencyValue", {
          currency: selectedCurrency.value,
          value: parseInt(currencyValue.value).toFixed(2),
        });
        selectedCurrency.value = null;
        currencyValue.value = null;
        setTimeout(()=>{
          formConfirmation.value = false;
        },3000)
      }
    };

    return {
      currencyValue,
      currencies,
      selectedCurrency,
      isNotValid,
      saveCurrency,
      formConfirmation
    };
  },
};
</script>
