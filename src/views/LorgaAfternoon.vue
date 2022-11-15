<template>
    <section class="homescent-view">
 <!-- <router-link to="/">Home</router-link> -->
 <img :src='homescent.image'>
 <div class="lorga-afternoon">
     <h3>{{ homescent.brand }}</h3>
     <h5>{{ homescent.name }}</h5>
     <p class="description">{{ homescent.about }}</p><br/>
     <p class="price">Price: {{homescent.price}} </p>
     <div class="quantity">
         <button @click="decrement(homescent.id)">-</button> 
         &nbsp<span>{{ homescent.by_quantity || 0}}</span>&nbsp
         <button @click="increment(homescent.id)">+</button>
     </div>
     <br/>
     <button class="add-to-cart" @click="addToCart(homescent)">
         ADD TO CART</button>
 </div>
</section> 
</template>

<script>
 export default {
    name: "LorgaAfternoon",
    computed: {
        homescent () {
            const id = this.$router.currentRoute.params.id
            const hoursCollection = this.$store.state.hoursCollection
            const homescent = hoursCollection.filter(obj => obj.id.toString() === id)[0]
            return homescent
        }},
        methods: {
        increment (id) {
            this.$store.commit('INCREMENT_HOMESCENT_COUNT', {id})
        },
        decrement (id) {
            this.$store.commit('DECREMENT_HOMESCENT_COUNT', {id})
        },
        addToCart (homescent) {
            this.$store.commit('ADD_TO_CART_HOMESCENT', homescent)
        }}} 
</script>
 
<style scoped lang="scss">
@import "../assets/colors/colors.scss";
section {
 display: flex;
 justify-content: center;
 padding: 50px;
 background-color: $lightbeige;
 img {
     width: 350px;
     height: 370px; 
     border-radius: 5%;
 }
 .lorga-afternoon { 
     font-family: Playfair Display, serif;
     padding-left: 60px;
     padding-right: 30px;
     text-align: center;
  
     .quantity{
         button {
             width: 31px;
             height: 31px;
     }}
     .add-to-cart {
         background-color: black;
         color: white;
         border: 0;
         width: 140px;
         height: 35px;
}}}
</style>