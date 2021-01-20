<template>
    <div class="users-groups">
        <span class="users-groups__title">Группы и учреждения</span>
        <span class="pseudo-link pseudo-link--underline">Посмотреть все</span>
        <div class="users-groups__list">
            <div class="users-group box-with-shadow">
                <img class="users-group__img" src="../../assets/img/ohmadet.png" alt="mozgi">
                <span class="users-group__name">Ассоциация рентгенологов Украины</span>
                <span class="users-group__info">218 Членов | 3 записи</span>
                <button class="users-group__invite">Пригласить коллегу</button>
            </div>
            <div class="users-group box-with-shadow">
                <img class="users-group__img" src="../../assets/img/ohmadet.png" alt="mozgi">
                <span class="users-group__name">Ассоциация рентгенологов Украины</span>
                <span class="users-group__info">218 Членов | 3 записи</span>
                <button class="users-group__invite">Пригласить коллегу</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "UsersGroups"
  }
</script>

<style scoped lang="sass">
.users-group
    padding: 10px
    width: 48%
    display: flex
    flex-direction: column
    align-items: center

.users-groups__title
    font-size: 18px
    color: #4154FF
    font-weight: 500

.pseudo-link
    float: right
    margin-top: 4px
    font-size: 14px

.users-groups__list
    display: flex
    justify-content: space-between
    margin-top: 20px

.users-group__img
    width: 170px
    margin-bottom: 10px

.users-group__name
    font-size: 12px
    color: #141414
    display: block
    margin-bottom: 5px
    text-align: center

.users-group__info
    font-size: 12px
    font-weight: 300

.users-group__invite
    border: 1px solid #4154FF
    padding: 7px 20px
    border-radius: 20px
    color: #141414
    margin-top: 15px
</style>