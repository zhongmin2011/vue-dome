<template>
  <div>
    <div>我的第六个路由展示页面</div>
    <hr/>
      接受的传参是：{{this.$route.params.id}}
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted(){
    console.log(this.$route.params.id)
  }
};
</script>
<style scoped>
</style>