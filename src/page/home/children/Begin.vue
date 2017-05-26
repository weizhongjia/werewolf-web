<template>
  <div id='begin'>
    <h3 class="h3">开始游戏</h3>
    <section>
      <div class="scan">
        <img src="../../../assets/images/fingerprint.png" alt="">
        <div >
          <h3>扫码<br>进入房间》</h3>
          <p>请扫描线下俱乐部桌面上的二维码</p>
        </div>
      </div>
      <div class="search">
        <img src="../../../assets/images/search.png" alt="">
        <h3>搜索<br>房间</h3>
      </div>
    </section>
  </div>
</template>

<script>
  export default{
    name: 'begin'
  }
</script>

<style>
  #begin{
    /*height: 5rem;*/
  }
  #begin section{
    border-radius: 0;
    border: none;
    display: flex;
    justify-content:space-between ;
  }
  #begin section>div{
    height: 1.8rem;
    border: 2px solid #c4c4c4;
    border-radius: 0.2rem;
  }
  .scan{
    width:4rem;
    display: flex;
    justify-content: space-around ;
    padding: 0.13rem 0.1rem;
  }
  .search{
    width:1.9rem;
  }
  .scan img{
    width:1.5rem ;
    height:1.5rem;
  }
  .scan>div{
    width: 2rem;
    height: 1.5rem;
  }
  #begin section h3{
    text-align: left;
    font-size: 0.3rem;
    color: #cc3300;
  }
  .scan p{
    text-align: left;
    font-size: 0.25rem;
    color: #c4c4c4;
  }
  .search{
    display: flex;
    justify-content: center;
    padding-top:0.5rem ;
  }
  .search img{
    margin-right: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
  }
</style>
