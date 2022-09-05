<template>
  <main>
    <MainHeader />
    <div class="greek-decoration">
    </div>
    <CarouselApp />
    <div class="greek-decoration">
    </div>
    <MainFooter/>
  </main>  
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import CarouselApp from '@/components/CarouselApp.vue';
export default {
  name: 'HomeView',
  components: {
    MainHeader,
    CarouselApp,
    MainFooter
   
}}
</script>
<style scoped lang="scss">
   .greek-decoration {
      background-image: url('../assets/photos/image-decoration.svg');
      background-repeat: repeat-x;
      background-position: 0 100%;
      background-color: transparent;
      height: 20px;
      background-size: 150px 20px;
      border-style:none;
   }

</style>
