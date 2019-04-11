<template>
  <div class="blog-box">
    <img :src="img" class="bg-img">
    <div class="content">
      <p>公司技术分享会中大佬们分享出来的一些东西，值得学习哦~</p>
      <h3>一.水平居中</h3>
      <h4>1.水平居中单个元素</h4>
      <p>水平居中单个元素应该是最简单的，行内元素容器设置text-align: center, 块级元素自身设置magin:0 auto即可</p>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele text-align-center">
            <span class="inline-ele">
              我是行内元素，我用text-align居中
            </span>
            <div class="block-ele margin-0-auto">
              我是块级元素，我用magin居中
            </div>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .specified－width-ele {  /* 外层定宽块级父元素 */
            width: 800px;
            height: 100px;
            border: 1px solid #e3e3e3
          }
          .inline-ele {            /* 内部内联子元素 */
            border: 1px solid #e3e3e3
          }
          .block-ele {             /* 内部块级子元素 */
            width: 200px;
            border: 1px solid #e3e3e3
          }
          .margin-0-auto {
            margin: 0 auto;
          }
        </script>
      </pre>
      <h4>2.水平居中多个元素之inline-block版</h4>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele text-align-center">
            <div class="block-ele display-inline-block">
              块级元素1
            </div>
            <div class="block-ele display-inline-block">
              块级元素2
            </div>
            <div class="block-ele display-inline-block">
              块级元素3
            </div>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .display-inline-block {
            display: inline-block;
          }
        </script>
      </pre>
      <p>父元素设置text-align:center,子元素display:inline-block,块之间的间隔可以用标签之间无空格去掉</p>
      <p>[注意]若要兼容IE7-浏览器，可使用display:inline;zoom:1，来达到inline-block的效果</p>
      <h4>3.水平居中多个元素之flexbox版</h4>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele display-flex-13">
            <div class="block-ele">
              块级元素1
            </div>
            <div class="block-ele">
              块级元素2
            </div>
            <div class="block-ele">
              块级元素3
            </div>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .display-flex-13 {
            display: flex;
            justify-content: center;
          }
        </script>
      </pre>
      <p>【1】在伸缩容器上设置主轴对齐方式justify-content:center</p>
      <p>【2】在伸缩项目上设置margin: 0 auto</p>
      <p>[注意]IE9-浏览器不支持</p>
      <p>此种方法将所有块级子元素全部居中，虽然display:inline-block的方式需要父子元素都加上css或者多余类，但是可以控制居中的子元素数量</p>
      <h3>二.垂直居中</h3>
      <h4>1.垂直居中inline元素</h4>
      <h5>(1) 垂直居中单行inline元素</h5>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele">
            <span class="inline-ele line-height-2-1-1">
              我是单行内联元素，我用line-height垂直居中
            </span>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .line-height-2-1-1 {
            line-height: 100px;
          }
        </script>
      </pre>
      <p>文本本身就在一行中居中显示。在不设置高度的情况下，行高可以撑开高度.</p>
      <h5>(2) 垂直居中多行inline元素之table-cell版</h5>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele table-2-1-2">
            <span class="inline-ele table-cell-2-1-2">
              我是单行内联元素1
            </span>
            <span class="inline-ele table-cell-2-1-2">
              我是单行内联元素2
            </span>
            <span class="inline-ele table-cell-2-1-2">
              我是单行内联元素2
            </span>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .table-2-1-2 {
            height: 100px;
            width: 800px;
            display: table;
          }
          .table-cell-2-1-2 {
            display: table-cell;
            vertical-align: middle;
          }
        </script>
      </pre>
      <p>通过为table-cell元素设置vertical-align:middle，可使其子元素均实现垂直居中。这和表格里单元格的垂直居中是类似的。</p>
      <p>[注意]设置为table-cell的div不能使用浮动或绝对定位，因为浮动或绝对定位会使元素具有块级元素特性，从而丧失了table-cell元素具有的垂直对齐的功能。若需要浮动或绝对定位处理，则需要外面再套一层div。</p>
      <h5>(3) 垂直居中多行inline元素之flexbox版</h5>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele display-flex-2-1-3">
            <span class="inline-ele">
              我是单行内联元素1
            </span>
            <span class="inline-ele">
              我是单行内联元素2
            </span>
            <span class="inline-ele">
              我是单行内联元素3
            </span>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .display-flex-2-1-3 {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
        </script>
      </pre>
      <h4>2.垂直居中block元素</h4>
      <p>相比较于水平居中，垂直居中略显艰难，大部分原因是不能正确使用vertical-align。实际上，只要备足粮草，自然可以行军，接来下储备下关于垂直居中的几种思路，做到有备无患。</p>
      <h5>(1) 绝对定位居中之calc版</h5>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele position-relative">
            <div class="block-ele absolute-calc-vertical-align">
              我是块级元素，我用position:absolute和calc垂直居中
            </div>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .absolute-calc-vertical-align {
            height: 20px;        /* 此处加的高度是为了计算top,同时体现了此方法的弊端 */                   
            position: absolute; 
            left: calc(50% - 100px);
            top: calc(50% - 10px);
          }
        </script>
      </pre>
      <h5>(2) 绝对定位居中之translate版</h5>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele position-relative">
            <div class="block-ele absolute-translate-vertical-align">
              我是块级元素，我用position:absolute和translate垂直居中
            </div>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .absolute-translate-vertical-align {
            position: absolute;   /* 此处没加高度，和文字自适应，是此方法的优点 */
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        </script>
      </pre>
      <p>translate函数的百分比是相对于自身高度的，所以top:50%配合translateY(-50%)可实现居中效果</p>
      <p>[注意]IE9-浏览器不支持</p>
      <p>[注意]若子元素的高度已知，translate()函数也可替换为margin-top: 负的高度值</p>
      <h5>(3) flexbox居中</h5>
      <pre>
        <script type="text/html" style="display:block;">
          <div class="specified－width-ele display-flex">
            <div class="block-ele margin-auto">
                我是块级元素，我用父元素flexbox和自身margin垂直居中
            </div>
          </div>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          .display-flex {
            display: flex;
          }
          .margin-auto {
            margin: auto;
          }
        </script>
      </pre>
      <p>【1】在伸缩容器上设置侧轴对齐方式align-items: center</p>
      <p>【2】在伸缩项目上设置margin: auto 0</p>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/images/img/bg2.jpg")
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
</style>