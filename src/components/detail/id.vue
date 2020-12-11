<template>
  <div>
    我是详情页id页面
    <div>{{detailtId[this.currentId]}}</div>
  </div>
</template>
<script>
import config from "@/config/detail.js";
export default {
  data() {
    return {
      currentId: "",
      detailtId: config.productId
    };
  },
  mounted() {
    this.currentId = this.$route.params.id
  }
}
</script>
<style scoped>
</style>