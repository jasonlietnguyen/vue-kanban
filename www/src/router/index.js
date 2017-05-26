import Vue from 'vue'
import Router from 'vue-router'
import Boards from 'components/Boards'
import Board from 'components/Board'
import Homepage from 'components/Homepage'
import Login from 'components/Login'
import Register from 'components/Register'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/dashboard',
      component: {
        template: `<div>
        <router-view></router-view>
      </div>`},
      beforeEnter(to, from, next) {
        console.log(store)
        if (store.state.user.name) {
          return next()
        }
        return next('/')
      },
      children: [
        {
          path: '',
          name: 'Boards',
          component: Boards
        }, {
          path: '/boards/:id',
          name: 'Board',
          component: Board
        },
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      redirect: '/',
      component: Homepage

    }
  ]
})
