<template>
  <div class="startGame animated bounceInDow">
    <p v-if="timeout">{{text.title}}</p>
    <p v-if="!timeout">{{text.timeout}}</p>
    <button v-if="timeout" class="next" v-on:click="handleClick">{{text.button}}</button>
    <button v-if="!timeout" class="next">请稍后</button>
  </div>
</template>

<script>
  export default{
    name: 'startGame',
    props: ['startGame', 'endingGame', 'sheriffVoting', 'sheriffPkVoting'],
    data () {
      return {
        timeout: false
      }
    },
    methods: {
      handleClick: function () {
        this.$emit('handleClick')
      }
    },
    mounted () {
      if (this.startGame) {
        setTimeout(function () {
          this.timeout = true
        }.bind(this), 5000)
      } else {
        this.timeout = true
      }
    },
    computed: {
      text: function () {
        if (this.startGame) {
          return {
            title: '房间人数已满',
            button: '开始游戏',
            timeout: '正在创建游戏'
          }
        }
        if (this.endingGame) {
          return {
            title: '游戏结束',
            button: '确定'
          }
        }
        if (this.sheriffVoting) {
          return {
            title: '开始投票',
            button: '确定'
          }
        }
        if (this.sheriffPkVoting) {
          return {
            title: '开始警长PK',
            button: '确定'
          }
        }
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
    z-index: 999;
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
