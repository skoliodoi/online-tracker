import { DateTime } from "luxon";

const state = {
  linkName: '',
  allBoxContents: [
    {
      clientName: "Godzilla",
      id: 111,
      status: "In Progress",
      mercerClient: '',
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Ghidora",
      id: 112,
      status: "Pending",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Mothra",
      id: 113,
      status: "Pending",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Rodan",
      id: 114,
      status: "In Progress",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Gundam",
      id: 115,
      status: "Pending",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "EVA-01",
      id: 116,
      status: "In Progress",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Totoro",
      id: 117,
      status: "In Progress",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Mechagodzilla",
      id: 118,
      status: "In Progress",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Bumblebee",
      id: 119,
      status: "In Progress",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Optimus Prime",
      id: 120,
      status: "In Progress",
      progress: {},
      tillDelivery: "",
      progressBar: 0
    },
    {
      clientName: "Megatron",
      id: 121,
      status: "Pending",
      progress: {},
      tillDelivery: "",
      progressBar: 0
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
        if (payload.input == "date" && payload.property == "delivery") {
          state.allBoxContents[i][payload.property] = DateTime.fromISO(payload.value).toLocaleString(DateTime.DATE_HUGE);
          state.allBoxContents[i].tillDelivery = DateTime.fromISO(payload.value).toRelative();
        } else if (payload.input == "date"){
          state.allBoxContents[i][payload.property] = DateTime.fromISO(payload.value).toLocaleString(DateTime.DATE_HUGE);
        } else{
          state.allBoxContents[i][payload.property] = payload.value;
        }
      }
    }
  },
  updateProgressBar: (state, payload) => {
    for (var i = 0; i<state.allBoxContents.length; i++) {
      if (state.allBoxContents[i].id == payload.id) {
        if (payload.updateProgress){
          if (payload.value == "Ok"||payload.value=="N/A"){
            state.allBoxContents[i].progress[payload.property] = payload.value;
          } else {
            delete state.allBoxContents[i].progress[payload.property]
          }
          state.allBoxContents[i].progressBar = Object.keys(state.allBoxContents[i].progress).length
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