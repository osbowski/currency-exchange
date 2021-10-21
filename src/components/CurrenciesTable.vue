<template>
  <table>
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
    const currencies = computed(() => store.getters.getCurrencies);

    return {
      currencies,
    };
  },
};
</script>
