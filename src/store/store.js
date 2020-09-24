import Vue from 'vue';
import Vuex from 'vuex';
import allBoxes from './modules/allBoxes'
import addNewBoxes from './modules/addNewBoxes'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    id: 0,
    boxesVisible: false,
  },
  getters,
  mutations,
  actions,
  modules: {
    allBoxes,
    addNewBoxes
  }
});