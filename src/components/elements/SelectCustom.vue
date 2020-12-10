<template>
  <select class="input input--select" name="country">
    <option value="" disabled selected>{{ placeholder }}</option>
    <option v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<script>
export default {
  name: "SelectCustom",
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
.input--select
  padding-left: 10px
  padding-right: 20px
  position: relative
  color: #8f8f8f
</style>