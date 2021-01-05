
<template>
  <div class="meta">
    <div class="mg-b20">我是 meta 页面</div>
    <div class="metaContent">
      <div>1,获取$route中的meta数据，进行展示</div>
      <div>meta：{{ $route.meta.breadName }}</div>
    </div>
    <div class="metaContent">
      <div>2,通过$route中的meta数据，判断是否需要权限，进行展示</div>
      <div class="blue">router.beforeEach((to, from, next) => {</div>
      <div class="blue" style="margin-left:12px;">if (to.path === '/meta') {</div>
      <div class="blue" style="margin-left:24px;">if (to.meta.noLogin == true) {</div>
      <div class="blue" style="margin-left:36px;">console.log('router')</div>
      <div class="blue" style="margin-left:36px;">next()</div>
      <div class="blue" style="margin-left:24px;">} else {</div>
      <div class="blue" style="margin-left:36px;">next('/first')</div>
      <div class="blue" style="margin-left:24px;">}</div>
      <div class="blue" style="margin-left:12px;">} else {</div>
      <div class="blue" style="margin-left:24px;">next()</div>
      <div class="blue" style="margin-left:12px;">}</div>
      <div class="blue">})</div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Meta",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.meta.breadName, "$route");
  },
  methods: {},
};
</script>
<style scoped>
.meta {
  padding: 20px;
  width: 100%;
  height: 100%;
  border: 1px grey solid;
}
.metaContent {
  margin-top: 10px;
}
.blue {
  color: blue;
}
</style>