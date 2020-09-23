import Vue from 'vue';
import Vuex from 'vuex';
import allBoxes from './modules/allBoxes'
import doneBoxes from './modules/doneBoxes'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    text: 'Tu na razie jest ściernisko',
    boxesVisible: false,
    newText: 'ALE BYNDZIE SANFRANSISKO'
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
  },
  modules: {
    allBoxes,
    doneBoxes
  }
});