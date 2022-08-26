<template>
<div class="w-223">
  <form>
    <div>
      <label class="text-silver text-12 font-roboto mt-20">start/ end time</label>
      <input class="flex justify-between line mt-31 text-silver w-223" type="time" :name="name" placeholder="09:00 - 12:00">
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "workTime",
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style scoped>
.line{
  border-bottom: 3px solid #95A2A7;
  margin-top: 18px;
}
input ::placeholder{
  color: darkslategrey;
}
</style>
