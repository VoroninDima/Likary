<template>
 <button @click="$emit('click')" class="button" :class="{'button--accent': slug === 'accent'}" :type="type"><slot></slot></button>
</template>

<script>
export default {
  name: "ButtonCustom",
  props: {
    type: {
      type: String,
      default: 'button'
    },
    slug: {
      type: String
    }
  }
}
</script>

<style scoped lang="sass">
.button
  border-radius: 5px
  background-color: #4154FF
  color: #fff
  font-size: 18px
  font-weight: 500
  padding: 11px

  &--accent
    background-color: #FF550C

</style>