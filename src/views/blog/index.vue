<template>
  <div class="blog-box">
    <div class="menu-list__slightly"
         v-for="(item, index) in bolgList"
         :key="index"
         @click="goWeb(item.routerName)">
      <div :style="`background-image: url(${item.image})`"></div>
      <div>
        <p>{{item.title}}</p>
        <p>{{item.introduce}}</p>
        <p>{{item.conten}}</p>
        <p>{{item.time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bolgList: [
        {
          image: require('@/assets/images/img/img1.jpg'),
          title: 'Hello World',
          introduce: 'Begin to contact',
          conten: '开启打怪升级之路……',
          time: '2016年1月6日',
          routerName: 'theBeginToContact',
        },
      ],
    }
  },
  created () {
  },
  methods: {
    /**
     * 前往内容页
     * @param {String} val 路径
     */
    goWeb(val) {
      this.$router.push({
        name: val,
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
.blog-box
  background-color #f8f8f8
  display inline-block
  width 100%
  min-height 100vh
  .menu-list__slightly:hover {
    cursor pointer
    >div:nth-child(2) {
      >p:nth-child(1) {
        color #0084FF
      }
    }
  }
  .menu-list__slightly
    margin 40px auto
    height 120px
    width 700px
    display flex
    justify-content center
    >div:nth-child(1) {
      height 100%
      width 150px
      border-radius 18px 0 0 18px
      border 1px solid rgba(136,136,136, 0.2)
      box-shadow 0 3px 7px -1px rgba(220,220,220, 0.2)
      background-size 120% 100%
    }
    >div:nth-child(2) {
      height 100%
      width 550px
      border 1px solid rgba(136,136,136, 0.2)
      box-shadow 0 3px 7px -1px rgba(220,220,220, 0.2)
      background-color #fff
      border-radius 0 18px 18px 0
      padding-left 20px
      >p:nth-child(1) {
        color #000
        font-size 18px
        margin-top 15px
      }
      >p:nth-child(2) {
        color #888
        font-size 14px
        margin-top 7px
      }
      >p:nth-child(3) {
        color green
        font-size 14px
        margin-top 12px
        margin-left 10px
      }
      >p:nth-child(4) {
        color #000
        font-size 12px
        margin-top 10px
        float right
        margin-right 30px
      }
    }
</style>
