<template>
  <div>
    <my-profile-component></my-profile-component>
  </div>
</template>

<script>
export default {
  name: "myProfile",
  layout: 'profileLayouts',
  middleware: 'profile',
}
</script>

<style scoped>

</style>
