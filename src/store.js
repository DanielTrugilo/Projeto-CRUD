import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    strict: true,
    login: false,
    usuario: {
      id: "",
      email: "",
      nome: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      bairro: "",
      estado: "",
      cidade: ""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload){
      state.usuario = Object.assign(state.usuario, payload);
    }
  },
  actions: {
    getUsuario(context, payload){
        api.get(`/usuario/${payload}`).then(resposta => {
            context.commit("UPDATE_USUARIO", resposta.data);
            context.commit("UPDATE_LOGIN", true);
        })
    }
  },
});
