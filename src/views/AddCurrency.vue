<template>
  <div class="flex md6 lg4">
    <va-card>
      <va-card-title class="justify--center">Add value to currencies</va-card-title>
      <va-card-content>
        <CurrencyForm />
      </va-card-content>
    </va-card>
  </div>
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
