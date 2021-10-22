<template>
  <TheHeader />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  setup() {},
};
</script>
<style>
a {
  color: #fff;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.text-alert {
  color: red;
}

.text-confirmation {
  color: green;
}

.select-input {
  border: 1px solid #f5f9fb;
  margin-right: 20px;
}

.form-control {
  display: flex;
  margin-bottom: 40px;
}

.action-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
