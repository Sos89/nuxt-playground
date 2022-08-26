import AuthClass from "@/services/auth";

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
      // const auth = new AuthClass()
      // auth.login(payload)
      const res = await this.$axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
      localStorage.setItem('email', payload.email)
      commit('setEmail', payload.email)
      return res;
    }catch (e){
      console.log(e)
    }
  }
}
