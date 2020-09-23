const state = {
  doneBoxContents: [
    {
      clientName: "Optimus Prime",
      id: 120,
    },
    {
      clientName: "Megatron",
      id: 121,
    },
  ],
}

const getters = {
  doneBoxContents: state => {
    return state.doneBoxContents;
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