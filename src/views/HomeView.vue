<template>
  <div class="home">
    <v-row class="mt-5">
      <v-col
        v-for="(data, index) in pokemons" :key="index"
        cols="6"
        md="4"
      >
           <v-card
            class="mx-auto"
            color="#26c6da"
            dark
            max-width="300">
            <v-card-container class="center" >
              <img :src="data.img" alt="kskjnsj">
               <v-card-title large>
                {{data.name}}
              </v-card-title>
            </v-card-container>
              
            <v-card-subtitle class="center">
                #{{index}}
            </v-card-subtitle>

          <div>
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
    > 

      
      <h4>Base experience : {{data.xp}}XP</h4>
      <h4>Ability : {{data.ability}}</h4>
      
    </v-alert>
    <div class="text-center">
      <v-btn
        v-if="!alert"
        color="deep-purple accent-4"
        dark
        @click="alert = true"
      >
        Power
      </v-btn>
    </div>
  </div>
            
  
     
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
      show:false,
      pokemons:[],
      alert:false
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
           ability:response.data.abilities[0].ability.name
           
       };

       this.pokemons.push(pokemon)
    })
    .catch(err => {
      console.log(err);
    });
    console.log(this.pokemons)

    }

    
   },
  };
</script>
<style  scoped>
.center{
  display: flex;
  justify-content: center;
  margin-top:2%;
}

</style>