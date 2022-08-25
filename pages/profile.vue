<template>
  <div>
      <profile-component></profile-component>
  </div>
</template>
<script>
  export default {
    layout: 'profileLayouts',
    middleware: 'profile',
  }
</script>
