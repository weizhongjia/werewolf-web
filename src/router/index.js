import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
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
      path: '/foo',
      component: Foo
    },
    {
      path: '/game',
      component: Game
    }
  ]
})
