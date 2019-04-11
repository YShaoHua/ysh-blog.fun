<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <p>简单的了解了下</p>
      <h5>盒子模型简单来说就是关于包含属性宽高和内外边距地一个dom。</h5>
      <h5>文档流简单来说就是除了position中的absolute和fixed的dom</h5>
      <h3>重排（reflow)</h3>
      <p>重排又称回流（reflow)</p>
      <p>一个非常简单的页面载入过程，简单说明：</p>
      <h5>用户输入网址，根据协议返回一个html内容（假设没有缓存</h5>
      <h5>载入html代码，发现有css，请求到css内容</h5>
      <h5>根据css渲染页面</h5>
      <h5>继续载入静态资源（img）</h5>
      <p>当页面css渲染成功以后，一个简单页面就完成了.</p>
      <p>不脱离文档流的元素的排列一般会受到子元素，兄弟元素的影响。然后根据盒子模型依次排列好盒子，这就是页面布局的基本绘制。</p>
      <p>so，如果其中页面中的任何一个盒子属性发生变化了，那页面就会重排，也就是再一次经历上面说的第三点。</p>
      <h4>根据css渲染页面</h4>
      <p>这就是重排（reflow）</p>
      <img src="./reflow.jpg" alt="">
      <p>对于重排尴尬的是，程序员本身想控制这个都不可能，类似蝴蝶效应，没法控制一个px最后会影响到什么程度</p>
      <p>最后，因为img载入是异步，所以往往在页面全部完成以后，img才姗姗来迟。</p>
      <h4>所以如果没有控制img的宽高或者在img包裹的那个盒子里，没做高宽，溢出控制。那每完成一个图片载入，就会重新渲染页面</h4>
      <p>为了减少页面重排影响的浏览器性能问题，我们可以做：</p>
      <h5>1.有图片要页面处理的时候，设置宽高，至少应该控制宽。包裹图片等盒子尽量完整盒子属性</h5>
      <h5>2.如果要做动画动效页面，一定要脱离文档流</h5>
      <h5>3.活用CSS3 Animation 和 Transition </h5>
      <h5>4.在手机端如果频繁reflow，那会出现非常严重的卡顿。CSS3 Animation 和 Transition 对渲染帮助很大，具体原理脱离了主题不做深究。活用css3在手机端，对于性能提升帮助很大。</h5>
      <h3>重绘（repaint）</h3>
      <p>重绘就是除了基础盒子模型以外一些属性的改变。比如，背景，字体色，文本流</p>
      <h5>因为是单节点的变化，所以重绘比重排性能损耗来的低很多</h5>
      <p>重绘来说，没什么好讲，就是减少对dom的操作，直接贴代码，大多数人也应该知道。</p>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/bg6.jpeg'),
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