<template>
  <div id="gameOver">
    <h1>游戏结束</h1>
    <div>
      <!--好人阵营-->
      <div id="goodPerson">
        <!--失败、胜利标识-->
        <img src="../../../assets/images/win.png" alt="" v-if="result && result.winner.length === 8">
        <img src="../../../assets/images/lose.png" alt="" v-if="result && result.winner.length === 4">
        <div class="h2">
          <div class="gradient"></div>
          <h2>好人阵营</h2>
        </div>
        <div class="content">
          <!--每玩家-->
          <div class="every" v-for="seat in normal">
            <div class="touX"></div>
            <p class="num" style="color:black">{{seat}}</p>
            <div class="role">
              <img v-if="!players[seat-1].alive" src="../../../assets/images/daoPai.png" alt="" class="daoPai">
            </div>
            <span class="nickName">nickName</span>
          </div>
        </div>
      </div>

      <!--狼人阵营-->
      <div id="wereWolf">
        <!--失败、胜利标识-->
        <img src="../../../assets/images/win.png" alt="" v-if="result && result.winner.length === 4">
        <img src="../../../assets/images/lose.png" alt="" v-if="result && result.winner.length === 8">
        <div class="h2">
          <div class="gradient"></div>
          <h2>狼人阵营</h2>
        </div>
        <div class="content">
          <div class="every" v-for="seat in werewolf">
            <!--头像-->
            <div class="touX"></div>
            <p class="num" style="color:black">{{seat}}</p>
            <!--右下角角色-->
            <div class="role">
              <!--倒牌-->
              <img src="../../../assets/images/daoPai.png" alt="" class="daoPai" v-if="!players[seat-1].alive">
            </div>
            <span class="nickName">nickName</span>
          </div>
        </div>
      </div>

      <!--<div class="yes again">再来一局</div>-->
      <div class="btmBtn">
        <div class="yes blue" v-on:click="resetGame">重启游戏</div>
        <div class="yes blue" v-on:click="disbandGame">解散游戏</div>
        <!--<div class="yes flaunt">炫耀一下</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'gameOver',
    props: ['result', 'players'],
    methods: {
      resetGame: function () {
        this.$emit('resetGame')
      },
      disbandGame: function () {
        this.$emit('disbandGame')
      }
    },
    computed: {
      winner: function () {
        return this.result.winner.length === 4 ? 'werewolf' : 'normal'
      },
      werewolf: function () {
        if (this.winner === 'werewolf') {
          return this.result.winner.sort()
        } else {
          return this.result.looser.sort()
        }
      },
      normal: function () {
        if (this.winner === 'normal') {
          return this.result.winner.sort()
        } else {
          return this.result.looser.sort()
        }
      }
    }
  }
</script>

<style>
  #gameOver{
    /*color:#232423;*/
    color: #3c3c3c;
    z-index: 10000;
    position: absolute;
    top:0;
    bottom: 0;
    width: 6.4rem;
    height: auto;
    background: #d6d6d6;
  }
  #gameOver>h1{
    font-style:italic ;
    font-size: 0.7rem;
    font-weight: 600;
    /*font-size: 0.8rem;*/
    /*color: #ffb708;*/
    /*text-shadow:0 2px 10px #cccc33;*/
    margin: auto;
    z-index: 100;
    position: absolute;
    top:0.2rem;
    /*top: 0.12rem;*/
    left: 0;
    right: 0;
  }
  #gameOver>div{
    width: 6rem;
    position: absolute;
    left: 0.2rem;
    top:0.8rem;
    bottom: 0.1rem;
    height: auto;
    /*background: #6b718b;*/
    border-radius: 20px;
  }
  #goodPerson{
    position: relative;
    background: white;
    /*background: #06213f;*/
    /*background: linear-gradient(to right ,#1b2330 , #06213f ,#1b2330 );*/
    width: 5.7rem;
    margin: 0.55rem auto 0.4rem;
    height: 4.1rem;
    border:2px solid #5f5f5f;
    border-radius: 15px;
  }
  #gameOver .h2{
    position: relative;
    height: 0.7rem;
  }
  .gradient{
    position: absolute;
    top:0.25rem;
    width: 100%;
    height: 0.25rem;
    background: #d6d6d6;
    background: linear-gradient(to right,#d6d6d6 , #ffffff ,#d6d6d6);
  }
  /*#goodPerson .gradient{*/
    /*background: #d6d6d6;*/
    /*background: linear-gradient(to right,#d6d6d6 , #ffffff ,#d6d6d6);*/
  /*}*/
  /*#wereWolf .gradient{*/
    /*background: #ba3023;*/
    /*background: linear-gradient(to right, #221c1c , #b02d32 ,#221c1c);*/
  /*}*/
  #gameOver h2{
    font-size: 0.4rem;
    /*color: #d5904d;*/
    font-weight: normal;
    position: absolute;
    top:0.1rem;
    z-index: 100;
    left: 0;
    right: 0;
    margin: auto;
  }
  #wereWolf{
    position: relative;
    background: white;
    /*background: linear-gradient(to right, #221c1c , #3a0e0f ,#221c1c);*/
    width: 5.7rem;
    margin: 0.4rem auto 0.4rem;
    height: 4rem;
    border:2px solid #5f5f5f;
    border-radius: 15px;
  }
  .content{
    width: 100%;
    /*height: 3rem;*/
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  #gameOver .every{
    margin-top:0.1rem;
    margin-bottom: 0.15rem;
    position: relative;
    width: 1.15rem;
    height:1.45rem ;
  }
  .touX{
    width: 1.04rem;
    height: 1.04rem;
    border: 0.05rem solid #5f5f5f;
    border-radius: 50%;
    /*box-shadow: 0 0 0.06rem 2px #d1b286 ;*/
  }
  .every>.waring{
    width: 0.35rem;
    height: 0.35rem;
    position:absolute ;
    left: 0;
    bottom: 0.3rem;
    display: block;
  }
  .every .nickName{
    font-size: 0.25rem;
    position: absolute;
    top:1.15rem;
    display: block;
    left: 0;
    right: 0;
    /*color:#c9c9c9;*/
    word-wrap : break-word
  }
  .every .num{
    position: absolute;
    top: 0;
    right: 0;
    /*color: #d5904d;*/
    font-size: 0.3rem;
  }
  .every .role{
    width: 0.35rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.3rem;
    right: 0;
    background: #d6d6d6;
    /*background: goldenrod;*/
    /*border:1px solid grey;*/
    box-shadow: 0 0 2px 1px #7c6d0e;
  }
  .every .role>.daoPai{
    position: absolute;
    top: 0.1rem;
    left: -0.1rem;
    width: 0.54rem;
    height:0.27rem ;
    transform:rotate(-20deg);
  }
  #goodPerson>img,#wereWolf>img{
    position: absolute;
    top: -0.1rem;
    right: 0;
    width: 1.5rem;
    height: 1rem;
    z-index: 101;
  }
  #gameOver .yes{
    margin: 0;
  }
  #gameOver .again{
    /*width: 2.7rem;*/
    /*margin: 0.15rem auto 0.2rem;*/
    /*background: #e2bb1e;*/
    /*border:1px solid #a38813;*/
    /*box-shadow: 0 0 5px 3px #998929;*/
    /*color: gray;*/
    /*line-height: 0.6rem;*/
    /*color: whitesmoke;*/
  }
  .btmBtn {
    display: flex;
    justify-content: space-around;
  }
  .btmBtn .yes{
    /*width: 28%;*/
    /*font-size: 0.28rem;*/
    /*height: 0.55rem;*/
    /*line-height: 0.55rem;*/
    /*border:none;*/
    /*color: whitesmoke;*/
  }
  .btmBtn .blue{
    /*background: #5b9dd9;*/
    /*box-shadow: 0 0 5px 3px #3d6991;*/
    /*color: gray;*/
  }
  .btmBtn .flaunt{
    /*background: #e2bb1e;*/
    /*border:1px solid #a38813;*/
    /*box-shadow: 0 0 5px 3px #998929;*/
    /*color: whitesmoke;*/
  }
</style>
