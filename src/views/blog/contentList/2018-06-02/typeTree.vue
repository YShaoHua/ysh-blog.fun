<template>
  <div class="type-tree">
    <div id="divBox">
      吸你
    </div>
    <div id="dragCircle3">拖我</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    var oBox = document.getElementById('divBox');
    var dragCircle = document.getElementById('dragCircle3');
    var boxWrap = { // 吸入位置
        obj : oBox,
        top : oBox.offsetTop,
        right : oBox.offsetLeft + oBox.offsetWidth,
        bottom : oBox.offsetTop + oBox.offsetHeight,
        left : oBox.offsetLeft
    };
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
    // this.drag(oDiv,boxWrap);
  },
  methods: {
    drag(obj, range) {
    }
  }
}
</script>

<style lang="stylus" scoped>
.type-tree{
  position relative
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
#dragCircle3 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e0543e;
  position: absolute;
  left: 0;
  top: 0;
  text-align:center;
  line-height: 100px;
  cursor: pointer;
}
</style>