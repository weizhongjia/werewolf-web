import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserGame from '@/page/userGame/UserGame'
import Game from '@/page/game/Game'

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
    }
  ]
})
