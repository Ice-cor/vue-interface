import Vue from 'vue';
import Router from 'vue-router';
import Hello from './components/HelloWorld'
import Home from './home'
import SignUp from './components/signUp'
import SignIn from './components/signIn'

Vue.use(Router)

export default new Router({
  routes:[
      {
          path:'/',
          component:Home
      },
      {
          path:'/signup',
          component:SignUp
      },
      {
        path:'/signin',
        component:SignIn
    }
  ]
})