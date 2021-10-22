<template>
  <div class="flex md6 lg4">
    <va-card>
      <va-card-title class="justify--center display-5"
        >Actual exchange rates</va-card-title
      >
      <va-card-content>
        <CurrenciesTable />
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import CurrenciesTable from "../components/CurrenciesTable.vue";
export default {
  components: {
    CurrenciesTable,
  },
  setup() {},
};
</script>
