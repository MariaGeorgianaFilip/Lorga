
<template>
    <section class="fragrance-view">
        <img :src='fragrance.image'>
        <div class="lorga-fire">
            <h3>{{ fragrance.brand }}</h3>
            <h5>{{ fragrance.name }}</h5>
            <p class="description">{{ fragrance.about }}</p>
            <p><b>TOP NOTES:&nbsp</b>{{ fragrance.top }}</p>
            <p><b>MIDDLE NOTES:&nbsp</b>{{ fragrance.middle }}</p>
            <p><b>BOTTOM NOTES:&nbsp</b>{{ fragrance.bottom }}</p>
            <p class="price">Price: {{fragrance.price}} </p>
            <div class="quantity">
                <button @click="decrement(fragrance.id)">-</button> 
                &nbsp<span>{{ fragrance.by_quantity || 0}}</span>&nbsp
                <button @click="increment(fragrance.id)">+</button>
            </div>
            <br/>
            <button class="add-to-cart" :disabled="!fragrance.by_quantity || fragrance.count === 0"
            @click="addToCart(fragrance)">ADD TO CART</button>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'LorgaFire',
    computed: {
        fragrance () {
            const id = this.$router.currentRoute.params.id
            const naturalElementsCollection = this.$store.state.naturalElementsCollection
            const fragrance = naturalElementsCollection.filter(obj => obj.id.toString() === id)[0]
            return fragrance
    }},
    methods: {
        increment (id) {
          this.$store.commit('INCREMENT_FRAGRANCE_COUNT', {id} )
        },
        decrement (id) {
          this.$store.commit('DECREMENT_FRAGRANCE_COUNT', {id})
        },
        addToCart (fragrance) {
          this.$store.commit('ADD_TO_CART_FRAGRANCE', fragrance)
}}}
</script>
      
<style scoped lang="scss">
@import "../assets/colors/colors.scss";
section {
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: $softbeige;
        img {
            width: 150px;
            height: 290px; 
            border: 1px solid black ;
            border-radius: 10px;
            box-shadow: 0px 12px 15px 12px rgba(116, 122, 97, 0.45);   
      }
        .lorga-fire { 
            font-family: Playfair Display, serif;
            padding-left: 60px;
            padding-right: 30px;
            text-align: center;
            .quantity {
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
      
            
             

    
           
            
           
 