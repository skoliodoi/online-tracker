export const addBoxDisplay = state => {
  state.boxesVisible = !state.boxesVisible;
}

export const updateSearch = (state, payload) => {
  state.searchbar = payload;
}
