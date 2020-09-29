const state = {
  searchbar: ""
}

const getters = {
  searchbar: state => {
    return state.searchbar
  }
}

const mutations = {
  updateSearch: (state, payload) => {
    state.searchbar = payload;
  },
  clearSearch: state => {
    state.searchbar = "";
  }
}

const actions = {
  updateSearch: ({commit}, payload) => {
    commit('updateSearch', payload)
  },
  clearSearch: ({commit}) => {
    commit('clearSearch')
  }
}

export default {
  state, 
  getters,
  mutations,
  actions
}