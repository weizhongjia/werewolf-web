<template>
  <div class="home">
    <!--头部-->
    <home-top></home-top>
    <!--信息简介-->
    <home-head></home-head>
    <!--本地赛事-->
    <match></match>
    <!--开始游戏-->
    <begin ></begin>
    <!--底部-->
    <foot></foot>

    <!--配置房间-->
    <choose v-if="choose" ></choose>
    <!--排行榜-->
    <list-page v-if="listPage"></list-page>
  </div>
</template>

<script>
  import HomeTop from './children/Top.vue'
  import HomeHead from './children/Head.vue'
  import Match from './children/Match.vue'
  import Begin from './children/Begin.vue'
  import Foot from './children/Footer.vue'

  import Choose from './children/Choose.vue'
  import ListPage from './children/ListPage.vue'
  export default{
    name: 'home',
    components: {
      HomeTop,
      HomeHead,
      Match,
      Begin,
      Foot,
      Choose,
      ListPage
    },
    data () {
      return {
        choose: false,
        listPage: false
      }
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
