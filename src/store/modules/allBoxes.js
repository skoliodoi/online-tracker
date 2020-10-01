import { DateTime } from "luxon";

const state = {
  linkName: '',
  allBoxContents: [
    {
      clientName: "Godzilla",
      id: 111,
      status: "In Progress",
      mercerClient: '',
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
  link: state => {
    return state.linkName;
  },
  filteredList: state => {
    if (state.linkName == "In Progress") {
      return state.allBoxContents.filter((element) => {
        return element.status.match("In Progress");
      });
    } else if (state.linkName == "Pending") {
      return state.allBoxContents.filter((element) => {
        return element.status.match("Pending");
      });
    } else if (state.linkName == "Done") {
      return state.allBoxContents.filter((element) => {
        return element.status.match("Done");
      });
    } else {
      return state.allBoxContents
    }
  }
}

const mutations = {
  updateContents: (state, payload) => {
    for (var i = 0; i<state.allBoxContents.length; i++) {
      if (state.allBoxContents[i].id == payload.id) {
        if (payload.input == "date") {
          state.allBoxContents[i][payload.property] = DateTime.fromISO(payload.value).toLocaleString(DateTime.DATE_HUGE);
        } else {
          state.allBoxContents[i][payload.property] = payload.value
        }
      }
    }
  },
  changeLink: (state, payload) => {
    state.linkName = payload
  }
}

const actions = {
  updateContents: ({commit}, payload) => {
    commit('updateContents', payload)
  },
  changeLink: ({commit}, payload) => {
    commit('changeLink', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}