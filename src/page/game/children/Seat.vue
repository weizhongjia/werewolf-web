<template>
  <div class="seat" v-bind:class="roleImage">
    <!--<p >{{info.role | getCnName}} </p>-->
    <p class="num">{{info.no}}</p>
  </div>
</template>
<script>
  import '../../../assets/style/reset.css'
  export default {
    name: 'seat',
    props: ['info'],
    filters: {
      getCnName: function (value) {
        switch (value) {
          case 'werewolf':
            return '狼人'
          case 'villager':
            return '村民'
          case 'seer':
            return '预言家'
          case 'hunter':
            return '猎人'
          case 'witch':
            return '巫师'
          case 'moron':
            return '傻瓜'
        }
      }
    },

    computed: {
      seatsFull () {
        return this.$store.state.seats.filter(seat => seat.role === 'empty').length
      },
      roleImage () {
        const roleImages = {
          werewolf: 'werewolf',
          villager: 'villager',
          seer: 'seer',
          hunter: 'hunter',
          witch: 'witch',
          moron: 'moron'
        }
        return roleImages[this.info.role]
      }
    }
  }
</script>
<style>
  .roleImage{

  }
  .werewolf{
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
  .num{
    position: absolute;
    bottom:5px;
    right:5px;
    font-size: 0.4rem;
    color: white;
  }
  .seat {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 13px;
    width: 100%;
    height: 100%;
    font-size: 0.4rem;
    color: white;
  }

</style>
