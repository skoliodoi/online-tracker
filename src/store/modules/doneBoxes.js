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




export default {
  state,
  getters,
}