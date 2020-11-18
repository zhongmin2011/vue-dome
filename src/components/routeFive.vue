<template>
  <div>
    <div>我的第五个路由展示页面</div>
    <hr/>
    {{$route.params}}
      接受的传参是：{{$route.params.code}}
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