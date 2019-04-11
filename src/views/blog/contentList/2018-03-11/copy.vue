<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <p>谈谈自己学到的深浅拷贝！！！</p>
      <h4>常见拷贝方式</h4>
      <h5>Object.assign()</h5>
      <h5>合并对象，浅拷贝</h5>
      <h5>lodash —— _.clone() / _.cloneDeep()</h5>
      <h5>浅拷贝／深拷贝[遍历浅拷贝]</h5>
      <h5>JSON.parse(JSON.stringify(sourceObject))</h5>
      <h5>常规json的深拷贝取巧方法，贼6</h5>
      <h4>栗子来了</h4>
      <h5>引个lodash.min.js</h5>
      <pre>
        <script type="text/html" style="display:block;">
          console.group('copy obj test')
          let obj = {
            a: {
              x: 1
            },
            b: 2
          }
          // Object.assign()
          console.time('assign')
          let assign = Object.assign({}, obj)
          console.timeEnd('assign')
          console.info('assign.a === obj.a->', assign.a === obj.a) // true
          // lodash —— _.clone() / _.cloneDeep()
          console.time('clone')
          let clone = _.clone(obj)
          console.timeEnd('clone')
          console.info('clone.a === obj.a->', clone.a === obj.a) // true
          console.time('cloneDeep')
          let cloneDeep = _.cloneDeep(obj)
          console.timeEnd('cloneDeep')
          console.warn('cloneDeep.a === obj.a->', cloneDeep.a === obj.a) // false
          // 借助 JSON 全局对象
          console.time('json')
          let json = JSON.parse(JSON.stringify(obj))
          console.timeEnd('json')
          console.warn('json.a === obj.a->', json.a === obj.a) // false
          console.groupEnd()
          // 浅拷贝互相伤害，深拷贝独善其身
          console.group('test')
          console.info('初始obj->' + JSON.stringify(obj))
          assign.a.x = 4
          assign.b = 4
          console.info('浅拷贝赋值assign.a.x=4 assign.b=4')
          console.warn('结果obj.a.x->' + obj.a.x, 'obj.b->' + obj.b)
          json.a.x = 5
          json.b = 5
          console.info('深拷贝赋值json.a.x=5 json.b=5')
          console.warn('结果obj.a.x->' + obj.a.x, 'obj.b->' + obj.b)
          console.groupEnd()
        </script>
      </pre>
      <p>看看控制台出来啥</p>
      <img src="./copyobjtest.png" alt="">
      <p>执行效率排行榜，按需使用，常用就是1&2</p>
      <h5>1. Object.assign()</h5>
      <h5>2. JSON.parse(JSON.stringify())</h5>
      <h5>3. _.clone()</h5>
      <h5>4. _.cloneDeep()</h5>
      <p>使用场景：也不是处处需要深拷贝，想明白拷贝出来是为了达到什么目的，关注效率</p>
      <h4>不管深浅拷贝，先判断下是否空对象吧</h4>
      <pre>
        <script type="text/html" style="display:block;">
          // 判断是否空对象
          let obj = {
            a: {
              x: 1
            },
            b: 2
          }
          console.group('isEmptyObj')
          console.time('Object.keys()')
          console.info(!Object.keys(obj).length)
          console.timeEnd('Object.keys()')
          console.time('json')
          console.info(JSON.stringify(obj) === '{}')
          console.timeEnd('json')
          console.groupEnd()
        </script>
      </pre>
      <p>看看控制台出来啥，其实效率也差不多吧。。。</p>
      <img src="./isEmptyObj.png" alt="">
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/bg5.jpeg'),
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