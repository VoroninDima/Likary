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

html
  height: 100%

p, span, input, li
  font-family: sans-serif
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
  cursor: pointer

input
  box-sizing: border-box

body
  margin: 0
  height: 100%

#app
  background-color: #f9f9f9
  min-height: 100%
  display: flex
  flex-direction: column

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

.page-container
  margin: 0 auto
  max-width: 1180px
  padding: 20px

  @media only screen and (min-width: 1024px)
    padding: 40px
</style>