<template>
  <div>
      <div>我是第一路由</div>
      <div>接受的参数是：{{$route.params.name}}</div>
  </div>
</template>
<script>
export default {
  name:"routeOne",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
