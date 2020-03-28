// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/reset.css"  
import store from './store'

import "@/registerComponents" 
import bindPrototype from '@/prototype.js'

bindPrototype(Vue)
Vue.config.productionTip = false


Vue.filter('allFilter',function(msg,value1,value2){
  return msg.replace(/单纯/g, value1+value2 )
})

Vue.filter('allFilter2',function(msg,value1){
  return value1+ '!!!'
})

Vue.prototype.bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
 })
