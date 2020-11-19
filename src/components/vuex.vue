
<template>
  <div class="hello">
    <div class="helloLeft">
      <div class="mg-t20">
      <button @click="changeVuex">修改vuex中的数据</button>
      <button @click="$router.push({path:'/vuexChild'})">查看vueData值</button>
    </div>
    <div>观看此数组状态</div>
    <div style="margin-top:14px;">vueData：{{vueData}}</div>
    <div style="border:1px grey solid;margin-top:80px;">
      <div class="vuex">vuex 配置文件介绍</div>
        <div>1，store文件下的mutation-types文件，里面是设置存储的类型，每一个存储数据都是一个类型，这样避免数据紊乱</div>
        <div>2，store文件下的index文件配置</div>
        <div class="ml20">a)，引入文件</div>
        <div class="blue ml20 ml20">import { SET_VUEDOME } from './mutation-types'</div>
        <div class="blue ml20 ml20">import Vue from 'vue'</div>
        <div class="blue ml20 ml20">import Vuex from 'vuex'</div>
        <div class="blue ml20 ml20">Vue.use(Vuex)</div>
        <div class="ml20">b)，写配置</div>
        <div class="blue ml20 ml20">const store = new Vuex.Store({  //创建VueX对象</div> 
        <div class="blue ml20 ml20">&nbsp;&nbsp;state: { //存放的键值对就是所要管理的状态</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;&nbsp;&nbsp;vueData: []</div>
        <div class="blue ml20 ml20">},</div>
        <div class="blue ml20 ml20">getters: {</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;vueData: state => state.vueData</div>
        <div class="blue ml20 ml20">},</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;mutations: { // 对于 state 中数据进行修改</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;&nbsp;&nbsp;[SET_VUEDOME](state, payload) {</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.vueData = payload.data</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;}</div>
        <div class="blue ml20 ml20">},</div>
        <div class="blue ml20 ml20">actions: {</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;setVueData({ commit, state, payload }, data) {</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;&nbsp;&nbsp;commit(SET_VUEDOME, { data: data })</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;}</div>
        <div class="blue ml20 ml20">}</div>
    </div>
    </div>
    <div class="helloRight">
      <div>
        <div class="ml20">c)，在其他文件中获取该变量的值</div>
        <div class="blue ml20 ml20">1，import { mapGetters } from "vuex";// mapGetters 是获取vuex中的变量</div>
        <div class="blue ml20 ml20">2，在computed中，引入要获取的变量;</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;computed: { ...mapGetters(["vueData"])}</div>
        <div class="blue ml20 ml20">3，在文件中可以获取该变量的值：this.vueData</div>
        <div class="ml20">d)，在其他文件中修改该变量的值</div>
        <div class="blue ml20 ml20">1，import { mapActions } from "vuex";// mapActions 是vuex中修改该变量的方法</div>
        <div class="blue ml20 ml20">2，在methods中，引入要该方法;</div>
        <div class="blue ml20 ml20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; methods: { ...mapActions(["setVueData"])}</div>
        <div class="blue ml20 ml20">3，在文件中，直接使用该方法对变量的值进行修改：this.setVueData()</div>
        <div class="ml20">e)，在其他文件中可以直接获取vuex中所有的值</div>
        <div class="blue ml20 ml20">1，当vuex中的变量被重新设置了，全局中vuex中的变量也会跟着改变</div>
        <div class="blue ml20 ml20">2，该页面中，可以修改vuex中vueData值，并且修改完可以在子组件中全局查看</div>
        </div>
      </div>
      <div style="color:red;margin-left:20px">
        <div>注：vuex中，不可以改变布尔值，及时改了，数据也不会更新</div>
        <div>解决方法：可以给window加一个属性，用window属性进行控制</div>
      </div>
  </div>
</template>
 
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "vuex",
  data() {
    return {
      list: [
        {
          name: "vuex1",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "vuex2",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "vuex3",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "vuex4",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["vueData"]),
  },
  methods: { ...mapActions(["setVueData"])},
  methods: {
    ...mapActions(["setVueData"]),
    changeVuex() {
      this.setVueData(this.list);
    },
  },
};
</script>
<style scoped>
.hello {
  padding: 20px;
  width: 1600px;
  display: flex;
  justify-content: space-between;
}
.helloLeft {
  width: 500px;
}
.helloRight {
  padding-top: 30px;
  border: 1px grey solid;
  width: 600px;
}
.blue {
  color: blue;
}
.vuex {
  font-size: 18px;
  padding: 3px;
}
.mg-t20 {
  margin-top: 20px;
}
.ml20 {
  margin-left: 20px;
}
span {
  padding: 5px;
  color: red;
}
</style>