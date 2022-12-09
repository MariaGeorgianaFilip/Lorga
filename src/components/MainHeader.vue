<template>
  <header>
    <p class="first-banner">FREE SHIPPING: In Romania, from €100 of purchase, in Europe from €200, €300 for the rest of the world.</p>
    <section>
      <div class="main-menu">
        <nav class="main-nav-bar">
          <router-link class="link" data-toggle="tooltip" title="FAQ" to="/FAQ">FAQ</router-link>
          <a class="link" data-toggle="tooltip" href="tel:+40735526394">+40 735526394</a>
          <router-link class="link" data-toggle="tooltip" title="AboutUs" to="/AboutUs">ABOUT US</router-link>
        </nav>
        <router-link class="button-link" to="/">Lorga</router-link>
        <nav class="main-nav-bar">
          <router-link class="link" data-toggle="tooltip" title="My Account" to="/myaccount">MY ACCOUNT</router-link><br/>
          <router-link class="link" data-toggle="tooltip" title="Our Store" to="/Our Store">OUR STORE</router-link><br/>
          <div class="sidebar">
            <b-button v-b-toggle.sidebar-right>CART ({{cart.length}})</b-button>
            <b-sidebar id="sidebar-right" title="CART" right shadow>
              <div class="px-3 py-2">
                <ul class="cart-list">
                  <li v-for="product in cart" :key="product.id" >
                    <h4>{{product.name}}</h4>
                    <p>{{product.price}}</p>
                  </li>
                </ul>
              </div>
            </b-sidebar>
          </div>
        </nav>
      </div>
      <MainHeaderMenu />
      <div class="greek-decoration">
      </div>
    </section>
  </header>
</template>

<script>
import MainHeaderMenu from './MainHeaderMenu.vue';
export default {
  name: 'MainHeader',
  components: {
    MainHeaderMenu
  },
  computed: {
  naturalElementsCollection () {
    return this.$store.state.naturalElementsCollection
  },
  cart () {
      return this.$store.state.cart
    }}}
</script>

<style scoped lang="scss">
header {
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  .first-banner {
    font-family: Playfair Display, serif;
    padding: 5px 10px 7px;
    text-align: center;
    background-color: black;
    color: white;
    margin: 0;
    }
  section {
    background-image: url("../assets/photos/image-flower.jpg"), url("../assets/photos/image-flower.jpg");
    background-position: left, right;
    background-size: contain;
    background-repeat: no-repeat;
    .main-menu {
      display: flex;
      justify-content: space-between;
      padding: 40px 60px;
      height: 320px;
      margin-bottom: 0;
      .main-nav-bar {
        padding-top: 100px;
        display: flex;
        justify-content: space-between;
        width: 300px;
        .sidebar {
          cart-list {
            li{
              text-decoration: none;
            }
          }
          .btn {
          background-color: transparent;
          border: none;
          margin: 0;
          font-family: PlayFair Display, serif;
          color: black;
          letter-spacing: 1.5px;
          font-size: 17px;
          padding: 0 0 6px 0;
          box-shadow: none;
        }}
        .link {
          font-size: 15px;
          font-family: Playfair Display,serif;
          letter-spacing: 1.1px;
          color: #111;
          text-decoration: none;
          background-color: transparent;
        }}
        .button-link {
        height: 230px;
        width: 230px;
        padding-top: 40px;
        border-radius: 100%;
        background-image: url("../assets/photos/white-flowers.png");
        background-size: contain;
        background-repeat: no-repeat;
        color: black;
        font-family: Playfair Display, serif;
        letter-spacing: 10px;
        font-size: 45px;
        text-align: center;
        align-items: center;
        text-decoration: none;
        line-height: 1.7;
        font-weight: 600;
        box-shadow: 0px 15px 18px rgba(0, 0, 0, 0.45);
        cursor: pointer;
      }}
    .greek-decoration {
      background-image: url('../assets/photos/image-decoration.svg');
      background-repeat: repeat-x;
      background-position: 0 100%;
      background-color: transparent;
      height: 20px;
      background-size: 150px 20px;
      border-style:none;
}}}
</style>
