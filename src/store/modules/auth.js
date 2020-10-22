const state = {
  token: null,
  userId: null,
  tokenExpiration: null
}

const getters = {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token
  },
  isAuthenticated(state) {
    return !!state.token
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
  async auth(context, payload) {
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
      const error = new Error(responseData.message || "Failed to authenticate!")
      throw error
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
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
      const error = new Error(responseData.message || "Failed to authenticate!")
      throw error
    }
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn

    })
  },
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload
    })
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId')

    if(token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null
      })
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    })
    
  }
}

export default {
  state, 
  getters,
  mutations,
  actions
}