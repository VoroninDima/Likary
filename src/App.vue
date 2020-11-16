<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  components: {Header}
}
</script>
<style lang="sass">
p, span, inpout
  font-family: sans-serif

button
  background: none
  border: 0

input
  box-sizing: border-box

html, body
  height: 100%

body
  margin: 0

#app
  background-color: #f9f9f9
  height: 100%

.pseudo-link
  color: #4154FF
  font-size: 12px
  font-weight: 500
</style>