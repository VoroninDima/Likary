<template>
    <div class="page-container">
        <MainTitle/>
        <Feed/>
    </div>
</template>

<script>
import MainTitle from '../components/main/MainTitle'
import Feed from '../components/main/Feed'
export default {
    name: 'Main',
  components: { Feed, MainTitle }
}
</script>

<style scoped lang="sass">

</style>