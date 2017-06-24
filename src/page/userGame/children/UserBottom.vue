<template>
  <div class="bottom">
    <p >{{text.title}}</p>
    <div class="left">
      <p class="tips">{{text.tips}}</p>
      <p class="yes" v-if="text.negative" v-on:click="emitEvent(false)">{{text.negative}}</p>
    </div>
    <div class="right yes" v-if="text.positive" v-on:click="emitEvent(true)">{{text.positive}}</div>
  </div>
</template>

<script>
  export default{
    name: 'userBottom',
    props: ['event'],
    methods: {
      emitEvent: function (flag) {
        this.$emit('bottomConfirm', flag)
      }
    },
    computed: {
      sheriff_unregister: function () {
        return this.event.filter(event => event === 'SHERIFF_UNREGISTER').length
      },
      text: function () {
        if (this.sheriff_unregister) {
          return {
            title: '退警',
            positive: '确定'
          }
        }
        return {}
      }
    }
  }
</script>

<style>
  .bottom{
    overflow: hidden;
    width: 6.4rem;
    text-align: center;
    position: absolute;
    height:3rem;
    /*top:7.4rem;*/
    bottom: 0;
    left: 0;
    background: #1e1f1f;
  }
  .bottom>p{
    width: 6.4rem;
    position: absolute;
    top:0.3rem;
    height: 0.4rem;
    left: 0;
    color: #b3b3b3;
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .tips{
    width: 3rem;
    position: absolute;
    top:0;
    height: 0.4rem;
    line-height: 0.4rem;
    left: 0;
    color: #717171;
    font-size: 0.25rem;
  }
  .left{
    position: absolute;
    top:0.7rem;
    height: 2rem;
    left: 0;
    width: 3rem;
  }
  .bottom .right{
    margin: 0;
    position: absolute;
    right: 0.4rem;
    top:1.6rem ;
  }
  .chose{
    width: 3rem;
    height: 1.5rem;
    /*line-height: 0.8rem;*/
    position: absolute;
    top:0.4rem;
    font-size: 1.3rem;
    color: #4a2151;
    font-weight: bold;
  }
  .empty{
    display: none;
  }
  .left .yes{
    margin:0;
    position: absolute;
    top:0.9rem;
    left:0.4rem;
  }
</style>
