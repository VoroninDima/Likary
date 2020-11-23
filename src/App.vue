<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {Footer, Header}
}
</script>
<style lang="sass">
*
  box-sizing: border-box

p, span, input, li, h2, h1
  font-family: Roboto, sans-serif
  margin: 0
  padding: 0
  color: #484848
ul
  margin: 0
  padding: 0

li
  list-style: none

button
  background: none
  border: 0

input
  box-sizing: border-box

body
  margin: 0

#app
  background-color: #f9f9f9
  height: 100%

.pseudo-link
  color: #4154FF
  font-size: 12px
  font-weight: 500
  
hr
  border: 0
  height: 2px
  background-color: #c4c4c4
  width: 100%

.register-wrapper__btn
  margin-top: 22px
</style>