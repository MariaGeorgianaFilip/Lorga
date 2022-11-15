<template>
<section>
    <div>
        <img class="gif" src="../assets/gif/green.gif" alt="">
        <img class="home-scent" src="../assets/photos/scent-afternoon.png" alt=""> 
    </div>
    <div>
        <h3>The story of our home scents</h3>
        <p>Self care rituals, mood setting and cozy times are here. 100% soy base candles with a 50 hour burn time.</p>
    </div>
</section>
</template>

<script>
export default {
    name: 'AboutScents',
    }
</script>

<style scoped lang="scss">
section {
    display: flex;
    justify-content: space-between;
    div {
        .gif {
        width: 620px;
        height: 550px;
        z-index: 1;
    }
    .home-scent {
        width: 380px;
        height: 380px;
        z-index: 99;
        position: absolute;
        margin-top: 80px;
        margin-left: -500px;
    }}
    div{
        h3, p { 
            padding-top: 30px;
            padding-right: 30px;
            padding-left: 30px;
            text-align: center;
            color: black;
            font-family: Playfair Display, serif;
            line-height: normal;
        h3 {
            font-size: 32px;
            letter-spacing: 4px;
        }
        p {
        font-size: 22px;
}}}}
</style>
