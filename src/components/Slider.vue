<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      img-width="600"
      img-height="30"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <b-carousel-slide
        caption="Lorga Air"
        img-src= "https://i.picsum.photos/id/112/4200/2800.jpg?hmac=8Qhr0ehkFOnlKO__aKhLMQTu2qzcAten9LHpBO6uk-k">
        <img class="crop" src="../assets/photos/parfum-air.jpg" alt=""> 
        <p>Bright grapefruit and bergamot encounter honeyed neroli and soft earl grey tea for a light and floral finish.</p>
        <button>BUY ME!</button>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Lorga Water"
        img-src="https://i.picsum.photos/id/107/5760/3840.jpg?hmac=pOr5LeKE8rivWSYuheeVgYtDjCNGouPkeFjx2TsbAoY">
        <img class="crop" src="../assets/photos/parfum-water.jpg" alt=""> 
        <p>Watery clean freshness encounters honeyed neroli for a light and clean musky finish.</p>
        <button>BUY ME!</button>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Lorga Earth"
        img-src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68">
        <img class="crop" src="../assets/photos/parfum-earth.jpg" alt=""> 
        <p>Earthy vetiver meets soft jasmine, tuberose and bright orange flower.</p>
        <button>BUY ME!</button>
      </b-carousel-slide>
      
      <b-carousel-slide
        caption="Lorga Fire"
        img-src= "https://i.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8">
        <img class="crop" src="../assets/photos/parfum-fire.jpg" alt=""> 
        <p>A rose, revealed. The unexpected burst of pink peppercorn creates a perfect juxtaposition within the softness of Turkish rose absolute and amber woods.</p>
        <button>BUY ME!</button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
      return {
        slide: 0,
        sliding: null
    }},
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
}}}
</script>

<style scoped lang="scss">
caption {
  font-family: Playfair Display, serif;
   font-size: 33px;
   text-align: center;
   letter-spacing: 4px;
}
.parfum{
  width: 150px;
  height: 250px;
}
.crop {
  height: 350px;
  width: 210px;
  border-radius: 4%;
  border: 5px solid black;

}
p { 
  font-family: Playfair Display, serif;
   font-size: 20px;
   text-align: center;

}
button {
  height: 40px;
  width: 100px;
  font-family: Playfair Display, serif;
  background-color: black;
  color: white;
  border-radius: 5%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  margin-bottom: 90px;
  border: white;
  box-shadow: 10px;
}
</style>