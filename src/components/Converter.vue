<template>
  <va-form v-if="hasCurrencies">
    <div class="form-control">
      <va-input
        type="number"
        placeholder="Value to convert"
        outline
        v-model="valueToConvert"
      />
      <select
        class="select-input select-input--reverse"
        v-model="activeCurrency"
      >
        <option v-for="(value, name) in currencies" :value="name" :key="name">{{
          name
        }}</option>
      </select>
    </div>
    <div class="action-wrapper action-wrapper--converter">
      <p class="display-6">In PLN: {{ convertResult }}</p>
      <va-button @click.prevent="convert">Convert</va-button>
    </div>
  </va-form>
  <p class="text-alert text-center" v-else>
    Add some values to currencies first
  </p>
  <p v-if="isNotValid" class="text-alert text-center mt-4">
    Select currency and/or add value to convert.
  </p>
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
    const isNotValid = ref(false);
    const hasCurrencies = computed(
      () => Object.keys(currencies.value).length > 0
    );

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
      hasCurrencies,
      isNotValid,
      convert,
    };
  },
};
</script>

<style scoped>
.action-wrapper--converter {
  justify-content: space-between;
  align-items: center;
}

.select-input--reverse {
  margin-right: 0px;
  margin-left: 20px;
}
</style>
