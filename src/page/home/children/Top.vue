<template>
  <div class="homeTop">
    <div class="city"><span>城市</span></div>
    <div class="text">狼人杀</div>

    <div class="set" >
      <img src="../../../assets/images/setup.png" alt="" v-on:click="showMenu">

    </div>

    <div v-if="set" class="reset animated bounceInDown">
      <span>设置</span>
      <p class="yes" v-on:click="resetGame">内容</p>
      <div></div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'home-top',
    data () {
      return {
        set: false
      }
    },
    methods: {
      showMenu: function () {
        this.set = !this.set
      }
//      resetGame: function () {
//        this.$emit('resetGame')
//      }
    }
  }

</script>

<style >
  /*.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}*/
  /*@keyframes bounceInDown{0%{opacity:0;-webkit-transform:translateY(-2000px);-ms-transform:translateY(-2000px);transform:translateY(-2000px)}60%{opacity:1;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px)}80%{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}*/
  /**/
  .homeTop{
    border-top: 1px solid transparent;
    width: 6.4rem;
    /*background: rosybrown;*/
    height: 0.7rem;
  }
  .set{
    position: absolute;
    top: 0;
    right: 0;
    height:0.7rem;
    padding-right: 0.2rem;
  }
  .homeTop img{
    height: 0.5rem;
    display: block;
    margin: 0.125rem auto;
  }
  .text{
    display:block;
    height: 0.7rem;
    font-size: 0.45rem;
    line-height:0.7rem;
    margin:0 auto;
    color: black;
    font-weight: 600;
  }
  .city{
    position: absolute;
    top: 0;
    left: 0;
    height: 0.8rem;
    font-size: 0.3rem;
    line-height:0.7rem;
    padding-left: 0.2rem;

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
