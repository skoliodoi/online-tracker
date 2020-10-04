import { store } from '../store'
import { DateTime } from 'luxon';
import allBoxes from './allBoxes'


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
      startDate: payload.startDate.toLocaleString(DateTime.DATE_HUGE),
      meetDate: payload.meetDate.toLocaleString(DateTime.DATE_HUGE),
      deadline: payload.deadline.toLocaleString(DateTime.DATE_HUGE),
      delivery: payload.delivery.toLocaleString(DateTime.DATE_HUGE),
      progress: {},
      progressBar: 0,
      progressDisplay: "",
      reminder1: payload.reminder1,
      reminder2: payload.reminder2,
      tillDelivery: payload.tillDelivery
      });
    } 
  }

export default {
  mutations,
}