<template>
  <div class="ml-115 w-370 mt-327">
    <p class="text-regal-blue font-roboto font-medium text-23 mb-31">Login</p>
    <form @submit.prevent="sendEmail">
      <label class="text-silver text-xs" :class="{err: isActive}"> <span v-if="isActive===true"><i class="fa-solid fa-circle-exclamation"></i></span> Enter your email</label>
      <input v-model="email" type="email" :class="{active: isActive}" class="w-370 border-none outline-none border-b-2-silver input" placeholder="myemail@mail.com">
      <button type="submit" class="flex bg-regal-blue mt-6 py-9 px-16 rounded-md ml-253">Send code</button>
    </form>
    <notifications />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "login",
  data() {
    return {
      email: 'demo@demo.com',
      isActive: false
      //
    }
  },
  computed: {
    ...mapGetters({getEmail: 'login/getEmail', error: 'login/getError'}),
  },
  methods: {
    ...mapActions({
      fetchData: 'login/fetchEmail',
    }),
     async sendEmail() {
      if (this.email){
       await this.fetchData({email:this.email})
        console.log(this.error)
        if (this.getEmail === localStorage.email){
          this.$router.push('/code')
        }
        else {
          this.isActive = true
          this.$notify({
            text: 'Wrong email, please try again',
            duration: 3000,
            speed: 1000,
            position: 'top',
            type: 'error',
          })
        }
      }else{
        this.isActive = true
        this.$notify({
          text: 'Wrong email, please try again',
          duration: 3000,
          speed: 1000,
          position: 'top',
          type: 'error',
        })
      }
    }
  }
}
</script>

<style scoped>
.input{
  margin-top: 12px;
  margin-left: -10px;
  border-bottom: 3px solid #95A2A7;
  color: #3d3d3e;
  box-shadow: none !important;
  outline: none !important;
}
  button{
    color: white;
  }

  .active{
    border-bottom: 3px solid red;
    border-right: 4px;
  }

  .err{
    color: #AF2727;
  }
</style>
