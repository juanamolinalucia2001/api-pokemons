<template>
  <div class="playfield container ">
    <div v-if="loading" class="spinner">
      <div>
        <img  src="@/assets/spinner.gif" />
      </div>
      <span>Loading game...</span>
    </div>

    <div v-else>
      <div class="statistics">
        <span> Coins:{{coins}}</span>
        <span>Turns: {{turns}}</span>
        <span>Pairs: {{pairsMatched}} of {{pairs}}</span>
        <button class="btn btn-outline-danger" v-if="pairsMatched === pairs" @click="resetGame">New game</button>
      </div>

      <Card v-for="card in deck" :key="card.number" :card="card" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'
import {mapMutations, mapState} from 'vuex'
export default {
  name:'Playfield',
  props: {
    pairs: Number
  },
  components: {
    Card
  },
  data: () => {
    return {
      deck: [],
      pokemons:[],
      loading: true,
      openedCards: [],
      pairsMatched: 0,
      pairVisibleInMilliseconds:1000,
      turns: 0,
    }
  },

  mounted() {
    this.getImages()
    this.$on('onCardOpen', function(card) {
      this.openCard(card)
    });
  },
  watch: {
    pokemons: function (val) {
      if (val.length === this.pairs) {
        this.generateCards()
        setTimeout(()=> this.loading = false, 1500) 
      }
    }
  },
  methods: {
    ...mapMutations(['incrementCoins']),
    cardsMatch: function(cards) {
      return cards[0].pair === cards[1].pair
    },
    closeCards: function() {
      this.deck.forEach((card) => {
        card.open = false
      })
    },
    getImages: async function() {
      while ( this.pokemons.length < this.pairs) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemons.length+1}`)
        if(response.data.sprites.front_default){
          this.pokemons.push(response.data.sprites.front_default)
        }
        
      }
      console.log(this.pokemons)
    },
    generateCards: function() {
      let cards = []
      let cardNumber = 0
      //recoro el arreglo donde tengo guardadas las imagenes
      //genero 2 tarjetas con la misma img
      this.pokemons.forEach((image, key) => {
        for (let i = 0; i < 2; i++) {
          cardNumber += 1
          cards.push({
            number: cardNumber,
            pair: key,
            image: image,
            open: false,
            matched: false
          })
        }
      })
      this.deck = this.shuffleDeck(cards)
    },
    handlePossibleMatch: function(openedCards) {
      if (this.cardsMatch(openedCards)) {
        const openedCardNumbers = [openedCards[0].number, openedCards[1].number]
        this.deck.forEach((element, index) => {
          if (openedCardNumbers.includes(element.number)) {
            this.deck[index].open = false
            this.deck[index].matched = true
          }
        })
        this.pairsMatched += 1
        this.incrementCoins()
        
      } else {
        this.closeCards()
      }
      this.turns += 1
      this.openedCards = []
    },
    openCard: function(card) {
      // Don't open the card if we already have 2 cards face up
      if (this.openedCards.length === 2) {
        return
      }
      this.deck.forEach((element, index) => {
        if (element.number === card.number) {
          this.deck[index].open = true
          return
        }
      })
      this.openedCards.push(card)
      if (this.openedCards.length === 2) {
        setTimeout(() => {
          this.handlePossibleMatch(this.openedCards)
        }, this.pairVisibleInMilliseconds)
      }
    },
    shuffleDeck: function(cards) {
      return cards
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
    },
    resetGame: function() {
      this.generateCards()
      this.turns = 0
      this.pairsMatched = 0
    }
  },
   computed:{
    ...mapState(['coins'])
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .container{
    margin-top: 50px;
    max-width: 800px !important;
    max-height: 800px !important;
  }
  .spinner {
  
    text-align: center;
  }
  .spinner span {
    font-size: 20px;
  }
  .statistics span {
    display: inline-block;
    font-size: 20px;
    margin: 20px;
  }
</style>