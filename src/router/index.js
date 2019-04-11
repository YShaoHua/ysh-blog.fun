import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index.vue'

import blog from '@/views/blog/index.vue'
import learn from '@/views/learn/index.vue'

import beginToContact from '@/views/blog/contentList/2018-01-06/beginToContact.vue' // blog开始
import cssMiddle from '@/views/blog/contentList/2018-01-18/cssAuto.vue' // css居中
import vueCommunication from '@/views/blog/contentList/2018-02-03/vueCommunication.vue' // vue父子组件通信
import vueRouter from '@/views/blog/contentList/2018-02-20/vueRouter.vue' // router
import copy from '@/views/blog/contentList/2018-03-11/copy.vue' // 深浅拷贝
import rearrangement from '@/views/blog/contentList/2018-04-02/rearrangement.vue' // 重排和重绘
import flipAnimation from '@/views/blog/contentList/2018-05-11/flipAnimation.vue' // 翻转动画
import dragAndDrop from '@/views/blog/contentList/2018-06-02/dragAndDrop.vue' // 翻转动画
import todo from '@/views/blog/contentList/2018-06-02/typeTwo.vue' // 翻转动画

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
          component: blog,
        },
        {
          path: '/learn',
          name: 'theLearn',
          component: learn,
        },
        {
          path: '/blog/begin-to-contact',
          name: 'theBeginToContact',
          component: beginToContact,
        },
        {
          path: '/blog/css-middle',
          name: 'cssMiddle',
          component: cssMiddle,
        },
        {
          path: '/blog/vue-communication',
          name: 'vueCommunication',
          component: vueCommunication,
        },
        {
          path: '/blog/vue-router',
          name: 'vueRouter',
          component: vueRouter,
        },
        {
          path: '/blog/copy',
          name: 'copy',
          component: copy,
        }, 
        {
          path: '/blog/rearrangement',
          name: 'rearrangement',
          component: rearrangement,
        }, 
        {
          path: '/blog/flipAnimation',
          name: 'flipAnimation',
          component: flipAnimation,
        },
        {
          path: '/blog/dragAndDrop',
          name: 'dragAndDrop',
          component: dragAndDrop,
        }, 
        {
          path: '/blog/todo',
          name: 'todo',
          component: todo,
        }, 
      ]
    },
  ]
})
