<template>
    <div>
    <h3>GIFT CARD</h3>
    <p>Gift Cards are the perfect gift for birthdays, anniversaries, holidays or any other special occasion. No need to worry about choosing the wrong beauty product. Let that special person in your life choose for themselves. You can't go wrong!</p>
    <p>Perfect for gifting, every order is packaged exquisitely and with a <b>free 2mL fragrance sample.</b></p>
    <img src="../assets/photos/gift-card.jpg" alt="gift-card">
    <br/>
    <label for="price">Denominations:</label>&nbsp
    <select name="value" id="value">
        <option value="25€">25€</option>
        <option value="50€">50€</option>
        <option value="75€">75€</option>
    </select>
    <br/>
    <button>ADD TO CART</button>
    </div>
</template>

<script>
    export default {
        name: 'GiftCard'
    }
</script>

<style scoped lang="scss">
 div { 
    font-family: Fairplay Display, serif;
    padding: 30px;
    text-align: center;
    h3 {
        align-items: center;
        font-size: 30px;
        padding-bottom: 20px;
    }
    img {
        height: 400px;
        width: 600px;
        padding-bottom: 20px;
        height: 200px;
        width: 350px;
    }}

</style>
