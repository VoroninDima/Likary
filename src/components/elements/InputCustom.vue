<template>
  <input class="input" type="text" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    placeholder: String
  },
  name: "InputCustom"
}
</script>

<style scoped lang="sass">
.input
  border-radius: 5px
  border: 1px solid #C4C4C4
  font-size: 14px
  padding: 14px
  width: 100%
  margin-bottom: 12px

  &::placeholder
    text-overflow: ellipsis
    display: block
    overflow: hidden
    width: 95%
</style>