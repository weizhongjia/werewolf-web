<template>
  <div class="day">
    <p>当前位置空闲</p>
    <button class="next" v-on:click="joinGame">加入游戏</button>
  </div>
</template>

<script>
  export default{
    name: 'JoinGame',
    methods: {
      joinGame: function () {
        this.$emit('joinGame')
      }
    }
  }
</script>

<style>
  .day{
    width:100%;
    height:auto;
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    padding:2rem 0.4rem 0;
    background: #d6d6d6;
    font-size: 0.35rem;
  }
  .day p{
    font-size: 0.6rem;
    font-style: italic;
    font-weight: bold;
    color: #1e1f1f;
  }
   .next{
    width:3rem;
    height:0.8rem;
    background: #232423;
    color:#d6d6d6;
    font-size: 0.45rem;
    font-weight: bold;
    margin-top:5rem
  }
</style>
