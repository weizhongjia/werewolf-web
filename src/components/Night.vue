<template>
  <div class="night">
    <p>天黑请闭眼...</p>
    <button class="next">下一步</button>
  </div>
</template>

<script>
  export default{
    name: 'night'
  }
</script>

<style>
  .night{
    width:100%;
    height:auto%;
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    padding:2rem 0.4rem 0;
    background: #030000;
    font-size: 0.35rem;
  }
  .night p{
    font-size: 0.6rem;
    font-style: italic;
    font-weight: bold;
    color: #c9c9c9;
  }
  .night .next{
    background: #f6f5f5;
    color:#303132;
  }
</style>
