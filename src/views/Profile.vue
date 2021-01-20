<template>
    <div class="page-container profile-page">
        <ProfileCard/>
        <div class="main-info">
            <div class="main-info__left">
                <div class="user-info box-with-shadow">
                    <h3 class="user-info__title">Краткая информация</h3>
                    <ul class="user-info__list">
                        <li class="user-info__item">Училась в ВНМУ им. Пирогова</li>
                        <li class="user-info__item">Город: Киев</li>
                        <li class="user-info__item">Страна: Украина</li>
                    </ul>
                    <button class="user-info__edit pseudo-link pseudo-link--underline">Редактировать информацию</button>
                </div>
                <UsersPosts/>
            </div>
            <div class="main-info__right">
                <UsersGroups/>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileCard from '../components/profile/ProfileCard'
import UsersPosts from '../components/profile/UsersPosts'
import UsersGroups from '../components/profile/UsersGroups'
export default {
    name: "Profile",
  components: { UsersGroups, UsersPosts, ProfileCard }
}
</script>

<style scoped lang="sass">
.page-container
    max-width: 959px

.profile-page
    margin-top: 25px
    width: 100%
    padding: 0

.user-info
    padding: 10px
    position: relative
    margin-bottom: 20px

.user-info__list
    margin-left: 10px

.user-info__title, .user-info__item
    font-size: 14px
    margin-bottom: 10px
    color: black

.user-info__item
    font-weight: 300
    color: #141414

    &:last-child
        margin-bottom: 3px

.user-info__edit
    position: absolute
    right: 30px
    bottom: 13px

.main-info
    display: flex
    justify-content: space-between

.main-info__left, .main-info__right
    width: 48%
</style>