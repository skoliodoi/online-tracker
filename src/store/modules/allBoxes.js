import { DateTime } from "luxon";

const state = {
  linkName: '',
  allBoxContents: [
    // {
    //   clientName: "Godzilla",
    //   id: 111,
    //   status: "In Progress",
    //   mercerClient: '',
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0,
    //   progressDisplay: "",
    // },
    // {
    //   clientName: "Ghidora",
    //   id: 112,
    //   status: "Pending",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Mothra",
    //   id: 113,
    //   status: "Pending",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Rodan",
    //   id: 114,
    //   status: "In Progress",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Gundam",
    //   id: 115,
    //   status: "Pending",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "EVA-01",
    //   id: 116,
    //   status: "In Progress",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Totoro",
    //   id: 117,
    //   status: "In Progress",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Mechagodzilla",
    //   id: 118,
    //   status: "In Progress",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Akira",
    //   id: 119,
    //   status: "In Progress",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Tetsuo",
    //   id: 120,
    //   status: "In Progress",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
    // {
    //   clientName: "Mononoke",
    //   id: 121,
    //   status: "Pending",
    //   progress: {},
    //   tillDelivery: "",
    //   progressBar: 0
    // },
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
  setData: (state, data) => {
        const boxes = [];
        for (const id in data) {
          console.log(id)
          data[id].id = id
          boxes.unshift(data[id])
        }
        state.allBoxContents = boxes;
  },
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
          state.allBoxContents[i].progressDisplay = Math.round((state.allBoxContents[i].progressBar/12) * 100) + '%'
          if (state.allBoxContents[i].progressBar == 12) {
            if(confirm("The status of this request will be changed to 'Done' and moved to appropriate subpage. Would you wish to continue?")){
              state.allBoxContents[i].status = "Done"
              state.allBoxContents[i].componentKey += 1;
            }  
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
    commit('updateContents', payload);
    fetch('https://online-tracker-test.firebaseio.com/boxes.json',{
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        [payload.id]: state.allBoxContents.find(it => it.id == payload.id)
      })
    })
  },
  updateProgressBar: ({commit}, payload) => {
    commit('updateProgressBar', payload)
  },
  changeLink: ({commit}, payload) => {
    commit('changeLink', payload)
  },
  async fetchData({commit}) {
    const serverData = await fetch('https://online-tracker-test.firebaseio.com/boxes.json')
    const jsonData = await serverData.json()
    commit('setData', jsonData)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}