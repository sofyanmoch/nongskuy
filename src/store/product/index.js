import axios from 'axios'

const state = () => {
  return {
    product: [],
    category: [],
    isLoading: false,
    detail: {
      data: []
    }
  }
}
const getters = {
  getAllProduct (state) {
    return state.product
  },
  getAllCategory (state) {
    return state.category
  },
  getDetail (state) {
    return state.detail
  }
}

const mutations = {
  SET_PRODUCT (state, payload) {
    state.product = payload
  },
  SET_CATEGORY (state, payload) {
    state.category = payload
  },
  SET_DETAIL (state, payload) {
    state.detail.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  }
}

const actions = {
  getProduct (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/produks/getall').then((response) => {
        context.commit('SET_PRODUCT', response.data.data)
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  },
  searchData (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`http://54.161.214.210:3008/produks/getall?name=${payload}`)
        .then((response) => {
          resolve()
          context.commit('SET_PRODUCT', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  sortLates (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/produks/getall?type=desc')
        .then((response) => {
          resolve()
          context.commit('SET_PRODUCT', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  sortHigherPrice (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/produks/getall?sortby=price&type=desc')
        .then((response) => {
          resolve()
          context.commit('SET_PRODUCT', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  sortLowerPrice (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/produks/getall?sortby=price&type=asc')
        .then((response) => {
          resolve()
          context.commit('SET_PRODUCT', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  sortAsc (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/produks/getall?sortby=name&type=asc')
        .then((response) => {
          resolve()
          context.commit('SET_PRODUCT', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  sortDesc (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/produks/getall?sortby=name&type=desc')
        .then((response) => {
          resolve()
          context.commit('SET_PRODUCT', response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  getDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`http://54.161.214.210:3008/produks/getdetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data.data)
        resolve(response.data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  getCategory (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://54.161.214.210:3008/category/getall').then((response) => {
        context.commit('SET_CATEGORY', response.data.data)
        // console.log(response.data.data)
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
      axios.post('http://54.161.214.210:3008/produks/add', fd)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  update (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('name', payload.name)
      fd.append('category_id', payload.category)
      fd.append('price', payload.price)
      fd.append('image', payload.image)
      axios.patch(`http://54.161.214.210:3008/produks/edit/${payload.id}`, fd).then((result) => {
        resolve(result.data.message)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  delete (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`http://54.161.214.210:3008/produks/delete/${payload}`).then((response) => {
        resolve(response)
        location.reload()
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
