<template>
  <div id="nightResult">
    <h1>当晚结果</h1>
    <div>
      <p>刀：<span>5</span>号</p>
      <p>救：<span>5</span>号</p>
      <p>毒：<span>16</span>号</p>
    </div>
    <div class="yes">确&nbsp;定</div>
  </div>
</template>

<script>
  export default{
    name: 'nightResult'
  }
</script>

<style>
  #nightResult{
    padding-top: 0.6rem;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: 0.9rem;
    width: 4.6rem;
    height:6.5rem;
    background: #c4c4c4;
    /*opacity: 0.9;*/
    font-size: 0.4rem;
    font-weight: bold;
    color: #1e1f1f;
    z-index: 999;
  }
  #nightResult h1{
    font-size: 0.5rem;
  }
  #nightResult p{
    padding-left: 1.55rem;
    text-align: left;
    margin-top:0.5rem ;
  }
  #nightResult .yes{
    background: #232423;
    color: #d6d6d6;
    border: none;
    margin-top: 0.6rem;
  }
</style>
