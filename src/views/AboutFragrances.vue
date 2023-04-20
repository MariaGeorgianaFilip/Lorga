<template>
        <div>
            <img src="../assets/photos/flowers.jpg" alt="">
            <p>Inspired by ancient traditions, we’re crafting fragrances as they were created hundreds of years ago by artisan perfumers of the past—the witch doctors, outsiders, alchemists, the original heretics. 
Trough traditional extraction methods, like distillation, expression, and extraction, we obtain essential oils, isolates, absolutes and resins from plants and flowers that we then blend into our fragrances at high concentrations to bring you the aromatherapy benefits of nature, like the calming effects of CBD and jasmine or the uplifting properties of real citrus oils, thereby making them a functional fragrance.</p>
        </div>
</template>

<script>
export default {
        name: 'AboutFragrances' }
</script>

<style scoped lang="scss">
    div {
        display: flex;
        justify-content: space-between;
        img {
            width: 250px;
            height: 400px;
        }
        p { 
            padding: 100px 30px 0 30px;
            text-align: center;
            color: black;
            font-family: Playfair Display, serif;
            line-height: normal;
            font-size: 16px;
}}
</style>