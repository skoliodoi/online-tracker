const state = {
  token: null,
  userId: null,
  tokenExpiration: null,
  users: [{
    email: 'guest@mail.com',
    name: 'Guest'
  },
  ],
  username: ""
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
  },
  displayName(state) {
    return state.username
  }
}

const mutations = {
  setUser(state, payload) {
    state.token = payload.token;
    state.payloadId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration
    for (let user in state.users) {
      if (state.users[user].email == payload.email) {
        state.username = state.users[user].name
      }
    }
  }
}

const actions = {
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
      const error = new Error(responseData.message || "Failed to authenticate!")
      throw error
    }
    
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('email', responseData.email);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
      email: responseData.email
    })
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId')
    const email = localStorage.getItem('email')

    if(token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null,
        email: email
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