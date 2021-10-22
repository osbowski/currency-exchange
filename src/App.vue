<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue'
export default {
  components:{
    TheHeader
  },
  setup() {

  },
}
</script>
<style>
a{
  color: #fff;
}
</style>
