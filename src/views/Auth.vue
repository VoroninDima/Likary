<template>
  <div class="auth-page">
    <img class="auth-page__img" src="../assets/img/auth-doctors.png" alt="auth-doctors">
    <Login/>
  </div>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style scoped lang="sass">
.auth-page
  margin: 42px auto
  padding: 32px
  align-items: center

  @media only screen and (min-width: 1024px)
    display: flex
    justify-content: center

.auth-page__img
  margin: 0 auto 42px
  max-width: 323px
  width: 100%
  display: block
  object-fit: contain

  @media only screen and (min-width: 1024px)
    max-width: 641px
    margin: 0 80px 0 0
</style>
