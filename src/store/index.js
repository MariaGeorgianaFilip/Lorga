import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    naturalElementsCollection: [
      { 
       id: 1,
       collectionId: 'perfumes',
       collectionName: 'P1',
       image: require('@/assets/photos/parfum-air.jpg'),
       brand: 'LORGA',
       name:'Air',
       price: '55€',
       about:'Bright grapefruit and bergamot encounter honeyed neroli and soft earl grey tea for a light and floral finish.',
       top:'Neroli, Grapefruit, Bergamot, Earl Grey Tea Accord;',
       middle:'Orange Flower, Jasmine;',
       bottom:'Moss, Guaiacwood, Musk;',
       },
       { 
       id: 2,
       collectionId: 'perfumes',
       collectionName: 'P1',
       image: require('@/assets/photos/parfum-earth.jpg'),
       brand:'LORGA',
       name:'Earth',
       price:'55€',
       about: 'Introducing our first true floral scent. Earthy vetiver meets soft jasmine, tuberose and bright orange flower.',
       top:'Orangeflower Water Absolute Tunisia, Neroli Blanc;',
       middle:'Jasmine Absolute Sambac, Tuberose Accord;',
       bottom:'Cedarwood Texas, Vetiver Oil Haiti, Opulent Musks, Amber;'
       },
       { 
       id: 3,
       collectionId: 'perfumes',
       collectionName: 'P1',
       image: require('@/assets/photos/parfum-water.jpg'),
       brand: 'LORGA',
       name: 'Water',
       price: '55€',
       about: 'Watery clean freshness encounters honeyed neroli for a light and clean musky finish.',
       top: ' Fresh Marine;',
       middle: ' , Peony & Jasmine;',
       bottom: ' Ambroxan & Musk;' 
       },
       { 
       id: 4,
       image: require('@/assets/photos/parfum-fire.jpg'),
       collectionId: 'perfumes',
       collectionName: 'P1',
       brand:'LORGA',
       name:'Fire',
       price:'55€',
       about:'A rose, revealed. The unexpected burst of pink peppercorn creates a perfect juxtaposition within the softness of Turkish rose absolute and amber woods.',
       top:'Pink Peppercorn, Rose',
       middle:'Egyptian Orange Flower, Turkish Rose Absolute, Orris.',
       bottom:'Amber Woods, Ambrette Absolute, Musk'
 }],

    emotionsCollection: [ 
          { id: 5,
            image: require('@/assets/photos/happy2.png'),
            price:'30€',
            brand: 'LORGA',
            name: 'Happiness',
            about: 'A beautiful blend of white ambers and musk in our signature Joy scent. Candle made with 100% soy wax.Free of parabens, phthalates and sulfates. Vegan and cruelty free.',
            },
          { id: 6,
            image: require('@/assets/photos/power2.png'),
            brand:'LORGA',
            name:'Power',
            price:'30€',
            about:'Our newest scent now in candle form. A cozy and warm scent with notes of smooth sandalwood, violet lead, musk and cardamom.  Free of parabens, phthalates and sulfates. Vegan and cruelty free.',
            },
          { id: 7,
            image: require('@/assets/photos/wisdom2.png'),
            brand:'LORGA',
            name:'Wisdom',
            price:'30€',
            about: 'A deep, aromatic floral green scent with a spicy twist. Notes of Eucalyptus, Verbena, Rose, Cedarwood and Sandalwood. Free of parabens, phthalates and sulfates. Vegan and cruelty free. ',
            },
          { id: 8,
            image: require('@/assets/photos/knowledge2.png'),
            brand: 'LORGA',
            name:'Knowledge',
            price: '30€',
            about:'Inspired by secret gardens, a true floral lovers feast. Notes of Iris, White Orchid, Lemon, Bergamot, Musk, Vanilla and Sandalwood. Free of parabens, phthalates and sulfates. Vegan and cruelty free. ',
    }],

    hoursCollection: [   
        { id: 11,
          image: require('@/assets/photos/scent-morning.png'),
          brand: 'LORGA',
          name: 'Morning',
          price: '25€',
          about: 'Watery clean freshness encounters honeyed neroli for a light and clean musky finish.',
          },
          { id: 12,
          image: require('@/assets/photos/scent-afternoon.png'),
          brand:'LORGA',
          name:'Afternoon',
          price:'25€',
          about: 'Introducing our first true floral scent. Earthy vetiver meets soft jasmine, tuberose and bright orange flower',
          },
        { id: 13,
          image: require('@/assets/photos/scent-evening.png'),
          brand: 'LORGA',
          name:'Evening',
          price: '25€',
          about:'Bright grapefruit and bergamot encounter honeyed neroli and soft earl grey tea for a light and floral finish.',
  }],
  cart: [],
  },

  getters: {
  },

  mutations: {
    SET_USER (state, user){
      state.user = user
    },

    ADD_TO_CART_FRAGRANCE (state, fragrance) {
      state.cart.push(fragrance)
    },
    ADD_TO_CART_CANDLE (state, candle) {
      state.cart.push(candle)
    },
    ADD_TO_CART_HOMESCENT (state, homescent) {
      state.cart.push(homescent)
    },

    INCREMENT_FRAGRANCE_COUNT (state, {id}) {
      const index = state.naturalElementsCollection.findIndex(fragrance => fragrance.id === id)
      const count = state.naturalElementsCollection[index].count
      ? state.naturalElementsCollection[index].count += 1
      : 1
      const fragranceUpdated = {...state.naturalElementsCollection[index], count}
      Vue.set(state.naturalElementsCollection, index, fragranceUpdated)
    },
    INCREMENT_CANDLE_COUNT (state, {id}) {
      const index = state.emotionsCollection.findIndex(candle => candle.id === id)
      const count = state.emotionsCollection[index].count
      ? state.emotionsCollection[index].count += 1
      : 1
      const candleUpdated = {...state.emotionsCollection[index], count}
      Vue.set(state.emotionsCollection, index, candleUpdated)
    },
    INCREMENT_HOMESCENT_COUNT (state, {id}) {
      const index = state.hoursCollection.findIndex(homescent => homescent.id === id)
      const count = state.hoursCollection[index].count
      ? state.hoursCollection[index].count += 1
      : 1
      const homescentUpdated = {...state.hoursCollection[index], count}
      Vue.set(state.hoursCollection, index, homescentUpdated)
    },

    DECREMENT_FRAGRANCE_COUNT (state, {id}) {
    const index = state.naturalElementsCollection.findIndex(fragrance => fragrance.id ===id)
    const count = state.naturalElementsCollection[index].count > 0
    ? state.naturalElementsCollection[index].count -=1
    : 0
    const fragranceUpdated = {...state.naturalElementsCollection[index], count}
    Vue.set(state.naturalElementsCollection, index, fragranceUpdated)
    },
    DECREMENT_CANDLE_COUNT (state, {id}) {
      const index = state.emotionsCollection.findIndex(candle => candle.id ===id)
      const count = state.emotionsCollection[index].count > 0
      ? state.emotionsCollection[index].count -=1
      : 0
      const candleUpdated = {...state.emotionsCollection[index], count}
      Vue.set(state.emotionsCollection, index, candleUpdated)
    },
     DECREMENT_HOMESCENT_COUNT (state, {id}) {
      const index = state.hoursCollection.findIndex(homescent => homescent.id ===id)
      const count = state.hoursCollection[index].count > 0
      ? state.hoursCollection[index].count -=1
      : 0
      const candleUpdated = {...state.hoursCollection[index], count}
      Vue.set(state.hoursCollection, index, candleUpdated)
    }
    // UPDATE_BUY_QUANTITY (state, {id, direction}) {
    //   const index = state.naturalElementsCollection.findIndex(obj => obj.id === id)
    //   const fragrance = state.naturalElementsCollection[index]
    //   if (!fragrance.buy_quantity) {
    //     fragrance.buy_quantity = 0
    //   }
    //   if (direction === 'up') {
    //     fragrance.buy_quantity += 1
    //   } else {
    //     fragrance.buy_quantity -= 1
    //   }
    //   Vue.set(state.naturalElementsCollection, index, fragrance)
    // }},
  },
  actions: {
   async login ({comit}, user) {
    try {
      const{data} = await axios.post (api.login, user);
      comit('SET_USER', data);
      await router.push('/')}  
    catch(error){
      console.log(error)
  
  }}},
  modules: {
  } 
})

