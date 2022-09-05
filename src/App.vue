<template>
  <div id="app">
    <MainHeader />
    <MainFooter />
    <router-view/>
  
 
  
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainFooter from './components/MainFooter.vue';


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
  }
</style>
