<template>
<my-profile-component></my-profile-component>
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
