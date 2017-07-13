<template>
  <div id="voteResult" class="animated bounceInDown">
    <h2>投票结果</h2>

    <!--投票结果容器-->
    <div class="allVoteResult">
      <!--每个身份投票信息-->
      <template v-if="showVotingResult === 'daytime_voting'" v-for="(value, key) in daytimeRecord.votingRecord" >
        <div class="voteResult">
          <span v-if="key != 0">{{key}}号&larr;</span>
          <span v-if="key == 0">弃权&larr;</span>
          <template v-for="n in value">
            <span v-if="n == sheriff" style="color: red;">{{ n }}、</span>
            <span v-if="n != sheriff">{{ n }}、</span>
          </template>
        </div>

      </template>

      <template v-if="showVotingResult === 'sheriff_voting'" v-for="(value, key) in sheriffRecord.votingRecord" >
        <div class="voteResult">
          <span v-if="key != 0">{{key}}号&larr;</span>
          <span v-if="key == 0">弃权&larr;</span>
          <template v-for="n in value">
            <span v-if="n == sheriff" style="color: red;">{{ n }}、</span>
            <span v-if="n != sheriff">{{ n }}、</span>
          </template>
        </div>

      </template>

      <template v-if="showVotingResult === 'sheriff_pk_voting'" v-for="(value, key) in sheriffRecord.pkVotingRecord" >
        <div class="voteResult">
          <span v-if="key != 0">{{key}}号&larr;</span>
          <span v-if="key == 0">弃权&larr;</span>
          <template v-if="value.length !== 0" v-for="n in value">
            <span v-if="n == sheriff" style="color: red;">{{ n }}、</span>
            <span v-if="n != sheriff">{{ n }}、</span>
          </template>
          <span v-if="!value">无人投票</span>
        </div>
      </template>
    </div>

    <div id="outNum">
      <p>最终结果：</p>
      <p class="outNum" v-if="showVotingResult === 'daytime_voting'">{{daytimeRecord.diedNumber}}</p>
      <p class="outNum" v-if="showVotingResult === 'sheriff_voting' || showVotingResult === 'sheriff_pk_voting'">{{sheriffRecord.sheriff}}</p>
      <p v-if="showVotingResult === 'daytime_voting'">&nbsp;号出局</p>
      <p v-if="showVotingResult === 'sheriff_voting' || showVotingResult === 'sheriff_pk_voting'">&nbsp;号当选</p>
    </div>
    <div style="position: absolute;bottom: 0;text-align: center;left: 1.5rem;" class="yes" v-on:click="handleClick">确&nbsp;定</div>
  </div>
</template>

<script>
  export default{
    name: 'voteResult',
    data () {
      return {
        outNum: 2
      }
    },
    props: ['daytimeRecord', 'sheriff', 'showVotingResult', 'sheriffRecord'],
    methods: {
      handleClick: function () {
        this.$emit('hideVoteResult')
      }
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
    font-size: 0.3rem;
    height: 0.4rem;
    padding-left:0.5rem;
    font-weight: normal;
    width: 5rem;
    text-align: left;
  }
  .voteResult p{
    float: left;
    line-height: 0.4rem;
  }
  #outNum{
    text-align: center;
    font-size: 0.38rem;
    position: absolute;
    bottom: 1.2rem;
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
    height: 4.6rem;
    position: absolute;
    display: flex;
    top:1.2rem;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
