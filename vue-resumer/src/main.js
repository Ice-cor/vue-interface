// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import users from './leancloud'
// import users from './globle'
import ElementUI from 'element-ui'
import axios from 'axios'
import md5 from 'js-md5' 
// import qs from 'qs'
// import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/scss/reset.scss'

Vue.use(ElementUI)
// Vue.use(users)
Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
// Vue.prototype.$resource = VueResource
// Vue.use(VueResource) 
// Vue.prototype.$qs = qs

// console.log(https)

Vue.config.productionTip = false

// console.log(md5)

const app = new Vue({
  el: '#app',
  router,VueResource,
  components: { App },
  template: `
  <App/>
  `
})