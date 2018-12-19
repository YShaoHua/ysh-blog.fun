import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index.vue'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'index',
      component: index
    }
  ]
})
