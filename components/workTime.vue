<template>
<div class="w-223">

  <p class="text-silver text-12 font-roboto mt-20">start/ end time</p>
  <p class="flex justify-between line mt-31 text-silver">
    <span class="span">09:00 - 12:00</span> <span><i class="fa-solid fa-xmark"></i> <i class="fa-solid fa-clock"></i></span>
  </p>
</div>
</template>

<script>
export default {
  name: "workTime"
}
</script>

<style scoped>
.line{
  border-bottom: 3px solid #95A2A7;
  margin-top: 18px;
}
.span{
  color: darkslategrey;
}
</style>
