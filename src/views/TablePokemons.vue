
<template>
<div class="container" >
 
     <v-col cols="4">
        <v-text-field
          v-model="search"
          label="Buscar Pokemon por nombre"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          @input="filterPokemons"
        >
        </v-text-field>
     </v-col> 
    <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Pokemon
          </th>
          <th class="text-left">
            Type
          </th>
          <th>
            Attack
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
           v-for="(pokemon, index) in filteredPokemons" :key="index"
        >
          <td><img :src="pokemon.img" alt="kskjnsj" >{{pokemon.name}}</td>
          <td>{{pokemon.type}}</td>
          <td>{{pokemon.attack}}</td>
          <td><v-btn class="btn btn-danger" @click="showModal(pokemon)">info</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
   <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
                  <p> <b> Habilidad: </b>{{ selectedP.ability }}</p>
                  <p><b>Experiencia base:</b>  {{ selectedP.xp }}</p>
                  <p><b>HP:</b>{{selectedP.hp}}</p>
                  <p><b>Attack:</b> {{selectedP.attack}}</p>
                  <p><b>Defense: </b>{{selectedP.defense}}</p>
            </div>
             <div class="col-md-6 mt-5" >
              <h4 class="mr-3">{{selectedP.name}}</h4>
              <div class="redondo">
                <img :src="selectedP.img" alt="imagenPokemon">
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
    name:'Table',
    data(){
        return{
            search:'',
            dialog:false,
            selectedP: {},
        }
    },
    computed:{
      ...mapState(['pokemons']),
      filteredPokemons(){
      return this.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    },
    methods:{
        ...mapActions(['fetchPokemons']),
      showModal(pokemon) {
      this.selectedP = pokemon
      this.dialog = true
    },
    filterPokemons() {
      this.filteredPokemons = this.pokemons.filter(pokemon => {
       return pokemon.name.toLowerCase().includes(this.search.toLowerCase())
  })
}
    ,
    },
    created(){
        this.fetchPokemons();
    }
}
</script>
<style>
.redondo{
  border: 1px solid #2ECC71;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  background-color: #2ECC71;
}
</style>