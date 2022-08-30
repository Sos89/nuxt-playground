
export const state = () => ({
  email: null,
  err: ''
})

export const getters = {
  getEmail(state) {
    return state.email
  },
  getError(state){
    return state.err
  }
}

export const mutations = {
  setEmail(state, payload) {
    state.email = payload
  },
  remove(state) {
    if (state.email) {
      state.email = null;
    }
  },
  setErr(state, payload){
    state.err = payload
  }
}

export const actions = {
  async fetchEmail({ commit }, payload) {
    try {
      const res = await this.$services.auth.login(payload)
      localStorage.setItem('email', payload.email)
      commit('setEmail', payload.email)
      return res;
    }catch (e){
      commit('setErr', e)
    }
  }
}
