<template>
  <div class="nav">
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
    <button>
      <router-link to="vModel">v-model</router-link>
    </button>
    <button>
      <router-link to="iteration">数组迭代</router-link>
    </button>
    <button>
      <router-link to="copy">深拷贝 与 浅拷贝</router-link>
    </button>
    <button>
      <router-link to="route">路由传参</router-link>
    </button>
    <button>
      <router-link to="listTodo">页面list配置文件</router-link>
    </button>
    <button>
      <router-link to="basic">页面基础组件</router-link>
    </button>
    <button>
      <router-link to="promise">promise</router-link>
    </button>
    <button>
      <router-link to="crossDomain">跨域</router-link>
    </button>
    <button>
      <router-link to="axios">接口管理</router-link>
    </button>
    <button>
      <router-link to="uiLoad">UI库的按需加载</router-link>
    </button>
    <button>
      <router-link to="uiChange">覆盖ui组件样式</router-link>
    </button>
    <button>
      <router-link to="mock">mock模拟接口数据</router-link>
    </button>
    <button>
      <router-link to="/contain/card3">组件化容器</router-link>
    </button>
    <button>
      <router-link to="/detail">详情页路由详情</router-link>
    </button>
    <button>
      <router-link to="/meta">meta页面</router-link>
    </button>
    <button>
      <router-link to="/downAddUp">downAddUp页面</router-link>
    </button>
  </div>
</template>
<script>
let vm
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      mekey: 'card2'
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("./use/useinfo")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.ly {
  display: flex;
}
.roteLink {
  border: 1px green solid;
  margin-right: 15px;
  padding: 8px;
  display: flex;
}
.mg-t20 {
  margin-top: 20px;
}
.nav {
  width: 1200px;
  padding: 20px;
}
.nav button {
  margin-top: 10px;
  padding: 5px 15px;
  height: 34px;
  margin-right: 15px;
}

</style>