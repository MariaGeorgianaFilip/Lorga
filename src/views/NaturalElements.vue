<template>
    <section>
        <div class="page-presentation">
            <h3 class="page-title">FRANGRANCES</h3>
            <h4 class="page-subtitle">Natural Elements Collection</h4>
            <p>Wildly provocative natural fragrances handcrafted from plant-based ingredients and blended in organic sugarcane alcohol.</p>
            <span>Showing all 4 results:</span>  
        </div>
        <ul class="fragrance-list">
            <li v-for="fragrance in naturalElementsCollection" :key="fragrance.id" >
            <router-link :to="`fragrance/${fragrance.id}`"><img  class="fragrance-photo" :src='fragrance.image' alt=""></router-link>
            <h4>{{fragrance.name}}</h4>
            <p>{{fragrance.price}}</p>
            </li>
        </ul> 
    </section>
</template>

<script>
export default {
        name: 'NaturalElements',
        computed: {
            naturalElementsCollection () {
                return this.$store.state.naturalElementsCollection    
            }}}
 
</script>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
section {
    padding: 30px;
    background-color: $softbeige;

    .page-presentation {
        .page-title {
            font-size: 32px;
            font-family: Fairplay Display, serif;
            font-weight: bold;
            letter-spacing: 8px;
            text-align: center;
        }
        .page-subtitle {
            font-size: 22px;
            font-family: Fairplay Display, serif;
            font-weight: bold;
            letter-spacing: 5px;
            text-align: center;
            padding-bottom: 25px;
            }
        p {
            font-size: 16px;
            font-family: Fairplay Display, serif;
            text-align: center;
        span {font-family: Fairplay Display, serif;
    }}}
    .fragrance-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-left: 50px;
        padding-right: 50px;
        li {
            list-style-type: none;
            color: black;
            padding-left: 25px;
            padding-right: 25px;
            text-align: center;
            h4 {
                padding-top: 15px;
            }
            p {
                padding-bottom: 15px;
            }
            .fragrance-photo {
                width: 190px;
                height: 360px;
                text-align: center;
                border: 1px solid black ;
                margin-right: 50px;
                margin-left: 50px;
                border-radius: 10px;
                animation-name: example;
                animation-duration: 2s;
                box-shadow: 0px 12px 15px 12px rgba(116, 122, 97, 0.45);
                transition: 500ms linear;
                }
                .fragrance-photo:hover {
                    transform: scale(1.1); 
            }
            
            }}}
@keyframes example {
from {box-shadow: 0px 12px 15px 12px rgba(116, 122, 97, 0.45);}
to {box-shadow: 0px 20px 20px 20px rgba(116, 122, 97, 0.45);}}
</style>