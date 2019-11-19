<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <p>hello world !!!</p>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/img1.jpg'),
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.content {
  min-height: 300px;
  p {
    text-align center;
    margin-bottom: 180px;
  }
}
</style>