<template>
  <div id="night">
    <join-game v-on:joinGame="joinGame" v-if="join_room"></join-game>
    <div class="userImage">
      <seat :info="playerInfo"></seat>
    </div>
    <vote></vote>
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
      },
      roleImage: function () {
        return
      }
    },
    methods: {
      initAcceptableEventType: function () {
        this.join_room = false
      },
      getGameInfo: function () {
        getPlayerInfo(this.roomCode, this.seatNumber).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
          this.playerInfo = res.data.playerInfo
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
    margin:1rem auto 0
  }
  .userImage>div{
    border-radius: 50%;
  }
</style>
