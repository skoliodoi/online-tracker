import Vue from 'vue';
import Vuex from 'vuex';
import allBoxes from './modules/allBoxes'
import doneBoxes from './modules/doneBoxes'
import wipBoxes from './modules/wipBoxes'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    id: 0,
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
  mutations,
  actions,
  modules: {
    allBoxes,
    doneBoxes,
    wipBoxes
  }
});