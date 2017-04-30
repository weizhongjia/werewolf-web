<template>
  <div class="seat">
    <button>开始游戏</button>
  </div>
</template>
<script>
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
      }
    }
  }
</script>
<style>
  .seat {
    background-color: azure;
    border: 1px solid #2c3e50;
    border-radius: 20px;
    padding: 10px;
    width: 200px;
    height: 200px;
    display: inline-block;
    font-size: 40px;
  }

</style>
