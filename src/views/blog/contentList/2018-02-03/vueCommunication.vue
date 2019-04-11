<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <p>因为vue2中取消了$dispatch() 派发事件和 $broadcast() 广播事件</p>
      <p>仅剩下两个事件</p>
      <h5>$on(eventName) 监听事件</h5>
      <h5>$emit(eventName) 触发事件</h5>
      <h3>一、父组件触发子组件内部事件</h3>
      <h4>第一种</h4>
      <p>父组件触发 parentMsg 事件</p>
      <pre>
        <script type="text/html" style="display:block;">
          this.$emit('parentMsg', '快去打酱油')
        </script>
      </pre>
      <p>子组件中通过this.$parent.$on来监听父组件触发的事件，同时获取父组件中传过来的值</p>
      <pre>
        <script type="text/html" style="display:block;">
          this.$parent.$on('parentMsg', (res) => {
              // res为'快去打酱油'
          })
        </script>
      </pre>
      <h3>二、子组件触发父组件内部事件</h3>
      <h4>第一种</h4>
      <p>子组件中触发</p>
      <pre>
        <script type="text/html" style="display:block;">
          this.$parent.fight('起的隆冬强')
        </script>
      </pre>
      <p>父组件中</p>
      <pre>
        <script type="text/html" style="display:block;">
          methods: {
            fight (res) {
              // res为'起的隆冬强'
            }
          }
        </script>
      </pre>
      <h3>第二种，跟vue1.x中使用的方式一样</h3>
      <p>通过在子组件标签属性上加上v-on来监听子组件</p>
      <p>首先子组件中通过$emit来触发child-msg事件</p>
      <pre>
        <script type="text/html" style="display:block;">
          this.$emit('child-msg', '大河向东流')
        </script>
      </pre>
      <p>当子组件触发了child-msg事件，父组件监听到子组件触发了child-msg，就会触发父组件handleIt事件</p>
      <p>父组件中</p>
      <pre>
        <script type="text/html" style="display:block;">
          <child v-on:child-msg="handleIt"></child>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          methods: {
            handleIt (res) {}
          }
        </script>
      </pre>
      <h3>三、prop</h3>
      <p>引用一下vue官网对props的介绍</p>
      <p>prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
        另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。通常有两种改变 prop 的情况：
      </p>
      <h5>1.prop 作为初始值传入，子组件之后只是将它的初始值作为本地数据的初始值使用；</h5>
      <h5>2.prop 作为需要被转变的原始值传入。</h5>
      <p>意思是我们不能在子组件中直接对prop的值进行修改，需要用data或computed换个马甲，如果直接修改prop的值，vue会报错。</p>
      <p>前提是这个prop的值不是对象或者数组，因为对象或者数组是引用类型，即使用data或computed换个马甲，在子组件中修改马甲的值，父组件中的值也会跟着修改，虽然vue不会报错，但是也会让应用数据流难以理解。所以最好不要在子组件中对对象或者数组类型的prop进行修改。</p>
      <h4>1.data</h4>
      <pre>
        <script type="text/html" style="display:block;">
          props: ['oldData'], // 非对象或数组类型
          data () {
            return { newData: this.oldData }
          }
        </script>
      </pre>
      <p>不能直接对oldData进行修改，可以对newData进行修改</p>
      <h4>2.computed</h4>
      <pre>
        <script type="text/html" style="display:block;">
          props: ['oldData'], // 非对象或数组类型
          computed: {
            newData () {
              return this.oldData.trim().toLowerCase()
            }
          }
        </script>
      </pre>
      <p>不能直接对oldData进行修改，可以使用computed对oldDate进行改造</p>
      <p>另外，子组件也可以直接修改父组件中data的值，但是并不推荐这种方式，同样也会导致数据流难以理解假设父组件有</p>
      <pre>
        <script type="text/html" style="display:block;">
          data () {
            return {
              isShow: true
            }
          }
        </script>
      </pre>
      <p>子组件直接修改父组件中isShow的值</p>
      <pre>
        <script type="text/html" style="display:block;">
          this.$parent.isShow = false
        </script>
      </pre>
      <h3>四、v-model</h3>
      <p>v-model是vue中表单元素进行双向绑定时使用的</p>
      <p>在vue2中取消了props的.sync双向绑定，但是可以直接在子组件上使用v-model，比如：</p>
      <p>父组件中</p>
      <pre>
        <script type="text/html" style="display:block;">
          <child v-model="msg"></child>
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          data () {
            return {
              msg: ''
            }
          }
        </script>
      </pre>
      <p>子组件child中</p>
      <pre>
        <script type="text/html" style="display:block;">	
          this.$emit('input', 123)
        </script>
      </pre>
      <p>当子组件执行this.$emit('input', 123)，就可以将123传给父组件的msg</p>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/images/img/bg3.jpeg'),
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