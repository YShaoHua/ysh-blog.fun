<template>
  <div class="wrapper2">
    <div id="dragCircle2">拖我</div>  
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    var dragCircle = document.getElementById('dragCircle2');
    var wrapper = document.querySelector(".wrapper2")
    var range = {
      left    : this.posLeft(wrapper),  
      right   : this.posLeft(wrapper) + wrapper.offsetWidth - dragCircle.offsetWidth,
      top     : this.posTop(wrapper),
      bottom  : this.posTop(wrapper) + wrapper.offsetHeight - dragCircle.offsetHeight
    };
    // 获取鼠标点击时在div中的相对位置
    dragCircle.onmousedown = function(ev) {
      var ev = ev || window.event; 
      var relaX = ev.clientX - this.offsetLeft;
      var relaY = ev.clientY - this.offsetTop;
      // 获取当前鼠标位置，减去与div的相对位置得到当前div应该被拖拽的位置
      document.onmousemove = function(ev) {
        var ev = ev || window.event;
        // return;
        if(ev.clientX - relaX < 0) {
          dragCircle.style.left = 0 + 'px'
        } else if (ev.clientX - relaX > range.right - range.left) {
          dragCircle.style.left = range.right - range.left + 'px'
        } else {
          dragCircle.style.left = ev.clientX - relaX + 'px'
        }
        if(ev.clientY - relaY < 0) {
          dragCircle.style.top = 0 + 'px'
        } else if (ev.clientY - relaY > range.bottom - range.top) {
          dragCircle.style.top = range.bottom - range.top + 'px'
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
  },
  methods: {
    /* 获取绝对位置 */
    posLeft(obj){
      var iLeft = 0;
      while(obj){
        iLeft += obj.offsetLeft;
        obj = obj.offsetParent;
        if(obj && obj!=document.body && obj!=document.documentElement){
          iLeft += this.getStyle(obj, 'borderLeftWidth');
        }
      }
      return iLeft;
    },
    posTop(obj){
      var iTop = 0;
      while(obj){
        iTop += obj.offsetTop;
        obj = obj.offsetParent;
        if(obj && obj!=document.body && obj!=document.documentElement){
          iTop += this.getStyle(obj, 'borderTopWidth');
        }
      }
      return iTop;
    },
    getStyle(obj,attr){
      if(obj.currentStyle){
        return parseFloat( obj.currentStyle[attr]) || 0;
      }
      return parseFloat( getComputedStyle(obj)[attr]) || 0;
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper2 {
  border: 1px solid #000;
  width: 240px;
  height: 240px;
  margin: 50px;
  position: relative;
}
#dragCircle2 {
  width: 100px;
  height: 100px; 
  border-radius: 50%;
  background: #bcbcbc;
  position: absolute;
  text-align: center; 
  line-height: 100px;
  cursor: pointer;
}
</style>