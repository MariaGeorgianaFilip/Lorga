<template>
<section>
    <div class="page-description">
        <h3 class="page-title">CANDLES</h3>
        <h4 class="page-subtitle">Emotions Collection</h4>
        <p>Wildly provocative natural fragrances handcrafted from plant-based ingredients and blended in organic sugarcane alcohol.</p>
        <span>Showing all 4 results:</span>  
        <ul class="candle-list">
            <li v-for="candle in emotionsCollection" :key="candle.id" >
            <router-link :to="`/candle/${candle.id}`"><img  class="candle-photo" :src='candle.image' alt=""></router-link>
            <h4>{{candle.name}}</h4>
            <p>{{candle.price}}</p>
            </li>  
        </ul>
    </div>
</section>
</template>

<script>
export default {
    name: 'EmotionsCollection',
    computed: {
            emotionsCollection () {
                return this.$store.state.emotionsCollection   
            }}}
</script>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
section {
    padding: 30px 30px;
    background-color: $lightgreen;
    .page-description {
        .page-title {
            font-size: 32px;
            font-weight: bold;
            font-family: Fairplay Display, serif;
            letter-spacing: 8px;
            text-align: center;
        }
        .page-subtitle {
            font-size: 22px;
            font-weight: bold;
            font-family: Fairplay Display, serif;
            letter-spacing: 5px;
            text-align: center;
            padding-bottom: 25px;
        }
        p {
            font-size: 16px;
            text-align: center;
        }
        span {font-family: Fairplay Display, serif;
    }}
    ul {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-left: 30px;
        padding-right: 30px;
        li {
            list-style-type: none;
            color: black;
            padding-left: 12px;
            padding-right: 12px;
            text-align: center;
            h4 {
                padding-top: 15px;
            }
            p {
                padding-bottom: 15px;
            }
            .candle-photo {
                width: 220;
                height: 325px;
                text-align: center;
                border-radius: 5%;
                box-shadow: 0px 12px 15px 12px rgba(116, 122, 97, 0.45);
                transition: 500ms linear; 
            }
                .candle-photo:hover {
                    transform: scale(1.1); 
            }
                }}}
</style>