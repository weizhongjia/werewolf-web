<template>
  <div id="night">
    <top></top>
    <div class="room">
      <div v-for="seat in seats" class="position">
        <seat :info="seat"></seat>
      </div>
    </div>
    <bottom></bottom>

    <!--天黑请闭眼-->
    <night v-if="0"></night>
    <!--预言家看牌结果-->
    <judgement v-if="0"></judgement>
    <!--是否使用解药-->
    <antidote v-if="0"></antidote>
    <!--天亮了-->
    <day v-if="10"></day>
  </div>

</template>
<script>
  import seat from './Seat.vue'
  import top from './Top.vue'
  import antidote from '../../components/Antidote.vue'
  import bottom from '../../components/Bottom.vue'
  import judgement from '../../components/Judgement.vue'
  import day from '../../components/Day.vue'
  import night from '../../components/Night.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'game',
    components: {
      seat,
      top,
      antidote,
      bottom,
      judgement,
      day,
      night
    },
    computed: mapState([
      'seats'
    ])
  }
</script>
<style>
  #night {
    background-color: #1e1f1f;
    position: absolute;
    width: 6.4rem;
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
    border:13px solid #290d05;
    border-radius: 20px;
  }

</style>
