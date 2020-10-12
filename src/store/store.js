import Vue from 'vue';
import Vuex from 'vuex';
import { DateTime } from 'luxon';
import allBoxes from './modules/allBoxes'
import searchbar from './modules/searchbar'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    boxesVisible: false,
  },
  getters,
  mutations,
  actions,
  modules: {
    allBoxes,
    searchbar
  }
});