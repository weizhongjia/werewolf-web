<template>
  <div id="voteResult" class="animated bounceInDown">
    <h2>投票结果</h2>

    <!--投票结果容器-->
    <div class="allVoteResult">
      <!--每个身份投票信息-->
      <div class="voteResult">
        <p>2号：</p>
        <p>&nbsp;8,9</p>
      </div>
    </div>

    <div id="outNum">
      <p>最终结果：</p>
      <p class="outNum">2</p>
      <p>&nbsp;号出局</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'voteResult',
    data: {
      outNum: 2
    }

  }
</script>

<style>
  #voteResult{
    position: absolute;
    background: #c4c4c4;
    font-size: 0.5rem;
    font-weight: bold;
    color: black;
    z-index: 1000;
  }
  #voteResult{
    top:1.8rem;
    left: 0.7rem;
    width: 5rem;
    height:7.5rem;
    padding-top:0.3rem;
    opacity:1;
  }
  #voteResult h2{
    font-size: 0.5rem;
    /*margin-bottom: 0.2rem;*/
  }
  #voteResult .voteResult{
    font-size: 0.35rem;
    height: 0.4rem;
    padding-left:0.5rem;
    font-weight: normal;
    width: 5rem;
  }
  .voteResult p{
    float: left;
    line-height: 0.4rem;
  }
  #outNum{
    text-align: center;
    font-size: 0.38rem;
    position: absolute;
    bottom: 0.2rem;
    padding-left: 0.72rem;
  }
  #outNum p{
    float:left;
    height: 0.5rem;
    line-height: 0.5rem;

  }
  #outNum .outNum{
    font-size: 0.4rem;
    color: red;
  }
  .allVoteResult{
    width:5rem;
    height: 5.6rem;
    position: absolute;
    display: flex;
    top:1.2rem;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
