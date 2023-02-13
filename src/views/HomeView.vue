<template>
  <div class="home">
    <v-row class="mt-5 mx-auto" >
      <h1>Coins: ${{coins}}</h1>
    </v-row>
  
    <v-row class="mt-5 ">
      <v-col
        v-for="pokemon in pokemons" :key="pokemon.name"
        cols="6"
        md="4"
        xs="12"
      >
          <v-card
            class="mx-auto "
            color="#26c6da"
            dark
            width="300"
            >
            
            <v-card-container class="center" >   
             
              <img :src="pokemon.img" alt="kskjnsj" >
               <v-card-title>
                <h3>{{ pokemon.name }}</h3>
              </v-card-title>

            </v-card-container>
            <v-card-title class="center">
              ${{pokemon.price}}
            </v-card-title>
           <v-card-actions class="center">
            <v-btn @click="buyPokemon(pokemon)">Comprar</v-btn>
            <v-btn @click="showModal(pokemon)">
              Ver más
            </v-btn>
          </v-card-actions>
          </v-card> 
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
            
            <v-card-container class="center" >   
             
              <img :src="selectedPokemon.img" alt="kskjnsj" >
              
              <v-card-conteiner class="cen">
                  <p>Habilidad: {{ selectedPokemon.ability }}</p>
                  <p>Experiencia base: {{ selectedPokemon.xp }}</p>
                  <p>HP: {{selectedPokemon.hp}}</p>
                  <p>Attack: {{selectedPokemon.attack}}</p>
                  <p>Defense: {{selectedPokemon.defense}}</p>
              </v-card-conteiner>
            </v-card-container>
             <v-btn color="primary" text @click="dialog = false">
            Cerrar
          </v-btn>
      </v-card> 
    </v-dialog>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

  export default {
   data(){
    return{
      dialog: false,
      selectedPokemon: {}
    }
   },
   created(){
    //cuando todavia no hay nada visible
    this.fetchPokemons();
   },
   computed:{
    ...mapState(['pokemons', 'coins'])
   },
   methods:{
    ...mapActions(['fetchPokemons','buyPokemon']),
    showModal(pokemon) {
      this.selectedPokemon = pokemon
      this.dialog = true
    }

   }
  };
</script>
<style  scoped>
.center{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}



</style>