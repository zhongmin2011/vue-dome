import Vue from 'vue'
import Router from 'vue-router'
// import PUBLIC from './modules/public'
// import USER from './modules/user'
Vue.use(Router)

const router = new Router({
  routes: [
    { // 路由重定向 的两种写法
      path: '/',
      redirect: '/login',// 重定向  也可以写成  redirect:{name:'first'}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './../components/login.vue'),
    },
    {
      path: '/first',
      name: 'first',
      component: () => import(/* webpackChunkName: "about" */ './../components/first.vue'),
    },
    {
      path: '/nextTick',
      name: 'nextTick',
      component: resolve => require(['./../components/nextTick.vue'], resolve)
      // component: () => import(/* webpackChunkName: "about" */ './../components/nextTick.vue'), 
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import(/* webpackChunkName: "about" */ './../components/vuex.vue'),
    },
    {
      path: '/vuexChild',
      name: 'vuexChild',
      component: () => import(/* webpackChunkName: "about" */ './../component/vuexChild.vue'),
    },
    {
      path: '/attrs',
      name: 'attrs',
      component: () => import(/* webpackChunkName: "about" */ './../components/attrs.vue'),
    },
    {
      path: '/props',
      name: 'props',
      component: () => import(/* webpackChunkName: "about" */ './../components/props.vue'),
    },
    {
      path: '/anti-shake',
      name: 'anti-shake',
      component: () => import(/* webpackChunkName: "about" */ './../components/anti-shake.vue'),
    },
    {
      path: '/dict',
      name: 'dict',
      component: () => import(/* webpackChunkName: "about" */ './../components/dict.vue'),
    }, // 
    {
      path: '/table',
      name: 'table',
      component: () => import(/* webpackChunkName: "about" */ './../components/table.vue'),
    },
    {
      path: '/local',
      name: 'local',
      component: () => import(/* webpackChunkName: "about" */ './../components/local.vue'),
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import(/* webpackChunkName: "about" */ './../components/directives.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import(/* webpackChunkName: "about" */ './../components/watch.vue'),
    },
    {
      path: '/modifier',
      name: 'modifier',
      component: () => import(/* webpackChunkName: "about" */ './../components/modifier.vue'),
    },
    {
      path: '/scrollTop',
      name: 'scrollTop',
      component: () => import(/* webpackChunkName: "about" */ './../components/scrollTop.vue'),
    },
    {
      path: '/vue-todo',
      name: 'vue-todo',
      component: () => import(/* webpackChunkName: "about" */ './../components/vue-todo.vue'),
    },
    {
      path: '/new-set',
      name: 'new-set',
      component: () => import(/* webpackChunkName: "about" */ './../components/new-set.vue'),
    },
    {
      path: '/two-screen',
      name: 'two-screen',
      component: () => import(/* webpackChunkName: "about" */ './../components/two-screen.vue'),
    },
    {
      path: '/colorRed',
      name: 'colorRed',
      component: () => import(/* webpackChunkName: "about" */ './../components/colorRed.vue'),
    },
    {
      path: '/downloadFile',
      name: 'downloadFile',
      component: () => import(/* webpackChunkName: "about" */ './../components/downloadFile.vue'),
    },
    {
      path: '/vModel',
      name: 'vModel',
      component: () => import(/* webpackChunkName: "about" */ './../components/vModel.vue'),
    },
    {
      path: '/getRessoure',
      name: 'getRessoure',
      component: () => import(/* webpackChunkName: "about" */ './../components/getRessoure.vue'),
    },
    {
      path: '/iteration',
      name: 'iteration',
      component: () => import(/* webpackChunkName: "about" */ './../components/iteration.vue'),
    },
    {
      path: '/copy',
      name: 'copy',
      component: () => import(/* webpackChunkName: "about" */ './../components/copy.vue'),
    },
    {
      path: '/listTodo',
      name: 'listTodo',
      component: () => import(/* webpackChunkName: "about" */ './../components/listTodo.vue'),
    },
    {
      path: '/promise',
      name: 'promise',
      component: () => import(/* webpackChunkName: "about" */ './../components/promise.vue'),
    },
    {
      path: '/mock',
      name: 'mock',
      component: () => import(/* webpackChunkName: "about" */ './../components/mock.vue'),
    },
    { // 各种基础组件的书写
      path: '/basic',
      name: 'basic',
      component: () => import(/* webpackChunkName: "about" */ './../components/base-page.vue'),
    },
    { // 跨域组件的书写
      path: '/crossDomain',
      name: 'crossDomain',
      component: () => import(/* webpackChunkName: "about" */ './../components/crossDomain.vue'),
    },
    { // 跨域组件的书写
      path: '/axios',
      name: 'axios',
      component: () => import(/* webpackChunkName: "about" */ './../components/axios.vue'),
    },
    { // 按需引入UI组件 
      path: '/uiLoad',
      name: 'uiLoad',
      component: () => import(/* webpackChunkName: "about" */ './../components/uiLoad.vue'),
    },
    { // 优雅的只在当前页面中覆盖ui库中组件的样式
      path: '/uiChange',
      name: 'uiChange',
      component: () => import(/* webpackChunkName: "about" */ './../components/uiChange.vue'),
    },
    { // 组件容器化改造
      path: '/contain/:name',
      name: 'contain',
      component: () => import(/* webpackChunkName: "about" */ './../components/contain.vue')
    },
    {
      path: '/route',
      name: 'route',
      component: () => import(/* webpackChunkName: "about" */ './../components/route.vue'),
      children: [
        {
          path: '/route/routeOne/:name',
          name: 'routeOne',
          component: () => import(/* webpackChunkName: "about" */ './../components/routeOne.vue')
        },
        // 做路由嵌套
        {
          path: '/route/routeTwo',
          name: 'routeTwo',
          component: () => import(/* webpackChunkName: "about" */ './../components/routeTwo.vue')
        },
        {
          path: '/route/routeThree',
          name: 'routeThree',
          component: () => import(/* webpackChunkName: "about" */ './../components/routeThree.vue')
        },
        {
          path: '/route/routeFor',
          name: 'routeFor',
          component: () => import(/* webpackChunkName: "about" */ './../components/routeFor.vue')
        },
        {
          path: '/route/routeFive',
          name: 'routeFive',
          component: () => import(/* webpackChunkName: "about" */ './../components/routeFive.vue')
        },
        {
          path: '/route/routeSix/:id',
          name: 'routeSix',
          component: () => import(/* webpackChunkName: "about" */ './../components/routeSix.vue')
        },
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ './../components/detail/index.vue')
    },
    {
      path: '/detail/:id',
      name: 'detailId',
      component: () => import(/* webpackChunkName: "about" */ `./../components/detail/id.vue`)
    },
    // 404，匹配所以找不到的页面路由  
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "about" */ './../components/notFound.vue'),
    },
    {
      path: '/meta',
      name: 'meta',
      component: () => import(/* webpackChunkName: "about" */ './../components/meta.vue'),
      meta: {
        breadName: ['首页', '面包屑1', '面包屑2'],
        title: '首页',
        noLogin: true
      }
    },
    {
      path: '/downAddUp',
      name: 'downAddUp',
      component: () => import(/* webpackChunkName: "about" */ './../components/downAddUp.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/meta') {
    console.log(to)
    if (to.meta.noLogin == true) {
      console.log('router')
      next()
    } else {
      next('/first')
    }
  } else {
    next()
  }
})

export default router

