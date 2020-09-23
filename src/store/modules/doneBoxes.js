import { store } from '../store'

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
  addInput: (state, payload) => {
    state.doneBoxContents.unshift({
      id: store.state.id += 1,
      clientName: payload.clientName,
      confirmed: payload.confirmed,
      briefType: payload.briefType,
      setStatus: payload.setStatus,
      whoFor: payload.whoFor,
      whoWith: payload.whoWith,
      startDate: payload.startDate,
      meetDate: payload.meetDate,
      deadline: payload.deadline,
      delDate: payload.delDate,
    })
  }
}

const actions = {
  addInput: ({commit}, payload) => {
    commit('addInput', payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}