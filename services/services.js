import auth from "./auth";
import userInfo from "@/services/userInfo";

export default (axios) => ({
  auth: auth(axios),
  userinfo: userInfo(axios),
})
