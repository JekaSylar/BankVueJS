import axios from '../../axios/request'
import store from '../index'

export default {
   namespaced: true,

   state() {
      return {
         requests: []
      }
   },

   getters: {
      getRequests(state) {
         return state.requests
      }
   },

   mutations: {
      setRequests(state, payload) {
         state.requests = payload
      },

      addRequests(state, payload) {
         state.requests.push(payload)
      }
   },

   actions: {
      async create({ commit, dispatch }, payload) {
         try {
            const token = store.getters['auth/token'];
            const { data } = await axios.post(`/requests.json?auth=${token}`, payload);
            commit('addRequests', { ...payload, id: data.name })
            dispatch('setMessage', {
               value: 'Заявка успешно создана',
               type: 'alert-success'
            }, { root: true })
         } catch (e) {
            dispatch('setMessage', {
               value: e.message,
               type: 'alert-danger'
            }, { root: true })
         }
      },

      async loader({ commit, dispatch }) {
         try {
            const token = store.getters['auth/token'];
            const { data } = await axios.get(`/requests.json?auth=${token}`);
            const req = Object.keys(data).map(id => ({ ...data[id], id }))
            commit('setRequests', req)
         } catch (e) {
            dispatch('setMessage', {
               value: e.message,
               type: 'alert-danger'
            }, { root: true })
         }
      },

      async loaderOne({ dispatch }, id) {
         try {
            const token = store.getters['auth/token'];
            const { data } = await axios.get(`/requests/${id}.json?auth=${token}`);
            return data
         } catch (e) {
            dispatch('setMessage', {
               value: e.message,
               type: 'alert-danger'
            }, { root: true })
         }
      },

      async delete({ dispatch }, id) {
         try {
            const token = store.getters['auth/token'];
            await axios.delete(`/requests/${id}.json?auth=${token}`);
            dispatch('setMessage', {
               value: 'Заявка удалена',
               type: 'alert-success'
            }, { root: true })
         }
         catch (e) {
            dispatch('setMessage', {
               value: e.message,
               type: 'alert-danger'
            }, { root: true })
         }
      },

      async update({ dispatch }, request) {
         try {
            const token = store.getters['auth/token'];
            await axios.put(`/requests/${request.id}.json?auth=${token}`, request);
            dispatch('setMessage', {
               value: 'Заявка обновлена',
               type: 'alert-success'
            }, { root: true })
         }
         catch (e) {
            dispatch('setMessage', {
               value: e.message,
               type: 'alert-danger'
            }, { root: true })
         }
      }

   }

}