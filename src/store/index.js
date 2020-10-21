import Vue from 'vue';
import Vuex from 'vuex';
import allBoxes from './modules/allBoxes'
import auth from './modules/auth.js'
import searchbar from './modules/searchbar'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    boxesVisible: false,
  },
  getters,
  mutations,
  actions,
  modules: {
    allBoxes,
    searchbar,
    auth
  }
});

export default store;