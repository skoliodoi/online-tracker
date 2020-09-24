const state = {
  pendingBoxContents: [
    {
      clientName: "EVA-01",
      id: 116,
    },
    {
      clientName: "Totoro",
      id: 117,
    },
  ],
}

const getters = {
  pendingBoxContents: state => {
    return state.pendingBoxContents;
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