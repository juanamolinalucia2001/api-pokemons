<template>
  <v-app>
    <v-app-bar
      app
      color="indigo darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/juanamolinalucia2001/api-pokemons"
        target="_blank"
        text
      >
        <span class="mr-2">Repositorio del proyecto</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Footer
  },
};
</script>
