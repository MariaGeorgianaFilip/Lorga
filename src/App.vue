<template>
  <div id="app">
    <MainHeader />
    <router-view/>
    <MainFooter />
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainFooter from './components/MainFooter.vue'
  export default {
    name: 'App',
    
    components: {
    MainHeader,
    MainFooter
}
  }
</script>
<style lang="scss">
  html, body{
    margin: 0;
    padding: 0;
    font-family: "Playfair Display";
  }

    @font-face {
  font-family: "Playfair Display";
  font-display: auto;
  src: local("Playfair"),
   url("./assets/fonts/Playfair/PlayfairDisplay-Regular.ttf") 
   format("ttf");
  }
</style>
