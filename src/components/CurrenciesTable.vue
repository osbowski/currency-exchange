<template>
  <table class="va-table" v-if="hasCurrencies">
    <thead>
      <tr>
        <th>Currency</th>
        <th>Exchange Rate</th>
      </tr>
    </thead>
    <tbody>
      <CurrenciesTableRow
        v-for="(value, name) in currencies"
        :key="name"
        :currencyName="name"
        :currencyValue="value"
      />
    </tbody>
  </table>
  <p v-else class="text-center text-alert">Add some values to currencies first</p>
</template>

<script>
import CurrenciesTableRow from "./CurrenciesTableRow.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    CurrenciesTableRow,
  },
  setup() {
    const store = useStore();
    const currencies = computed(() => store.getters.getCurrenciesWithValue);
    const hasCurrencies = computed(()=>Object.keys(currencies.value).length > 0)

    return {
      currencies,
      hasCurrencies
    };
  },
};
</script>

<style scoped>
.va-table{
  width: 100%;
}
</style>
