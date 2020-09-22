const state = {
  newText: 'ALE BYNDZIE SANFRANSISKO',
  allBoxContents: [
    {
      clientName: "Godzilla",
      id: 111,
    },
    {
      clientName: "Ghidora",
      id: 112,
    },
    {
      clientName: "Mothra",
      id: 113,
    },
    {
      clientName: "Rodan",
      id: 114,
    },
    {
      clientName: "Gundam",
      id: 115,
    },
    {
      clientName: "EVA-01",
      id: 116,
    },
    {
      clientName: "Totoro",
      id: 117,
    },
    {
      clientName: "Mechagodzilla",
      id: 118,
    },
    {
      clientName: "Bumblebee",
      id: 119,
    },
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
  newText: state => {
    return state.newText
  },
  allBoxContents: state => {
    return state.allBoxContents;
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