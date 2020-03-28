import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/first'
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
  ]
})
