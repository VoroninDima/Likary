<template>
    <div class="users-posts">
        <span class="users-posts__title">Записи в ленте: 3</span>
        <span class="users-posts__show-all pseudo-link pseudo-link--underline">Посмотреть все</span>
        <ul class="users-posts__list">
            <UsersPost/>
            <UsersPost/>
        </ul>
    </div>
</template>

<script>
  import UsersPost from './UsersPost'
  export default {
    name: "UsersPosts",
    components: { UsersPost }
  }
</script>

<style scoped lang="sass">
.users-posts__title
    color: #4154FF
    font-size: 18px
    font-weight: 500

.users-posts__show-all
    float: right
    font-size: 14px
.users-posts__list
    margin-top: 15px
</style>