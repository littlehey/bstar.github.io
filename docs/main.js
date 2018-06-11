import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import bsvue from '../src/index'
import axios from 'axios'
import './assets/iconfont/iconfont.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import './assets/bootstrap.table.css'
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(bsvue)
Vue.prototype.$http = axios

import Prismjs from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import router from './router'

import app from './App.vue'
router.afterEach(route => {
  Vue.nextTick(Prismjs.highlightAll)
})
new Vue({
  router,
  ...app
}).$mount('#app')
