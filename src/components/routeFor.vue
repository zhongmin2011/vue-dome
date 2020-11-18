<template>
  <div>
    <div>我的第四个路由展示页面</div>
    <hr/>
    {{$route.query}}
      接受的传参是：{{$route.query.code}}
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style scoped>
</style>