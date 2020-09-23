import axios from 'axios'

const state = () => {
  return {
    product: []
  }
}
const getters = {
  getAllProduct (state) {
    return state.product
  }
}

const mutations = {
  SET_PRODUCT (state, payload) {
    state.product = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3007/produks/getall').then((response) => {
        context.commit('SET_PRODUCT', response.data.data)
        console.log(response.data.data)
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
