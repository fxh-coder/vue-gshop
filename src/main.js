import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'

import './mock/mockServer'

import loading from './common/imgs/loading.gif'

import './filters'

// 注册全局组件标签
Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
	loading
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
