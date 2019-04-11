<template>
  <div class="type-one">
    <div class="wrapper">
      <div id="dragCircle" @mousedown="Drag">拖我</div>  
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    Drag(ev) {
      var dragCircle = document.getElementById('dragCircle');
      ev = ev || window.event; 
      var relaX = ev.clientX - ev.target.offsetLeft;
      var relaY = ev.clientY - ev.target.offsetTop;
      // 获取当前鼠标位置，减去与div的相对位置得到当前div应该被拖拽的位置
      document.onmousemove = (ev)=> {
        ev = ev || window.event;
        dragCircle.style.left = ev.clientX - relaX + 'px';
        dragCircle.style.top = ev.clientY - relaY + 'px';
      };
      document.onmouseup = (ev)=> {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.type-one {
  height: 120px;
}
#dragCircle {
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