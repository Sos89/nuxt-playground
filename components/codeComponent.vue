<template>
  <div>
    <div class="ml-115 w-370 mt-327">
      <p class="text-regal-blue font-roboto font-medium text-23 mb-31">Login</p>
      <p class="font-roboto text-rdgBlack text-14 mb-31">To finalize your verification, please enter the code that has been sent to your email address / SMS</p>
      <div v-if="isActive===true" :class="{active: isActive}" class="flex items-center text-red mb-31 font-normal text-14 font-roboto"> <h3>!</h3> Please enter a valid code</div>
      <form @submit.prevent="sendCode">
        <div  class="flex items-center">
          <v-otp-input
            v-model="code"
            type="number"
          ></v-otp-input>
          <button @click.prevent="codes" class="w-14 h-14 text-silver text-40  ml-6 mb-6"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <button class="bg-regal-blue w-90 h-36 mt-6 rounded-md ml-253 submit_button mb-31" type="submit">Submit</button>
      </form>

      <p class="font-roboto text-silver text-14 mb-31">If you do not receive the confirmation message within a few minutes, please check your Spam or Bulk E-Mail folder</p>
    </div>
  </div>
</template>

<script>
import vuetify from '@/plugins/vuetify'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "codeComponent",
  components: { vuetify },
  data(){
    return {
      code: null,
      isActive: false,
    }
  },
  computed: {
    ...mapGetters({getEmail: 'login/getEmail'}),
    ...mapGetters({getCode: 'code/getCode'}),
  },
  methods: {
    ...mapActions({
      setCode: 'code/fetchCode'
    }),
    codes(){
      this.code = ''
    },
    async sendCode(){
    if (this.code){
      await this.setCode({email: this.getEmail, code: this.code})
      if (this.getCode === localStorage.jwt) {
        this.$router.push('/profile')
      }
    }
    else{
      this.isActive = true
    }
    }
  }
}
</script>

<style scoped>
v-otp-input{
  background: #000;
}
.submit_button {
  color: white;
}
.active{
  color: red
}
h3{
  width: 15px!important;
  height: 15px!important;
  border-radius: 50%;
  border: 2px solid #AF2727;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
</style>
