import { store } from '../store'
import pendingBoxes from './pendingBoxes'
import allBoxes from './allBoxes'
import wipBoxes from './wipBoxes'

const mutations = {
  addInput: (state, payload) => {
      allBoxes.state.allBoxContents.unshift({
        id: store.state.id +=1,
        clientName: payload.clientName,
        confirmed: payload.confirmed,
        briefType: payload.briefType,
        status: payload.setStatus,
        whoFor: payload.whoFor,
        whoWith: payload.whoWith,
        startDate: payload.startDate,
        meetDate: payload.meetDate,
        deadline: payload.deadline,
        delDate: payload.delDate,
      });
    } 
  }

export default {
  mutations,
}