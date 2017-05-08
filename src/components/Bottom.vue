<template>
  <div class="bottom">
    <p >选择要杀的玩家</p>
    <div class="left">
      <p class="tips">无法统一意见为空刀</p>
      <p class="chose">2</p>
      <p class="yes empty">空刀</p>
    </div>
    <div class="right yes">确定</div>
  </div>
</template>

<script>
  export default{
    name: 'bottom'
  }
</script>

<style>
  .bottom{
    width: 6.4rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    height:3rem;
    left: 0;
  }
  .bottom>p{
    width: 6.4rem;
    position: absolute;
    bottom: 2.2rem;
    left: 0;
    color: #b3b3b3;
    font-size: 0.35rem;
    line-height: 0.4rem;
  }
  .tips{
    width: 3rem;
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    color: #717171;
    font-size: 0.25rem;
  }
  .left{
    position: absolute;
    left: 0;
    bottom: 0.3rem;
    width: 3rem;
  }
  .right{
    margin: 0;
    position: absolute;
    right: 0.4rem;
    bottom:0.5rem ;
  }
  .chose{
    width: 3rem;
    height: 1.5rem;
    /*line-height: 0.8rem;*/
    font-size: 1.5rem;
    color: #4a2151;
    font-weight: bold;
  }
  .empty{
    display: none;
  }
  .left .yes{
    margin: 0 0 0.3rem 0.4rem;
  }
</style>
