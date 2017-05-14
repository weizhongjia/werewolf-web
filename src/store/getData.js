import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:8081'
})
/**
 * 发送法官事件
 */
var putJudgeEvent = (roomCode, judgeEvent) => instance.put('/room/' + roomCode + '/judge/event', judgeEvent)

var getJudgeInfo = (roomCode) => instance.get('/room/' + roomCode + '/judge/info')

export {putJudgeEvent, getJudgeInfo}
