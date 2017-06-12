import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserGame from '@/page/userGame/UserGame'
import Game from '@/page/game/Game'
import Home from '@/page/home/Home'
import ListPage from '@/page/home/ListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
