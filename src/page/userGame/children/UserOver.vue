<template>
  <div id="userOver">
    <h1>游戏结束</h1>
    <div id="result">
      <img class="win" v-if="0" src="../../../assets/images/win2.png" alt="" >
      <img class="lose"  v-if="10" src="../../../assets/images/lose2.png" alt="">
      <!--<p class="win" v-if="result === 'winner'">WIN</p>-->
      <!--<p class="lose" v-if="result === 'loser'">LOSE</p>-->
    </div>
    <div id="score">
      <p>本局得分:</p>
      <p>{{score}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'userOver',
    props: ['result', 'score']
  }
</script>

<style>
  #userOver{
    color: #3c3c3c;
    width: 6.4rem;
    /*width: 5rem;*/
    height:auto;
    position: absolute;
    top:0;
    bottom: 0;
    /*top:1.5rem;*/
    /*left: 0.7rem;*/
    /*background: #030000;*/
    background: #d6d6d6;
    font-size: 0.35rem;
    z-index: 1000;
  }
    #userOver>h1{
      font-size: 0.9rem;
      font-style: italic;
      /*color: yellow;*/
      /*text-shadow:0 2px 10px #cccc33;*/
      margin: 1rem auto;
    }
   #userOver #result{
     font-size: 1rem;
     font-weight: 600;
     margin-top: 1rem;
   }
  #userOver img{
    display: block;
    width: 2.8rem;
    height:1.5rem;
    opacity: 0.8;
    margin: 0 auto;
  }
  #userOver #score{
    margin: 1rem auto 1.2rem;
    display: flex;
    justify-content: center;
    /*color:#c9c9c9;*/
    color: #3c3c3c;
    font-size: 0.5rem;
    line-height: 0.7rem;
  }
</style>
