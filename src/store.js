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
    },
    usuario_produtos: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload){
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload){
      state.usuario_produtos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload){
      state.usuario_produtos.unshift(payload);
    }
  },
  actions: {
    getUsuario(context, payload){
        return api.get(`/usuario/${payload}`).then(resposta => {
            context.commit("UPDATE_USUARIO", resposta.data);
            context.commit("UPDATE_LOGIN", true);
        })
    },
    getUsuarioProdutos(context){
      api.get(`/produto?usuario_id=${context.state.usuario.id}`).then(resposta => {
        context.commit("UPDATE_USUARIO_PRODUTOS", resposta.data)
      });
    },
    criarUsuario(context, payload){
      context.commit("UPDATE_USUARIO", {id: payload.email });
      return api.post("/usuario/", payload);
    },
    deslogarUsuario(context){
      context.commit("UPDATE_USUARIO", {
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
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
});
