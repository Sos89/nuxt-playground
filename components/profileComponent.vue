<template>
  <div class="flex flex-col ml-476 mt-147 justify-center items-center">
    <img src="./../assets/image/image12.png" alt="" class="w-full h-full">
    <p class="text-regal-blue text-40 text-montserrat font-light mt-14 mb-31">COMING SOON</p>
    <p class="text-12 text-montserrat font-light msg" v-show="isActive===true">You are not authorized </p>
    <button @click="info" class="bg-regal-blue text-14 py-9 text-center text-white rounded font-roboto w-305 mb-1" :class="{err: isActive}">EDIT MY PROFILE AND MY WORKLOG</button>
    <button @click.prevent="logout" class="text-regal-blue text-14 font-roboto font-medium uppercase py-9">LOGOUT</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'profile-component',
  data (){
    return {
      isActive: false
    }
  },
  computed:{
    ...mapGetters({
      jwt: 'code/getCode',
      email: 'login/getEmail',
    })
  },
  methods: {
    ...mapMutations({
      removeData: 'info/remove',
      removeCode: 'code/remove',
      removeEmail: 'login/remove'
    }),
    ...mapActions({
      fetchInfo: 'info/fetchInfo',
      fetchEmail: 'login/fetchEmail',
      fetchCode: 'code/fetchCode'
    }),
    logout(){
      this.removeData()
      this.removeCode()
      this.removeEmail()
      localStorage.removeItem('email')
      localStorage.removeItem('jwt')
      this.$router.push('/')
    },
     info(){
      if (!this.jwt){
        this.isActive = true
      }else{
        this.$router.push('/myProfile')
      }
    }
  }
}
</script>
<style scoped>
  .err{
    border: 3px solid red;
    color: red;
  }

  .msg{
    color: red;
    margin: 10px;
  }
</style>
