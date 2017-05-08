<template>
  <div class="judgement">
    <div>
      <span>好人是</span>
      <p class="good"></p>
      <span>，坏人是</span>
      <p class="bad"></p>
    </div>
    <p>您检验的玩家是:</p>
    <div class="result good"></div>
    <div class="yes">确定</div>
  </div>
</template>

<script>
  export default{
    name: 'judgement'
  }
</script>

<style>
  .judgement{
    padding-top: 1rem;
    position: absolute;
    top:2.3rem;
    left: 0.9rem;
    width: 4.6rem;
    background: #c4c4c4;
    opacity: 0.9;
    font-size: 0.3rem;
    font-weight: bold;
    color: black;
  }
  .good{
    background-image: url("../assets/images/yes.png");
  }
  .bad{
    background-image: url("../assets/images/no.png");
    margin-bottom:-0.2rem;
  }
  .judgement>div>p{
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .judgement>p{
    margin-top: 0.2rem;
  }
  .result{
    width:1.8rem;
    margin:0.6rem auto 0.8rem;
    height:1.8rem;
    background-repeat: no-repeat;
    background-size: contain;
  }

</style>
