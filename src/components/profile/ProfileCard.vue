<template>
    <div class="profile-card box-with-shadow">
        <div class="profile-card__wrapper">
            <img class="profile-card__img" src="../../assets/img/profile-photo.png" alt="profile-photo">
            <div class="profile-card__info-wrapper">
                <h1 class="profile-card__name">Ралец Катерина</h1>
                <span class="profile-card__specialization">Доктор Рентгенолог / МРТ</span>
                <span class="profile-card__work-place">Национальная детская специализированная больница ОХМАТДЕТ</span>
            </div>
            <button class="profile-card__invite">Пригласить коллегу</button>
        </div>
        <button class="pseudo-link pseudo-link--underline">Редактировать профиль</button>
    </div>
</template>

<script>
  export default {
    name: "ProfileCard"
  }
</script>

<style scoped lang="sass">
.profile-card
    padding: 25px 45px
    margin-bottom: 20px

.profile-card__img
    width: 100px
    margin-right: 20px

.profile-card__wrapper
    display: flex
    align-items: center

.profile-card__name
    font-size: 24px
    font-weight: 300
    margin-bottom: 10px

.profile-card__specialization
    font-weight: 500
    font-size: 14px
    margin-bottom: 5px
    display: block
.profile-card__work-place
    font-size: 12px

.profile-card__invite
    margin-left: auto
    padding: 10px 20px
    font-size: 12px
    border-radius: 20px
    border: 1px solid #4154FF

.profile-card__info-wrapper
    max-width: 260px

.pseudo-link
    margin-top: 25px
</style>