
export const state = () => ({
  email: ''
})

export const getters = {
  getEmail(state) {
    return state.email
  }
}

export const mutations = {
  setEmail(state, payload) {
    state.email = payload
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
      console.log(e)
    }
  }
}
