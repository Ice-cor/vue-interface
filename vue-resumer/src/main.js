// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import users from './leancloud'
import users from './globle'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/scss/reset.scss'

Vue.use(ElementUI)
// Vue.use(users)

Vue.config.productionTip = false

// console.log(users)
// console.log(xxx)

/* eslint-disable no-new */
// new Vue({
//   router,users,
//   el: '#app',
//   conponents: {App},
//   template: '<App/>'
// })


const app = new Vue({
  el: '#app',
  router,users,
  components: { App },
  template: `
  <App/>
  `
})