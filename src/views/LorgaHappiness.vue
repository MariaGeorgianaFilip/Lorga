<template>
    <section class="candle-view">
    <!-- <router-link to="/">Home</router-link> -->
    <img :src='candle.image'>
    <div class="lorga-happiness">
        <h3>{{ candle.brand }}</h3>
        <h5>{{ candle.name }}</h5>
        <p class="description">{{ candle.about }}</p><br/>
        <p class="price">Price: {{candle.price}} </p>
        <div class="quantity">
            <button @click="decrement(candle.id)">-</button> 
            &nbsp<span>{{ candle.count || 0}}</span>&nbsp
            <button @click="increment(candle.id)">+</button>
        </div>
        <br/>
        <button class="add-cart" @click="addToCart(candle)">
        ADD TO CART</button>
    </div>
</section> 
</template>

<script>
export default {
    name: "LorgaHapiness",
    computed: {
        candle () {
            const id = this.$router.currentRoute.params.id
            const emotionsCollection = this.$store.state.emotionsCollection
            const candle = emotionsCollection.filter(obj => obj.id.toString() === id)[0]
            return candle
    }},
    methods: {
        increment (id) {
            this.$store.commit('INCREMENT_CANDLE_COUNT', {id})
        },
        decrement (id) {
            this.$store.commit('DECREMENT_CANDLE_COUNT', {id})
        },
        addToCart (candle) {
            this.$store.commit('ADD_TO_CART_CANDLE', candle) 
    }}}
</script>
    
<style scoped lang="scss">
@import "../assets/colors/colors.scss";
section {
    background-color: $lightgreen;
    display: flex;
    justify-content: center;
    padding: 50px;
    img {
        width: 265px;
        height: 245px; 
        padding-right: 45px;
    }
    .lorga-happiness { 
        font-family: Playfair Display, serif;
        padding-left: 60px;
        padding-right: 30px;
        text-align: center;
        .quantity{
            button {
                width: 31px;
                height: 31px;
            }}
        .add-cart {
            background-color: black;
            color: white;
            border: 0;
            width: 140px;
            height: 35px;
}}}
</style>