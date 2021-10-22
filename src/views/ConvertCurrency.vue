<template>
    <va-card>
      <va-card-title class="justify--center display-5"
        >Convert currency to PLN</va-card-title
      >
      <va-card-content>
        <Converter />
      </va-card-content>
    </va-card>
</template>

<script>
import Converter from '../components/Converter.vue';
export default {
    components:{
        Converter
    },
    setup() {
        
    },
}
</script>