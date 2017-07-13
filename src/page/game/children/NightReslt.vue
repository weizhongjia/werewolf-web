<template>
  <div id="nightResult">
    <h1>当晚结果</h1>
    <div>
      <p v-if="nightResult.wolfKilledSeat !== 0">刀：<span>{{nightResult.wolfKilledSeat}}</span>号</p>
      <p v-if="nightResult.witchSaved !== 0">救：<span>{{nightResult.witchSaved}}</span>号</p>
      <p v-if="nightResult.witchPoisoned !== 0">毒：<span>{{nightResult.witchPoisoned}}</span>号</p>
      <!--<p v-if="nightResult.wolfKilledSeat !== nightResult.witchSaved">死：<span>{{nightResult.diedNumber}}</span>号</p>-->
      <!--<p v-if="nightResult.wolfKilledSeat === nightResult.witchSaved">平安夜</p>-->
    </div>
    <div class="yes" v-on:click="handleClick">确&nbsp;定</div>
  </div>
</template>

<script>
  export default{
    name: 'nightResult',
    props: ['nightResult'],
    methods: {
      handleClick: function () {
        this.$emit('hideNightResult')
      }
    }
  }
</script>

<style>
  #nightResult{
    padding-top: 0.6rem;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: 0.9rem;
    width: 4.6rem;
    height:6.5rem;
    background: #c4c4c4;
    /*opacity: 0.9;*/
    font-size: 0.4rem;
    font-weight: bold;
    color: #1e1f1f;
    z-index: 999;
  }
  #nightResult h1{
    font-size: 0.5rem;
  }
  #nightResult p{
    padding-left: 1.55rem;
    text-align: left;
    margin-top:0.5rem ;
  }
  #nightResult .yes{
    background: #232423;
    color: #d6d6d6;
    border: none;
    margin-top: 0.6rem;
  }
</style>
