<template>
  <div>
    <login/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'imageLayouts',
  middleware: 'login',
}
</script>
