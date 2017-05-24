<template>
  <div id="night">
    <top v-on:resetGame="restartGame"></top>
    <div class="room">
      <div v-for="seat in seats" class="position">
        <seat :info="seat" :selectedSeat="selectedSeat" :wolfKill="wolf_kill" :witchPoison="witch_poison" v-on:seatSelected="chooseSeat"></seat>
      </div>
    </div>
    <bottom :event="acceptableEventTypes" :selectedSeat="selectedSeat" v-on:bottomConfirm="bottomEventConfirm"></bottom>

    <!--天黑请闭眼-->
    <night v-on:nightComing="nightComing" v-if="night_coming"></night>
    <!--预言家看牌结果-->
    <judgement v-if="0"></judgement>
    <!--是否使用解药-->
    <antidote v-if="witch_save" v-on:witchSave="witchSave"></antidote>
    <!--天亮了-->
    <day v-if="daytime_coming" v-on:daytime="daytimeComing"></day>

    <start-game v-on:handleClick="handleClick" v-if="complete_create || ending_game" :endingGame="ending_game" :startGame="complete_create"></start-game>
    <create-game v-on:createGame="createGame" v-if="create_room"></create-game>
    <voteResult v-if="daytimeRecord" :daytimeRecord="daytimeRecord"></voteResult>
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
  import VoteResult from './children/VoteResult.vue'
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
      CreateGame,
      VoteResult
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
        acceptableEventTypes: [],
        daytimeRecord: []
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
          this.daytimeRecord = res.data.daytimeRecord
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
      restartGame: function () {
        const restartGameEvent = {
          eventType: 'RESTART_GAME',
          roomCode: this.roomCode
        }
        this.putEvent(restartGameEvent)
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
      handleClick: function () {
        if (this.complete_create) {
          this.startGame()
        }
        if (this.ending_game) {
          this.endingGame()
        }
      },
      bottomEventConfirm: function () {
        if (this.wolf_kill) {
          this.wolfKill()
        }
        if (this.seer_verify) {
          this.seerVerify()
        }
        if (this.witch_poison) {
          this.witchPoison()
        }
        if (this.daytime_voting) {
          this.daytimeVoting()
        }
        if (this.fake_witch_save) {
          this.fakeWitchSave()
        }
        if (this.fake_witch_poison) {
          this.fakeWitchPoison()
        }
        if (this.fake_seer_verify) {
          this.fakeSeerVerify()
        }
      },
      wolfKill: function () {
        const wolfKillEvent = {
          eventType: 'WOLF_KILL',
          roomCode: this.roomCode,
          wolfKillNumber: this.selectedSeat
        }
        this.putEvent(wolfKillEvent)
      },
      seerVerify: function () {
        const seerVerifyEvent = {
          eventType: 'SEER_VERIFY',
          roomCode: this.roomCode,
          seerVerifyNumber: this.selectedSeat
        }
        this.putEvent(seerVerifyEvent)
      },
      fakeSeerVerify: function () {
        const fakeSeerVerifyEvent = {
          eventType: 'FAKE_SEER_VERIFY',
          roomCode: this.roomCode,
          seerVerifyNumber: 0
        }
        this.putEvent(fakeSeerVerifyEvent)
      },
      witchSave: function (isSave) {
        const witchSaveEvent = {
          eventType: 'WITCH_SAVE',
          roomCode: this.roomCode,
          witchSave: isSave
        }
        this.putEvent(witchSaveEvent)
      },
      fakeWitchSave: function () {
        const fakeWitchSaveEvent = {
          eventType: 'FAKE_WITCH_SAVE',
          roomCode: this.roomCode,
          witchSaveNumber: 0
        }
        this.putEvent(fakeWitchSaveEvent)
      },
      fakeWitchPoison: function () {
        const fakeWitchPoisonEvent = {
          eventType: 'FAKE_WITCH_POISON',
          roomCode: this.roomCode,
          witchPoisonNumber: 0
        }
        this.putEvent(fakeWitchPoisonEvent)
      },
      witchPoison: function () {
        const witchPoisonEvent = {
          eventType: 'WITCH_POISON',
          roomCode: this.roomCode,
          witchPoisonNumber: this.selectedSeat
        }
        this.putEvent(witchPoisonEvent)
      },
      daytimeComing: function () {
        const daytimeComingEvent = {
          eventType: 'DAYTIME_COMING',
          roomCode: this.roomCode
        }
        this.putEvent(daytimeComingEvent)
      },
      daytimeVoting: function () {
        const daytimeVotingEvent = {
          eventType: 'DAYTIME_VOTING',
          roomCode: this.roomCode
        }
        this.putEvent(daytimeVotingEvent)
      },
      endingGame: function () {
        const endingGameEvent = {
          eventType: 'GAME_ENDING',
          roomCode: this.roomCode
        }
        this.putEvent(endingGameEvent)
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
      wolf_kill: function () {
        return this.acceptableEventTypes.filter(event => event === 'WOLF_KILL').length
      },
      seer_verify: function () {
        return this.acceptableEventTypes.filter(event => event === 'SEER_VERIFY').length
      },
      fake_seer_verify: function () {
        return this.acceptableEventTypes.filter(event => event === 'FAKE_SEER_VERIFY').length
      },
      witch_save: function () {
        return this.acceptableEventTypes.filter(event => event === 'WITCH_SAVE').length
      },
      witch_poison: function () {
        return this.acceptableEventTypes.filter(event => event === 'WITCH_POISON').length
      },
      fake_witch_poison: function () {
        return this.acceptableEventTypes.filter(event => event === 'FAKE_WITCH_POISON').length
      },
      fake_witch_save: function () {
        return this.acceptableEventTypes.filter(event => event === 'FAKE_WITCH_SAVE').length
      },
      daytime_coming: function () {
        return this.acceptableEventTypes.filter(event => event === 'DAYTIME_COMING').length
      },
      daytime_voting: function () {
        return this.acceptableEventTypes.filter(event => event === 'DAYTIME_VOTING').length
      },
      ending_game: function () {
        return this.acceptableEventTypes.filter(event => event === 'GAME_ENDING').length
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
    width: 5.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
  }
  .position {
    /*display: inline-block;*/
    width: 1.5rem;
    /*box-sizing: border-box;*/
    height: 1.5rem;
    margin-top:0.2rem;
    margin-left:0.2rem;
    /*padding-top: 30px;*/
    text-align: center;
    /*border:13px solid #290d05;*/
    /*border-radius: 20px;*/
  }

</style>
