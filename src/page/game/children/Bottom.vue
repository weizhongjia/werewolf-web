<template>
  <div class="bottom">
    <p >{{title}}</p>
    <div class="left">
      <p class="tips">{{tips}}</p>
      <p class="chose" v-if="selectedSeat !== ''">{{selectedSeat}}</p>
      <p class="yes" v-if="selectedSeat === '' && wolf_kill">空刀</p>
    </div>
    <div class="right yes" v-on:click="emitEvent">确定</div>
  </div>
</template>

<script>
  export default{
    name: 'bottom',
    props: ['event', 'selectedSeat'],
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
      title: function () {
        if (this.wolf_kill) {
          return '选择要杀的玩家'
        }
        if (this.seer_verify) {
          return '选择预言家要验的玩家'
        }
        if (this.witch_poison) {
          return '请选择女巫要毒的玩家'
        }
      },
      tips: function () {
        if (this.wolf_kill) {
          return '无法统一意见为空刀'
        } else {
          return ''
        }
      }
    }
  }
</script>

<style>
  .bottom{
    width: 6.4rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    height:3rem;
    left: 0;
  }
  .bottom>p{
    width: 6.4rem;
    position: absolute;
    bottom: 2.2rem;
    left: 0;
    color: #b3b3b3;
    font-size: 0.35rem;
    line-height: 0.4rem;
  }
  .tips{
    width: 3rem;
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    color: #717171;
    font-size: 0.25rem;
  }
  .left{
    position: absolute;
    left: 0;
    bottom: 0.3rem;
    width: 3rem;
  }
  .right{
    margin: 0;
    position: absolute;
    right: 0.4rem;
    bottom:0.5rem ;
  }
  .chose{
    width: 3rem;
    height: 1.5rem;
    /*line-height: 0.8rem;*/
    font-size: 1.5rem;
    color: #4a2151;
    font-weight: bold;
  }
  .empty{
    display: none;
  }
  .left .yes{
    margin: 0 0 0.3rem 0.4rem;
  }
</style>
