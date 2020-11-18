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
  </div>
</template>
<script>
let vm;
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.ly {
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