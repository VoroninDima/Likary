<template>
    <div class="main-feed">
        <button class="main-feed__filter-btn">По дате</button>
        <button class="main-feed__filter-btn">Все публикации</button>
        <FeedItem/>
    </div>
</template>

<script>
import FeedItem from './FeedItem'
export default {
    name: "Feed",
  components: { FeedItem }
}
</script>

<style scoped lang="sass">
.main-feed
    margin-top: 40px

.main-feed__filter-btn
    position: relative
    margin-right: 15px

    &:after
        content: ''
        position: absolute
        display: inline-block
        border-right: 1px solid black
        border-bottom: 1px solid black
        width: 5px
        height: 5px
        transform: rotate(45deg)
        top: 4px
        right: -7px
</style>