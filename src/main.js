// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/flexible.js'
import store from './util/store'

// import {appid, loginHash} from './setting'

Vue.config.productionTip = false
store.set('userinfo', {token: 'a'})
// router.beforeEach((to, from, next) => {
//   let userinfo = store.get('userinfo')
//   console.log(userinfo)
//   if (!userinfo && to.path !== '/') {
//     store.remove('userinfo')
//     store.set('current_url', window.location.hash.substr(1))
//     let url = encodeURIComponent(window.location.origin + loginHash)
//     window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + url + '&response_type=code&scope=snsapi_userinfo#wechat_redirect '
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
address
