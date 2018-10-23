// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Request from './api'
import { createRouter } from './router'
import { createStore } from "./store"
import api from 'model'
// import { sync } from 'vuex-router-sync'
import utils from './utils/util'
import Meta from 'vue-meta'
import Notification from './components/notification'
import Tabs from './components/tabs'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/base.css'
import '../static/fonts/font.css'

Vue.use(elementUI)
Vue.use(Meta);
Vue.use(Notification)
Vue.use(Tabs)

Vue.prototype.$axios = Request
Vue.prototype.$utils = utils
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
export function creatApp() {
  const router = createRouter();
  const store = createStore();

  // 同步路由状态(route state)到 store
  // sync(router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store }
}
