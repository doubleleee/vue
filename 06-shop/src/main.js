import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

Vue.prototype.$http = axios
// 配置请求的根路径
// fixme  接口地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')