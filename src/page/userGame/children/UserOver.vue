<template>
  <div id="userOver">
    <p>游戏结束</p>
    <div id="result">
      <p class="win" v-if="result === 'winner'">WIN</p>
      <p class="lose" v-if="result === 'loser'">LOSE</p>
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
    width: 5rem;
    height:auto;
    position: absolute;
    top:1.5rem;
    left: 0.7rem;
    /*background: #030000;*/
    background: #c4c4c4;
    font-size: 0.35rem;
    z-index: 1000;
  }
    #userOver>p{
      font-size: 0.9rem;
      color: yellow;
      text-shadow:0 2px 10px #cccc33;
      margin: 1rem auto;
    }
   #userOver #result{
     font-size: 1rem;
     font-weight: 600;
     margin-top: 1rem;
   }
  #userOver .win{
    color: red;
    text-shadow: 0 1px 10px #cc3333;
  }
  #userOver .lose{
    color:#999999;
    text-shadow: 0 0 3px #cccccc;
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
