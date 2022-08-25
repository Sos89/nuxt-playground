export const state = () => ({
  code: null
})

export const getters = {
  getCode(state) {
    return state.code
  }
}

export const mutations = {
  setCode(state, payload){
    state.code = payload
  }
}

export const actions = {
  async fetchCode({commit}, payload) {
    try {
      const {jwt} = await this.$axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode', payload)
      localStorage.setItem('jwt', JSON.stringify(jwt))
      commit('setCode', JSON.stringify(jwt))
    }catch (e){
      return true
    }
  }
}
