<template>
    <section>
        <div class="trees">
        </div>
        <h2>Frequently Asked Questions?</h2>
        <Questions /> 
    </section>
</template>

<script>
import Questions from '@/components/Questions.vue';
export default {
    name: 'FAQ',
    components: {
    Questions,
}}
</script>

<style scoped lang="scss">
.trees {
    padding: 0;
    margin: 0;
    background-image: url('../assets/photos/image3.jpg');
    background-size: cover;
    height: 600px;
    width: 1262px;
    background-repeat: no-repeat;  
}
h2 {
    border-top: 3px solid black;
    padding-top: 30px;
    font-family: Playfair Display, serif;
    font-weight: 900;
    font-size: 32px;
    color:black;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 6px;       
} 
</style>