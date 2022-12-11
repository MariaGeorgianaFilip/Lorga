<template>
<main>
  <section>
      <Slider />
      <BestSellerComponent />
  </section> 
</main>  
</template>

<script>
import Slider from '@/components/Slider.vue';
import BestSellerComponent from '@/components/BestSellerComponent.vue';
export default {
  name: 'HomeView',
  components: {
    Slider,
    BestSellerComponent,
}}
</script>

<style scoped lang="scss">
</style>
