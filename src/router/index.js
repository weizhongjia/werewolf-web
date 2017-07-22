import Vue from 'vue'
import Router from 'vue-router'
import UserGame from '@/page/userGame/UserGame'
import Game from '@/page/game/Game'
import Home from '@/page/home/Home'
import ListPage from '@/page/home/ListPage'
import store from '../util/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: to => {
        if (to.query.token) {
          store.set('userinfo', {token: to.query.token})
        }
        let redirectUrl = store.get('current_url')
        return redirectUrl
      }
    },
    {
      path: '/user_game/:roomCode/:seatNumber/:userId',
      component: UserGame
    },
    {
      path: '/game/:roomCode',
      component: Game
    },
    {
      path: '/home',
      component: Home
    },
    {
      // name: 'listPage',
      path: '/home/listPage',
      component: ListPage
    }
  ]
})
