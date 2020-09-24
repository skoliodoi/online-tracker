import { store } from '../store'

const state = {
  wipBoxContents: [
    {
      clientName: "Rodan",
      id: 114,
    },
    {
      clientName: "Gundam",
      id: 115,
    },
  ],
}

const getters = {
  wipBoxContents: state => {
    return state.wipBoxContents;
  }
}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}