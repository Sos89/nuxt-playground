export const state = () => ({
  infoData: null
})

export const getters = {
  getInfo(state){
    return state.infoData
  }
}

export const actions = {
  async fetchInfo({commit}, payload){

    try {
      const token = JSON.parse(localStorage.jwt)
      const data = await this.$axios.$get('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GetCurrentAppUser', {
        headers: {
          "Authorization": `Bearer ${token.token}`,
          'Accept': 'application/json'
        }
      })
      commit('setInfo', data)
    }catch (e){
      return true
    }
  }
}

export const mutations = {
  setInfo(state, payload) {
    state.infoData = payload
  }
}
