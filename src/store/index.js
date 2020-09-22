import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import auth from './auth'
import product from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    product
  }
})
