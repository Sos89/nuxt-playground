
export default (axios) => ({
  async login(payload) {
    const res = await axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
    return res;
  },

  async code(payload){
    const {jwt}= await axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode', payload)
    return jwt
  }
})



