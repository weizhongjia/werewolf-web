<template>
  <div class="top">
    <div class="setup"><img src="../../assets/images/setup.png" alt=""></div>
    <div class="time">第1天  晚上</div>
    <div class="history"><span>历史</span></div>
  </div>
</template>

<script>
  export default{
    name: 'top'
  }
</script>

<style >
  .top{
    height: 0.7rem;
    background: #7c7d7d;
    display: flex;
    justify-content: space-between;
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
  .top{
    width:100%;
    height: 0.6rem;
  }
</style>
