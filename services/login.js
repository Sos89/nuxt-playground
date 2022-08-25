

export default {
  async login(payload){
    const res = await this.$axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
    return res;
  }
}
