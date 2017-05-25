<template>
  <div id="head">
    <div class="head">
      <div class="jt">
        <img src="../../../assets/images/back.png" alt="">
      </div>
      <div class="dj">
        <div>Lv.1</div>
        <p>等级</p>
      </div>
      <div class="headImg">
        <img src="../../../assets/images/all.png" alt="">
      </div>
      <div class="gold">
        <div>98</div>
        <p>金币</p>
      </div>

      <div class="jt">
        <div>
          <img src="../../../assets/images/more.png" alt="">
        </div>

      </div>

    </div>
    <div class="userName">用户名</div>
    <div class="change">
      <span style="color: white">当前模式：</span>
      <span style="color: white">法官</span>
      <span>切换角色</span>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Home-head'
  }
</script>

<style>
  #head{
    margin-top: 0.1rem;
    position: relative;
    border-bottom: 2px solid #c4c4c4;
  }
  .head{
    display: flex;
    justify-content: center;
    font-size: 0.25rem;
    /*background-color: #9da0a4;*/
  }
  .head .headImg{
    width: 1.8rem;
    margin: 0.1rem 0.2rem;
  }
  .headImg img{
    width: 1.8rem;
    border-radius: 50%;
    display: block;
  }
  .dj,.gold{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0.1rem;
  }
  .jt{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .jt img{
    line-height: 1.8rem;

    width: 0.5rem;
  }
  .dj>div,.gold>div{
    font-size: 0.35rem;
    color: #ffcc00;
  }
  .userName{
    font-weight: 600;
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
  }
  .change{
    font-size: 0.25rem;
    position: absolute;
    bottom:-0.2rem;
    background: #ff9900;
    border:1px solid #c4c4c4;
    border-radius: 4px;
    margin: 0 auto;
    width:3.2rem;
    height:0.4rem;
    left:1.6rem;
    font-weight: normal;
  }
  .change span{
    line-height: 0.4rem;
  }

</style>
