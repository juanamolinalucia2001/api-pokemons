<template>
  <div class="home">
    <v-row class="mt-5 ">
      <v-col
        v-for="(data, index) in pokemons" :key="index"
        cols="6"
        md="4"
        xs="12"
      >
           <v-card
            class="mx-auto "
            color="#26c6da"
            dark
            max-width="300">
            <v-card-container class="center"  >
              <img :src="data.img" alt="kskjnsj">
               <v-card-title>
                {{data.name}}
              </v-card-title>
            </v-card-container>
              
            <v-card-subtitle class="center">
                #{{index}}
            </v-card-subtitle>

        
      <v-item-group class="center">
          <v-item v-slot="{ active, toggle }" >
              <v-btn
                :color="active ? 'purple darken-4 ' : 'red'"
                class="d-flex align-center justify-center"
                dark
                :height="active ? '80' : '50'"
                :width="active ? '100%' : '100'"
                @click="toggle"
              >
                power
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="flex-grow-1 text-right "
          
                  >
                   <p>Ability : {{data.ability}}</p> 
                   <p>Experience : {{data.xp}}xp</p>
                  </div>
                </v-scroll-y-transition>
              </v-btn>
            </v-item>
      </v-item-group>



          </v-card>

          
      </v-col>
    </v-row>
  </div>
</template>

<script>

import axios from 'axios';

  export default {
   data(){
    return{
      pokemons:[],
      
    }
   },
   created(){
    //cuando todavia no hay nada visible
    for(let i=0; i<=20 ; i++){
          axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
      .then(response =>{
      console.log(response.data)
       let pokemon={
           name:response.data.name,
           img:response.data.sprites.front_default,
           xp:response.data.base_experience,
           ability:response.data.abilities[0].ability.name,
          
           
       };

       this.pokemons.push(pokemon)
    })
    .catch(err => {
      console.log(err);
    });
    console.log(this.pokemons)

    }

    
   },
   methods:{
    
   }
  };
</script>
<style  scoped>
.center{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:2%;
}

</style>