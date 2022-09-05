<template>
    <div class="app">
        <carousel>
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';

export default {
    name:'CarouselApp',
    components: { 
        Carousel, 
        CarouselSlide
    },

    data(){
        return {
            slides: [ 'https://phaedonparis.com/app/uploads/2021/12/PHAEDON_BAPTEME-AMBRE_SLIDER.jpg',
                       'https://phaedonparis.com/app/uploads/2020/09/PHAEDON_TABAC-3.jpg'],
                      
  
    }}}
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }    
    .carousel {
        position:relative;
        overflow: hidden;
        width:100%;
        height:600px;
        z-index:10;
    }
    .button {
        background-color:white;
        opacity: 35%;
        margin:none;
        border: none;
        color:#FFF;
        cursor: pointer;
        height:100px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .buttn:hover {
        cursor: pointer;
    }
    .button:focus{
        outline:none;
    }
    .button-next {
        top:50%;
        right:0;
        background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzEwMHB4JyB3aWR0aD0nMTAwcHgnICBmaWxsPSIjMDAwMDAwIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik00OS41MDk2NzM5LDM1LjA3NjMwMyBMNDkuNTYwNDY5MiwzNSBMNTEuNjQxNTE4LDM2LjM4NTM2NDkgTDg0LjkzODI5ODksNTguNTUxMjAzIEw4Ny4wMTkzNDc4LDU5LjkzNjU2NzggTDg0LjI0ODYxOCw2NC4wOTg2NjU1IEw4Mi4xNjc1NjkyLDYyLjcxMzMwMDYgTDQ5LjUwOTY3MzksNDAuOTcyNzcyIEwxNi44NTE3Nzg2LDYyLjcxMzMwMDYgTDE0Ljc3MDcyOTgsNjQuMDk4NjY1NSBMMTIsNTkuOTM2NTY3OCBMMTQuMDgxMDQ4OCw1OC41NTEyMDMgTDQ3LjM3NzgyOTgsMzYuMzg1MzY0OSBMNDkuNDU4ODc4NiwzNSBMNDkuNTA5NjczOSwzNS4wNzYzMDMgWiIgZmlsbD0iIzJlMjkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNTA5Njc0LCA0OS41NDkzMzMpIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5LjUwOTY3NCwgLTQ5LjU0OTMzMykgIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo=);
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        transform: rotate(180deg);
        
    }
    .button-prev {
        top:50%;
        left:0;
        background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzEwMHB4JyB3aWR0aD0nMTAwcHgnICBmaWxsPSIjMDAwMDAwIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik00OS41MDk2NzM5LDM1LjA3NjMwMyBMNDkuNTYwNDY5MiwzNSBMNTEuNjQxNTE4LDM2LjM4NTM2NDkgTDg0LjkzODI5ODksNTguNTUxMjAzIEw4Ny4wMTkzNDc4LDU5LjkzNjU2NzggTDg0LjI0ODYxOCw2NC4wOTg2NjU1IEw4Mi4xNjc1NjkyLDYyLjcxMzMwMDYgTDQ5LjUwOTY3MzksNDAuOTcyNzcyIEwxNi44NTE3Nzg2LDYyLjcxMzMwMDYgTDE0Ljc3MDcyOTgsNjQuMDk4NjY1NSBMMTIsNTkuOTM2NTY3OCBMMTQuMDgxMDQ4OCw1OC41NTEyMDMgTDQ3LjM3NzgyOTgsMzYuMzg1MzY0OSBMNDkuNDU4ODc4NiwzNSBMNDkuNTA5NjczOSwzNS4wNzYzMDMgWiIgZmlsbD0iIzJlMjkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNTA5Njc0LCA0OS41NDkzMzMpIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ5LjUwOTY3NCwgLTQ5LjU0OTMzMykgIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo=');
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
       width: 100%;
       height: 100%;
    }
</style>