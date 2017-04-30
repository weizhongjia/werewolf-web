<template>
  <div class="night">
    <div class="room">
      <div v-for="seat in seats" class="position">
        <seat :info="seat"></seat>
      </div>
    </div>
  </div>
</template>
<script>
  import seat from './Seat.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'game',
    components: {
      seat
    },
    computed: mapState([
      'seats'
    ])
  }
</script>
<style>
  .night {
    background-color: grey;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .room {
    margin: 60px 20px;
  }
  .position {
    display: inline-block;
    width: 33%;
    padding-top: 30px;
    text-align: center;
  }

</style>
