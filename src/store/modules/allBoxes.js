import { DateTime } from "luxon";

const state = {
  linkName: '',
  isLoading: false,
  allBoxContents: [],
}
const getters = {
  allBoxContents: state => {
    return state.allBoxContents;
  },
  loading: state => {
    return state.isLoading;
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
    state.isLoading = true
    const serverData = await fetch('https://online-tracker-test.firebaseio.com/boxes.json')
    const jsonData = await serverData.json()
    state.isLoading = false
    commit('setData', jsonData)
  },
  async removeContents({commit}, payload) {
    await fetch('https://online-tracker-test.firebaseio.com/boxes/' + payload +'.json' , {
      method: "DELETE"
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}