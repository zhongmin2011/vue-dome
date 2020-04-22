<template>
  <div>
    <div class="nav">
      <button>
        <router-link to="first">dome</router-link>
      </button>
      <button>
        <router-link to="directives">定义指令</router-link>
      </button>
      <button>
        <router-link to="nextTick">nextTick</router-link>
      </button>
      <button>
        <router-link to="vuex">vuex</router-link>
      </button>
      <button>
        <router-link to="dict">dict</router-link>
      </button>
      <button>
        <router-link to="props">父子三代传值</router-link>
      </button>
      <button>
        <router-link to="attrs">attrs</router-link>
      </button>
      <button>
        <router-link to="anti-shake">防抖与节流</router-link>
      </button>
      <button>
        <router-link to="table">render渲染table</router-link>
      </button>
      <button>
        <router-link to="modifier">修饰符</router-link>
      </button>
      <button>
        <router-link to="watch">watch与computed</router-link>
      </button>
      <button>
        <router-link to="local">本地存储</router-link>
      </button>
      <button>
        <router-link to="scrollTop">页面缓慢滚动到顶部</router-link>
      </button>
      <button>
        <router-link to="vue-todo">vue-todo</router-link>
      </button>
      <button>
        <router-link to="new-set">new Set</router-link>
      </button>
      <button>
        <router-link to="two-screen">双层筛选</router-link>
      </button>
      <button>
        <router-link to="colorRed">筛选不同字段标红</router-link>
      </button>
      <button>
        <router-link to="downloadFile">下载</router-link>
      </button>
      <button>
        <router-link to="getRessoure">请求</router-link>
      </button>
    </div>
    <div class="content">
      <div class="left__content">
        <div style="margin-bottom:10px;">我是父组件</div>
        <input v-model="value" @change="changeChild(value)" />
        <!-- 接受子组件传值给父组件 -->
        <div>
          <p>接子组件传的值:</p>
          <span>{{msg}}</span>
        </div>
        <!-- 父组件给子组件传值 -->
        <child-frist :val2="val"></child-frist>
        <child-second @changeFu="changeParent"></child-second>
        <div class="ly mg-t20">
          <div>测试window属性:</div>
          <button @click="open()">windows open</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import childFrist from "@/component/child-frist.vue";
import childSecond from "@/component/child-second.vue";
let vm;
export default {
  components: {
    childFrist,
    childSecond
  },
  data() {
    return {
      value: "",
      val: "",
      userName: "父传子信息",
      msg: ""
    };
  },
  methods: {
    changeChild(value) {
      this.val = value;
    },
    changeParent(value) {
      //  出错  子组件向父组件传事件
      console.log(value, "value");
      this.msg = value;
    },
    open() {
      window.open("http://www.baidu.com");
    } 
  }
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  width: 1000px;
}
.left__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
  padding: 10px;
  /* height: 500px; */
  width: 600px;
}
.ly{
  display: flex;
}
.mg-t20{
  margin-top: 20px;
}
.right_content {
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #faf8f8;
  padding: 15px;
}
.right_content button {
  margin: 8px;
}
.nav {
  padding: 20px;
  box-sizing: border-box;
}
.nav button {
  margin-top: 10px;
  padding: 5px 15px;
  height: 30px;
}
</style>