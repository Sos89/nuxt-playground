<template>
  <div class="flex">
    <div class="w-64 h-900 bg-regal-blue">
      <div class="text-white text-23 ml-20 mt-20">
        <nuxt-link to="/profile"><i class="fa-solid fa-bars"></i></nuxt-link>
      </div>
      <div class="text-white text-23 ml-20 mt-47">
        <nuxt-link to="#"><i class="fa-solid fa-border-all"></i></nuxt-link>
      </div>
      <div class="text-white text-23 ml-20 mt-20">
        <nuxt-link to="#"><i class="fa-solid fa-address-book"></i></nuxt-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'profile-layouts'
}
</script>
