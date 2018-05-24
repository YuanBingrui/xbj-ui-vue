<template>
  <div class="side-nav">
    <router-link
      v-for="(navItem, index) in navList"
      :key="index"
      :to="{name: navItem.path}">
      {{ navItem.title }}
    </router-link>
  </div>
</template>

<script>
import navCofig from '../nav.config'

export default {
  name: 'SideNav',
  data () {
    return {
      navList: navCofig[0].children
    }
  },
  created () {
    this.navList.unshift({
      path: "introduction",
      title: "介绍"
    })
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.side-nav
  display flex
  flex-direction column
  align-content flex-start
</style>
