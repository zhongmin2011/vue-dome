<template>
  <div class="dict">
    <div>我是dict页面</div>
    <select-input
      v-model="searchCondition.auditStatus"
      :data="$dict.auditStatus"
      placeholder="请选择审核状态"
    ></select-input>
    <select-input
      v-model="searchCondition.inboundType"
      :data="$dict.inboundType"
      placeholder="请选择审核状态"
    ></select-input>
  </div>
</template>
<script>
import selectInput from "@/component/select-input.vue";
export default {
  components: {
      selectInput
  },
  data() {
    return {
      searchCondition: {}
    };
  }
};
</script>
<style scoped>
.dict {
  padding: 20px;
  border: 1px red solid;
  width: 600px;
  height: 400px;
}
</style>