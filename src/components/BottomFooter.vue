<template>
    <section class="bottom-footer">
            <p class="logo-bottom">Lorga</p> 
            <nav>
                <ul>
                    <li class="title">STORE</li>
                    <li v-for="item in list">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li class="title">ORDER</li>
                    <li v-for="item in list1">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li class="title">ABOUT US</li>
                    <li v-for="item in list2">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li class="title">FOLLOW US</li>
                    <li v-for="item in list3">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </nav>
    </section>
</template>

<script>
export default { 
    name: 'BottomFooter',
    data () {
        return {
            list: [
                {name: 'Perfumes',
                 path: '/Perfumes'
                },
                {name: 'Scented candles',
                 path: '/ScentedCandles'
                },
                {name: 'Home scents',
                 path: '/HomeScents'
                }],
            list1:[
                {  name:'Contact Us',
                    path: '/ContactUs' 
                },
                {name: 'FAQ',
                 path: '/FAQ'
                },
                {name: 'My Account',
                 path: '/MyAccount'
                }],
            list2:[
                {  name:'Lorga Bucharest',
                    path: '/LorgaBucharest' 
                },
                {name: 'Recycling Sorting & Environment',
                 path: '/Recycling Sorting & Environment'
                }],
            list3: [
                {  name:'Facebook',
                    path: '/Facebook'
                },
                {name: 'Instagram',
                 path: '/Istagram'
                }],
             }}}
</script>

<style scoped lang="scss">
.bottom-footer {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: black;
    height: 220px;
    display: flex;
    justify-content: center;
   .logo-bottom {color: white;
        font-family: Playfair Display, serif;
        letter-spacing: 4px;
        font-size: 50px;
        font-weight: bold;
        letter-spacing: 8px;
        text-align: center;
        margin: 0 auto;
    }
    nav {
        ul {
            padding-top: 20px;
            .title {
                color: white;
                font-family: PlayFair Display, serif;
                font-size: 18px;
                font-weight: bold;
            }  
            li {
                display: block;
                list-style-type: none;
                text-align: left;
                width: 150px;
                a {
                    text-decoration: none;
                    color: white;
                    cursor: pointer;
                    font-family: Playfair Display, serif;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 30px;}
          }}}}
</style>
