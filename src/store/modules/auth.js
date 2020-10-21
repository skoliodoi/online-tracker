const state = {
  userId: "",
  token: null,
  userId: null,
  tokenExpiration: null
}

const getters = {
  userID(state) {
    return state.userId;
  }
}

const mutations = {
  setUser(state, payload) {
    state.token = payload.token;
    state.payloadId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration
  }
}

const actions = {
  async signup(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqtOsjFcZddKUYCd4pUJtzdWaYAB_0WBc', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()

    if (!response.ok){
      console.log(responseData)
      const error = new Error(responseData.message || "Failed to authenticate!")
      throw error
    }

    console.log(responseData)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn

    })
  },
  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqtOsjFcZddKUYCd4pUJtzdWaYAB_0WBc', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json()

    if (!response.ok){
      console.log(responseData)
      const error = new Error(responseData.message || "Failed to authenticate!")
      throw error
    }

    console.log(responseData)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn

    })
  }
}

export default {
  state, 
  getters,
  mutations,
  actions
}