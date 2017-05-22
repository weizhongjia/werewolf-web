<template>
  <div class="top">
    <div class="setup" >
      <img src="../../../assets/images/setup.png" alt="" v-on:click="resetGame">

    </div>
    <!--<div class="time">第1天  晚上</div>-->
    <div class="history"><span>历史</span></div>
    <div v-if="reset" class="reset animated bounceInDown">
      <span>请确定是否重启游戏？</span>
      <p class="yes">重启游戏</p>
      <div></div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'top',
    data () {
      return {
        reset: false
      }
    },
    methods: {
      resetGame: function () {
        this.reset = !this.reset
      }
    }
  }

</script>

<style >
  /*.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}*/
  /*@keyframes bounceInDown{0%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}60%{opacity:1;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px)}80%{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}*/
 /**/
  .top{
    background: #7c7d7d;
    display: flex;
    justify-content: space-between;
    width:100%;
    height: 0.6rem;
  }
  .setup{
    margin:auto 0;
    margin-left:0.2rem;
    height:0.4rem;
    width:0.5rem;
    background:white;
  }
  .top img{
    height: 0.4rem;
    display: block;
    margin: 0 auto;
  }
  .time{
    display: inline-block;
    height: 0.4rem;
    /*width: 3rem;*/
    font-size: 0.3rem;
    line-height:0.4rem;
    margin:auto 0;
    margin-left:0.2rem;
    color: black;
    font-weight: 700;
  }
  .history{
    height: 0.4rem;
    margin:auto 0;
    margin-right: 0.2rem;
    font-size: 0.25rem;
    line-height:0.4rem;
    background: white;
    width:0.7rem;

  }
  .reset{
    font-size: 0.3rem;
    color: black;
    width:4.6rem;
    height:6rem;
    z-index: 100;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    /*background:white ;*/
  }
  .reset div{
    width:100%;
    height:100%;
    background: #c4c4c4;
    opacity: 0.9;
    position: absolute;
    top:0;
    z-index: 1;
  }
  .reset span{
    position: absolute;
    top:1.2rem;
    left: 10%;
    z-index: 2;
    font-size: 0.5rem;
    display: block;
    /*height: 1rem;*/
    width: 80%;
    line-height: 150%;
    font-style: italic;
  }
  .reset p{
    z-index: 100;
    position: absolute;
    top:4.5rem;
    left: 0;
    bottom:0;
    right: 0;
    margin:0 auto;
    /*color:gray;*/
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
  }
  .infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
  }@-webkit-keyframes bounceInDown {
     0% {
       opacity: 0;
       -webkit-transform: translateY(-2000px);
       transform: translateY(-2000px)
     }
     60% {
       opacity: 1;
       -webkit-transform: translateY(30px);
       transform: translateY(30px)
     }
     80% {
       -webkit-transform: translateY(-10px);
       transform: translateY(-10px)
     }
     100% {
       -webkit-transform: translateY(0);
       transform: translateY(0)
     }
   }

  @keyframes bounceInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      transform: translateY(-2000px)
    }
    60% {
      opacity: 1;
      -webkit-transform: translateY(30px);
      -ms-transform: translateY(30px);
      transform: translateY(30px)
    }
    80% {
      -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      transform: translateY(-10px)
    }
    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0)
    }
  }

  .bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown
  }

</style>
