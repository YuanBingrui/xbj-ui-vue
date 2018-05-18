// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import xbjUI from '../src/index.js'
import VueRouter from 'vue-router'
import routes from './route.config'

Vue.config.productionTip = false

Vue.use(xbjUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
