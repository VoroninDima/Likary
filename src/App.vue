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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500&display=swap')
*
  box-sizing: border-box

p, span, input, li, h2, h1, select, button, a
  font-family: Roboto, sans-serif
  margin: 0
  padding: 0
  color: #484848

a
  text-decoration: none

html
  height: 100%

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

.page-container
  margin: 0 auto
  max-width: 1180px
  padding: 20px

  @media only screen and (min-width: 1024px)
    padding: 40px

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