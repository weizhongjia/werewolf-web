<template>
  <div id="listPage">
    <h2>排行榜</h2>
    <div id="grade">
      <h3 class="h3">等级排行</h3>
      <div class="member">
        <div>
          <img src="../../../assets/images/all.png" alt="">
          <p>用户名</p>
        </div>
      </div>
    </div>
    <div id="popularity">
      <h3 class="h3">人气排行</h3>
      <div class="member">
        <div>
          <img src="../../../assets/images/all.png" alt="">
          <p>用户名</p>
        </div>

      </div>
    </div>
    <div id="union">
      <h3 class="h3">公会排行</h3>
      <div class="member">
        <div>
            <img src="../../../assets/images/all.png" alt="" style="">
          <p>用户名</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'list-page'
  }
</script>

<style>
  #listPage{
    position: fixed;
    top: 0;
    left: 0;
    width: 6.4rem;
    height:100%;
    background-color: #f2f2f2;
    z-index: 1000;
  }
  #listPage h2{
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.35rem;
    background-color: white;
    color: #7b7b7b;
    font-weight: 600;
  }
  #listPage>div{
    background-color: white;
    border:1px solid #c4c4c4;
    margin-bottom:0.15rem;
    border-left: none;
    border-right:none ;
    padding-right: 0.3rem;
    overflow: hidden;
  }
  #listPage .h3{
    margin-top:0.1rem;
  }
  #listPage .member{
    z-index: 1000;
    display: flex;
    justify-content: flex-start;
    padding-left: 0.3rem;
    margin: 0.1rem auto;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 1.8rem;

  }
  #listPage .member>div{
    width:1.3rem;
    margin-right: 0.2rem;
  }
  /*#listPage .member>div>div{*/
   /**/
    /*overflow: hidden;*/
  /*}*/
  #listPage img{
    display: block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 2px solid #c4c4c4;
    margin: 0 auto;
  }
  .member p{
    font-size: 0.28rem;
    margin: 0.1rem auto;
  }
  ::-webkit-scrollbar{
    /*opacity: 0;*/
  }
</style>
