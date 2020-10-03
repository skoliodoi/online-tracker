import { DateTime } from "luxon";

const state = {
  linkName: '',
  allBoxContents: [
    {
      clientName: "Godzilla",
      id: 111,
      status: "In Progress",
      mercerClient: '',
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Ghidora",
      id: 112,
      status: "Pending",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Mothra",
      id: 113,
      status: "Pending",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Rodan",
      id: 114,
      status: "In Progress",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Gundam",
      id: 115,
      status: "Pending",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "EVA-01",
      id: 116,
      status: "In Progress",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Totoro",
      id: 117,
      status: "In Progress",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Mechagodzilla",
      id: 118,
      status: "In Progress",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Bumblebee",
      id: 119,
      status: "In Progress",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Optimus Prime",
      id: 120,
      status: "In Progress",
      progress: [],
      tillDelivery: ""
    },
    {
      clientName: "Megatron",
      id: 121,
      status: "Pending",
      progress: [],
      tillDelivery: ""
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
          state.allBoxContents[i].tillDelivery = DateTime.fromISO(payload.value).toRelative();
        } else if (payload.input == "date"){
          state.allBoxContents[i][payload.property] = DateTime.fromISO(payload.value).toLocaleString(DateTime.DATE_HUGE);
        } else{
          state.allBoxContents[i][payload.property] = payload.value;
          if (payload.updateProgress){
            state.allBoxContents[i].progress.push({
              [payload.property]: payload.value
            }) 
          }
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