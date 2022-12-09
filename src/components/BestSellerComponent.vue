<template>
    <section>
        <h2 class="title-bestsellers">Best Seller</h2>
        <div class="perfumes-list">
            <ul class="perfumes-card">
                <li class="perfumes-box" v-for="perfume in perfumes" :key="perfume.id">
                    <figure>
                    <img class="perfume-image" :src="perfume.url" alt="">
                    </figure>
                    <p style="font-weight: bold;"> {{perfume.name}}</p>
                    <p>{{perfume.price}}</p>
                    <p>{{perfume.style}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BestSellerComponent',
    data() {
        return {
            perfumes:[{ id: 0, 
                        url: require("../assets/photos/parfum-air.jpg"),
                        name: 'Lorga Air',
                        price: '55,00€',
                        style: 'Eau de parfum'},
                        { id: 1, 
                        url: require("../assets/photos/parfum-fire.jpg"),
                        name: 'Lorga Fire',
                        price: '55,00€',
                        style: 'Eau de parfum'
                        }]}}}
</script>
                              
<style scoped lang="scss">
section {
    margin: 0;
    border-top: 3px solid black;
    padding-top: 50px;
    background-image: url("https://phaedonparis.com/app/themes/phaedon/dist/images/bg-flower_bbe9350e.jpg"), url("https://phaedonparis.com/app/themes/phaedon/dist/images/bg-flower_bbe9350e.jpg");
    background-size: 28% 85%;
    background-position: left, right;
    background-position-y: bottom;
    background-repeat: no-repeat;
    z-index: 99;   
    .title-bestsellers {
        font-size: 40px;
        font-family: Playfair Display, serif;
        text-align: center;
        font-weight: 100;
        letter-spacing: 5px;
        padding-top: 25px;   
        }
    .perfumes-list {
        margin: 0 auto;
        padding-top: 20px;
        .perfumes-card {
            display: flex;
            justify-content: center;
            margin-bottom: 0;
            padding-bottom: 40px;
                .perfumes-box {
                    text-align: center;
                    list-style-type: none;
                    font-family: Playfair Display, serif;
                    font-size: 14px; 
                    figure { 
                        margin-bottom: 0;
                        .perfume-image {
                            width: 180px;
                            height: 320px;
                            margin: 0;
                            padding: 0px 15px 20px 15px;
                    }}
                p {
                    margin: 0;
                    padding-bottom: 15px;
                    line-height: 3px;
}}}}}
</style>