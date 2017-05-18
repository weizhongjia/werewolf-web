<template>
  <div id="night">
    <top></top>
    <div class="room">
      <div v-for="seat in seats" class="position">
        <seat :info="seat" :event="acceptableEventTypes" v-on:seatSelected="chooseSeat"></seat>
      </div>
    </div>
    <bottom :event="acceptableEventTypes" :selectedSeat="selectedSeat"></bottom>

    <!--天黑请闭眼-->
    <night v-on:nightComing="nightComing" v-if="night_coming"></night>
    <!--预言家看牌结果-->
    <judgement v-if="0"></judgement>
    <!--是否使用解药-->
    <antidote v-if="0"></antidote>
    <!--天亮了-->
    <day v-if="0"></day>

    <start-game v-on:startGame="startGame" v-if="complete_create"></start-game>
    <create-game v-on:createGame="createGame" v-if="create_room"></create-game>
  </div>

</template>
<script>
  import seat from './children/Seat.vue'
  import top from './children/Top.vue'
  import antidote from './children/Antidote.vue'
  import bottom from './children/Bottom.vue'
  import judgement from './children/Judgement.vue'
  import day from './children/Day.vue'
  import night from './children/Night.vue'
  import StartGame from './children/StartGame.vue'
  import CreateGame from './children/CreateGame.vue'
//  import { mapState } from 'vuex'
  import {putJudgeEvent, getJudgeInfo} from '../../store/getData'
  export default {
    name: 'game',
    components: {
      seat,
      top,
      antidote,
      bottom,
      judgement,
      day,
      night,
      StartGame,
      CreateGame
    },
    mounted () {
      this.roomCode = this.$route.params.roomCode
      this.getGameInfo()
    },
    data () {
      return {
        roomCode: '',
        seats: [],
        selectedSeat: '',
        acceptableEventTypes: []
      }
    },
    methods: {
      initAcceptableEventType: function () {
        this.create_room = false
        this.disband_game = false
        this.restart_game = false
        this.complete_create = false
        this.night_coming = false
      },
      getGameInfo: function () {
        getJudgeInfo(this.roomCode).then(res => {
          this.seats = res.data.playerSeatInfoList
          this.acceptableEventTypes = res.data.acceptableEventTypes
          window.setTimeout(this.getGameInfo, 5000)
        })
      },
      createGame: function () {
        const createEvent = {
          eventType: 'CREATE_ROOM',
          gameConfig: {
            VILLAGER: 4,
            WEREWOLVES: 4,
            WITCH: 1,
            HUNTER: 1,
            SEER: 1,
            MORON: 1
          },
          roomCode: this.roomCode
        }
        this.putEvent(createEvent)
      },
      startGame: function () {
        const createEvent = {
          eventType: 'COMPLETE_CREATE',
          roomCode: this.roomCode
        }
        this.putEvent(createEvent)
      },
      nightComing: function () {
        const nightComingEvent = {
          eventType: 'NIGHT_COMING',
          roomCode: this.roomCode
        }
        this.putEvent(nightComingEvent)
      },
      wolfKill: function () {
        const wolfKillEvent = {
          eventType: 'WOLF_KILL',
          roomCode: this.roomCode,
          wolfKillNumber: this.selectedSeat
        }
        this.putEvent(wolfKillEvent)
      },
      putEvent: function (event) {
        putJudgeEvent(this.roomCode, event).then(res => {
          this.initAcceptableEventType()
          this.seats = res.data.playerSeatInfoList
          this.acceptableEventTypes = res.data.acceptableEventTypes
        })
      },
      chooseSeat: function (seatNumber) {
        this.selectedSeat = seatNumber
      }
    },
    computed: {
      create_room: function () {
        return this.acceptableEventTypes.filter(event => event === 'CREATE_ROOM').length
      },
      complete_create: function () {
        return this.acceptableEventTypes.filter(event => event === 'COMPLETE_CREATE').length
      },
      night_coming: function () {
        return this.acceptableEventTypes.filter(event => event === 'NIGHT_COMING').length
      },
      disband_game: function () {
        return this.acceptableEventTypes.filter(event => event === 'DISBAND_GAME').length
      },
      restart_game: function () {
        return this.acceptableEventTypes.filter(event => event === 'RESTART_GAME').length
      }
    }
  }
</script>
<style>
  #night {
    background-color: #1e1f1f;
    position: absolute;
    width: 6.4rem;
    height: 100%;
  }
  .room {
    width: 5.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
  }
  .position {
    /*display: inline-block;*/
    width: 1.5rem;
    box-sizing: border-box;
    height: 1.5rem;
    margin-top:0.3rem;
    /*padding-top: 30px;*/
    text-align: center;
    border:13px solid #290d05;
    border-radius: 20px;
  }

</style>
