<template>
  <v-card>
    <v-img :src="pokemon.img" height="200px"></v-img>
    <v-card-title>{{ pokemon.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>