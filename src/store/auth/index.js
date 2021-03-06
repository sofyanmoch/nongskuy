/* eslint-disable handle-callback-err */
import axios from 'axios'
import { URL } from '../../helper/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/login`, payload).then((response) => {
        localStorage.setItem('token', response.data.data.token)
        resolve(response.data.message)
      }).catch((err) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Gagal Login')
      })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/register`, payload).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Gagal Login')
      })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
