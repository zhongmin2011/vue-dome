<template>
  <div>
      <div>我是第二路由</div>
      <div>接受的参数是：query = {{$route.query.code}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    console.log(this.$route.query.code)
  }
};
</script>
<style scoped>
</style>