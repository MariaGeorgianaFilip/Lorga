<template>
    <section>
        <div>
            <img class="gif" src="../assets/gif/SantalGray.gif" alt="">
            <img class="candle" src="../assets/photos/happy2.png" alt="">
        </div>
        <div>
            <h3>The story of our home scents</h3>  
            <p> Self care rituals, mood setting and cozy times are here. 100% soy base candles with a 50 hour burn time.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutCandles',
    }
</script>

<style scoped lang="scss">
section {
    display: flex;
    justify-content: space-between;
    div {
        h3, p { 
            padding: 30px 30px 0px 30px;
            text-align: center;
            color: black;
            font-family: Playfair Display, serif;
        h3 {
            font-size: 32px;
            letter-spacing: 4px;    
        }
        p {
            font-size: 22px;
        }}}
    div {
    .gif {
        width: 620px;
        height: 550px;
        z-index: 1;
    }
    .candle {
        width: 300px;
        height: 310px;
        margin-left: -500px;
        margin-top: 115px;
        z-index: 99;
        position: absolute;
    }}}
</style>