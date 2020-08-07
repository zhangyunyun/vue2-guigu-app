<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starArr" :key="index" :class="sc"></span>
    <!--<span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>
</template>

<script>
  const STAR_ON = 'on'
  const STAR_HALF = 'half'
  const STAR_OFF = 'off'
  export default {
    name: "Star",
    props:{
      score:Number,
      size:Number
    },
    data(){
      return{

      }
    },
    computed:{
      starArr(){
        const {score} = this
        const sArr = []
        /*
        * 4.2
        * 4.5
        * 4.7
        * 5
        * */
        const scoreInteger = Math.floor(score)
        //向sArr中添加n个'on'
        for(let i=0; i<scoreInteger; i++){
          sArr.push(STAR_ON)
        }
        //向sArr中添加0/1个'half'
        if(score*10 - scoreInteger*10 >= 5){
          sArr.push(STAR_HALF)
        }
        //向sArr中添加n个'off'
        while(sArr.length < 5){
          sArr.push(STAR_OFF)
        }

        return sArr
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '../../assets/styles/mixin';
  .star { //2x图 3x图
    float: left;
    font-size: 0;
    padding:3px 0;
    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-48 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-image('./images/star48_on')
        }
        &.half {
          @include bg-image('./images/star48_half')
        }
        &.off {
          @include bg-image('./images/star48_off')
        }
      }
    }
    &.star-36 {
      .star-item {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 15px 15px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-image('./images/star36_on')
        }
        &.half {
          @include bg-image('./images/star36_half')
        }
        &.off {
          @include bg-image('./images/star36_off')
        }
      }
    }
    &.star-24 {
      .star-item {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-image('./images/star24_on')
        }
        &.half {
          @include bg-image('./images/star24_half')
        }
        &.off {
          @include bg-image('./images/star24_off')
        }
      }
    }
  }
</style>
