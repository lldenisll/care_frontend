import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
     accessToken: null,
     refreshToken: null,
     email: null,
     APIData: '',
  },
  mutations: {
    updateStorage (state, { access, refresh,email }) {
      state.accessToken = access
      state.refreshToken = refresh
      state.email = email
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    }
  },
  actions: {
    userLogout (context) {
      if (context.getters.loggedIn) {
          context.commit('destroyToken')
      }
    },
    userLogin (context, usercredentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.10.222:8000/api-token/',  {
          timeout: 1000,
          email: usercredentials.email,
          password: usercredentials.password
        })
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh, email:usercredentials.email }) 
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})