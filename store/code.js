export const state = () => ({
  code: null,
  error: null
})

export const getters = {
  getCode(state) {
    return state.code
  },
  getError(state){
    return state.error
  }
}

export const mutations = {
  setCode(state, payload){
    state.code = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  remove(state) {
    if (state.code) {
      state.code = null;
    }
  }
}

export const actions = {
  async fetchCode({commit}, payload) {
    try {
      const jwt = await this.$services.auth.code(payload)
      localStorage.setItem('jwt', JSON.stringify(jwt))
      commit('setCode', JSON.stringify(jwt))
    }catch (e){
      commit('setError', e)
    }
  }
}
