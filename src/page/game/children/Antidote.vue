<template>
  <div class="antidote"  >
    <p>今晚被杀的是<span style="font-size: 0.5rem;color: red;">{{wolfKilledSeat}}</span>号玩家</p>
    <p>是否使用解药</p>
    <div class="drug">
      <div id="save" v-on:click="save(true)"><img src="../../../assets/images/yes.png" alt=""><p>使用解药</p></div>
      <div id="no" class="click" v-on:click="save(false)"><img src="../../../assets/images/no.png" alt=""><p>不救</p></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'antidote',
    props: ['wolfKilledSeat'],
    methods: {
      save: function (flag) {
        this.$emit('witchSave', flag)
      }
    }
  }
</script>

<style>
  .antidote{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left: 0;
    padding:2rem 0.4rem 0;
    background: #bebdbd;
    font-size: 0.35rem;
  }
  .antidote>p{
    margin:0.4rem auto;
    font-weight: bold;
  }
  .drug{
    display: flex;
    /*justify-content: center;*/
  }
  #save,#no{
    font-size: 0.3rem;
    margin:1rem auto 0.4rem;
    width:2rem;
    background: #ebebeb;
    height:1rem;
    border:2px solid #5f5f5f;
    border-radius: 5px;
  }

  .drug img{
    margin-top:0.1rem;
    height:0.8rem;
  }
  #save{
    margin-right:0;
  }
  .drug p{
    text-align: center;
    margin-top: 0.2rem;
    color: #727373;
  }
  .yes{
    width:2rem;
    height:0.6rem;
    line-height: 0.58rem;
    background: #f6f5f5;
    margin:0.4rem auto;
    /*font-weight: bold;*/
    border:2px solid #5f5f5f;
    border-radius: 5px;
    font-size: 0.33rem;
  }
  .pic{
    width: 1.5rem;
    height: 1.5rem;
    margin:0 auto 0.2rem;
    border: 10px solid #99948d;
    border-radius: 23px;
    position: relative;
   }
  .pic p{
    color: black;
  }
  .click{
    border:5px solid #eead26 !important;
  }
</style>
