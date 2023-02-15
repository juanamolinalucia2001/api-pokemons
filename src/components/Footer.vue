<template>
  <v-footer
    dark
    padless
    class="mt-10"
    >
    <v-card
      class="flex"
      flat
      tile
      
    >
      <v-card-title  class="indigo darken-4">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="data in icons"
          :key="data.id"
          class="mx-4"
          dark
          icon
           :href='data.link'
            target="_blank"
        >
           
          <v-icon size="24px">
         {{ data.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Pokedex</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name:'Footer',
    data: () => ({
      icons: [
        {id:1,icon:'mdi-facebook',link:'https://www.facebook.com/PokemonOficialLatAm/'},
        {id:2,icon:'mdi-twitter',link:'https://twitter.com/Pokemon_ES_ESP'},
        {id:3,icon:'mdi-instagram',link:'https://www.instagram.com/PokemonESP/'}
      ],
    }),
  }
</script>