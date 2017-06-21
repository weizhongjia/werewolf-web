<template>
  <div class="bottom">
    <p >{{text.title}}</p>
    <div class="left">
      <p class="tips">{{text.tips}}</p>
      <p class="yes" v-if="text.negative" v-on:click="emitEvent(false)">{{text.negative}}</p>
    </div>
    <div class="right yes" v-on:click="emitEvent(true)">确定</div>
  </div>
</template>

<script>
  export default{
    name: 'bottom',
    props: ['event'],
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
      text: function () {
        if (this.wolf_kill) {
          return {
            title: '选择要杀的玩家',
            tips: '无法统一意见为空刀',
            negative: '空刀'
          }
        }
        if (this.seer_verify) {
          return {
            title: '选择预言家要验的玩家'
          }
        }
        if (this.fake_seer_verify) {
          return {
            title: '选择预言家要验的玩家',
            tips: '预言家已经死亡'
          }
        }
        if (this.witch_poison) {
          return {
            title: '请选择女巫要毒的玩家',
            negative: '跳过'
          }
        }
        if (this.fake_witch_poison) {
          return {
            title: '请选择女巫要毒的玩家',
            tips: '女巫已经无法毒人'
          }
        }
        if (this.witch_save) {
          return {
            title: '请选择女巫要救的玩家'
          }
        }
        if (this.fake_witch_save) {
          return {
            title: '请选择女巫要救的玩家',
            tips: '女巫已经无法救人'
          }
        }
        if (this.daytime_voting) {
          return {
            title: '开始投票'
          }
        }
        if (this.sheriff_running) {
          return {
            title: '请选择上警的玩家'
          }
        }
        if (this.sheriff_switch) {
          return {
            title: '请选择警徽移交人'
          }
        }
        if (this.hunter_shoot) {
          return {
            title: '狼人开枪带人'
          }
        }
        if (this.sheriff_unregister) {
          return {
            title: '退警'
          }
        }
        if (this.werewolves_explode && this.sheriff_voting) {
          return {
            title: '请选择自爆狼人',
            tips: '发言结束请直接投票',
            negative: '开始投票'
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
