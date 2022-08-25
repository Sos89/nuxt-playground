<template>
  <div class="flex flex-col justify-between w-1480">
    <div>
      <div>
        <p class="text-regal-blue ml-36 mt-1 text-23 font-roboto font-semibold">My Profile</p>
      </div>
      <div class="flex flex-row ml-36 mt-1">
        <div>
          <p class="ml-36 text-regal-blue text-23 font-roboto">General Info</p>
          <div class="flex flex-row w-709">
            <div class="flex flex-col ml-36 mt-1 w-223">
              <label class="text-silver font-roboto text-12">First name</label>
              <p class="font-roboto text-14 mt-8 max-w-full line"> <span v-if="userInfo" >{{ userInfo.firstName}}</span> </p>
            </div>
            <div class="flex flex-col ml-36 mt-1 w-223 ml-20">
              <label class="text-silver font-roboto text-12">Last name</label>
              <p class="font-roboto text-14 mt-8 w-full line"><span v-if="userInfo" >{{ userInfo.lastName}}</span></p>
            </div>
            <div class="flex flex-col ml-36 mt-1 w-223 ml-20">
              <label class="text-silver font-roboto text-12">Date of birth</label>
              <p class="flex justify-between font-roboto text-14 mt-8 max-w-full line"><span v-if="userInfo" >{{ userInfo.dateOfBirth}}</span> <i class="fa-solid fa-calendar"></i></p>
            </div>
          </div>

          <div class="flex flex-row mt-1 w-1095">
            <div class="flex flex-col ml-36 mt-1 w-345 ml-20">
              <label class="text-silver font-roboto text-12">Email</label>
              <p class="flex justify-between font-roboto text-14 mt-8 max-w-345 line"><span  v-if="userInfo">{{ userInfo.email}}</span></p>
            </div>
            <div class="flex flex-col ml-36 mt-1 w-345 ml-20">
              <label class="text-silver font-roboto text-12">Personal Email</label>
              <p class="flex justify-between font-roboto text-14 mt-8 max-w-345 line"><span v-if="userInfo" >{{ userInfo.personalEmail}}</span></p>
            </div>
            <div class="flex flex-col ml-36 mt-1 w-345 ml-20">
              <p class="flex justify-between font-roboto text-14 mt-8 max-w-345 line"><span v-if="userInfo" >{{ userInfo.mobilePhone}}</span></p>
            </div>
          </div>

          <div class="flex flex-row mt-1 w-709">
            <div class="flex flex-col ml-36 mt-1 w-223 ml-20">
              <label class="text-silver font-roboto text-12">Start Date</label>
              <p class="flex justify-between font-roboto text-14 mt-8 w-223 line"><span v-if="userInfo" >{{ userInfo.startDate}}</span> <i class="fa-solid fa-calendar"></i></p>
            </div>
            <div class="flex flex-col ml-36 mt-1 w-108 ml-20">
              <label class="text-silver font-roboto text-12">Address</label>
              <p class="flex justify-between font-roboto text-14 mt-8 w-108 line"> <span v-if="userInfo">{{userInfo.absences}}</span></p>
            </div>
            <div class="flex flex-col ml-36 mt-1 w-108 mt-47">
              <p class=""><input type="checkbox" class="input font-roboto text-14"> Core team member</p>
            </div>
          </div>
        </div>
        <div class="ml-36 w-345">
          <p class="font-roboto text-23 text-regal-blue">My accounts</p>
          <div class="flex flex-col mt-1 w-108 mt-47">
            <p class="text-silver font-roboto text-12">Slack</p>
            <p class="text-silver font-roboto text-12 w-345 mt-1 line p-9"><i class="fa-brands fa-slack"></i> <span v-if="userInfo" >{{ userInfo.slackUserName}}</span></p>
          </div>
          <div class="flex flex-col mt-1 w-108 mt-47">
            <p class="text-silver font-roboto text-12">GitHub</p>
            <p class="text-silver font-roboto text-12 w-345 mt-1 line p-9"><i class="fa-brands fa-github"></i> <span v-if="userInfo" >{{ userInfo.gitHubUserName}}</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-1480 ml-36 mt-31">
        <p class="ml-31 text-regal-blue text-23 font-roboto">Work logs</p>
      <div class="flex flex-row ml-31 mt-20">
        <div class="ml-20">
          <p class="text-silver text-12 font-roboto font-semibold">Sunday</p>
          <work-time></work-time>
          <button class="btn flex items-center justify-center">+</button>
        </div>
        <div class="ml-20">
          <p class="text-silver text-12 font-roboto font-semibold">Monday</p>
          <work-time></work-time>
          <work-time></work-time>
          <button class="btn flex items-center justify-center">+</button>
        </div>
        <div class="ml-20">
          <p class="text-silver text-12 font-roboto font-semibold">Tuesday</p>
          <work-time></work-time>
          <work-time></work-time>
          <button class="btn flex items-center justify-center">+</button>
        </div>
        <div class="ml-20">
          <p class="text-silver text-12 font-roboto font-semibold">Wednesday</p>
          <work-time></work-time>
          <work-time></work-time>
          <button class="btn flex items-center justify-center">+</button>
        </div>
        <div class="ml-20">
          <p class="text-silver text-12 font-roboto font-semibold">Thursday</p>
          <work-time></work-time>
          <work-time></work-time>
          <button class="btn flex items-center justify-center">+</button>
        </div>
        <div class="ml-20">
          <p class="text-silver text-12 font-roboto font-semibold">Friday</p>
          <work-time></work-time>
          <button class="btn flex items-center justify-center">+</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "myProfileComponent",
async  fetch(){
  await this.fetchUserInfo()
  },
  computed: {
    ...mapGetters({
      jwt: 'code/getCode',
      email: 'login/getEmail',
      userInfo: 'info/getInfo'
    })
  },
  methods:{
    ...mapActions({
      fetchInfo: 'info/fetchInfo'
    }),
   async fetchUserInfo() {
     await this.fetchInfo()
    }
  },

}
</script>

<style scoped>
.line{
  border-bottom: 3px solid #95A2A7;
  margin-top: 18px;
}
i{color: #95A2A7}
.input{
  border: 2px solid black;
}
.btn{
  background: #F5F6F7;
  border-radius: 4px;
  width: 223px;
  height: 32px;
  color: #95A2A7;
  font-size: 32px;
  margin-top: 10px;
}
</style>
