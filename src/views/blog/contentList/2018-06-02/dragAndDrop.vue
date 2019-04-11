<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <h3>简单拖动</h3>
      <p>主要分为三个步骤：</p>
      <h5>1.鼠标按下，获取鼠标点击时在div中的相对位置。</h5>
      <h5>2.鼠标移动，元素的位置 = 就是鼠标的位置 - 刚才的差值。</h5>
      <h5>3.鼠标放开，给鼠标移动和鼠标放开赋值null，除非再次点击，否则不会有任何移动效果。</h5>
      <pre>
        <script type="text/html" style="display:block;">
          dragCircle.onmousedown = function(){
            ...//鼠标按下
          };
          dragCircle.onmouseup = function(){
            ...//鼠标抬起
          };
          dragCircle.onmousemove = function(){
            ...//鼠标移动
          };
        </script>
      </pre>
      <div class="code-module">
        <ul>
          <li @click="codeType1 = 1" :style="chooseCodeType(codeType1, 1)">HTML</li>
          <li @click="codeType1 = 2" :style="chooseCodeType(codeType1, 2)">CSS</li>
          <li @click="codeType1 = 3" :style="chooseCodeType(codeType1, 3)">JS</li>
        </ul>
        <pre v-if="codeType1 == 1">
          <script type="text/html" style="display:block;">
            <div class="wrapper">
              <div id="dragCircle">拖我</div>  
            </div>
          </script>
        </pre>
        <pre v-if="codeType1 == 2">
          <script type="text/html" style="display:block;">
            #dragCircle {
              width: 100px;
              height: 100px; 
              border-radius: 50%;
              background: #bcbcbc;
              position: absolute;
              text-align: center; 
              line-height: 100px;
            }
          </script>
        </pre>
        <pre v-if="codeType1 == 3">
          <script type="text/html" style="display:block;">
            window.onload = function() {
              var dragCircle = document.getElementById('dragCircle');
              // 获取鼠标点击时在div中的相对位置
              dragCircle.onmousedown = function(ev) {
                var ev = ev || window.event; 

                var relaX = ev.clientX - this.offsetLeft;
                var relaY = ev.clientY - this.offsetTop;

                // 获取当前鼠标位置，减去与div的相对位置得到当前div应该被拖拽的位置
                document.onmousemove = function(ev) {
                  var ev = ev || window.event;
                  dragCircle.style.left = ev.clientX - relaX + 'px';
                  dragCircle.style.top = ev.clientY - relaY + 'px';
                };
                document.onmouseup = function(ev) {
                  var ev = ev || window.event;
                  document.onmousemove = null;
                  document.onmouseup = null;
                }
              }
            }
          </script>
        </pre>
      </div>
      <type-one></type-one>
      <p>其实这里会存在一个问题，当你大力超距离拖往窗口外部的时候，咱们的元素仿佛飞到了外太空。。没了！所以，这里要加上一个范围限制。</p>
      <h3>拖拽范围限制</h3>
      <p>实现思路：</p>
      <h5>1.设置一个统一管理left,right,top,bottom范围的变量range</h5>
      <h5>2.根据范围元素的位置，计算range各项值</h5>
      <h5>3.当移动元素left和top超出range范围限制的时候，设置为range对应的阈值</h5>
      <div class="code-module">
        <ul>
          <li @click="codeType2 = 1" :style="chooseCodeType(codeType2, 1)">HTML</li>
          <li @click="codeType2 = 2" :style="chooseCodeType(codeType2, 2)">CSS</li>
          <li @click="codeType2 = 3" :style="chooseCodeType(codeType2, 3)">JS</li>
        </ul>
        <pre v-show="codeType2 == 1">
          <script type="text/html" style="display:block;">
            <div class="wrapper">
              <div id="dragCircle">拖我</div>  
            </div>
          </script>
        </pre>
        <pre v-show="codeType2 == 2">
          <script type="text/html" style="display:block;">
            .wrapper {
              border: 1px solid red;
              width: 240px;
              height: 240px;
              margin: 50px;
            }
            #dragCircle {
              width: 100px;
              height: 100px; 
              border-radius: 50%;
              background: #bcbcbc;
              position: absolute;
              text-align: center; 
              line-height: 100px;
            }
          </script>
        </pre>
        <pre v-show="codeType2 == 3">
          <script type="text/html" style="display:block;">
            /* 获取绝对位置 */
            function posLeft(obj){
              var iLeft = 0;
              while(obj){
                iLeft += obj.offsetLeft;
                obj = obj.offsetParent;
                if(obj && obj!=document.body && obj!=document.documentElement){
                  iLeft += getStyle(obj, 'borderLeftWidth');
                }
              }
              return iLeft;
            }
            function posTop(obj){
              var iTop = 0;
              while(obj){
                iTop += obj.offsetTop;
                obj = obj.offsetParent;
                if(obj && obj!=document.body && obj!=document.documentElement){
                  iTop += getStyle(obj, 'borderTopWidth');
                }
              }
              return iTop;
            }
            function getStyle(obj,attr){
              if(obj.currentStyle){
                return parseFloat( obj.currentStyle[attr]) || 0;
              }
              return parseFloat( getComputedStyle(obj)[attr]) || 0;
            }
            window.onload = function() {
              var dragCircle = document.getElementById('dragCircle');
              var wrapper = document.querySelector(".wrapper")
              var range = {
                left    : posLeft(wrapper),  
                right   : posLeft(wrapper) + wrapper.offsetWidth - dragCircle.offsetWidth,
                top     : posTop(wrapper),
                bottom  : posTop(wrapper) + wrapper.offsetHeight - dragCircle.offsetHeight
              };
              // 获取鼠标点击时在div中的相对位置
              dragCircle.onmousedown = function(ev) {
                var ev = ev || window.event; 
                var relaX = ev.clientX - this.offsetLeft;
                var relaY = ev.clientY - this.offsetTop;

                // 获取当前鼠标位置，减去与div的相对位置得到当前div应该被拖拽的位置
                document.onmousemove = function(ev) {
                  var ev = ev || window.event;
                  if(ev.clientX - relaX < range.left) {
                    dragCircle.style.left = range.left + 'px'
                  } else if (ev.clientX - relaX > range.right) {
                    dragCircle.style.left = range.right + 'px'
                  } else {
                    dragCircle.style.left = ev.clientX - relaX + 'px'
                  }
                  if(ev.clientY - relaY < range.top) {
                    dragCircle.style.top = range.top + 'px'
                  } else if (ev.clientY - relaY > range.bottom) {
                    dragCircle.style.top = range.bottom + 'px'
                  } else {
                    dragCircle.style.top = ev.clientY - relaY + 'px'
                  }
                };
                document.onmouseup = function(ev) {
                  var ev = ev || window.event;
                  document.onmousemove = null;
                  document.onmouseup = null;
                }
              }
            }
          </script>
        </pre>
      </div>
      <type-two></type-two>
      <h3>磁性吸入效果</h3>
      <p>在用户进行拖拽标签或者模块的时候，进行合理的摆放位置引导可以极大增强用户体验。</p>
      <p>这里的代码思路相对简单，判断需要引导的位置，位置参数存入一个变量对象，然后计算拖拽元素的和引导位置的距离，小于某个阈值可以直接定位。</p>
      <div class="code-module">
        <ul>
          <li @click="codeType3 = 1" :style="chooseCodeType(codeType3, 1)">HTML</li>
          <li @click="codeType3 = 2" :style="chooseCodeType(codeType3, 2)">CSS</li>
          <li @click="codeType3 = 3" :style="chooseCodeType(codeType3, 3)">JS</li>
        </ul>
        <pre v-if="codeType3 == 1">
          <script type="text/html" style="display:block;">
            <div id="divBox">
                  吸你
            </div>
            <div id="dragCircle">拖我</div>
          </script>
        </pre>
        <pre v-if="codeType3 == 2">
          <script type="text/html" style="display:block;">
            *{
              margin: 0;
              padding: 0;
            }
            #divBox {
              margin: 100px 200px;
              width: 90px;
              height: 90px;
              border: 5px dashed #ddd;
              border-radius: 50%;
              background: #f3f3f3;
              margin-right: 100px;
              text-align:center;
              line-height: 90px;
            }
            #dragCircle {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background: #e0543e;
              position: absolute;
              left: 0;
              top: 0;
              text-align:center;
              line-height: 100px;
            }
          </script>
        </pre>
        <pre v-if="codeType3 == 3">
          <script type="text/html" style="display:block;">
            var oBox = document.getElementById('divBox');
            var dragCircle = document.getElementById('dragCircle');
            var boxWrap = { // 吸入位置
              obj : oBox,
              top : oBox.offsetTop,
              right : oBox.offsetLeft + oBox.offsetWidth,
              bottom : oBox.offsetTop + oBox.offsetHeight,
              left : oBox.offsetLeft
            };
            drag(oDiv,boxWrap);

            function drag(obj, range) {
              var n = 30; // 吸附阀值
              dragCircle.onmousedown = function(ev) {
                var ev = ev || event;
                var disX = ev.clientX - this.offsetLeft;
                var disY = ev.clientY - this.offsetTop;
                if (dragCircle.setCapture) {dragCircle.setCapture();}
                document.onmousemove = function(ev) {
                  var ev = ev || event;
                  var L = ev.clientX - disX;
                  var T = ev.clientY - disY;
                  var R = L + dragCircle.offsetWidth;
                  var B = T + dragCircle.offsetHeight;

                  // 若div与box范围有交集，即将其吸入
                  if ( R > boxWrap.left && B > boxWrap.top && T < boxWrap.bottom && L < boxWrap.right ) {
                    L = boxWrap.left;
                    T = boxWrap.top;
                  }

                  dragCircle.style.left = L + 'px';
                  dragCircle.style.top = T + 'px';
                };
                document.onmouseup = function() {
                    document.onmousemove = null;
                };
                return false;
              };
            }
          </script>
        </pre>
      </div>
      <type-tree></type-tree>
      <h3>列表拖拽排序</h3>
      <p>列表拖拽排序应该是项目中最常用的拖拽使用场景了，直观便捷是其一大亮点。</p>
      <p>实现思路：</p>
      <h5>1.列表元素每个都绑定拖拽事件</h5>
      <h5>2.鼠标按下的时候，创建一个空白节点，在原节点位置上占位</h5>
      <h5>3.原节点绑定拖拽样式（absolute等）</h5>
      <h5>4.文档绑定鼠标移动事件，根据当前拖拽到的位置计算其重新排序后的位置</h5>
      <h5>5.将空白节点插入到该位置</h5>
      <h5>6.鼠标放开的时候，将被拖拽的元素插入到空白节点的位置</h5>
      <h5>7.删除空白节点</h5>
      <h5>8.移除事件绑定，清除相关</h5>
      <div class="code-module">
        <ul>
          <li @click="codeType4 = 1" :style="chooseCodeType(codeType4, 1)">HTML</li>
          <li @click="codeType4 = 2" :style="chooseCodeType(codeType4, 2)">CSS</li>
          <li @click="codeType4 = 3" :style="chooseCodeType(codeType4, 3)">JS</li>
        </ul>
        <pre v-if="codeType4 == 1">
          <script type="text/html" style="display:block;">
            <ul id="list">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </script>
        </pre>
        <pre v-if="codeType4 == 2">
          <script type="text/html" style="display:block;">
            * {
              margin: 0;
              padding: 0;
            }
            #list {
              width: 200px;
              margin: 0 auto;
              padding-top: 20px;
              position: relative;
            }
            #list li {
              background: #03a9f4;
              color: #FFF; font-size: 16px;
              line-height: 40px;
              height: 40px;
              width: 200px;
              text-align: center;
              border: 2px solid #fff;
              border-radius: 4px;
              cursor: move;
              list-style: none;
              z-index: 0;
              transition: all .1s ease-in-put;
            }
          </script>
        </pre>
        <pre v-if="codeType4 == 3">
          <script type="text/html" style="display:block;">
            var ul = document.getElementById('list');
            var li = ul.getElementsByTagName('li');
            var liFirst = li[0].offsetTop; // 第一个li位置
            var liHeight = li[0].offsetHeight; // 纵向排序, 获取li的高度
            // 对每个元素绑定拖拽事件
            for(var i=0; i < li.length; i++){ drag(li[i]); }
            function drag(obj) {
              obj.onmousedown = function(ev) {
                var ev = ev || event;
                // 创建空白节点，插入原节点位置占位
                var blank = document.createElement('li');
                ul.insertBefore(blank,obj.nextSibling);
                blank.style.visibility = 'hidden';
                // 原节点绑定拖拽样式（absolute等）
                obj.style.left = obj.offsetLeft + 'px';
                obj.style.top = obj.offsetTop + 'px';
                obj.style.position = "absolute";
                obj.style.zIndex = '1000';
                obj.style.background = '#c1edde';
                obj.style.border = '2px dashed #bcbcbc';

                var disX = ev.clientX - obj.offsetLeft;
                var disY = ev.clientY - obj.offsetTop;

                document.onmousemove = function(ev) {
                  var ev = ev || event;
                  var L = ev.clientX - disX;
                  var T = ev.clientY - disY;

                  // 根据当前拖拽到的位置计算其重新排序后的位置
                  var n = Math.round((T-liFirst)/liHeight + 1);
                  // 将空白节点插入到该位置
                  ul.insertBefore(blank,ul.children[n]);

                  obj.style.left = L + 'px';
                  obj.style.top = T + 'px';
                };
                document.onmouseup = function() {

                  // 将被拖拽的元素插入到空白节点的位置
                  ul.insertBefore(obj,blank);
                  // 删除拖拽样式
                  obj.removeAttribute('style');
                  // 删除空白节点
                  ul.removeChild(blank);

                  document.onmousemove = null;
                };
                return false;
              };
            }
          </script>
        </pre>
      </div>
      <type-four></type-four>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
import typeOne from './typeOne.vue'
import typeTwo from './typeTwo.vue'
import typeTree from './typeTree.vue'
import typeFour from './typeFour.vue'
export default {
  components: {
    typeOne,
    typeTwo,
    typeTree,
    typeFour,
  },
  data () {
    return {
      img: require('@/assets/images/img/bg8.jpeg'),
      codeType1: 1,
      codeType2: 1,
      codeType3: 1,
      codeType4: 1,
    }
  },
  created () {
  },
  methods: {
    /**
     * 选择代码类型
     * @param {Number} type 当前类型
     * @param {Number} val 类型
     */
    chooseCodeType(type, val) {
      if(type == val) {
        return 'color: #f8f8f8; background: #cccccc;'
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.code-module {
  ul {
    display: flex;
    margin-left: 10px;
    li {
      cursor: pointer;
      // border: 1px solid red;
      // border-radius: 5px;
      width: 60px;
      height: 30px;
      text-align center;
      background: #eeeeee;
      margin: 0 1px;
    }
  }
}
</style>