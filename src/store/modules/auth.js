import { DateTime } from 'luxon'
import 'promise-polyfill/src/polyfill';

let timer = "";

const state = {
  token: null,
  userId: null,
  users: [],
  username: "Test",
  timeToRefresh: 0
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
  },
  timeToRefresh(state) {
    return state.timeToRefresh
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
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.error.message || "Failed to authenticate!")
      console.log(error)
      throw error
    }
    const currTime = DateTime.local()

    localStorage.setItem('tokenGetTime', currTime)
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('email', responseData.email);
    localStorage.setItem('refreshToken', responseData.refreshToken);


    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      email: responseData.email
    })
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId')
    const email = localStorage.getItem('email')

    if (token && userId) {
      let setTimer = function () {
        timer = setInterval(async () => {
          const tokenGetTime = localStorage.getItem('tokenGetTime')
          const timeToRefresh = DateTime.fromISO(tokenGetTime).plus({ minutes: 45 })
          const now = DateTime.local()
          if (now >= timeToRefresh) {
            clearInterval(timer)
            await context.dispatch('tokenRefresh')
            setTimer()
          } 
        }, 5*60*1000)
      }

      setTimer();

      context.commit('setUser', {
        token: token,
        userId: userId,
        email: email
      })
    }
  },
  async tokenRefresh(context) {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await fetch('https://securetoken.googleapis.com/v1/token?key=', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`
    })

    const responseData = await response.json()

    const currTime = DateTime.local()

    localStorage.setItem('tokenGetTime', currTime)
    localStorage.setItem('token', responseData.id_token);
    localStorage.setItem('refreshToken', responseData.refresh_token);
    localStorage.setItem('userId', responseData.user_id);
    context.commit('setUser', {
      token: responseData.id_token,
      userId: responseData.user_id
    })
  },
  async changePassword(context, payload) {
    const token = localStorage.getItem('token');
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idToken: token,
        password: payload,
        returnSecureToken: true
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.error.message || "Failed to authenticate!")
      throw error
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('email', responseData.email);
    localStorage.setItem('refreshToken', responseData.refreshToken);

    context.commit('setUser',{
      token: responseData.idToken,
      userId: responseData.localId,
      email: responseData.email
    })
  },
  async resetPassword(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requestType: 'PASSWORD_RESET',
        email: payload
      })
    })
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenGetTime');

    clearInterval(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}