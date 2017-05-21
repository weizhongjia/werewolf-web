<template>
  <div class="seat" v-bind:class="roleImage" v-on:click="seatSelected">
    <!--<p >{{info.role | getCnName}} </p>-->
    <p class="num">{{info.seatNumber}}</p>
    <!--死亡-->
    <div class="die" v-if="!info.alive || (selectedSeat === info.seatNumber && wolfKill)">
      <img src="../../../assets/images/die2.png" alt="">
      <div></div>
   </div>
    <!--毒药-->
    <div class="poison" v-if="selectedSeat === info.seatNumber && witchPoison">
      <img src="../../../assets/images/poison.png" alt="">
      <div></div>
   </div>
  </div>
</template>
<script>
  import '../../../assets/style/reset.css'
  export default {
    name: 'seat',
    props: ['info', 'wolfKill', 'witchPoison', 'selectedSeat'],
    methods: {
      seatSelected: function () {
        this.$emit('seatSelected', this.info.seatNumber)
      }
    },
    computed: {
      wolf_kill () {

      },
      roleImage () {
        return this.info.role.toLowerCase()
      }
    }
  }
</script>
<style>
  .roleImage{

  }
  .seat {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    font-size: 0.4rem;
    color: white;
    box-sizing: border-box;
    border:8px solid #290d05;
    border-radius: 20px;
  }
  .werewolves{
     background-image:url("../../../assets/images/werewolf.png")
   }
  .villager{
    background-image:url("../../../assets/images/villager.png")
  }
  .seer{
    background-image:url("../../../assets/images/seer.png")
  }
  .hunter{
    background-image:url("../../../assets/images/hunter.png")
  }
  .witch{
    background-image:url("../../../assets/images/witch.png")
  }
  .moron{
    background-image:url("../../../assets/images/moron.png")
  }
  .all{
    background-image:url("../../../assets/images/all.png")
  }
  .die,.poison{
    width:100%;
    height: 100%;
    position: relative;
  }
  .die div,.poison div{
    position: absolute;
    top:0;
    left: 0;
    opacity: 0.7;
    background:gray;
    width:100%;
    height: 100%;
    z-index: 1;
  }
  .poison img{
    position: absolute;
    top:0;
    left: 0;
    width: 60%;
    height: 60%;
    z-index: 100;
  }
  .die img{
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .num{
    position: absolute;
    bottom:5px;
    right:5px;
    font-size: 0.4rem;
    color: white;
  }
  /*选中添加效果*/
  .selected{
    border:13px solid olivedrab;
  }
</style>
