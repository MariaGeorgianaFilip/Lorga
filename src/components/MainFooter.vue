<template>
<main>
    <div class="greek-decoration">
    </div>
    <section class="upper-footer">
        <div>
            <p><span style="font-weight: bold; font-size:18px">In Romania</span><br/>
            Free delievery over 100€</p>
        </div>
        <div>
            <p><span style="font-weight: bold; font-size:18px">Europe</span><br/>
                Free delievery over 150€</p>
        </div>
        <div>
            <p><span style="font-weight: bold; font-size:18px">Rest of the world</span> <br/>
                 Free deliveries on order over 300€</p>
        </div>
        <div>
            <p><span style="font-weight: bold; font-size:18px">Lorga Bucharest</span><br/>
                is 100% Made in Romania</p>
        </div>
    </section>
    <BottomFooter />
</main>
</template>

<script>
import BottomFooter from './BottomFooter.vue'
export default {
    name: "MainFooter",
    components: { 
        BottomFooter }
}
</script>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.upper-footer {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 0;
    background-color: $beige;
    height: 100px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    div {
        display: flex;
        font-weight: 400;
        font-size: 16px;
        font-family: Fairplay Display, serif;
        color: black;
        text-align: center;
        align-items: center;
        padding: 4px 0;
        }}
        .greek-decoration {
            background-image: url('../assets/photos/image-decoration.svg');
            background-repeat: repeat-x;
            background-position: 0 100%;
            background-color: transparent;
            height: 20px;
            background-size: 150px 20px;
            border-style: none;
        }

</style>