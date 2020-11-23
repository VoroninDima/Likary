<template>
  <div>
    <InputCustom placeholder="Страна"></InputCustom>
    <InputCustom placeholder="Город"></InputCustom>
    <InputCustom placeholder="Специальность"></InputCustom>
    <InputCustom placeholder="Место работы"></InputCustom>
    <ButtonCustom class="register-wrapper__btn" @click="$emit('nextForm')">Продолжить</ButtonCustom>
  </div>
</template>

<script>
import InputCustom from "@/components/elements/InputCustom";
import ButtonCustom from "@/components/elements/ButtonCustom";

export default {
  name: "SecondForm",
  components: {ButtonCustom, InputCustom}
}
</script>

<style scoped>

</style>