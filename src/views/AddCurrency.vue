<template>
  <va-card>
    <va-card-title class="justify--center display-5"
      >Add value to currencies</va-card-title
    >
    <va-card-content>
      <CurrencyForm />
    </va-card-content>
  </va-card>
</template>

<script>
import CurrencyForm from "../components/CurrencyForm.vue";
export default {
  components: {
    CurrencyForm,
  },
  setup() {},
};
</script>
