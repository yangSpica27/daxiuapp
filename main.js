import Vue from 'vue'
import App from './App'
import home from 'pages/home/home.vue'
import mine from 'pages/mine/mine.vue'
import axios from 'axios'
import request from 'common/request.js'
Vue.prototype.$request = request
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false


//我的
Vue.component('mine',mine)
//首页
Vue.component('home',home)


// uView
import uView from 'lib/uview-ui'
Vue.use(uView)


import cuCustom from './lib/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
//挂载
    store
})
app.$mount()
