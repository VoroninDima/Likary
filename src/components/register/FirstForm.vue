<template>
  <div>
    <InputCustom placeholder="Имя"></InputCustom>
    <InputCustom placeholder="Фамилия"></InputCustom>
    <InputCustom placeholder="Email"></InputCustom>
    <InputCustom placeholder="Пароль"></InputCustom>
    <InputCustom placeholder="Повторите пароль"></InputCustom>
    <ButtonCustom class="register-wrapper__btn" @click="$emit('nextForm')">Продолжить</ButtonCustom>
  </div>
</template>

<script>
import InputCustom from "@/components/elements/InputCustom";
import ButtonCustom from "@/components/elements/ButtonCustom";

export default {
  name: "FirstForm",
  components: {ButtonCustom, InputCustom}
}
</script>

<style scoped>

</style>