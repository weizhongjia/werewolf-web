<template>
  <div id="night">
    <join-game v-on:joinGame="joinGame" v-if="join_room"></join-game>

    <div class="userImage">

      <seat :info="playerInfo" :nightRecord="nightRecord" :hideSwitch="true" :showRoleSwitch="showRo"></seat>

      <transition  name="slide-fade">
        <p v-if="playerInfo.role !== 'UNASSIGN'">点击头像可显示/隐藏身份牌</p>
      </transition>
    </div>
    <div class="random" v-on:click="showR" v-if='showRoleButton'>抽牌</div>
    <!--<div class="yes hide"daytime_vote>隐藏/显示身份</div>-->
    <vote v-if="daytime_vote" :playerInfoList="playerInfoList" :selfInfo="playerInfo" v-on:vote="daytimeVote"></vote>
    <sheriff-vote v-if="sheriff_vote" :playerInfoList="playerInfoList" :sheriffVoteList="sheriffRecord.votingRecord" :selfInfo="playerInfo" v-on:vote="sheriffVote"></sheriff-vote>
    <sheriff-pk-vote v-if="sheriff_pk_vote" :playerInfoList="playerInfoList" :sheriffPkVote="sheriffRecord.pkVotingRecord" :selfInfo="playerInfo" v-on:vote="sheriffPkVote"></sheriff-pk-vote>
    <voteResult v-if="showVoteResult && daytimeRecord" :daytimeRecord="daytimeRecord" :sheriff="sheriffRecord.sheriff"></voteResult>
    <user-bottom :event="acceptableEventTypeList" v-on:bottomConfirm="bottomEventConfirm"></user-bottom>
    <user-over v-if="1"></user-over>
  </div>


</template>

<script>
  import JoinGame from './children/JoinGame.vue'
  import Seat from '../game/children/Seat.vue'
  import Vote from './children/Vote.vue'
  import {getPlayerInfo, putPlayerEvent} from '../../store/getData'
  import VoteResult from '../game/children/VoteResult.vue'
  import SheriffVote from './children/SheriffVote.vue'
  import SheriffPkVote from './children/SheriffPkVote.vue'
  import UserBottom from './children/UserBottom.vue'
  import UserOver from './children/UserOver.vue'
  export default{
    name: 'userGame',
    components: {
      UserBottom,
      JoinGame,
      Seat,
      Vote,
      VoteResult,
      SheriffVote,
      SheriffPkVote,
      UserOver
    },
    data () {
      return {
        roomCode: '',
        userId: '',
        seatNumber: '',
        playerInfo: {role: 'UNASSIGN'},
        acceptableEventTypeList: [],
        playerInfoList: [],
        daytimeRecord: [],
        nightRecord: {},
        sheriffRecord: {},
        showRo: true,
        showRoleButton: false,
        showVoteResult: false
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
        return this.acceptableEventTypeList.filter(event => event === 'JOIN_ROOM').length
      },
      daytime_vote: function () {
        return this.acceptableEventTypeList.filter(event => event === 'DAYTIME_VOTE').length
      },
      sheriff_vote: function () {
        return this.acceptableEventTypeList.filter(event => event === 'SHERIFF_VOTE').length
      },
      sheriff_pk_vote: function () {
        return this.acceptableEventTypeList.filter(event => event === 'SHERIFF_PK_VOTE').length
      },
      sheriff_unregister: function () {
        return this.acceptableEventTypeList.filter(event => event === 'SHERIFF_UNREGISTER').length
      },
      exit_room: function () {
        return this.acceptableEventTypeList.filter(event => event === 'Exit_ROOM').length
      }
    },
    methods: {
      bottomEventConfirm: function () {
        if (this.sheriff_unregister) {
          this.sheriffUnregister()
        }
      },
      getGameInfo: function () {
        getPlayerInfo(this.roomCode, this.seatNumber).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
          this.playerInfo = res.data.playerInfo
          this.playerInfoList = res.data.playerSeatInfoList
          this.daytimeRecord = res.data.daytimeRecord
          this.sheriffRecord = res.data.sheriffRecord
          window.setTimeout(this.getGameInfo, 5000)
        })
      },
      joinGame: function () {
        const createEvent = {
          eventType: 'JOIN_ROOM',
          seatNumber: this.seatNumber,
          userID: this.userId
        }
        this.putEvent(createEvent)
      },
      daytimeVote: function (voteNumber) {
        const daytimeVoteEvent = {
          eventType: 'DAYTIME_VOTE',
          seatNumber: this.seatNumber,
          userID: this.userId,
          daytimeVoteNumber: voteNumber
        }
        this.putEvent(daytimeVoteEvent)
      },
      sheriffVote: function (voteNumber) {
        const sheriffVoteEvent = {
          eventType: 'SHERIFF_VOTE',
          seatNumber: this.seatNumber,
          userID: this.userId,
          sheriffVoteNumber: voteNumber
        }
        this.putEvent(sheriffVoteEvent)
      },
      sheriffPkVote: function (voteNumber) {
        const sheriffVoteEvent = {
          eventType: 'SHERIFF_PK_VOTE',
          seatNumber: this.seatNumber,
          userID: this.userId,
          sheriffPKVoteNumber: voteNumber
        }
        this.putEvent(sheriffVoteEvent)
      },
      sheriffUnregister: function () {
        const sheriffUnregisterEvent = {
          eventType: 'SHERIFF_UNREGISTER',
          seatNumber: this.seatNumber,
          userID: this.userId
        }
        this.putEvent(sheriffUnregisterEvent)
      },
      putEvent: function (event) {
        putPlayerEvent(this.roomCode, this.seatNumber, event).then(res => {
          this.acceptableEventTypeList = res.data.acceptableEventTypeList
          this.playerInfoList = res.data.playerSeatInfoList
        }).catch(err => console.log(err))
      },
      showR: function () {
        this.showRo = true
        this.showRoleButton = false
      }
    },
    watch: {
      exit_room: function (val, oldVal) {
        if (!val && oldVal) {
          this.showRoleButton = true
          this.showRo = false
        }
      },
      daytime_vote: function (val, oldVal) {
        this.showVoteResult = oldVal
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
    position: relative;
    text-align: center;
    width: 4.2rem;
    height: 4.2rem;
    margin:0.9rem auto 0
  }
  /*.userImage>div{*/
    /*border-radius: 50%;*/
  /*}*/
  .userImage .die{
    /*border-radius: 50%;*/
    overflow: hidden;
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
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
  .random{
    width: 2rem;
    height: 0.6rem;
    line-height: 0.58rem;
    background: #f6f5f5;
    margin:0 auto;
    border: 2px solid #5f5f5f;
    border-radius: 5px;
    font-size: 0.33rem;
    position: absolute;
    bottom: 3.5rem;
    left: 0;
    right: 0;
  }
</style>
