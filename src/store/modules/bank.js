import axios from "axios"

export default {
   namespaced: true,

   state() {
      return {
         currency: []
      }
   },
   getters: {
      getCurrency(state) {
         return state.currency
      }
   },
   mutations: {
      setCurrency(state, payload) {
         state.currency = payload
      }
   },

   actions: {
      async loaderCurrency({ commit, dispatch }) {

         try {

            const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
            const { data } = await axios.get(url)
            commit('setCurrency', data)

         } catch (e) {
            dispatch('setMessage', {
               value: 'Не удалось подключиться к серверу банку',
               type: 'alert-danger'
            }, { root: true })
            throw new Error()
         }
      }
   }
}