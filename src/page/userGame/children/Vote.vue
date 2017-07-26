<template>
  <div id="vote">
    <p>请投票</p>
    <ul>
      <template v-for="player in playerInfoList" >
        <li v-on:click="selectSeat(player)" v-bind:class="getClass(player)">
          {{ player.seatNumber }}
        </li>
      </template>
    </ul>
    <button class="yes" v-on:click="vote(false)">弃权</button>
    <button class="yes" v-on:click="vote(true)">确定</button>
  </div>
</template>

<script>
  export default{
    name: 'vote',
    data () {
      return {
        selected: 0
      }
    },
    props: ['playerInfoList', 'selfInfo'],
    methods: {
      vote: function (vote) {
        if (vote) {
          this.$emit('vote', this.selected)
        } else {
          this.$emit('vote', 0)
        }
      },
      selectSeat: function (player) {
        let isSelf = !player.alive
        if (!isSelf) {
          this.selected = player.seatNumber
        }
      },
      getClass: function (player) {
        let isSelf = !player.alive
        let isOn = this.selected === player.seatNumber && !isSelf
        return {
          self: isSelf,
          on: isOn
        }
      }
    }
  }
</script>

<style>
  #vote{
    width:5.8rem;
    /*margin:2rem auto 0;*/
    position: absolute;
    bottom: 0.5rem;
    left: 0.4rem;
    z-index:1;
  }
  #vote p{
    width: 100%;
    height: 0.8rem;
    font-size: 0.5rem;
    color: white;
  }
  #vote ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  #vote .on{
    color: white;
    /*border:0.05rem solid black;*/
    background: red;
    line-height: 0.7rem;
    font-size:0.5rem ;
  }
  #vote .self{
    background: gray;
  }
  #vote li{
    text-align: center;
    box-sizing: border-box;
    float: left;
    width:0.8rem;
    height:0.8rem;
    margin:0.1rem 0.05rem ;
    border:0.02rem solid white;
    display: inline-block;
    font-size: 0.4rem;
    color: lightblue;
    line-height: 0.76rem;
    border-radius: 5px;
  }
  #vote .yes{
    margin:0 0.3rem;
  }
</style>
