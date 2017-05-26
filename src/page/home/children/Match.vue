<template>
  <div id="match">
    <h3 class="h3">本地赛事</h3>
    <section></section>
  </div>
</template>

<script>
  export default{
    name: 'match'
  }
</script>

<style>
  #match{
    background-color: rosybrown;
    margin-top: 0.1rem;
    border-bottom: 1px solid transparent;
  }
  .h3{
    font-size: 0.3rem;
    color: white;
    width: 1.5rem;
    font-weight: 500;
    background-color: #7b7b7b;
  }
  section{
    border: 2px solid #c4c4c4;
    width: 6rem;
    margin: 0.1rem auto;
    border-radius:0.3rem ;
    /*background-color: #b4b472;*/
    height: 2rem;
  }
</style>
