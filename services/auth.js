import axios from "~/plugins/axios";

export default class AuthClass {
  async login(payload){
    const res = await axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
    return res;
  }
}



// export async function login(payload){
//   const res = await this.$axios.$post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
//   return res;
// }

