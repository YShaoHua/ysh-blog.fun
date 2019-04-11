<template>
  <div class="go-back">
    <img src="./back.png" alt="" @click="goBack">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    /**
     * 返回首页
     */
    goBack() {
      this.$router.push({
        name: 'theIndex',
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
@keyframes dong { 
  0% {             
    transform: translate(0px, 0px);         
  }            
  50% {                
    transform: translate(-10px, 0px);            
  }            
  100% {                
    transform: translate(0px, 0px);
  }
}
.go-back {
  display: flex;
  justify-content: flex-end;
  img {
    margin-top: 30px;
    cursor: pointer;
    width: 50px;
    height: 30px;
    animation: dong 1s infinite;
    transform: rotate(270deg);
  }
}
</style>