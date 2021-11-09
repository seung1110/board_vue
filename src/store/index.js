import Vue from "vue";
import Vuex from "vuex";
import axiosConfig from "../apis/axiosConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    authToken: "",
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    },
  },
  actions: {
    saveAuth(context, payload) {
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);

      sessionStorage.setItem("userId",payload.userId);
      sessionStorage.setItem("authToken",payload.authToken);

      axiosConfig.addAuthHeader(payload.authToken);
    },

    loadAuth(context){
      if(sessionStorage.getItem("userId") != null){
        context.commit("setUserId",sessionStorage.getItem("userId"));
      }
      if(sessionStorage.getItem("authToken") != null){
        context.commit("setAuthToken",sessionStorage.getItem("authToken"));
      }

      if(context.state.authToken != ""){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },
    deleteAuth(context){
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      context.commit("setUserId","");
      context.commit("setAuthToken","");
      axiosConfig.removeAuthHeader();
    }
  },
  modules: {},
});
