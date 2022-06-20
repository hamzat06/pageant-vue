import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    currentContestant: null,
    loading: false,
    alertMsg: "",
    msgType: "",
    loggedIn: false,
  }),
  getters: {
    getLoadingState: (state) => state.loading,
    getAlertMsg: (state) => state.alertMsg,
    getMsgType: (state) => state.msgType,
    getLoggedInState: (state) => state.loggedIn,
  },
  mutations: {
    START_LOADER: (state) => {
      state.loading = true;
    },
    STOP_LOADER: (state) => {
      state.loading = false;
    },
    SET_ALERT: (state, payload) => {
      state.alertMsg = payload.message ? payload.message : payload;
    },
    CLEAR_ALERT: (state) => {
      state.alertMsg = "";
      state.msgType = "";
    },
    SET_ALERT_TYPE: (state, payload) => {
      state.msgType = payload;
    },
    SET_CURRENT_USER: (state, payload) => {
      state.currentContestant = payload;
      state.loggedIn = true;
    },
    CLEAR_CURRENT_USER: (state) => {
      state.currentContestant = {};
      state.loggedIn = false;
    },
  },
  actions: {
    startLoader({ commit }) {
      commit("START_LOADER");
    },
    stopLoader({ commit }) {
      commit("STOP_LOADER");
    },
    dataAlert({ commit }, payload) {
      commit("SET_ALERT", payload);
    },
    clearAlert({ commit }) {
      commit("CLEAR_ALERT");
    },
    setAlertType({ commit }, payload) {
      commit("SET_ALERT_TYPE", payload);
    },
    setCurrentUser({ commit }, payload) {
      commit("SET_CURRENT_USER", payload);
    },
    clearCurrentUser({ commit }) {
      commit("CLEAR_CURRENT_USER");
    }
  },
});

export default store;
