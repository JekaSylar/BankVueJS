import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import bank from './modules/bank'
import request from "./modules/request";

const plugins = []

if (process.env.NODE_ENV === 'development') {
   plugins.push(createLogger())
}

export default createStore({
   plugins,
   state() {
      return {
         message: null
      }
   },
   mutations: {
      setMessage(state, message) {
         state.message = message
      },
      clearMessage(state) {
         state.message = null
      },
   },
   getters: {},
   actions: {
      setMessage({ commit }, message) {
         commit('setMessage', message)
         setTimeout(() => {
            commit('clearMessage')
         }, 5000)
      }
   },
   modules: { auth, bank, request }
})