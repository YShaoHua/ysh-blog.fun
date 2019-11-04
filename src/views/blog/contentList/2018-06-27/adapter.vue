<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <h3>物理像素和逻辑像素</h3>
      <p>俗话说物理分辨率是硬件所支持的，逻辑分辨率是软件。</p>
      <p>我们先来看看ios客户端的尺寸分辨率表：</p>
      <img src="./img1.jpg" alt="">
      <p>物理尺寸是指屏幕的实际大小。大的屏幕同时必须要配备高分辨率，也就是在这个尺寸下可以显示多少个像素，显示的像素越多，可以表现的余地自然越大。</p>
      <p>这里的Reader @1x @2x @3x指的是逻辑像素和物理像素的倍数值，当然这只是苹果的标准。</p>
      <p>Android的标准会更多，传说中的2K、4K、5K屏的倍数会更大，有兴趣的童鞋可以去研究研究。</p>
      <p>这就是为什么css中的1px并不等于设备的1px的原因</p>
      <p>在移动端浏览器中以及某些桌面浏览器中，window对象有一个devicePixelRatio属性，它的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。css中的px就可以看做是设备的独立像素，所以通过devicePixelRatio，我们可以知道该设备上一个css像素代表多少个物理像素。例如，在Retina屏的iphone上，devicePixelRatio的值为2，也就是说1个css像素相当于2个物理像素。但是要注意的是，devicePixelRatio在不同的浏览器中还存在些许的兼容性问题，所以我们现在还并不能完全信赖这个东西，具体的情况可以看下
        <a href="https://www.quirksmode.org/blog/archives/2012/06/devicepixelrati.html">这篇文章。</a>
      </p>
      <h4>viewport</h4>
      <p>下面几篇文章对移动设备上的viewport有着非常多的研究</p>
      <a href="https://www.quirksmode.org/mobile/viewports.html">第一篇</a>
      <a href="https://www.quirksmode.org/mobile/viewports2.html">第二篇</a>
      <a href="https://www.quirksmode.org/mobile/metaviewport/">第三篇</a>
      <p>ideal viewport指的是，首先不需要用户缩放和横向滚动条就能正常的查看网站的所有内容；第二，显示的文字的大小是合适，</p>
      <p>比如一段14px大小的文字，不会因为在一个高密度像素的屏幕里显示得太小而无法看清，理想的情况是这段14px的文字无论是</p>
      <p>在何种密度屏幕，何种分辨率下，显示出来的大小都是差不多的。当然，不只是文字，其他元素像图片什么的也是这个道理。</p>
      <pre>
        <script type="text/html" style="display:block;">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        </script>
      </pre>
      <p>写过移动端的对这个不会陌生，这个meta标签就是把viewport设置称ideal viewport，因为浏览器默认的是layout viewport。</p>
      <p>该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。</p>
      <p>在苹果的规范中，meta viewport 有6个属性(暂且把content中的那些东西称为一个个属性和值)，如下：</p>
      <h5>1.width 设置layout viewport 的宽度，为一个正整数，或字符串”width-device”</h5>
      <h5>2.initial-scale 设置页面的初始缩放值，为一个数字，可以带小数</h5>
      <h5>3.minimum-scale 允许用户的最小缩放值，为一个数字，可以带小数</h5>
      <h5>4.maximum-scale 允许用户的最大缩放值，为一个数字，可以带小数</h5>
      <h5>5.height 设置layout viewport 的高度，这个属性对我们并不重要，很少使用</h5>
      <h5>6.user-scalable 是否允许用户进行缩放，值为”no”或”yes”, no 代表不允许，yes代表允许</h5>
      <p>这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。</p>
      <p>此外，在安卓中还支持 target-densitydpi 这个私有属性，它表示目标设备的密度等级，作用是决定css中的1px代表多少物理像素</p>
      <h5>1.target-densitydpi 值可以为一个数值或 high-dpi 、 medium-dpi、 low-dpi、 device-dpi 这几个字符串中的一个</h5>
      <p>特别说明的是，当 target-densitydpi=device-dpi 时， css中的1px会等于物理像素中的1px。</p>
      <p>因为这个属性只有安卓支持，并且安卓已经决定要废弃target-densitydpi 这个属性了，所以这个属性我们要避免进行使用。</p>
      <h3>适配方案</h3>
      <pre>
        <script type="text/html" style="display:block;">
          <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport"
                content="width=device-width,initial-scale=1,user-scalable=no,minimum-scale=1,maximum-scale=1">
              <title>测试</ title>
              <script type="text/javascript">
                (function (win, doc) {
                  /**
                  * rem 响应式解决方案
                  * 基础宽度375,以 实际宽度/基础宽度 比例放缩
                  */
                  function setRootFontSize () {
                    let docWidth = doc.documentElement.getBoundingClientRect().width;
                    let scale = docWidth / 375
                    doc.documentElement.style.fontSize = scale * 100 + '%'
                  }
                  setRootFontSize();
                  win.addEventListener('resize', setRootFontSize, false);
                })(window, document)
              < /script>
            </head>
            <body>
            </body>
          </html>
        </script>
      </pre>
      <h5>原理：HTML放大倍数 N=逻辑像素/基础像素</h5>
      <h5>需要等比放缩的用rem,反之用px</h5>
      <pre>
        <script type="text/html" style="display:block;">
          (function (win, doc) {
            /**
            * rem 响应式解决方案
            * 基础宽度375,以 实际宽度/基础宽度 比例放缩
            */
            function setRootFontSize () {
              let docWidth = doc.documentElement.getBoundingClientRect().width;
              let scale = docWidth / 375
              doc.documentElement.style.fontSize = scale * 100 + '%'
            }
            setRootFontSize();
            win.addEventListener('resize', setRootFontSize, false);
          })(window, document)
        </script>
      </pre>
      <p>这里是以苹果6的逻辑像素375为基础的放缩的，当然这个值可以根据自己的需要设定，iPhone5的320也可以等。</p>
      <pre>
        <script type="text/html" style="display:block;">
          <html lang="en" style="font-size: 85.3333%;"> 在iphone5下
        </script>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/bg9.jpeg'),
    }
  },
  created () {
  },
  methods: { 
  }
}
</script>

<style lang="stylus" scoped>
a {
  color #05afda
}
</style>