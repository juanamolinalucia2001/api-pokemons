<template>
  <div class="about">
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
               <v-card-title>
                {{data.name}}
              </v-card-title>
            </v-card-container>
              
            <v-card-subtitle class="center">
                1,000 miles of wonder
            </v-card-subtitle>
  
     
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
    }
   },
   created(){
    //cuando todavia no hay nada visible
    for(let i=0; i<=20 ; i++){
          axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
      .then(response =>{
       let pokemon={
           name:response.data.name,
           img:response.data.sprites.front_default
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