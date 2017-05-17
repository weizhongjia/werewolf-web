import axios from 'axios'

let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8080'
} else {
  baseUrl = 'http://werewolf.mrourou.com'
}

var instance = axios.create({
  baseURL: baseUrl
})
/**
 * 发送法官事件
 */
var putJudgeEvent = (roomCode, judgeEvent) => instance.put('/werewolf/room/' + roomCode + '/judge/event', judgeEvent)

var getJudgeInfo = (roomCode) => instance.get('/werewolf/room/' + roomCode + '/judge/info')

var getPlayerInfo = (roomCode, seatNumber) => instance.get('/werewolf/room/' + roomCode + '/player/' + seatNumber + '/info')

var putPlayerEvent = (roomCode, seatNumber, playerEvent) => instance.put('/werewolf/room/' + roomCode + '/player/' + seatNumber + '/event', playerEvent)

export {putJudgeEvent, getJudgeInfo, getPlayerInfo, putPlayerEvent}
