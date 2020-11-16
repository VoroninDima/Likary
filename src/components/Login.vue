<template>
  <div class="login">
    <InputCustom placeholder="Электронный адрес или номер телефона"></InputCustom>
    <InputCustom placeholder="Пароль"></InputCustom>
    <ButtonCustom class="login__btn">Вход</ButtonCustom>
    <button class="pseudo-link login__forgot-password">Забыли пароль?</button>
    <hr class="login__hr">
    <ButtonCustom slug="accent">Создать аккаунт</ButtonCustom>
  </div>
</template>

<script>
import InputCustom from "@/components/elements/InputCustom"
import ButtonCustom from "@/components/elements/ButtonCustom"

export default {
name: "Login",
  components: {ButtonCustom, InputCustom}
}
</script>

<style scoped lang="sass">
.login
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.25)
  background-color: #fff
  padding: 13px
  text-align: center
  max-width: 400px
  margin: 0 auto
  height: fit-content

.login__forgot-password
  margin-top: 12px

.login__hr
  border: 0
  background-color: #c4c4c4
  height: 0.8px
  margin: 24px 0

.login__btn
  width: 100%
</style>