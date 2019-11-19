// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'
import goBack from '@/components/goBack/index.js'
import '../theme/index.css'
import Element from 'element-ui'
import toast from './utils/toast.js'

Vue.use(toast)
Vue.use(goBack)
Vue.use(Element)
// Vue.prototype.$axios = axios

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
