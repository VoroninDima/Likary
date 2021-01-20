<template>
  <div class="profile-card">
    <img class="profile-card__img" src="../../assets/img/profile-photo.png" alt="profile-card-photo">
    <span class="profile-card__name">Ралец Катерина</span>
    <span class="profile-card__specialization">Рентгенолог</span>
    <ButtonCustom class="profile-card__to-profile">Мой профиль</ButtonCustom>
  </div>
</template>

<script>
import ButtonCustom from "@/components/elements/ButtonCustom";
export default {
  name: "ProfileCardMini",
  components: {ButtonCustom}
}
</script>

<style scoped lang="sass">
.profile-card
  background-color: #fff
  position: sticky
  top: 30px
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.25)
  display: flex
  flex-direction: column
  text-align: center
  width: 230px
  height: fit-content
  left: calc((100% - 650px) / 2)
  transform: translateX(-55%)
  margin-top: 70px

.profile-card__img
  width: 100px
  margin: 13px auto

.profile-card__name
  font-size: 24px

.profile-card__specialization
  font-weight: 300
  font-size: 18px

.profile-card__to-profile
  max-width: 123px
  font-size: 15px
  font-weight: 400
  margin: 25px auto
</style>