<template>
  <div>
    <SelectCustom :options="countries" placeholder="Страна"/>
    <InputCustom placeholder="Город"></InputCustom>
    <SelectCustom :options="specialization" placeholder="Специальность"/>
    <InputCustom placeholder="Место работы"></InputCustom>
  </div>
</template>

<script>
import InputCustom from "@/components/elements/InputCustom";
import SelectCustom from "@/components/elements/SelectCustom";

export default {
  name: "SecondForm",
  components: {SelectCustom, InputCustom},
  data () {
    return {
      countries: [{ label: 'Беларусь', value: 'bl' }, { label: 'Польша', value: 'pl' },  { label: 'Россия', value: 'ru' }, { label: 'Украина', value: 'ua' }, { label: 'Чехия', value: 'cz' }],
      specialization: [{ label: 'Стомат', value: 'ua' }, { label: 'Акушер', value: 'ru' }, { label: 'Анастезиолог', value: 'bl' }]
    }
  }
}
</script>

<style scoped>

</style>