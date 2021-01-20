<template>
  <div class="main">
    <ProfileCardMini v-if="false"/>
    <div class="page-container">
      <MainTitle/>
      <Feed/>
    </div>
  </div>
</template>

<script>
import MainTitle from '../components/main/MainTitle'
import Feed from '../components/main/Feed'
import ProfileCardMini from '@/components/main/ProfileCardMini'
export default {
  name: 'Main',
  components: {ProfileCardMini, Feed, MainTitle }
}
</script>

<style scoped lang="sass">
.main
  display: flex

</style>