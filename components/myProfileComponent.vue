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
            <div class="flex flex-col ml-36 mt-1 w-223" v-if="userInfo">
              <label class="text-silver font-roboto text-12">First name</label>
              <input type="text" :value="userInfo.firstName" class="font-roboto text-14 mt-8 max-w-full line">
            </div>
            <div class="flex flex-col ml-36 mt-1 w-223 ml-20" v-if="userInfo" >
              <label class="text-silver font-roboto text-12">Last name</label>
              <input type="text" :value="userInfo.lastName" class="font-roboto text-14 mt-8 w-full line">
            </div>
            <div class="flex flex-col ml-36 mt-1 w-223 ml-20" v-if="userInfo">
              <label class="text-silver font-roboto text-12">Date of birth</label>
              <input type="text" :value="userInfo.dateOfBirth" class="flex justify-between font-roboto text-14 mt-8 max-w-full line">
            </div>
          </div>

          <div class="flex flex-row mt-1 w-1095" v-if="userInfo">
            <div class="flex flex-col ml-36 mt-1 w-345 ml-20">
              <label class="text-silver font-roboto text-12">Email</label>
              <input type="email" :value="userInfo.email" class="flex justify-between font-roboto text-14 mt-8 max-w-345 line">
            </div>
            <div class="flex flex-col ml-36 mt-1 w-345 ml-20" v-if="userInfo">
              <label class="text-silver font-roboto text-12">Personal Email</label>
              <input type="email" :value="userInfo.personalEmail" class="flex justify-between font-roboto text-14 mt-8 max-w-345 line">
            </div>
            <div class="flex flex-col ml-36 mt-1 w-345 ml-20" v-if="userInfo">
              <input type="text" :value="userInfo.mobilePhone" class="flex justify-between font-roboto text-14 mt-8 max-w-345 line">
            </div>
          </div>

          <div class="flex flex-row mt-1 w-709">
            <div class="flex flex-col ml-36 mt-1 w-223 ml-20" v-if="userInfo">
              <label class="text-silver font-roboto text-12">Start Date</label>
              <input type="text" :value="userInfo.startDate" class="flex justify-between font-roboto text-14 mt-8 w-223 line">
            </div>
            <div class="flex flex-col ml-36 mt-1 w-108 ml-20" v-if="userInfo">
              <label class="text-silver font-roboto text-12">Address</label>
              <input type="text" :value="userInfo.absences" class="flex justify-between font-roboto text-14 mt-8 w-108 line">
            </div>
            <div class="flex flex-col ml-36 mt-1 w-108 mt-47">
              <p class=""><input type="checkbox" class="input font-roboto text-14"> Core team member</p>
            </div>
          </div>
        </div>
        <div class="ml-36 w-345">
          <p class="font-roboto text-23 text-regal-blue">My accounts</p>
          <div class="flex flex-col mt-1 w-108 mt-47" v-if="userInfo">
            <p class="text-silver font-roboto text-12">Slack</p>
            <div class="slack">
              <i class="fa-brands fa-slack"></i>
              <input type="text" :value="userInfo.slackUserName" class="text-silver font-roboto text-12 w-345 mt-1 line p-9">
            </div>
          </div>
          <div class="flex flex-col mt-1 w-108 mt-47" v-if="userInfo">
            <p class="text-silver font-roboto text-12">GitHub</p>
            <div class="github">
              <i class="fa-brands fa-github"></i>
              <input type="text" :value="userInfo.gitHubUserName" class="text-silver font-roboto text-12 w-345 mt-1 line p-9">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-1480 ml-36 mt-31">
        <p class="ml-31 text-regal-blue text-23 font-roboto">Work logs</p>
      <div class="flex flex-row ml-31 mt-20">
        <div v-for="index in inputArr" :key="index.id">
          <div class="ml-20">
            <p class="text-silver text-12 font-roboto font-semibold">{{ index.title }}</p>
            <work-time v-for="item in index.items" :name="index.name + '[' + item.id + ']'" @remove="remove" :id="item.id"></work-time>
            <button @click="addInput(index.id)" class="btn flex items-center justify-center ">+</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "myProfileComponent",
  data () {
    return {
      inputArr: [
        {
          id: 1,
          title: 'Sunday',
          name: 'sunday',
          items: [
            {id: 1}
          ]
        },
        {
          id: 2,
          title: 'Monday',
          name: 'monday',
          items: [
            {id: 2},
            {id: 3}
          ]
        },
        {
          id: 3,
          title: 'Tuesday',
          name: 'tuesday',
          items: [
            {id: 4},
            {id: 5}
          ]
        },
        {
          id: 4,
          title: 'Wednesday',
          name: 'wednesday',
          items: [
            {id: 6},
            {id: 7}
          ]
        },
        {
          id: 5,
          title: 'Thursday',
          ame: 'thursday',
          items: [
            {id: 8},
            {id: 9}
          ]
        },
        {
          id: 6,
          title: 'Friday',
          name: 'friday',
          items: [
            {id: 10}
          ]
        },
      ]
    }
  },
  async  fetch(){
    await this.fetchUserInfo()
    },
    computed: {
      ...mapGetters({
        jwt: 'code/getCode',
        email: 'login/getEmail',
        userInfo: 'info/getInfo',
        error: 'info/getError'
      })
    },
    methods:{
      ...mapActions({
        fetchInfo: 'info/fetchInfo'
      }),
      async fetchUserInfo() {
        if (!this.error){
          await this.fetchInfo()
        }
      },
      remove(id){
        this.inputArr.map((item) => {
            item.items = item.items.filter((input) => input.id !== id)
        })
      },
      addInput(id) {
        this.inputArr.map((item) => {
          if(item.id == id){
            item.items.push({id: Math.floor(Date.now() / 10) })
          }
        })
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
.slack, .github{
  width: 21.563rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
i{
  margin-top: 20px;
}

input{
  box-shadow: none !important;
  /*border: none !important;*/
  outline: none !important;
}
</style>
