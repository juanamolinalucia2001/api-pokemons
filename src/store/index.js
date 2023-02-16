import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons:[],
    carrito:[],
    coins:1000,
    search: '',
  },
  mutations:{
    SET_POKEMONS(state, pokemons) {
      state.pokemons = pokemons;
    },
    SET_SEARCH(state, search) {
      state.search = search;
    },
    buyPokemon(state, pokemon) {
      state.carrito.push(pokemon)
    },
    decrementCoins(state, amount) {
      state.coins -= amount
    },
    incrementCoins(state){
      state.coins +=200
    },
    


  },

  getters:{
    coins(state){
      return state.coins
    }

  },
  actions: {
   
    // Acción para realizar la compra de un Pokemon
    buyPokemon({ state, commit }, pokemon) {
      if (state.coins >= pokemon.price) {
        commit('buyPokemon', pokemon)
        commit('decrementCoins', pokemon.price)
      }else{
        alert('El dinero disponible no alcanza para comprar este pokemon  ')
      }
    },
    
    //busco los primeros n  los pokemons y los muestro 
    fetchPokemons(){
      for(let i=0; i<20 ; i++){
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
        .then(response =>{
        //console.log(response.data.types[1].type.name)
        const pokemon={
            name:response.data.name,
            img:response.data.sprites.front_default,
            xp:response.data.base_experience,
            ability:response.data.abilities[0].ability.name,
            hp:response.data.stats[0].base_stat,
            attack:response.data.stats[1].base_stat,
            defense:response.data.stats[2].base_stat,
            price: Math.floor(Math.random()*500)+10,
            type:response.data.types[1].type.name
            

     };
   
    this.state.pokemons.push(pokemon)
  })
  .catch(err => {
    console.log(err);
  });

  }
},

  }
})

