<template>
 <header>
    <p class="first-banner">FREE SHIPPING: In France, from €100 of purchase, in Europe from €150, €300 for the rest of the world.</p>
    <p class="second-banner">Secure payment - 3 free samples to choose from for any order.</p>
    <div class="main-menu">

      <nav class="main-nav-bar">
        <router-link class="link" to="/">FAQ</router-link>
        <router-link class="link" to="/">+33(0)4 73 91 73 36</router-link>
        <router-link class="link" to="/">Medias</router-link>
      </nav>

      <button class="main-button"><span style="font-size:40px">PHAEDON</span> Paris</button>
      
      <nav class="main-nav-bar">
        <router-link class="link" to="/MyAccount">MY ACCOUNT</router-link><br/>
        <router-link class="link" to="/">CART</router-link><br/>
        <router-link class="link" to="/">FR</router-link><br/>
      </nav>
    </div>

  
    <nav class="nav-bar-bottom">
        <router-link class="link" to="/">PERFUMES</router-link><br/>
        <router-link class="link" to="/">SCENTED CANDLES</router-link><br/>
        <router-link class="link" to="/">HOME SCENTS</router-link><br/>
        <router-link class="link" to="/">PARFUMEUR VOYAGER</router-link><br/>
        <router-link class="link" to="/">PERFUME ADVISOR</router-link><br/>
    </nav>
 </header>
</template>

<script>
export default {
  name: 'MainHeader',
  }
</script>

<style scoped lang="scss">
  header {
    margin: 0 auto;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;

  
    .first-banner {
      font-style: italic;
      font-family: Playfair Display;
      margin: 0;
      padding: 8px 0;
 }

    .second-banner {
      background-color: black;
      padding: 8px 0;
      margin: 0;
      color: white;
      font-style: italic;
      font-family: Playfair Display, serif;
  
}

    .main-menu {
      display: flex;
      justify-content: space-between;
      padding: 40px 60px;
      background-image: url("../assets/photos/image-flower.jpg"), url("../assets/photos/image-owl.jpg");
      background-position: left, right;
      background-size: contain;
      background-repeat: no-repeat;
      height: 260px;
  
      .main-nav-bar {
        padding-top: 80px;
        display: flex;
        justify-content: space-between;
        width: 300px;

        .link {
        font-size: 17px;
        font-family: Playfair Display,serif;
        letter-spacing: 1.5px;
        text-decoration: none;
        color: #111;
        text-decoration: none;
        background-color: transparent;
      }}

      .main-button {
        height: 210px;
        width: 210px;
        border-radius: 100%;
        background-image: url("../assets/photos/image-button.png");
        background-size: cover;
        color: black;
        border: none;
        font-family: Playfair Display, serif;
        font-size: 15px;
        letter-spacing: 1.5px;
        font-weight: 450;
        padding: 0;
        color: #111;
        text-transform: uppercase;
        cursor: pointer;
        }}


    .nav-bar-bottom {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      padding: 6px 10px;
      align-items: center;
      z-index: 99;
      position: relative;
      margin-top: -30px;
      width: 1000px;
      height: 40px;
      background-color: #c4b29e;
      .link {
        font-size: 15px;
        font-family: Playfair Display, serif;
        letter-spacing: 1.5px;
        text-decoration: none;
        color: #111;
        text-decoration: none;
        background-color: transparent;
      }}}

</style>
