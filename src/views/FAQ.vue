<template>
<main>
    <MainHeader />
    <div classname="banner">
    </div> 

    <div class="greek-decoration">
    </div>

        <figure class="greek-statue">
            <img class="greek-diva" src="../assets/photos/image-statue.jpg" alt="poza fundal">
        </figure>
    
    <div class="greek-decoration">
    </div>

    <div>
        <h2>Frequently Asked Questions ?</h2>
        <h3>FAQ - Phaedon Paris</h3>
    </div>  
    <MainFooter /> 
</main>
</template>

<script>
    import MainHeader from '@/components/MainHeader.vue';
    import MainFooter from '@/components/MainFooter.vue';
    export default {
        name: "FAQ",
        components: { 
            MainHeader,
            MainFooter
    }}
</script>

<style scoped lang="scss">
    .greek-statue {
        padding: 0;
        margin: 0;
        .greek-diva {height: 621px;  
        }
    }
   
    .greek-decoration {
        background-image: url('../assets/photos/image-decoration.svg');
        background-repeat: repeat-x;
        background-position: 0 100%;
        background-color: transparent;
        height: 20px;
        background-size: 150px 20px;
        border-style:none;
        }
    h2 {font-weight: 900;
        font-family: Playfair Display, serif;
        font-style: italic;
        font-size: 58px;
        color:black;
        box-sizing: border-box;
        text-align: center
}
     h3{font-weight: 400;
        font-family: Playfair Display, serif;
    font-style: italic;
    font-size: 42px;
    color:black;
    box-sizing: border-box;
    text-align: center
     }



</style>