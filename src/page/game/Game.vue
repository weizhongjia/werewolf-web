<template>
  <div class="night">
    <top></top>
    <div class="room">
      <div v-for="seat in seats" class="position">
        <seat :info="seat"></seat>
      </div>
    </div>
  </div>
</template>
<script>
  import seat from './Seat.vue'
  import top from './Top.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'game',
    components: {
      seat,
      top
    },
    computed: mapState([
      'seats'
    ])
  }
</script>
<style>
  .night {
    background-color: #1e1f1f;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .room {
    width: 5.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
  }
  .position {
    /*display: inline-block;*/
    width: 1.5rem;
    box-sizing: border-box;
    height: 1.5rem;
    margin-top:0.3rem;
    /*padding-top: 30px;*/
    text-align: center;
    border:8px solid #290d05;
    border-radius: 20px;
  }

</style>
