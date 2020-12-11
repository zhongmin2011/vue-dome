<template>
  <div class="detail">
    <div
      class="item"
      v-for="(item, id) in productList"
      :key="id"
      @click="pushState(item.id)"
    >
    
      <div>{{ item.name }}</div>
      <div>{{ item.des }}</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          id: 1,
          name: "教育行业",
          des: "明确企业资产管理的目标、策略和管理制度等。",
        },
        {
          id: 2,
          name: "制造行业",
          des:
            "明确企业资产管理的角色和分工，包括行政、采购、财务、销售、IT部门等。",
        },
        {
          id: 3,
          name: "餐饮行业",
          des:
            "建立准确资产信息库包括与财务、合同、供应商、客户、监控等关联关系；优化管理流程；明确企业资产管理关键绩效。",
        },
        {
          id: 4,
          name: "物业管理",
          des:
            "选择合适的企业资产管理平台而非管理软件；根据公司资产管理策略和制度，建立资产数据库、管理流程和资产报表等。",
        },
      ],
    };
  },
  methods: {
    pushState(value) {
      console.log("/detail/" + value);
      this.$router.push("/detail/" + value);
    },
  },
};
</script>
<style scoped>
.detail {
  padding: 20px;
}
.item {
  padding: 10px;
  border: 1px red solid;
  margin-bottom: 20px;
}
</style>