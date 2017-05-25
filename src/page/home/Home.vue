<template>
  <div class="home">
    <home-top></home-top>
    <home-head></home-head>
    <match></match>
    <begin ></begin>
    <foot></foot>

    <choose v-if="0" ></choose>
  </div>
</template>

<script>
  import HomeTop from './children/Top.vue'
  import HomeHead from './children/Head.vue'
  import Match from './children/Match.vue'
  import Begin from './children/Begin.vue'
  import Foot from './children/Footer.vue'

  import Choose from './children/Choose.vue'
  export default{
    name: 'home',
    components: {
      HomeTop,
      HomeHead,
      Match,
      Begin,
      Foot,
      Choose
    }

  }
</script>

<style>
.home{
  width: 6.4rem;
  /*height: 100%;*/
  background-color: white;
}
</style>
