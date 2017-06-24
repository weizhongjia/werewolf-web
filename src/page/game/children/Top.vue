<template>
  <div class="top">
    <div class="setup" >
      <img src="../../../assets/images/setup.png" alt="" v-on:click="showMenu">

    </div>
    <div class="time">{{statusText}}</div>
    <div class="history"><span>历史</span></div>
    <div v-if="menu" class="reset animated bounceInDown">
      <span>请确定是否重启游戏？</span>
      <p class="yes" v-on:click="resetGame">重启游戏</p>
      <div></div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'top',
    data () {
      return {
        menu: false
      }
    },
    props: ['status'],
    methods: {
      showMenu: function () {
        this.menu = !this.menu
      },
      resetGame: function () {
        this.menu = !this.menu
        this.$emit('resetGame')
      }
    },
    computed: {
      statusText: function () {
        if (this.status === 'VACANCY') {
          return '空闲中'
        }
        if (this.status === 'CRATING') {
          return '创建中'
        }
        if (this.status === 'CRATED') {
          return '创建完成'
        }
        if (this.status === 'NIGHT') {
          return '夜晚'
        }
        if (this.status === 'DAYTIME') {
          return '白天发言'
        }
        if (this.status === 'VOTING') {
          return '投票'
        }
        if (this.status === 'PK') {
          return 'PK发言'
        }
        if (this.status === 'PK_VOTING') {
          return 'PK投票'
        }
        if (this.status === 'SHERIFF_REGISTER') {
          return '警长举手'
        }
        if (this.status === 'SHERIFF_RUNNING') {
          return '警长竞选发言时间'
        }
        if (this.status === 'SHERIFF_VOTING') {
          return '警长竞选投票'
        }
        if (this.status === 'SHERIFF_PK') {
          return '警长PK'
        }
        if (this.status === 'SHERIFF_PK_VOTING') {
          return '警长PK投票'
        }
        if (this.status === 'SHERIFF_SWITCH_TIME') {
          return '警长移交警徽事件'
        }
        if (this.status === 'HUNTER_SHOOT') {
          return '猎人时间'
        }
        if (this.status === 'MORON_TIME') {
          return '白痴被票时间'
        }
        if (this.status === 'GAME_OVER') {
          return '游戏结束'
        }
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
    z-index: 999;
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
    z-index: 2000;
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
    z-index: 101;
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
