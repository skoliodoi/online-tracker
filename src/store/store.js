import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    text: 'Tu na razie jest ściernisko',
    boxesVisible: false,
  },
  getters: {
    displayText: state => {
      return state.text;
    },
    boxesVisible: state => {
      return state.boxesVisible;
    }
  },
  mutations: {
    addBoxDisplay: state => {
      state.boxesVisible = !state.boxesVisible;
    }
  },
  actions: {
    addBoxDisplay: context => {
      context.commit('addBoxDisplay')
    }
  }
});