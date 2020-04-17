import Vue from 'vue'
import App from './App.vue'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App,
    store
})
app.$mount()
