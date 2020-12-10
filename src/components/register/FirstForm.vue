<template>
  <div>
    <InputCustom placeholder="Имя"></InputCustom>
    <InputCustom placeholder="Фамилия"></InputCustom>
    <InputCustom placeholder="Email"></InputCustom>
    <InputCustom placeholder="Пароль"></InputCustom>
    <InputCustom placeholder="Повторите пароль"></InputCustom>
  </div>
</template>

<script>
import InputCustom from "@/components/elements/InputCustom";

export default {
  name: "FirstForm",
  components: {InputCustom}
}
</script>