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

       <router-link to="/"><v-btn text @click="cambiarVisibilidad"><v-icon>mdi-home</v-icon></v-btn></router-link>
       <router-link to="/"><v-btn text @click="cambiarVisibilidad"> <v-icon>mdi-table</v-icon></v-btn></router-link>
       <router-link to="/game"><v-btn text> <v-icon>mdi-nintendo-game-boy</v-icon></v-btn></router-link>
       
      <v-btn  text>
          <v-img src="https://cdn-icons-png.flaticon.com/512/217/217853.png" height="20px" width="20px"></v-img>
         <span> {{coins}}</span>
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
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Footer
  },
  computed:{
    ...mapState(['coins', 'visible'])
  },
  methods:{
    ...mapMutations(['cambiarVisibilidad']),
  }
};
</script>
