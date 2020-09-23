import axios from 'axios'

const state = () => {
  return {
    product: [],
    category: []
  }
}
const getters = {
  getAllProduct (state) {
    return state.product
  },
  getAllCategory (state) {
    return state.category
  }
}

const mutations = {
  SET_PRODUCT (state, payload) {
    state.product = payload
  },
  SET_CATEGORY (state, payload) {
    state.category = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3007/produks/getall').then((response) => {
        context.commit('SET_PRODUCT', response.data.data)
        console.log(response.data.data)
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  },
  getCategory (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3007/category/getall').then((response) => {
        context.commit('SET_CATEGORY', response.data.data)
        console.log(response.data.data)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  insert (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('name', payload.name)
      fd.append('category_id', payload.category_id)
      fd.append('price', payload.price)
      fd.append('image', payload.image)
      axios.post('http://localhost:3007/produks/add, fd')
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
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
