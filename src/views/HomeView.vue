<template>
<div>
  <div class="center">
    <img src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" alt="logo pokedex">
  </div>
  <div class="content">
    <div v-for="(data, index) of pokemons" :key="index">
      <v-app id="inspire" class="size">
          <v-card
            class="mx-auto"
            max-width="344"
          >
          <v-img
            :src="data.img "
            height="200px"
          ></v-img>
      
          <v-card-title>
            {{data.name}}
          </v-card-title>
      
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
      
          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>
      
            <v-spacer></v-spacer>
      
            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
      
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
      
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-app>
    </div>
  </div>
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
  text-align: center;
  margin-top:1%;
}
.size{
  height: 600px;
}
</style>