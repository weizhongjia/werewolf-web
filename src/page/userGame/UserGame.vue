<template>
  <div id="night">
    <join-game v-on:joinGame="joinGame" v-if="join_room"></join-game>

    <div class="userImage">

      <seat :info="playerInfo"></seat>
      <p>点击头像可显示/隐藏身份牌</p>
    </div>
    <!--<div class="yes hide">隐藏/显示身份</div>-->
    <vote v-if="daytime_vote" :playerInfoList="playerInfoList" :selfInfo="playerInfo" v-on:vote="daytimeVote"></vote>
  </div>


</template>

<script>
  import JoinGame from './children/JoinGame.vue'
  import Seat from '../game/children/Seat.vue'
  import Vote from './children/Vote.vue'
  import {getPlayerInfo, putPlayerEvent} from '../../store/getData'
  export default{
    name: 'userGame',
    components: {
      JoinGame,
      Seat,
      Vote
    },
    data () {
      return {
        roomCode: '',
        userId: '',
        seatNumber: '',
        playerInfo: {role: 'UNASSIGN'},
        acceptableEventTypeList: [],
        playerInfoList: []
      }
    },
    mounted () {
      this.roomCode = this.$route.params.roomCode
      this.userId = this.$route.params.userId
      this.seatNumber = this.$route.params.seatNumber
      this.getGameInfo()
    },
    computed: {
      join_room: function () {
        return this.acceptableEventTypeList.filter(event => event === 'JOIN_GAME').length
      },
      daytime_vote: function () {
        return this.acceptableEventTypeList.filter(event => event === 'DAYTIME_VOTE').length
      }
    },
    methods: {
      getGameInfo: function () {
        getPlayerInfo(this.roomCode, this.seatNumber).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
          this.playerInfo = res.data.playerInfo
          this.playerInfoList = res.data.playerSeatInfoList
          window.setTimeout(this.getGameInfo, 5000)
        })
      },
      joinGame: function () {
        const createEvent = {
          eventType: 'JOIN_ROOM',
          seatNumber: this.seatNumber,
          userID: this.userId
        }
        putPlayerEvent(this.roomCode, this.seatNumber, createEvent).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
          this.playerInfoList = res.data.playerSeatInfoList
        })
      },
      daytimeVote: function (voteNumber) {
        const daytimeVoteEvent = {
          eventType: 'DAYTIME_VOTE',
          seatNumber: this.seatNumber,
          userID: this.userId,
          daytimeVoteNumber: voteNumber
        }
        putPlayerEvent(this.roomCode, this.seatNumber, daytimeVoteEvent).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
        })
      }
    }
  }
</script>

<style>
  #night {
    background-color: #1e1f1f;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .userImage{
    text-align: center;
    width: 4.2rem;
    height: 4.2rem;
    margin:0.9rem auto 0
  }
  .userImage>div{
    border-radius: 50%;
  }
  #night .hide{
    width: 3rem;
    font-size: 0.3rem;
  }
  .userImage>p{
    font-size: 0.3rem;
    color: gray;
    margin-top:0.1rem;
  }
</style>
