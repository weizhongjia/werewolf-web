<template>
  <div class="startGame animated bounceInDow">
    <p>房间人数已满</p>
    <button class="next" v-on:click="startGame">开始游戏</button>
  </div>
</template>

<script>
  export default{
    name: 'startGame',
    methods: {
      startGame: function () {
        this.$emit('startGame')
      }
    }
  }
</script>

<style>
  .startGame{
    padding-top: 1rem;
    position: absolute;
    top:2rem;
    left: 0.9rem;
    width: 4.6rem;
    height:6.5rem;
    background: #c4c4c4;
    opacity: 0.9;
    font-size: 0.5rem;
    font-weight: bold;
    color: black;
  }
  .day p{
    font-size: 0.6rem;
    font-style: italic;
    font-weight: bold;
    color: #1e1f1f;
  }
  .startGame .next{
    width:2.5rem;
    height:0.7rem;
    background: #232423;
    color:#d6d6d6;
    font-size: 0.4rem;
    font-weight: bold;
    /*margin-top:5rem*/
     position: absolute;
     left: 1.05rem;
     bottom:1.2rem;
    margin: 0;
  }
</style>
