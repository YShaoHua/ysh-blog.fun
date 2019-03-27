<template>
  <div class="begin-to__contact">
    <img :src="img"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/img1.jpg')
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.begin-to__contact
  width 100%
  min-height 100vh
  background-color #f8f8f8
  >img 
    width 100%
    height 500px
</style>