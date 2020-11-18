<template>
  <div>
    <div>我的第三个路由展示页面</div>
    <hr/>
    {{$route.params}}
      接受的传参是：{{$route.params.code}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      // routeParams: this.$route.params.name
    };
  }
};
</script>
<style scoped>
</style>