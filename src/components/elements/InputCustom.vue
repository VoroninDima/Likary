<template>
  <input class="input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  name: "InputCustom"
}
</script>

<style scoped lang="sass">

</style>