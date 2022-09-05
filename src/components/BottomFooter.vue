<template>
    <section class="bottom-footer">
            <h3>PHAEDON <br/> PARIS</h3>
            <nav>
                <ul>
                    <li v-for="item in list">
                        <router-link :to="item.path">
                        {{item.name}}
                    </router-link>
                    </li>
                </ul>
            </nav>
    </section>
</template>

<script>
export default { name: 'BottomFooter',
       data () {
        return {
            list: [
                {  name:'Home',
                    path: '/' 
                },
                {name: 'Perfumes',
                 path: '/Perfumes'
                },
                {name: 'Best Sellers',
                 path: '/BestSeller'
                },
                {name: 'Scented candles',
                 path: '/Scentedcandles'
                },
                {name: 'Scented candles',
                 path: '/ScentedCandles'
                },
                {name: 'Home scents',
                 path: '/PerfumesAdvisors'
                }],

        }
    }
}
</script>

<style scoped lang="scss">
.bottom-footer {
    h3{ padding: 0 80px;


    }
    background-color: black;
    color: white;
    display:flex;
    height: 400px;
    nav{
    margin: 0;
    display: block;;
     ul {
        display: block;
        li{
            display: block;
            list-style-type: none;
            text-align: left;
            a
            {text-decoration: none;
            color:white;
            cursor: pointer;
            font-family: Playfair Display, serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 30px;
    

             }
          }}}}
</style>
