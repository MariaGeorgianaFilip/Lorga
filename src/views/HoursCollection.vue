<template>
    <section>
    <div class="page-presentation">
        <h3 class="page-title">HOME SCENTS</h3>
        <h4 class="page-subtitle">Hours Collection</h4>
        <p>Wildly provocative natural fragrances handcrafted from plant-based ingredients and blended in organic sugarcane alcohol.</p>
        <span>Showing all 3 results:</span>  
    </div>
    <ul class="homescent-list">
        <li v-for="homescent in hoursCollection" :key="homescent.id" >
        <router-link :to="`/homescent/${homescent.id}`"><img  class="homescent-photo" :src='homescent.image' alt=""></router-link>
        <h4>{{homescent.name}}</h4>
        <p>{{homescent.price}}</p>
        </li>
    </ul> 
    </section>
</template>

<script>
export default {
    name: 'HoursCollection',
    computed: {
        hoursCollection () {
            return this.$store.state.hoursCollection    
}}}
</script>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
section {
    padding: 30px 30px;
    background-color: $lightbeige;
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
        }
        span {
            font-family: Fairplay Display, serif;
    }}
    .homescent-list {
        padding-top: 25px;
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
                padding-top: 20px;
            }
         
            .homescent-photo {
                width: 290;
                height: 360px;
                text-align: center;
                border-radius: 5%;
                box-shadow: 2px 13px 15px 13px rgba(64, 59, 48, 0.45);
                transition: 500ms linear; 
            }
            .homescent-photo:hover {
                    transform: scale(1.1); 
}}}}
</style>