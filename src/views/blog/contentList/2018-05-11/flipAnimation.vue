<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <p>学习一款动画中会用到的属性 backface-visibility</p>
      <p>用它可以制作出许多有趣的动画效果。当你翻转一个元素的时候，你会用什么方式？通常我们用到了transform: rotateY(360deg); 然而我们看到了这个元素的背面，当然不用担心，这是正常的情况。</p>
      <p>不过我们希望翻转一个元素后看到的是另一个元素。那我们需要今天的主角 backface-visibility:hidden; ，我们可以使一个元素在翻转之后消失，这时可以使用另一个元素放在它的背面，从而制作出一种元素翻转之后出现另一个元素的效果。</p>
      <h4>什么是 backface-visibility</h4>
      <p>backface-visibility 属性和 3D transform 还是要一起用的，它只是用于决定当一个元素的背面面向用户的时候是否可见。例如下面图片展示的两个圆形元素，前面一个是正面，后面一个是背面。当它翻转到背面的时候，上面的文字应该是正面的镜像，这是默认的行为。</p>
      <img src="./circledemopic.png" alt="">
      <h4>浏览器兼容</h4>
      <p>所有的现代浏览器 都支持 backface-visibility 属性。Chrome、Safari和Opera浏览器需要使用 -webkit- 的厂商前缀。最新版本的 Chrome 已经支持，IE10+的IE浏览器都支持该属性。可以查看Can I Use获取相关信息。</p>
      <h3>举个栗子</h3>
      <p>旋转的甜甜圈</p>
      <img src="./donutspinpic.png" alt="">
      <pre>
        <script type="text/html" style="display:block;">
          img {
            position: absolute;
            animation: turn 2s infinite;
          }
          .donut-front {
            z-index: 5;
            backface-visibility: hidden;
          }
          @keyframes turn {
            to {
              transform: rotateY(360deg);
            }
          }
        </script>
      </pre>
      <p>这个 demo 是理解 backface-visibility 属性的很好的例子；当我们翻转了甜圈后，不希望再看到它的 front 面；因此我们需要另一幅代表甜圈背面的图片来取代原来的背面。</p>
      <p>我们会将 “front” 面和 “back” 面放置在相同的位置上，”front” 面位于 “back” 面的前面。”front” 面使用 backface-visibility: hidden; 来隐藏背面。它们会沿Y轴同步旋转，转动背面时，”front” 面消失，另一幅图片被展示出来。</p>
      <p>两张图片都使用相同的动画，只是第一张图片在旋转到背面时就被隐藏起来，这是第二张图片就自然的展示出来。</p>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/bg7.jpeg'),
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