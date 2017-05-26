<template>
  <div class="footer">
    <div id="game">
      <span class="gameOn"></span>
      <span class="text">游戏</span>
    </div>

    <div id="list">
      <p style="left: 0">|</p>
      <span class="list"></span>
      <span class="text">榜单</span>
      <p style="right:0">|</p>
    </div>

    <div id="news">
      <span class="news"></span>
      <span class="text">消息</span>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'foot'
  }
</script>

<style>
  .footer{
    background-color: white;
    z-index: 10000;
    border-top: 2px solid #c4c4c4;
    width: 6.4rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom:0;
    height:1rem;
    padding-bottom: 0.1rem;
  }
  .footer div{
    width: 2.1rem;
    position: relative;
    margin: 0 auto;
  }
  .footer p{
    font-size: 0.6rem;
    color: #c4c4c4;
    position: absolute;
    top: 0;
    height: 100%;
    line-height: 0.8rem
  }
  .game{
    background-image: url("../../../assets/images/game.png");
  }
  .gameOn{
    background-image: url("../../../assets/images/gameOn.png");
  }
  .list{
    background-image: url("../../../assets/images/list.png");
  }
  .listOn{
    background-image: url("../../../assets/images/listOn.png");
  }
  .news{
    background-image: url("../../../assets/images/news.png");
  }
  .newsOn{
    background-image: url("../../../assets/images/newsOn.png");
  }
  .footer span{
    display:block;
    width:0.5rem;
    height:0.4rem ;
    font-size: 0.25rem;
    line-height: 0.4rem;
    background-size:100% 100% ;
    margin:0.1rem auto;
    margin-bottom: 0;
  }
  .footer .text{
    height: 0.3rem;
    width: 1rem;
    margin-top: 0;
  }
  #list{
    border-top: none;
    border-bottom: none;
  }
</style>
