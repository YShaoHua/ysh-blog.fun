<template>
  <div class="blog-box">
    <img :src="img" class="bg-img"/>
    <div class="content">
      <p>整理了一下router的一个简单过程</p>
      <h5>beforeEach -> canReuse -> canDeactivate -> canActivate -> deactivate -> afterEach -> activate</h5>
      <p>其中canDeactivate | canActivate | deactivate | activate这几个钩子涉及组件复用的问题，所以有可能不会被调用，但是当canReuse返回false时，就一定会被调用了</p>
      <p style="color: #999;">注：canDeactivate，deactivate与canActivate，activate分别作用于要销毁和要生成的组件。</p>
      <p style="color: #999;">如：a/b -> a/c，这里b组件要被销毁，c组件要被生成。</p>
      <h3>一、vue-router组成</h3>
      <p>vue-router组件有三个部分:</p>
      <h5>1.link：即v-link</h5>
      <h5>1.view：元素指令，即</h5>
      <h5>1.router：核心部分</h5>
      <h3>二、vue-router简单的一个流程</h3>
      <h5>1.url 变化</h5>
      <h5>2.history监听（onChange事件）</h5>
      <pre>
        <script type="text/html" style="display:block;">
          // hashbang路由模式，如：http://localhost/#!/login
          window.addEventListener('hashchange', () => {})
          // h5 history路由模式，如：http://localhost/login
          window.addEventListener('popstate', () => {})
        </script>
      </pre>
      <h5>3.调用路由匹配（ this._match）</h5>
      <p>会保存老的transition和新的transition</p>
      <h5>4.走一遍beforeEach</h5>
      <h5>走startTransition开始进入transition的撕逼周期（也算是vue-router的核心所在）,这里会涉及组件复用的问题</h5>
      <h5>1). canReuse：调用canReuse钩子</h5>
      <h5>看当前的vue-router和将要跳转的vue-router之间有没有可重用的组件</h5>
      <h5>a/b/c</h5>
      <h5>a/b/d  =>  可复用[a,b]，需要销毁[c]，需要生成[d]</h5>
      <h5>2). canDeactivate(c)：调用canDeactivate钩子</h5>
      <pre>
        <script type="text/html" style="display:block;">
          route: {
            canDeactivate() {}
          }
        </script>
      </pre>
      <h5>3). canActivate(d)：调用canActivate钩子</h5>
      <h5>4). deactivate(c)：调用deactivate钩子</h5>
      <h5>5). _afterEachHooks(c)：调用afterEach钩子</h5>
      <h5>6). reuse([a,b])：调用data钩子</h5>
      <h6>7). activate(d) ：调用activate | data钩子</h6>
      <h5>6.若activate(d)，则调用vue中的build方法，新生成component</h5>
      <h3>三、两个应用场景</h3>
      <h4>1.组件复用(a/b/:id)</h4>
      <p>这次遇到了类似(a/b/:id)这样的路由，这种路由一直都只是（:id）在变化，一直是被复用的。所以不会走</p>
      <p>canDeactive， canActivate，deactivate，activate，只会调用router.beforeEach，canReuse，router.a, fterEach和this.data当然没有被transition.abort()的前提下。</p>
      <pre>
        <script type="text/html" style="display:block;">
          new VueRouter().beforeEach(function (transition) {
            if (transition.to.path === '/forbidden') {
              transition.abort()
            } else {
              transition.next()
            }
          })
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          new VueRouter().afterEach(function (transition) {
            console.log('成功浏览到: ' + transition.to.path)
          })
        </script>
      </pre>
      <pre>
        <script type="text/html" style="display:block;">
          route: {
            canReuse() {
              return true
            },
            data() {
                // TODO 没有被transition.abort()的时候，会被调用
            }
          }
        </script>
      </pre>
      <h4>2.路由切换</h4>
      <p>有一种场景是组件a切换到组件b时，想要先停留在a，等b获取了数据才进行切换，想做到这个可以使用waitForData，在b组件作如下操作：</p>
      <pre>
        <script type="text/html" style="display:block;">
          route: {
            data() {
                // TODO 数据请求加载
            },
            waitForData: true  //数据加载完在切换
          }
        </script>
      </pre>
      <go-Back></go-Back>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/images/img/bg4.jpeg")
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
</style>