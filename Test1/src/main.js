import Vue from 'vue'
import App from './App.vue'

// 带入路由
import Router from "vue-router"
import RouterConfig from "./router.config.js"
// 使用路由
Vue.use(Router)
// 关联路由以及路由配置文件
const router = new Router(RouterConfig)

// // 导入ElmentUI
import "element-ui/lib/theme-chalk/index.css"
import "./Element.js"

//1.导入axios
import axios from "axios"
// 2.配置发送请求
// axios.interceptors.request.use()----发送请求
axios.interceptors.request.use(function (config){
  return config
},function (error){
  return Promise.reject(error)
})

// 3.配置请求返回的信息
//axios.interceptors.response.use()---配置请求回来的信息
axios.interceptors.response.use(function (response){
  return response
},function (error){
  return Promise.reject(error)
})

//4.将axios挂载到Vue实例上，因为没有Vue.use()这个方法，一般都是挂载到原型上
Vue.prototype.$http = axios
// 说明后期使用时就可以直接使用$http代替axios对象

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
