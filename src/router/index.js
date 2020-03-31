import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 路由重定向 的两种写法
      path: '/', 
      redirect: '/first',// 重定向  也可以写成  redirect:{name:'first'}
      
    },
    {
      path: '/first',
      name:'first',
      component: () => import(/* webpackChunkName: "about" */ './../components/first.vue'), 
    },
    {
      path: '/nextTick',
      name:'nextTick',
      component: () => import(/* webpackChunkName: "about" */ './../components/nextTick.vue'), 
    }, 
    {
      path: '/vuex',
      name:'vuex',
      component: () => import(/* webpackChunkName: "about" */ './../components/vuex.vue'), 
    }, 
    {
      path: '/attrs',
      name:'attrs',
      component: () => import(/* webpackChunkName: "about" */ './../components/attrs.vue'), 
    }, 
    {
      path: '/props',
      name:'props',
      component: () => import(/* webpackChunkName: "about" */ './../components/props.vue'), 
    }, 
    // 404，匹配所以找不到的页面路由 
    {
      path: '*',
      name:'notFound',
      component: () => import(/* webpackChunkName: "about" */ './../components/notFound.vue'), 
    },    
  ]
})
