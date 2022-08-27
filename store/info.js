export const state = () => ({
  infoData: null
})

export const getters = {
  getInfo(state){
    return state.infoData
  }
}

export const actions = {
  async fetchInfo({commit}){

    try {
      const data = await this.$services.userinfo.userData()

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
