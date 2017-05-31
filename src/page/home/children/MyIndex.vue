<template>
  <div id="myIndex">
    <div id="my-head">
      <img src="./../../../assets/images/all.png" alt="">
      <p>登录/注册</p>

    </div>
    <section>
      <p>个人主页</p>
      <div  class="more">
        <img src="../../../assets/images/more.png" alt="">
      </div>
    </section>
    <div class="my-btm">
      <section>
      <p class="xf"> 
        <span></span>
        我的消费
      </p>
      <div  class="more">
        <img src="../../../assets/images/more.png" alt="">
      </div>
    </section>
    <section>
      <p>我的狼币</p>
      <div  class="more">
        <p>去充值</p>
        <img src="../../../assets/images/more.png" alt="">
      </div>
    </section>
    <section>
      <p>系统版本</p>
      <div  class="more">
        <img src="../../../assets/images/more.png" alt="">
      </div>
    </section>
    </div>
    
  </div>
</template>

<script>
  export default{
    name: 'my-index'
  }
</script>

<style>
  #myIndex{
    width: 6.4rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index:10000;
    background: white;
    font-size: 0.3rem;
    color: #7b7b7b;
  }
  #my-head{
    margin: 0.25rem 0 0.2rem;
  }
  #my-head img{
    display: block;
    margin: 0 auto;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    border: 1px solid #c4c4c4;
  }
  #my-head p{
    font-weight: 600;
  }
  #myIndex section{
    width: 5.5rem;
    display: flex;
    justify-content: space-between;
    margin:0.2rem 0.2rem 0.2rem 0.7rem;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 0.1rem;
  }
  #myIndex .more img{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
  }
  .my-btm{
    margin-top: 0.4rem;
    width: 6.4rem;
  }
  .more{
    display: flex;
    justify-content: start;
    font-size: 0.25rem;
    line-height: 0.5rem;
  }
  #myIndex span{
    display: block;
    background-image:url(../../../assets/images/car.png);
    background-size:100% 100%;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.1rem;
  }
 #myIndex section>p{
  display: flex;
  justify-content:start;

 }
 .xf{
  margin-left: -0.6rem;
 }
</style>
