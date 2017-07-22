import axios from 'axios'
import store from '../util/store'

let baseUrl = 'http://werewolf.mrourou.com'
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:8080'
// } else {
//   baseUrl = 'http://werewolf.mrourou.com'
// }

var instance = axios.create({
  baseURL: baseUrl
})

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log('interceptors:')
  if (error.response.status === 404) {
    store.remove('userinfo')
    window.history.go(0)
  }
  return Promise.reject(error);
});
/**
 * 发送法官事件
 */
var putJudgeEvent = (roomCode, judgeEvent) => instance.request({
  url: '/werewolf/room/' + roomCode + '/judge/event',
  method: 'PUT',
  data: judgeEvent,
  headers: {'Authorization': store.get('userinfo').token}
})

var getJudgeInfo = (roomCode) => instance.request({
  url: '/werewolf/room/' + roomCode + '/judge/info',
  method: 'GET',
  headers: {'Authorization': store.get('userinfo').token}
})

var getPlayerInfo = (roomCode, seatNumber) => instance.request({
  url: '/werewolf/room/' + roomCode + '/player/' + seatNumber + '/info',
  method: 'GET',
  headers: {'Authorization': store.get('userinfo').token}
})

var putPlayerEvent = (roomCode, seatNumber, playerEvent) => instance.request({
  url: '/werewolf/room/' + roomCode + '/player/' + seatNumber + '/event',
  method: 'PUT',
  data: playerEvent,
  headers: {'Authorization': store.get('userinfo').token}
})

var login = (loginData) => instance.put('/werewolf/auth')

export {putJudgeEvent, getJudgeInfo, getPlayerInfo, putPlayerEvent, login}
