<template>
<main>
    <section>
        <div class="dropdown">
            <button class="dropbtn">Fragrances</button>
            <div class="dropdown-content">
                <router-link class="drop-link" to="/NaturalElements">Natural Elements Collection</router-link>
                <router-link class="drop-link" to="/AboutFragrances">The story of our fragrances</router-link>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Scented candles</button>
            <div class="dropdown-content">
                <router-link class="drop-link" to="/EmotionsCollection">Emotions Collection</router-link>
                <router-link class="drop-link" to="/AboutCandles">The story of our candles</router-link>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Home scents</button>
            <div class="dropdown-content">
                <router-link class="drop-link" to="/HoursCollection">Hours Collection</router-link>
                <router-link class="drop-link" to="/AboutScents">The story of our home scents</router-link>    
            </div>
        </div>
        <div>
            <router-link class="gift-card"  title="Gift Card" to="/GiftCard">Gift Card</router-link>
        </div>                 
    </section>
</main>
</template>

<script>
export default {
     name: 'MainHeaderMenu'
}
</script>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";

section {
    background-color: $nude ; 
    width: 900px;
    margin: 0 auto;
    height: 40px;
    padding-left: 30px;
    padding-right: 30px;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dropbtn {
        background-color: $nude;
        font-family: PlayFair Display, serif;
        font-size: 20px;
        letter-spacing: 4px;
        color: black;
        padding: 3px;
        border: none;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 99;
    }
    .drop-link {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;  
        font-family: Playfair Display, serif;
    }
    .dropdown-content router-link:hover {background-color: #ddd;}
    .dropdown:hover .dropdown-content {display: block;}
    .dropdown:hover .dropbtn {background-color: #D9CAB3;}
    .gift-card {
        font-family: PlayFair Display, serif;
        letter-spacing: 4px;
        color: black;
        padding: 12px;
        font-size: 20px;
        border: none;
        text-decoration-line: none;
    }}
</style>