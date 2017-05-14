import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:8081'
})
/**
 * 发送法官事件
 */
var putJudgeEvent = (roomCode, judgeEvent) => instance.put('/room/' + roomCode + '/judge/event', judgeEvent)

var getJudgeInfo = (roomCode) => instance.get('/room/' + roomCode + '/judge/info')

var getPlayerInfo = (roomCode, seatNumber) => instance.get('/room/' + roomCode + '/player/' + seatNumber + '/info')

var putPlayerEvent = (roomCode, seatNumber, playerEvent) => instance.put('/room/' + roomCode + '/player/' + seatNumber + '/event', playerEvent)

export {putJudgeEvent, getJudgeInfo, getPlayerInfo, putPlayerEvent}
