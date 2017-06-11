<template>
  <div class="bottom">
    <p >{{title}}</p>
    <div class="left">
      <p class="tips">{{tips}}</p>
      <p class="chose" v-if="selectedSeat !== '' && !sheriff_running">{{selectedSeat}}</p>
      <p class="chose" v-if="sheriffSeat !== null && sheriffSeat.length > 0 && sheriff_running"><span v-for="seat in sheriffSeat">{{seat}}</span></p>
      <p class="yes" v-if="selectedSeat === '' && wolf_kill">空刀</p>
    </div>
    <div class="right yes" v-on:click="emitEvent">确定</div>
  </div>
</template>

<script>
  export default{
    name: 'bottom',
    props: ['event', 'selectedSeat', 'sheriffSeat'],
    methods: {
      emitEvent: function () {
        this.$emit('bottomConfirm')
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
      title: function () {
        if (this.wolf_kill) {
          return '选择要杀的玩家'
        }
        if (this.seer_verify || this.fake_seer_verify) {
          return '选择预言家要验的玩家'
        }
        if (this.witch_poison || this.fake_witch_poison) {
          return '请选择女巫要毒的玩家'
        }
        if (this.witch_save || this.fake_witch_save) {
          return '请选择女巫要救的玩家'
        }
        if (this.daytime_voting) {
          return '开始投票'
        }
        if (this.sheriff_running) {
          return '请选择上警的玩家'
        }
        if (this.sheriff_switch) {
          return '请选择警徽移交人'
        }
      },
      tips: function () {
        if (this.wolf_kill) {
          return '无法统一意见为空刀'
        } else if (this.fake_seer_verify) {
          return '预言家已经死亡'
        } else if (this.fake_witch_poison) {
          return '女巫已经无法毒人'
        } else if (this.fake_witch_save) {
          return '女巫已经无法救人'
        } else {
          return ''
        }
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
  .right{
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
    margin: 0.9rem 0 0.3rem 0.4rem;
  }
</style>
