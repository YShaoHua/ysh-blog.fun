<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <pre>
        <script type="text/html" style="display:block;">
        </script>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/bg2.jpg'),
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>