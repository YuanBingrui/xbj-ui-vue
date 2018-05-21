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
        menuList: [{name: 'Core Docs', href: '#'}, {name: 'Forum', href: '#'}, {name: 'Community', href: '#'}, {name: 'Twitter', href: '#'}, {name: 'Vue Router', href: '#'}, {name: 'Vuex', href: '#'}, {name: 'Typescript', href: '#'}]
      }
    }
  }
}
</script>

<style>
</style>
