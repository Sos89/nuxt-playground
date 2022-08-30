<template>
<div class="w-223">

  <form>
    <div class="flex flex-row">
      <div class="mt-14">
        <label class="text-silver text-12 font-roboto mt-31">start/ end time</label>
        <button type="button" @click="$emit('remove', id)" class="float-right"><i class="fa-solid fa-xmark"></i></button>
        <input class="flex justify-between line mt-31 text-silver w-223" type="time" :name="name" placeholder="09:00 - 12:00">
      </div>
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
    },
    id: {
      type: Number
    }
  }
}
</script>

<style scoped>
.line{
  border-bottom: 3px solid #95A2A7;
  margin-top: 18px;
}
input{
  box-shadow: none !important;
}
input ::placeholder{
  color: darkslategrey;
}
.btn-custom{

}
</style>
