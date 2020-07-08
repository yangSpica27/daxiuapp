import Vue from 'vue'
import App from './App'
import home from 'pages/home/home.vue'
import mine from 'pages/mine/mine.vue'


//我的
Vue.component('mine',mine)

//首页
Vue.component('home',home)


// uView
import uView from 'lib/uview-ui'
Vue.use(uView)


import cuCustom from './lib/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
