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

.wrapper{
  display: flex;
  justify-content: center;
}
</style>
