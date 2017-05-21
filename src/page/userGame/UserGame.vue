<template>
  <div id="night">
    <join-game v-on:joinGame="joinGame" v-if="join_room"></join-game>
    <div style="text-align: center; width: 4rem; height: 4rem;margin:2rem auto 0">
      <seat :info="playerInfo"></seat>
    </div>
    <vote :playerInfoList="playerInfoList" :selfInfo="playerInfo" v-bind:vote="daytimeVote"></vote>
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
</style>
