import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index.vue'

import blog from '@/views/blog/index.vue'
import learn from '@/views/learn/index.vue'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'theIndex',
      component: index,
      redirect: '/blog',
      children: [
        {
          path: '/blog',
          name: 'theBlog',
          component: blog
        },
        {
          path: '/learn',
          name: 'theLearn',
          component: learn
        }
      ]
    }
  ]
})
