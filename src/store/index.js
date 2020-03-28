import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)  //挂载Vuex

const store = new Vuex.Store({  //创建VueX对象
    state: {  //存放的键值对就是所要管理的状态
        count: 20,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
            { id: 4, text: '...', done: false },
        ]
    },
    getters: {
        doneTodos(state){
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: { // 对于 state 中数据进行修改
        increase(state,n) {
            state.count += n
        },
        reduce(state,n) {
            state.count -= n
        }
    }
})

export default store  // 暴露出`store`接口