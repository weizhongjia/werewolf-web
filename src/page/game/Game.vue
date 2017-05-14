<template>
  <div id="night">
    <top></top>
    <div class="room">
      <div v-for="seat in seats" class="position">
        <seat :info="seat"></seat>
      </div>
    </div>
    <bottom></bottom>

    <!--天黑请闭眼-->
    <night v-if="0"></night>
    <!--预言家看牌结果-->
    <judgement v-if="0"></judgement>
    <!--是否使用解药-->
    <antidote v-if="0"></antidote>
    <!--天亮了-->
    <day v-if="0"></day>

    <start-game v-on:startGame="startGame" v-if="create_room"></start-game>
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
      StartGame
    },
    mounted () {
      getJudgeInfo('test').then(res => {
        this.seats = res.data.playerSeatInfoList
        this.acceptableEventTypes = res.data.acceptableEventTypes
      })
    },
    data () {
      return {
        seats: [],
        create_room: false,
        disband_game: false,
        restart_game: false
      }
    },
    methods: {
      initAcceptableEventType: function () {
        this.create_room = false
        this.disband_game = false
        this.restart_game = false
      },
      startGame: function () {
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
          roomCode: 'test'
        }
        putJudgeEvent('test', createEvent).then(res => {
          this.initAcceptableEventType()
          this.seats = res.data.playerSeatInfoList
          this.acceptableEventTypes = res.data.acceptableEventTypes
        })
      }
    },
    computed: {
      acceptableEventTypes: {
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
