<template>
  <div class="bottom">
    <p >{{text.title}}</p>
    <div class="left">
      <p class="tips">{{text.tips}}</p>
      <p class="yes" v-if="text.negative" v-on:click="emitEvent(false)">{{text.negative}}</p>
    </div>
    <div class="right yes" v-if="text.positive" v-on:click="emitEvent(true)">{{text.positive}}</div>
  </div>
</template>

<script>
  export default{
    name: 'bottom',
    props: ['event', 'selectedSeat', 'sheriffRecord', 'selectedInfo'],
    methods: {
      emitEvent: function (flag) {
        this.$emit('bottomConfirm', flag)
      }
    },
    computed: {
      wolf_kill: function () {
        return this.event.filter(event => event === 'WOLF_KILL').length > 0
      },
      seer_verify: function () {
        return this.event.filter(event => event === 'SEER_VERIFY').length > 0
      },
      witch_poison: function () {
        return this.event.filter(event => event === 'WITCH_POISON').length > 0
      },
      witch_save: function () {
        return this.event.filter(event => event === 'WITCH_SAVE').length > 0
      },
      daytime_voting: function () {
        return this.event.filter(event => event === 'DAYTIME_VOTING').length > 0
      },
      fake_seer_verify: function () {
        return this.event.filter(event => event === 'FAKE_SEER_VERIFY').length > 0
      },
      fake_witch_poison: function () {
        return this.event.filter(event => event === 'FAKE_WITCH_POISON').length > 0
      },
      fake_witch_save: function () {
        return this.event.filter(event => event === 'FAKE_WITCH_SAVE').length > 0
      },
      sheriff_running: function () {
        return this.event.filter(event => event === 'SHERIFF_RUNNING').length > 0
      },
      sheriff_switch: function () {
        return this.event.filter(event => event === 'SHERIFF_SWITCH').length
      },
      hunter_shoot: function () {
        return this.event.filter(event => event === 'HUNTER_SHOOT').length
      },
      sheriff_unregister: function () {
        return this.event.filter(event => event === 'SHERIFF_UNREGISTER').length
      },
      sheriff_voting: function () {
        return this.event.filter(event => event === 'SHERIFF_VOTEING').length
      },
      werewolves_explode: function () {
        return this.event.filter(event => event === 'WEREWOLVES_EXPLODE').length
      },
      hunter_state: function () {
        return this.event.filter(event => event === 'HUNTER_STATE').length
      },
      is_on_sheriff: function () {
        if (!this.sheriffRecord) {
          return false
        }
        return Object.keys(this.sheriffRecord.votingRecord).filter(number => parseInt(number) === this.selectedSeat).length > 0
      },
      text: function () {
        if (this.wolf_kill) {
          return {
            title: '选择要杀的玩家',
            tips: '无法统一意见为空刀',
            negative: '空刀',
            positive: '确定'
          }
        }
        if (this.seer_verify) {
          return {
            title: '选择预言家要验的玩家',
            positive: '确定'
          }
        }
        if (this.fake_seer_verify) {
          return {
            title: '选择预言家要验的玩家',
            tips: '预言家已经死亡',
            positive: '确定'
          }
        }
        if (this.witch_poison) {
          return {
            title: '请选择女巫要毒的玩家',
            negative: '跳过',
            positive: '确定'
          }
        }
        if (this.fake_witch_poison) {
          return {
            title: '请选择女巫要毒的玩家',
            tips: '女巫已经无法毒人',
            positive: '确定'
          }
        }
        if (this.witch_save) {
          return {
            title: '请选择女巫要救的玩家',
            positive: '确定'
          }
        }
        if (this.fake_witch_save) {
          return {
            title: '请选择女巫要救的玩家',
            tips: '女巫已经无法救人',
            positive: '确定'
          }
        }
        if (this.daytime_voting && this.werewolves_explode) {
          return {
            title: '请选择自爆狼人',
            tips: '发言结束请直接投票',
            negative: '开始投票',
            positive: '确定'
          }
        }
        if (this.sheriff_running) {
          return {
            title: '请选择上警的玩家',
            positive: '确定'
          }
        }
        if (this.sheriff_switch) {
          return {
            title: '请选择警徽移交人',
            positive: '确定'
          }
        }
        if (this.hunter_shoot) {
          return {
            title: '猎人开枪带人',
            positive: '确定'
          }
        }
        if (this.werewolves_explode && this.sheriff_voting && this.sheriff_unregister) {
          let text = {
            negative: '开始投票'
          }
          if (this.is_on_sheriff && this.selectedInfo && this.selectedInfo.role === 'WEREWOLVES' && this.selectedInfo.alive) {
            text.positive = '退警'
            text.negative = '狼人自爆'
            text.title = '请选择该玩家行为'
            text.tips = '选择其他玩家可开始投票'
            return text
          }
          if (this.is_on_sheriff) {
            text.positive = '退警'
            text.title = '选中玩家退警或开始投票'
            return text
          }
          if (this.selectedInfo && this.selectedInfo.role === 'WEREWOLVES' && this.selectedInfo.alive) {
            text.positive = '狼人自爆'
            text.title = '选中狼人自爆或开始投票'
            return text
          }
          text.title = '选择退警或自爆玩家'
          text.tips = '发言结束请直接投票'
          return text
        }
        if (this.hunter_state) {
          return {
            title: '请通知猎人状态',
            positive: '确定'
          }
        }
        return {}
      }
    }
  }
</script>

<style>
  .bottom{
    overflow: hidden;
    width: 6.4rem;
    text-align: center;
    position: absolute;
    height:3rem;
    /*top:7.4rem;*/
    bottom: 0;
    left: 0;
    background: #1e1f1f;
  }
  .bottom>p{
    width: 6.4rem;
    position: absolute;
    top:0.3rem;
    height: 0.4rem;
    left: 0;
    color: #b3b3b3;
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .tips{
    width: 3rem;
    position: absolute;
    top:0;
    height: 0.4rem;
    line-height: 0.4rem;
    left: 0;
    color: #717171;
    font-size: 0.25rem;
  }
  .left{
    position: absolute;
    top:0.7rem;
    height: 2rem;
    left: 0;
    width: 3rem;
  }
  .bottom .right{
    margin: 0;
    position: absolute;
    right: 0.4rem;
    top:1.6rem ;
  }
  .chose{
    width: 3rem;
    height: 1.5rem;
    /*line-height: 0.8rem;*/
    position: absolute;
    top:0.4rem;
    font-size: 1.3rem;
    color: #4a2151;
    font-weight: bold;
  }
  .empty{
    display: none;
  }
  .left .yes{
    margin:0;
    position: absolute;
    top:0.9rem;
    left:0.4rem;
  }
</style>
