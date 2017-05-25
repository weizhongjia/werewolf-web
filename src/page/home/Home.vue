<template>
  <div class="home">
    <home-top></home-top>
    <home-head></home-head>
    <match></match>
    <begin></begin>
    <foot></foot>
  </div>
</template>

<script>
  import HomeTop from './children/Top.vue'
  import HomeHead from './children/Head.vue'
  import Match from './children/Match.vue'
  import Begin from './children/Begin.vue'
  import Foot from './children/Footer.vue'
  export default{
    name: 'home',
    components: {
      HomeTop,
      HomeHead,
      Match,
      Begin,
      Foot

    }
  }
</script>

<style>
.home{
  background-color: white;
}
</style>
