<template>
  <div class="blog-box">
    <div
      class="menu-list__slightly"
      v-for="(item, index) in bolgList"
      :key="index"
      @click="goWeb(item.routerName)"
    >
      <div :style="`background-image: url(${item.image})`"></div>
      <div>
        <p>{{item.title}}</p>
        <!-- <p>{{item.introduce}}</p> -->
        <p> </p>
        <p>{{item.conten}}</p>
        <!-- <p>{{item.time}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bolgList: [
        {
          image: require("@/assets/images/img/img9.jpeg"),
          title: "移动端适配",
          introduce: "Learning js",
          conten: "解决适配问题！～",
          time: "2018年6月27日",
          routerName: "adapter"
        },
        {
          image: require("@/assets/images/img/img8.jpg"),
          title: "拖拽效果",
          introduce: "Learning js",
          conten: "js实现鼠标拖拽效果",
          time: "2018年6月2日",
          routerName: "dragAndDrop"
        },
        {
          image: require("@/assets/images/img/img7.jpeg"),
          title: "翻转动画",
          introduce: "Learning css",
          conten: "backface-visibility",
          time: "2018年5月11日",
          routerName: "flipAnimation"
        },
        {
          image: require("@/assets/images/img/img6.jpeg"),
          title: "重排and重绘",
          introduce: "Learning css",
          conten: "浏览器的重绘与重排",
          time: "2018年4月2日",
          routerName: "rearrangement"
        },
        {
          image: require("@/assets/images/img/img5.jpg"),
          title: "C + V",
          introduce: "Learning js",
          conten: "了解下深浅拷贝",
          time: "2018年3月11日",
          routerName: "copy"
        },
        {
          image: require("@/assets/images/img/img4.jpeg"),
          title: "vue-router",
          introduce: "Learning vue",
          conten: "vue-router的简单流程",
          time: "2018年2月20日",
          routerName: "vueRouter"
        },
        {
          image: require("@/assets/images/img/img3.jpeg"),
          title: "[$on, $emit]",
          introduce: "Learning vue",
          conten: "vue2父子组件间相互通信",
          time: "2018年2月3日",
          routerName: "vueCommunication"
        },
        {
          image: require("@/assets/images/img/img2.jpeg"),
          title: "css居中",
          introduce: "Learning CSS",
          conten: "学习元素居中~~",
          time: "2018年1月28日",
          routerName: "cssMiddle"
        },
        {
          image: require("@/assets/images/img/img1.jpg"),
          title: "Hello World",
          introduce: "Begin to contact",
          conten: "开启打怪升级之路……",
          time: "2018年1月6日",
          routerName: "theBeginToContact"
        }
      ]
    };
  },
  created() {},
  methods: {
    /**
     * 前往内容页
     * @param {String} val 路径
     */
    goWeb(val) {
      this.$router.push({
        name: val
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.blog-box {
  background-color: #f8f8f8;
  display: inline-block;
  width: 100%;
  min-height: 100vh;

  .menu-list__slightly:hover {
    cursor: pointer;

    >div:nth-child(2) {
      >p:nth-child(1) {
        color: #0084FF;
      }
    }
  }

  .menu-list__slightly {
    margin: 40px auto;
    height: 120px;
    width: 700px;
    display: flex;
    justify-content: center;

    >div:nth-child(1) {
      height: 100%;
      width: 150px;
      border-radius: 18px 0 0 18px;
      border: 1px solid rgba(136, 136, 136, 0.2);
      box-shadow: 0 3px 7px -1px rgba(220, 220, 220, 0.2);
      background-size: 100% 100%;
    }

    >div:nth-child(2) {
      height: 100%;
      width: 550px;
      border: 1px solid rgba(136, 136, 136, 0.2);
      box-shadow: 0 3px 7px -1px rgba(220, 220, 220, 0.2);
      background-color: #fff;
      border-radius: 0 18px 18px 0;
      padding-left: 20px;

      >p:nth-child(1) {
        color: #000;
        font-size: 18px;
        margin-top: 5px;
      }

      >p:nth-child(2) {
        color: #888;
        font-size: 14px;
        // margin-top: 7px;
      }

      >p:nth-child(3) {
        color: green;
        font-size: 14px;
        // margin-top: 12px;
        margin-left: 10px;
      }

      >p:nth-child(4) {
        color: #000;
        font-size: 12px;
        // margin-top: 10px;
        float: right;
        margin-right: 30px;
      }
    }
  }
}
</style>
