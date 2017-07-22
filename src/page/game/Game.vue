<template>
  <div id="night">
    <top v-on:resetGame="restartGame" v-on:disbandGame="disbandGame" :status="status"></top>
    <div class="room">
      <div v-for="(seat,index) in seats" class="position">
        <seat showRoleSwitch="true" showRo="true" :info="seat" :nightRecord="nightRecord" :selectedSeat="selectedSeat" :sheriff="sheriffRecord" :wolfKill="wolf_kill" :witchPoison="witch_poison" v-on:seatSelected="chooseSeat" :class="{'isSelected':isSelected[index]}" :key="index"></seat>
      </div>
    </div>
    <bottom :event="acceptableEventTypes" :selectedInfo="selectedInfo" :selectedSeat="selectedSeat" :sheriffRecord="sheriffRecord" v-on:bottomConfirm="bottomEventConfirm"></bottom>

    <!--天黑请闭眼-->
    <night v-on:nightComing="nightComing" v-if="night_coming && !showVoteResult"></night>
    <!--预言家看牌结果-->
    <judgement v-if="0"></judgement>
    <!--是否使用解药-->
    <antidote v-if="witch_save" v-on:witchSave="witchSave" :wolfKilledSeat="nightRecord.wolfKilledSeat"></antidote>
    <!--天亮了-->
    <day v-if="daytime_coming" v-on:daytime="daytimeComing"></day>

    <!--创建游戏-->
    <create-game v-on:createGame="createGame" v-if="create_room"></create-game>

    <start-game v-on:handleClick="handleClick" v-if="complete_create || ending_game || sheriff_pk_voting" :endingGame="ending_game" :startGame="complete_create" :sheriffPkVoting="sheriff_pk_voting"></start-game>

    <!--当晚结果-->
    <night-result v-if="showNightResult" :nightResult="nightRecord" v-on:hideNightResult="hideNightResult"></night-result>

    <!--游戏结束-->
    <game-over v-if="10"></game-over>
    <!--投票结果-->
    <vote-result v-on:hideVoteResult="hideVoteResult" v-if="showVotingResult" :showVotingResult="showVotingResult" :daytimeRecord="daytimeRecord" :sheriffRecord="sheriffRecord"></vote-result>
  </div>

</template>
<script>
  import Seat from './children/Seat.vue'
  import Top from './children/Top.vue'
  import Antidote from './children/Antidote.vue'
  import Bottom from './children/Bottom.vue'
  import Judgement from './children/Judgement.vue'
  import Day from './children/Day.vue'
  import Night from './children/Night.vue'
  import StartGame from './children/StartGame.vue'
  import CreateGame from './children/CreateGame.vue'
  import VoteResult from './children/VoteResult.vue'
  import NightResult from './children/NightReslt.vue'
  import GameOver from './children/GameOver.vue'
//  import { mapState } from 'vuex'
  import {putJudgeEvent, getJudgeInfo} from '../../store/getData'
  export default {
    name: 'game',
    components: {
      Seat,
      Top,
      Antidote,
      Bottom,
      Judgement,
      Day,
      Night,
      StartGame,
      CreateGame,
      VoteResult,
      NightResult,
      GameOver
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
        selectedInfo: {},
        acceptableEventTypes: [],
        daytimeRecord: [],
        nightRecord: {},
        sheriffSeat: [],
        sheriffRecord: {},
        status: '',
        showNightResult: false,
        showVoteResult: ''
      }
    },
    methods: {
      init: function () {
        this.seats = []
        this.selectedSeat = ''
        this.acceptableEventTypes = []
        this.daytimeRecord = []
        this.nightRecord = {}
        this.sheriffSeat = []
        this.sheriffRecord = {}
      },
      getGameInfo: function () {
        getJudgeInfo(this.roomCode).then(res => {
          this.seats = res.data.playerSeatInfoList
          this.acceptableEventTypes = res.data.acceptableEventTypes
          this.daytimeRecord = res.data.daytimeRecord
          this.status = res.data.status
          this.nightRecord = res.data.nightRecord
          this.sheriffRecord = res.data.sheriffRecord || this.sheriffRecord
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
          sheriffSwitch: true,
          roomCode: this.roomCode
        }
        this.putEvent(createEvent)
      },
      restartGame: function () {
        this.init()
        const restartGameEvent = {
          eventType: 'RESTART_GAME',
          roomCode: this.roomCode
        }
        this.putEvent(restartGameEvent)
      },
      disbandGame: function () {
        this.init()
        const disbandGameEvent = {
          eventType: 'DISBAND_GAME',
          roomCode: this.roomCode
        }
        this.putEvent(disbandGameEvent)
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
        if (this.sheriff_pk_voting) {
          this.sheriffPkVoting()
        }
      },
      bottomEventConfirm: function (flag) {
        if (this.wolf_kill) {
          this.wolfKill(flag)
        }
        if (this.seer_verify) {
          this.seerVerify()
        }
        if (this.witch_poison) {
          this.witchPoison(flag)
        }
        if (this.daytime_voting) {
          this.daytimeVoting(flag)
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
        if (this.sheriff_running) {
          this.sheriffRunning(flag)
        }
        if (this.sheriff_voting) {
          this.sheriffVoting(flag)
        }
        if (this.sheriff_switch) {
          this.sheriffSwtich()
        }
        if (this.hunter_shoot) {
          this.hunterShoot(flag)
        }
        if (this.werewolves_explode) {
          this.werewolvesExplode(flag)
        }
        if (this.hunter_state) {
          this.hunterState()
        }
        if (this.moron_show) {
          this.moronShow(flag)
        }
        if (this.sheriff_unregister) {
          this.sheriffUnregister(flag)
        }
      },
      wolfKill: function (flag) {
        let killNumber = 0
        if (flag) {
          killNumber = this.selectedSeat
        }
        const wolfKillEvent = {
          eventType: 'WOLF_KILL',
          roomCode: this.roomCode,
          wolfKillNumber: killNumber
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
      witchPoison: function (flag) {
        let poison = 0
        if (flag) {
          poison = this.selectedSeat
        }
        const witchPoisonEvent = {
          eventType: 'WITCH_POISON',
          roomCode: this.roomCode,
          witchPoisonNumber: poison
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
      daytimeVoting: function (flag) {
        if (flag) return
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
      sheriffRunning: function () {
        const sheriffRunningEvent = {
          eventType: 'SHERIFF_RUNNING',
          roomCode: this.roomCode,
          sheriffApplyList: this.sheriffSeat
        }
        this.putEvent(sheriffRunningEvent)
      },
      sheriffVoting: function (flag) {
        if (this.is_on_sheriff && this.selectedInfo.role === 'WEREWOLVES' && this.selectedInfo.alive) return
        if (flag) return
        const sheriffVotingEvent = {
          eventType: 'SHERIFF_VOTEING',
          roomCode: this.roomCode
        }
        this.putEvent(sheriffVotingEvent)
      },
      sheriffPkVoting: function () {
        const sherifffPkVoting = {
          eventType: 'SHERIFF_PK_VOTEING',
          roomCode: this.roomCode
        }
        this.putEvent(sherifffPkVoting)
      },
      sheriffSwtich: function () {
        const sheriffSwitchEvent = {
          eventType: 'SHERIFF_SWITCH',
          roomCode: this.roomCode,
          sheriffSwitchNumber: this.selectedSeat
        }
        this.putEvent(sheriffSwitchEvent)
      },
      hunterShoot: function (flag) {
        let shootNumber = 0
        if (flag) {
          shootNumber = this.selectedSeat
        }
        const hunterShootEvent = {
          eventType: 'HUNTER_SHOOT',
          roomCode: this.roomCode,
          hunterShoot: shootNumber
        }
        this.putEvent(hunterShootEvent)
      },
      werewolvesExplode: function (flag) {
        if (this.is_on_sheriff && this.selectedInfo.role === 'WEREWOLVES' && this.selectedInfo.alive && flag) return
        if (!this.is_on_sheriff && !flag) return
        const wereWolfExplodeEvent = {
          eventType: 'WEREWOLVES_EXPLODE',
          roomCode: this.roomCode,
          explodeWereWolf: this.selectedSeat
        }
        this.putEvent(wereWolfExplodeEvent)
      },
      hunterState: function () {
        const hunterStateEvent = {
          eventType: 'HUNTER_STATE',
          roomCode: this.roomCode
        }
        this.putEvent(hunterStateEvent)
      },
      moronShow: function (flag) {
        const moronShowEvent = {
          eventType: 'MORON_SHOW',
          roomCode: this.roomCode,
          moronShow: flag
        }
        this.putEvent(moronShowEvent)
      },
      sheriffUnregister: function (flag) {
        if (!flag) return
        const sheriffUnregisterEvent = {
          eventType: 'SHERIFF_UNREGISTER',
          roomCode: this.roomCode,
          unregisterSheriff: this.selectedSeat
        }
        this.putEvent(sheriffUnregisterEvent)
      },
      putEvent: function (event) {
        putJudgeEvent(this.roomCode, event).then(res => {
          this.seats = res.data.playerSeatInfoList
          this.acceptableEventTypes = res.data.acceptableEventTypes
          this.daytimeRecord = res.data.daytimeRecord
          this.nightRecord = res.data.nightRecord
          this.status = res.data.status
          this.sheriffRecord = res.data.sheriffRecord || this.sheriffRecord
          this.selectedSeat = ''
          this.sheriffSeat = []
        }).catch(err => console.log(err))
      },
      chooseSeat: function (info) {
        if (this.sheriff_running) {
          let newSheriffSeat = this.sheriffSeat.filter(seat => info.seatNumber !== seat)
          if (newSheriffSeat.length === this.sheriffSeat.length) {
            this.sheriffSeat.push(info.seatNumber)
          } else {
            this.sheriffSeat = newSheriffSeat
          }
        } else {
          if (this.selectedSeat === info.seatNumber) {
            this.selectedSeat = ''
            this.selectedInfo = null
          } else {
            this.selectedSeat = info.seatNumber
            this.selectedInfo = info
          }
        }
      },
      hideNightResult: function () {
        this.showNightResult = false
      },
      hideVoteResult: function () {
        this.showVoteResult = ''
      }
    },
    watch: {
      sheriff_voting: function (val, oldVal) {
        if (oldVal) {
          this.showVoteResult = 'sheriff_voting'
        }
      },
      sheriff_pk_voting: function (val, oldVal) {
        if (oldVal) {
          this.showVoteResult = 'sheriff_pk_voting'
        }
      },
      daytime_voting: function (val, oldVal) {
        if (oldVal) {
          this.showVoteResult = 'daytime_voting'
        }
      },
      daytime_coming: function (val, oldVal) {
        this.showNightResult = oldVal
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
      },
      sheriff_running: function () {
        return this.acceptableEventTypes.filter(event => event === 'SHERIFF_RUNNING').length
      },
      sheriff_voting: function () {
        return this.acceptableEventTypes.filter(event => event === 'SHERIFF_VOTEING').length
      },
      sheriff_pk_voting: function () {
        return this.acceptableEventTypes.filter(event => event === 'SHERIFF_PK_VOTEING').length
      },
      sheriff_switch: function () {
        return this.acceptableEventTypes.filter(event => event === 'SHERIFF_SWITCH').length
      },
      hunter_shoot: function () {
        return this.acceptableEventTypes.filter(event => event === 'HUNTER_SHOOT').length
      },
      werewolves_explode: function () {
        return this.acceptableEventTypes.filter(event => event === 'WEREWOLVES_EXPLODE').length
      },
      sheriff_unregister: function () {
        return this.acceptableEventTypes.filter(event => event === 'SHERIFF_UNREGISTER').length
      },
      hunter_state: function () {
        return this.acceptableEventTypes.filter(event => event === 'HUNTER_STATE').length
      },
      moron_show: function () {
        return this.acceptableEventTypes.filter(event => event === 'MORON_SHOW').length
      },
      isSelected: function () {
        let isSelectedArray = []
        for (let i = 0; i < this.seats.length; i++) {
          isSelectedArray[i] = i === this.selectedSeat - 1 || this.sheriffSeat.filter(seat => seat === i + 1).length > 0
        }
        return isSelectedArray
      },
      is_on_sheriff: function () {
        return this.sheriffRecord && Object.keys(this.sheriffRecord.votingRecord).filter(number => parseInt(number) === this.selectedSeat).length > 0
      },
      showVotingResult: function () {
        console.log(this.showVoteResult === 'daytime_voting' && this.daytimeRecord && Object.keys(this.daytimeRecord.votingRecord))
        if ((this.showVoteResult === 'daytime_voting' && this.daytimeRecord && Object.keys(this.daytimeRecord.votingRecord).length > 0) || ((this.showVoteResult === 'sheriff_voting' || this.showVoteResult === 'sheriff_pk_voting') && (this.sheriffRecord && (this.sheriffRecord.votingRecord || this.sheriffRecord.pkVotingRecord)))) {
          return this.showVoteResult
        } else {
          return false
        }
      }
    }
  }
</script>
<style>
  /*选中添加效果*/
  .isSelected {
    border:5px solid olivedrab;
  }
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
    position: relative;
    margin-left:0.2rem;
    /*padding-top: 30px;*/
    text-align: center;
    /*border:13px solid #290d05;*/
    /*border-radius: 20px;*/
  }

</style>
