import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    text: 'Tu na razie jest ściernisko'
  },
  getters: {
    displayText: state => {
      return state.text;
    }
  }
});