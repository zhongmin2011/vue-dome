import { SET_VUEDOME } from './mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)  //挂载Vuex


const store = new Vuex.Store({  //创建VueX对象
    state: { //存放的键值对就是所要管理的状态
        vueData: []
    },
    getters: {
        vueData: state => state.vueData
    },
    mutations: { // 对于 state 中数据进行修改
        [SET_VUEDOME](state, payload) {
            state.vueData = payload.data
        }
    },
    actions: {
        setVueData({ commit, state, payload }, data) {
            commit(SET_VUEDOME, { data: data })
        }
    }
    //     state: {  
    //         count: 20,
    //         todos: [
    //             { id: 1, text: '...', done: true,age:19 },
    //             { id: 2, text: '...', done: false,age:14},
    //             { id: 3, text: '...', done: true,age:26 },
    //             { id: 4, text: '...', done: false,age:13 },
    //         ]
    //     },
    //     getters: {
    //         doneTodos(state){
    //             return state.todos.filter(todo => todo.age>18)
    //         }
    //     },
    //     mutations: { 
    //         addDoneTodos(state){
    //             state.todos.filter(item=>{
    //                 Vue.set(item,'eidt',true)
    //             })
    //         },
    //         increase(state,payload) {
    //             state.count += payload
    //         },
    //         reduce(state,n) {
    //             state.count -= n
    //         }
    //     },
    //     actions:{
    //         increase(ctx,payload){
    //             setTimeout(()=>{
    //                 ctx.commit('increase',payload)
    //             })
    //         }
    //     },
    //     modules:{
    //         moduleA,
    //         moduleB
    //     }
})

export default store  // 暴露出`store`接口