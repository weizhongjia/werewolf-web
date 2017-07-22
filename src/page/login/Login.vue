<template>
  <div id="night">
    登录中
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
    name: 'login',
    mounted () {
      this.roomCode = this.$route.params.roomCode
      this.getGameInfo()
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
