<template>
  <top-menu :menu-list="menuData.menuList" :logo-img="menuData.logoImg"/>
</template>

<script>

export default {
  name: 'XBJTopMenu',
  data () {
    return {
      menuData: {
        primaryColor: '',
        slideSpeed: '',
        logoImg: '../../../static/logo.png',
        menuList: [{name: 'Core Docs', path: '#'}, {name: 'Forum', path: '#'}, {name: 'Community', path: '#'}, {name: 'Twitter', path: '#'}, {name: 'Vue Router', path: '#'}, {name: 'Vuex', path: '#'}, {name: 'Typescript', path: '#'}]
      }
    }
  }
}
</script>

<style>
</style>
