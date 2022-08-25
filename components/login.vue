<template>
  <div class="ml-115 w-370 mt-327">
    <p class="text-regal-blue font-roboto font-medium text-23 mb-31">Login</p>
    <form @submit.prevent="sendEmail">
      <label class="text-silver text-xs">Enter your email</label>
      <input v-model="email" type="email" class="w-370 border-none outline-none border-b-2-silver input" placeholder="myemail@mail.com">
      <button type="submit" class="flex bg-regal-blue mt-6 py-9 px-16 rounded-md ml-253">Send code</button>
    </form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "login",

  data() {
    return {
      email: 'demo@demo.com'
      //
    }
  },
  computed: {
    ...mapGetters({getEmail: 'login/getEmail'}),
  },
  methods: {
    ...mapActions({
      fetchData: 'login/fetchEmail',
    }),
     async sendEmail() {
      await this.fetchData({email:this.email})
       if (this.getEmail === localStorage.email){
         this.$router.push('/code')
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
  color: #95A2A7;
  box-shadow: none !important;
  outline: none !important;
}
  button{
    color: white;
  }
</style>
