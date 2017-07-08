<template>
  <div class="seat "  v-bind:class="[roleImage]" v-on:click="seatSelected"  >
    <!--<p >{{info.role | getCnName}} </p>-->
    <p class="num">{{info.seatNumber}}</p>
    <!--死亡-->
    <div class="die" v-if="!info.alive && !info.seatAvailable">
      <img src="../../../assets/images/die2.png" alt="">
      <div></div>
    </div>
    <!--毒药-->
    <div class="poison" v-if="info.alive && nightRecord && nightRecord.witchPoisoned === info.seatNumber">
      <img src="../../../assets/images/poison.png" alt="">
    </div>
    <!--被刀-->
    <div class="die" v-if="info.alive && nightRecord && nightRecord.wolfKilledSeat === info.seatNumber && nightRecord.witchSaved !== info.seatNumber">
      <img src="../../../assets/images/die2.png" alt="">
    </div>
    <!--警长-->
    <div class="sheriff" v-if="isSheriff">
      <img src="../../../assets/images/sheriff.png" alt="">
    </div>
    <!--竞选警长-->
    <div class="strive" v-if ="this.sheriff && !this.sheriff.sheriff && sheriffRegister && !sheriffUnregister">
      <img src="../../../assets/images/strive.png" alt="">
    </div>
    <!--放弃竞选-->
    <div class="quit" v-if="this.sheriff && !this.sheriff.sheriff && sheriffRegister && sheriffUnregister">
      <img src="../../../assets/images/quitSheriff.png" alt="">
    </div>
  </div>
</template>
<script>
  import '../../../assets/style/reset.css'
  export default {
    name: 'seat',
    props: ['info', 'wolfKill', 'witchPoison', 'selectedSeat', 'hideSwitch', 'showRoleSwitch', 'sheriff', 'nightRecord'],
    data () {
      return {
        showRole: true
      }
    },
    mounted () {
      if (this.hideSwitch) {
        this.showRole = false
      }
    },
    methods: {
      seatSelected: function () {
        if (this.hideSwitch) {
          this.showRole = !this.showRole
        } else {
          this.$emit('seatSelected', this.info)
        }
      }
    },
    computed: {
      sheriffRegister () {
        if (!this.sheriff || !this.sheriff.sheriffRegisterList) return false
        return this.sheriff.sheriffRegisterList.findIndex(el => parseInt(el) === this.info.seatNumber) !== -1
      },
      sheriffUnregister () {
        if (!this.sheriff || !this.sheriff.votingRecord) return false
        return Object.keys(this.sheriff.votingRecord).findIndex(el => parseInt(el) === this.info.seatNumber) === -1
      },
      isSheriff () {
        return this.sheriff && this.sheriff.sheriff === this.info.seatNumber
      },
      roleImage () {
        if (!this.showRole && this.showRoleSwitch) {
          return this.info.role.toLowerCase()
        } else {
          return ''
        }
      }
    }
  }
</script>
<style>
  .roleImage{

  }
  .seat {
    /*position: relative;*/
    transition: background 0.8s;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    font-size: 0.4rem;
    color: white;
    box-sizing: border-box;
    border:8px solid #290d05;
    border-radius: 20px;
    background-image:url("../../../assets/images/all.png")
  }
  .werewolves{
     background-image:url("../../../assets/images/werewolf.jpeg")
   }
  .villager{
    background-image:url("../../../assets/images/villager1.jpeg")
  }
  .seer{
    background-image:url("../../../assets/images/seer1.jpeg")
  }
  .hunter{
    background-image:url("../../../assets/images/hunter1.jpeg")
  }
  .witch{
    background-image:url("../../../assets/images/witch1.jpeg")
  }
  .moron{
    background-image:url("../../../assets/images/moron1.jpeg")
  }
  .all{
    background-image:url("../../../assets/images/all.png")
  }
  .die,.poison{
    width:100%;
    height: 100%;
    /*position: relative;*/
  }
  .die,.poison{
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 20px;
    overflow: hidden;
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
  .poison img,.sheriff img,.quit img,.strive img{
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
  .sheriff img,.quit img,.strive img{
    width: 25%;
    height: 50%;
    top:5px;
    left:15%;
  }
  .num{
    position: absolute;
    bottom:6px;
    right:14px;
    font-size: 0.4rem;
    color: white;
  }

</style>
