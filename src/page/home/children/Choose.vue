<template>
  <div id="choose">
    <h2>配置房间</h2>
    <div id="protoss">
      <h3>神民配置</h3>
      <div class="protoss">
        <p>预言家</p>
      </div>
    </div>
    <div id="special">
      <h3>特殊身份</h3>
      <div>
        <p>丘比特</p>
        <p>熊孩子</p>
      </div>
    </div>
    <div id="werewolf">
      <h3>狼人配置</h3>
      <div>
        <p>白狼王</p>
        <p>隐狼</p>
      </div>
    </div>
    <div class="villagers">
      <h3>村民配置</h3>
    </div>
    <div class="btn">
      <button>
        完成配置
      </button>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'choose'
  }
</script>

<style>
  #choose{
    width: 6.4rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 1000;
  }
  #choose h2{
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.35rem;
    background-color: #3c3c3c;
    color: white;
    font-weight: 500;
  }
  #choose h3{
    height: 0.6rem;
    line-height:0.6rem;
    font-size: 0.3rem;
    text-align: left;
    background-color: #f4f4f9;
    color: #a4a4a4;
    font-weight: 500;
    padding-left: 0.15rem;
  }
  #choose p{
    border:1px solid #c4c4c4;
    border-radius: 0.25rem;
    margin-right: 0.3rem;
    font-size: 0.3rem;
    padding: 0.05rem 0.2rem;
    margin-top: 0.2rem;
  }
  #choose>div>div{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 0.3rem;
  }
  #choose>div{
    margin-bottom: 0.2rem;
  }
 #choose .btn{
   width: 6.4rem;
    position: fixed;
    bottom:0;
    left:0;
    background: white;
    z-index: 1000;
    margin: 0;
  }
  #choose button{
    width: 5.8rem;
    height: 1rem;
    background-color: #1aab19;
    line-height: 1rem;
    color: white;
    font-size: 0.35rem;
    margin: 0 auto;
    border-radius: 0.1rem;
  }
  #choose select{
    width: 5.8rem;

  }
</style>
