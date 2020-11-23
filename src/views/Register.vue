<template>
  <div class="register-page">
    <h1 class="register-page__title">Создание аккаунта</h1>
    <div class="register-wrapper">
      <FirstForm v-if="currentForm === 1" @nextForm="currentForm++"/>
      <SecondForm v-else-if="currentForm === 2" @nextForm="currentForm++"/>
      <ThirdForm v-else/>
      <div class="register-wrapper__steps">
        <div
            class="register-wrapper__steps-item"
            v-for="key of 3"
            :key="key"
            :class="{'register-wrapper__steps-item--active': key <= currentForm}"></div>
      </div>
    </div>
    <span v-if="currentForm === 3" class="register-page__policy">
      Нажимая кнопку Регистрация, вы принимаете <a href="/privacy-policy" class="pseudo-link">Условия</a>, <a href="/privacy-policy" class="pseudo-link">Политику использования данных</a> и <a href="/privacy-policy" class="pseudo-link">Политику в отношении файлов cookie</a>. Вы можете получать от нас Email-уведомления, отказаться от которых можно в любой момент.
    </span>
  </div>
</template>

<script>

import FirstForm from "@/components/register/FirstForm";
import SecondForm from "@/components/register/SecondForm";
import ThirdForm from "@/components/register/ThirdForm";
export default {
name: "Register",
  components: {ThirdForm, SecondForm, FirstForm},
  data () {
    return {
      currentForm: 1
    }
  }
}
</script>

<style scoped lang="sass">
.register-page
  text-align: center
  padding-bottom: 120px

.register-page__title
  font-size: 36px
  font-weight: 400
  margin: 50px 0 20px

.register-wrapper
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.25)
  margin: 0 auto
  background-color: #fff
  padding: 40px
  border-radius: 5px
  max-width: 450px

.register-wrapper__steps
  display: flex
  justify-content: center
  margin-top: 45px

.register-wrapper__steps-item
  background-color: #8F8F8F
  height: 3px
  width: 25px
  border-radius: 3px

  &:not(:last-child)
    margin-right: 5px
    
  &--active
    background-color: #4154FF

.register-page__policy
  max-width: 450px
  display: block
  font-size: 12px
  margin: 25px auto 0
</style>