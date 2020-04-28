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
    {
      path: '/anti-shake',
      name:'anti-shake',
      component: () => import(/* webpackChunkName: "about" */ './../components/anti-shake.vue'), 
    }, 
    {
      path: '/dict',
      name:'dict',
      component: () => import(/* webpackChunkName: "about" */ './../components/dict.vue'), 
    }, // 
    {
      path: '/table',
      name:'table',
      component: () => import(/* webpackChunkName: "about" */ './../components/table.vue'), 
    }, 
    {
      path: '/local',
      name:'local',
      component: () => import(/* webpackChunkName: "about" */ './../components/local.vue'), 
    }, 
    {
      path: '/directives',
      name:'directives',
      component: () => import(/* webpackChunkName: "about" */ './../components/directives.vue'), 
    }, 
    {
      path: '/watch',
      name:'watch',
      component: () => import(/* webpackChunkName: "about" */ './../components/watch.vue'), 
    }, 
    {
      path: '/modifier',
      name:'modifier',
      component: () => import(/* webpackChunkName: "about" */ './../components/modifier.vue'), 
    }, 
    {
      path: '/scrollTop',
      name:'scrollTop',
      component: () => import(/* webpackChunkName: "about" */ './../components/scrollTop.vue'), 
    },
    {
      path: '/vue-todo',
      name:'vue-todo',
      component: () => import(/* webpackChunkName: "about" */ './../components/vue-todo.vue'), 
    },
    {
      path: '/new-set',
      name:'new-set',
      component: () => import(/* webpackChunkName: "about" */ './../components/new-set.vue'), 
    },
    {
      path: '/two-screen',
      name:'two-screen',
      component: () => import(/* webpackChunkName: "about" */ './../components/two-screen.vue'), 
    },
    {
      path: '/colorRed',
      name:'colorRed',
      component: () => import(/* webpackChunkName: "about" */ './../components/colorRed.vue'), 
    },
    {
      path: '/downloadFile',
      name:'downloadFile',
      component: () => import(/* webpackChunkName: "about" */ './../components/downloadFile.vue'), 
    },
    {
      path: '/vModel',
      name:'vModel',
      component: () => import(/* webpackChunkName: "about" */ './../components/vModel.vue'), 
    },
    {
      path: '/getRessoure',
      name:'getRessoure',
      component: () => import(/* webpackChunkName: "about" */ './../components/getRessoure.vue'), 
    },
    // 404，匹配所以找不到的页面路由  
    {
      path: '*',
      name:'notFound',
      component: () => import(/* webpackChunkName: "about" */ './../components/notFound.vue'), 
    },    
  ]
})
