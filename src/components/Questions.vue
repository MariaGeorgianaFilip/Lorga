<template>
  <main>
    <div class="questions">
      <b-button v-b-toggle="'collapse-1'" class="m-1">What type of wax we use in our candles?</b-button>
      <b-collapse id="collapse-1">
      <b-card class="answer">We mixture of waxes and the nature of the wick is determined according to the composition of each perfume and after numerous tests to guarantee complete and regular combustion (approximately 50 to 60 hours for 240 g of wax) and good diffusion of the perfume.
      For this, we use mixtures of high purity mineral waxes, paraffin and rapeseed. The 100% vegetable waxes, melt and burn too quickly, can shrink in the vase, and can develop a rancid smell after a few weeks which poses a problem of maintaining quality over time. Paraffin is created using crude oil. Contrary to popular belief, crude oil is a natural product, yes! It is extracted from the earth in very deep layers, and it is the result of the decomposition of plants and animals that lived there thousands of years ago. Paraffin wax is an ultra-pure, biodegradable product, which offers practically the same advantages as soy wax, stability in addition: non-toxic, clean combustion, immiscible (does not mix with water), allowing a perfect restitution of the olfactory note without parasitic odor.</b-card>
      </b-collapse>
    </div>

    <div class="questions">
      <b-button v-b-toggle="'collapse-2'" class="m-1">Do you test your perfums on animals?</b-button>
      <b-collapse id="collapse-2">
      <b-card class="answer">European regulations have prohibited the testing of cosmetic products on animals for many years. Not to test on animals, it is simply to respect the law and the law is the same for all brands. In accordance with the law, we do not test our perfumes on animals but on human subjects. These skin tolerance tests are carried out by dermatologists.</b-card>
      </b-collapse>
    </div>

    <div class="questions">
      <b-button v-b-toggle="'collapse-3'" class="m-1">Can your perfumes cause alergies?</b-button>
      <b-collapse id="collapse-3">
      <b-card class="answer">Although our perfumes scrupulously respect the recommendations of the IFRA (International Fragrance Association), and all of them are evaluated and tested by dermatologists and toxicologists in order to demonstrate their harmlessness vis-à-vis human health, before putting them on the market, some people may be allergic to an individual, exceptional and unpredictable to one or the other of the ingredients. Paradoxically, most allergenic or photo-sensitizing products come from natural ingredients. All are clearly indicated, in accordance with European regulations in force, in the list of ingredients of the composition on the packaging of each perfume. In case of an allergic reaction, use of the perfume should be stopped immediately. You can retry a test on a small area of ​​skin such as the wrist after a few days to verify that it is indeed an allergy to perfume, but consultation with a doctor allergist is essential to determine the allergen responsible.</b-card>
      </b-collapse>
    </div>

    <div class="questions">
      <b-button v-b-toggle="'collapse-4'" class="m-1">Can i wear my perfume before exposure to the sun?</b-button>
      <b-collapse id="collapse-4">
      <b-card class="answer">The wearing of cosmetic products followed by exposure to the sun can trigger, according to people, photo-toxicity or photo-allergy reactions.
      The regulations therefore require us to determine that our products are NON photo-toxic before being marketed by laboratory tests and by removing certain substances such as furocoumarins from our formulas. It is a family of compounds that are found in many plants such as: celery, marigold, parsley, fennel, angelica, dill, anise, carrot, coriander, bergamot, lemon. The latter must therefore be purified, rid of furocoumarins before incorporation into a perfume, this is the case of bergamot for example. If technically everything is done to be able to wear your perfume in the sun safely, there is no point in doing it, we simply do not recommend it.</b-card>
      </b-collapse>
    </div>
</main>
</template>

<script>
export default {
        name: 'Questions',
        }
</script>

<style scoped lang="scss">
main {
  padding-top: 30px;
  padding-bottom: 30px;
  .questions {
    margin-left: 30px;
    margin-right: 30px;
    .btn {
      background-color: white;
      color: black;
      border: none;
      margin: 0;
      font-family: Fairplay Display, serif;
      font-size: 20px;
      letter-spacing: 2px;
      -webkit-tap-highlight-color: transparent;
      padding-bottom: 15px;
      box-shadow: none;
      .answer {
        font-family: Fairplay Display, serif;
          font-size: 18px;
}}}}
</style>