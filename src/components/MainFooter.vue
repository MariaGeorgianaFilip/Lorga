<template>
    <main>
        <section class="upper-footer">
            
            <div>
                <img src="../assets/photos/tour-eiffel.png" alt="tour-eiffel">
                <p>France Metropolitaine <br/>
                Livraison gratuite a partir de 100E d'achat</p>
            </div>
            <div>
                <img src="../assets/photos/euro.png" alt="euro">
                <p>Europe <br/>
                Free delievery over 150E</p>
            </div>
            <div>
                <img src="../assets/photos/world.png" alt="world">
                <p>Rest of the world <br/>
                 Livraison gratuite a partir de 100E d'achat</p>
            </div>
            <div>
                <img src="../assets/photos/logo2.png" alt="logo">
                <p>Phaedon Paris <br/>
                is 100% Made in France</p>
            </div>
            <div>
                <img src="../assets/photos/image-store.png" alt="store">
                <p>Retailers<br/>
                Discover our retailers</p>
            </div>
        </section>
    <BottomFooter />

    </main>
</template>

<script>
    import BottomFooter from './BottomFooter'
    export default {
    name: "MainFooter",
    components: { BottomFooter }
}
    components : {
        BottomFooter
    }
</script>

<style scoped lang="scss">
    .upper-footer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding-bottom: 0;
        padding-bottom: 0;
        background-color:  #c4b29e;

        .upper-footer div:not(:last-child) {
            color:red;
        }
       
        div{
        display: flex;
        font-family: Alata;
        font-weight: 400;
        font-size: 14px;
        color: black;
        width: 250px;
        height: 180px;
        text-align: left;
        align-items: center;
        padding: 4px 0;


        img {
            width: 100px;
            height: 100px;
        } }
    }

</style>