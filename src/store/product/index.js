import axios from 'axios'

const state = () => {
  return {
    token: localStorage.getItem('token'),
    product: ''
  }
}
// const getters = {
//     getAllProducts (state) {
//         return state.all
//     }
// }

const mutations = {
  SET_ALL_PRODUCT (state, payload) {
    state.product = payload
  }
}

const actions = {
  getAllProducts (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3007/produks/getall').then((response) => {
        context.commit('SET_ALL_PRDUCT', response.data)
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
  mutations
}
