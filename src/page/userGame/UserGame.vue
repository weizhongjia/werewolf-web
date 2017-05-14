<template>
  <join-game v-on:joinGame="joinGame" v-if="join_room"></join-game>
</template>

<script>
  import JoinGame from './children/JoinGame.vue'
  import {getPlayerInfo, putPlayerEvent} from '../../store/getData'
  export default{
    name: 'userGame',
    components: {
      JoinGame
    },
    data () {
      return {
        roomCode: '',
        userId: '',
        seatNumber: '',
        join_room: false
      }
    },
    mounted () {
      this.roomCode = this.$route.params.roomCode
      this.userId = this.$route.params.userId
      this.seatNumber = this.$route.params.seatNumber
      this.getGameInfo()
    },
    computed: {
      acceptableEventTypeList: {
        get: function () {
          return ''
        },
        set: function (newValue) {
          let value
          for (value in newValue) {
            this.$data[newValue[value].toLowerCase()] = true
          }
        }
      }
    },
    methods: {
      initAcceptableEventType: function () {
        this.join_room = false
      },
      getGameInfo: function () {
        getPlayerInfo(this.roomCode, this.seatNumber).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
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
          this.initAcceptableEventType()
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
        })
      }
    }
  }
</script>

<style>
  .day{
    width:100%;
    height:auto%;
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    padding:2rem 0.4rem 0;
    background: #d6d6d6;
    font-size: 0.35rem;
  }
  .day p{
    font-size: 0.6rem;
    font-style: italic;
    font-weight: bold;
    color: #1e1f1f;
  }
  .next{
    width:3rem;
    height:0.8rem;
    background: #232423;
    color:#d6d6d6;
    font-size: 0.45rem;
    font-weight: bold;
    margin-top:5rem
  }
</style>
