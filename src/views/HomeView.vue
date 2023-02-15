<template>
  <div app>
   
    
     <v-row class="d-flex-inline justify-center mt-5">
      <v-col cols="4"
         >
          <v-text-field
          v-model="search"
          label="Buscar Pokemon por nombre""
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          @input="filteredPokemons"
        >
        </v-text-field>
      
      </v-col>
        
    </v-row>
    
    <v-row class="mt-5 ">
      <v-col
        v-for="pokemon in filteredPokemons" :key="pokemon.name"
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
        <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
                  <p> <b> Habilidad: </b>{{ selectedPokemon.ability }}</p>
                  <p><b>Experiencia base:</b>  {{ selectedPokemon.xp }}</p>
                  <p><b>HP:</b>{{selectedPokemon.hp}}</p>
                  <p><b>Attack:</b> {{selectedPokemon.attack}}</p>
                  <p><b>Defense: </b>{{selectedPokemon.defense}}</p>
            </div>
             <div class="col-md-6 mt-5" >
              <h4 class="mr-3">{{selectedPokemon.name}}</h4>
              <div class="redondo">
                <img :src="selectedPokemon.img" alt="imagenPokemon">
              </div>
              
            </div>
                <v-btn color="primary" text @click="dialog = false">
            Cerrar
          </v-btn>
          </div>
    
         </div>
        </div>

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
      selectedPokemon: {},
      search:''
    }
   },
   created(){
    //cuando todavia no hay nada visible
    this.fetchPokemons();
   },
   computed:{
    ...mapState(['pokemons', 'coins']),

     filteredPokemons(){
      return this.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
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