<template>
  <div class="main-components">
    <div class="side-menu-left">
      <side-nav></side-nav>
    </div>
    <div class="main-content-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideNav from './side-nav'
export default {
  name: 'MainComponents',
  components: {
    SideNav
  },
  data () {
    return {

    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.main-components
  box-sizing border-box
  display flex
  .side-menu-left
    border 1px #ccc solid
    flex 0 0 30%
  .main-content-right
    border 1px #ccc solid
    flex 0 0 70%
</style>
