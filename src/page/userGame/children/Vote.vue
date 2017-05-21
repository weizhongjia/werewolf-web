<template>
  <div id="vote">
    <ul>
      <li  class="self">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li class="on">8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'vote'
  }
</script>

<style>
  #vote{
    width:5.8rem;
    margin:2rem auto 0;
  }
  #vote ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  #vote .on{
    color: white;
    /*border:0.05rem solid black;*/
    background: red;
    line-height: 0.7rem;
    font-size:0.5rem ;
  }
  #vote .self{
    background: gray;
  }
  #vote li{
    text-align: center;
    box-sizing: border-box;
    float: left;
    width:0.8rem;
    height:0.8rem;
    margin:0.1rem 0.05rem ;
    border:0.02rem solid white;
    display: inline-block;
    font-size: 0.4rem;
    color: lightblue;
    line-height: 0.76rem;
    border-radius: 5px;
  }

</style>
