const state = {
  name: 'Some name',
  allBoxContents: [
    {
      clientName: "Godzilla",
      id: 111,
      status: "In Progress",
      mercerClient: ''
    },
    {
      clientName: "Ghidora",
      id: 112,
      status: "Pending"
    },
    {
      clientName: "Mothra",
      id: 113,
      status: "Pending"
    },
    {
      clientName: "Rodan",
      id: 114,
      status: "In Progress"
    },
    {
      clientName: "Gundam",
      id: 115,
      status: "Pending"
    },
    {
      clientName: "EVA-01",
      id: 116,
      status: "In Progress"
    },
    {
      clientName: "Totoro",
      id: 117,
      status: "In Progress"
    },
    {
      clientName: "Mechagodzilla",
      id: 118,
      status: "In Progress"
    },
    {
      clientName: "Bumblebee",
      id: 119,
      status: "In Progress"
    },
    {
      clientName: "Optimus Prime",
      id: 120,
      status: "In Progress"
    },
    {
      clientName: "Megatron",
      id: 121,
      status: "Pending"
    },
  ],
}

const getters = {
  allBoxContents: state => {
    return state.allBoxContents;
  },
  name: state => {
    return state.name;
  }
}

const mutations = {
  checkup: (state, payload) => {
    console.log(payload.property)
  },
  updateContents: (state, payload) => {
    for (var i = 0; i<state.allBoxContents.length; i++) {
      if (state.allBoxContents[i].id == payload.id) {
        state.allBoxContents[i][payload.property] = payload.value
      }
    }
  }
}

const actions = {
  updateContents: ({commit}, payload) => {
    commit('updateContents', payload)
  }
}

export default {
  state,
  getters,
  mutations
}