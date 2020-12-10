<template>
  <div class="main">
    <ProfileCard/>
    <div class="page-container">
      <MainTitle/>
      <Feed/>
    </div>
  </div>
</template>

<script>
import MainTitle from '../components/main/MainTitle'
import Feed from '../components/main/Feed'
import ProfileCard from "@/components/main/ProfileCard";
export default {
  name: 'Main',
  components: {ProfileCard, Feed, MainTitle }
}
</script>

<style scoped lang="sass">
.main
  display: flex

</style>