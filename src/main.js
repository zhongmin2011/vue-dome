// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/reset.css"  
import store from './store/index'
import "@/registerComponents" 
import bindPrototype from '@/prototype.js'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import api from './network/api' 
import './mock';
import './utils/http.js';

// 将api挂载到vue的原型上
Vue.prototype.$api = api;
// Vue.use(axios)
Vue.use(ViewUI);
bindPrototype(Vue)
Vue.config.productionTip = false

// Vue.prototype.$axios = axios
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
