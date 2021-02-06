import Vue from 'vue'
import App from './App.vue'
// 全局安装 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})