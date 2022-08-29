export const state = () => ({
  infoData: null,
  error: null
})

export const getters = {
  getInfo(state){
    return state.infoData
  },
  getError(state){
    return state.error
  }
}

export const actions = {
  async fetchInfo({commit}){
    try {
      const data = await this.$services.userinfo.userData()
      commit('setInfo', data)
    }catch (e){
      commit('setError', e)
    }
  }
}

export const mutations = {
  setInfo(state, payload) {
    state.infoData = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  remove(state) {
    if (state.infoData) {
      state.infoData = null;
    }
  }
}
