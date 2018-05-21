<template>
  <div id="app">
    <router-link
      v-for="(routersItem, index) in routersList"
      :key="index"
      :to="{name: routersItem.path}">
      {{ routersItem.title }}
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import navConfig from './nav.config'

export default {
  name: 'App',
  data() {
    return {
      routersList: navConfig[0].children
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
