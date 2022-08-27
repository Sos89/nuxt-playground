
export default (axios) => ({
  async userData() {
    const token = JSON.parse(localStorage.jwt)
    const data = await axios.$get('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GetCurrentAppUser', {
      headers: {
        "Authorization": `Bearer ${token.token}`,
        'Accept': 'application/json'
      }
    })
    return data;
  },

})
