<template>
  <div class="main-layout-box">
    <div class="page-header">
      <top-menu :menu-list="menuData.menuList" :logo-img="menuData.logoImg"/>
    </div>
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      menuData: {
        logoImg: '../static/logo.png',
        menuList: [
          {name: '首页', path: '/'},
          {name: '组件', path: '/main-components'}]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-layout-box
  width 100%
</style>
