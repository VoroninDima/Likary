<template>
    <li class="users-post box-with-shadow">
        <div class="users-post__info">
            <div class="users-post__user-info">
                <img class="users-post__user-img" src="../../assets/img/profile-photo.png" alt="profile-photo">
                <div>
                    <span class="users-post__name">Ралец Катерина</span>
                    <span class="users-post__specialization">Доктор Рентгенолог / МРТ</span>
                </div>
            </div>
            <p class="users-post__post">Что за аномалия на снимке МРТ?</p>
            <span class="users-post__post-info">105 просмотров | 8 коментариев</span>
        </div>
        <img class="users-post__post-img" src="../../assets/img/lungs.png" alt="lungs">
    </li>
</template>

<script>
  export default {
    name: "UsersPost"
  }
</script>

<style scoped lang="sass">
.users-post
    display: flex
    justify-content: space-between
    margin-bottom: 10px

.users-post__info
    padding: 10px

.users-post__user-img
    width: 45px
    margin-right: 5px

.users-post__user-info
    display: flex
    align-items: center
    margin-bottom: 10px

.users-post__name
    display: block
    font-weight: 300
    color: #141414

.users-post__specialization
    font-size: 12px
    font-weight: 500
    color: #141414

.users-post__post-info
    font-size: 12px
    margin-top: 10px
    display: block

.users-post__post
    color: #000
    
.users-post__post-img
    height: 130px
    border-radius: 0 5px 5px 0
</style>