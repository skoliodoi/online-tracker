import { store } from './store'
import doneBoxes from './modules/doneBoxes'
import allBoxes from './modules/allBoxes'

export const addBoxDisplay = state => {
  state.boxesVisible = !state.boxesVisible;
}

export const addInput = (state, payload) => {
    if (payload.setStatus == "In Progress") {
        doneBoxes.state.doneBoxContents.unshift({
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
    } else {
        allBoxes.state.allBoxContents.unshift({
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