import axios from "../../axios/request";
import store from "../index";

export default {
  namespaced: true,

  state() {
    return {
      tasks: [],
    };
  },

  getters: {
    getTask(state) {
      return state.tasks;
    },
  },

  mutations: {
    setTask(state, payload) {
      state.tasks = payload;
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.post(`/tasks.json?auth=${token}`, payload);

        commit("addTask", { ...payload, id: data.name });
        dispatch(
          "setMessage",
          {
            value: "Задача успешно создана",
            type: "alert-success",
          },
          { root: true }
        );
      } catch (e) {
        dispatch(
          "setMessage",
          {
            value: e.message,
            type: "alert-danger",
          },
          { root: true }
        );
      }
    },
    async loader({ commit, dispatch }) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.get(`/tasks.json?auth=${token}`);
        const task = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setTask", task);
      } catch (e) {
        dispatch(
          "setMessage",
          {
            value: e.message,
            type: "alert-danger",
          },
          { root: true }
        );
      }
    },
    async delete({ dispatch }, id) {
      try {
        const token = store.getters["auth/token"];
        await axios.delete(`/tasks/${id}.json?auth=${token}`);
        dispatch(
          "setMessage",
          {
            value: "Задача удалена",
            type: "alert-success",
          },
          { root: true }
        );
      } catch (e) {
        dispatch(
          "setMessage",
          {
            value: e.message,
            type: "alert-danger",
          },
          { root: true }
        );
      }
    },
  },
};
