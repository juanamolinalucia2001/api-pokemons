import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      estado:false,
    }
  },
  mutations: {
    mostrarAlert(state, payload){
      state.loading.estado = true
    },
    ocultarAlert(state){
      state.loading.estado = false
    }
  }
})
