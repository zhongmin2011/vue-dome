<template>
  <div class="two-screen">
    <div>我的双层筛选案例页面</div>
    <div class="screen-value"></div>
    <button @click="show">展示</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      set: ["2", "4"],
      list: [
        {
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          bandwidth: "11",
          bandwidthUnit: "Mbit/s",
          bizArea: "跨国",
          cityA: "南京",
          cityZ: "上海",
          flowId: "flow_20200417101028",
          flowTaskId: "202004171020043731k8ulaij0fa163e541bb2",
          index: 0,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          portABdevicePort: "A 端口",
          portAContactPhone: "A端用户技术联系人电话",
          portADetailAdd: "南京A",
          portAInterfaceType: "POS光(155M)",
          portAManager: "A端客户经理",
          portAManagerPhone: "A端客户经理电话",
          portZInterfaceType: "POS光(155M)",
          portZManager: "Z端客户经理",
          portZManagerPhone: "portZManagerPhone",
          preCoverDemand: "预覆盖要求",
          productCode: "productCode-1587089377-2",
          provinceA: "江苏",
          provinceZ: "上海",
          rcdFlag: "变更前",
          remark: "Remark",
          requestId: "1587089377-1",
          serviceType: "服务类型",
          surveyTaskId: "d70c20b6-ac2c-40cf-b482-3e32df3410e4",
          taskExecProvince: "一干",
          urgentDegree: "AAA"
        },
        {
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          bandwidth: "11",
          bandwidthUnit: "Mbit/s",
          bizArea: "跨国",
          cityA: "南京",
          cityZ: "上海",
          flowId: "flow_20200417101028",
          flowTaskId: "202004171020043731k8ulaij0fa163e541bb2",
          index: 1,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          portABdevicePort: "A 端口",
          portAContactPhone: "A端用户技术联系人电话",
          portADetailAdd: "南京A",
          portAInterfaceType: "POS光(155M)",
          portAManager: "A端客户经理",
          portAManagerPhone: "A端客户经理电话",
          portZInterfaceType: "POS光(155M)",
          portZManager: "Z端客户经理",
          portZManagerPhone: "portZManagerPhone",
          preCoverDemand: "预覆盖要求",
          productCode: "productCode-1587089377-2",
          provinceA: "江苏",
          provinceZ: "上海",
          rcdFlag: "变更后",
          remark: "Remark",
          requestId: "1587089377-1",
          serviceType: "服务类型",
          surveyTaskId: "d70c20b6-ac2c-40cf-b482-3e32df3410e4",
          taskExecProvince: "一干",
          urgentDegree: "AAA"
        },
        {
          
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          bandwidth: "11",
          bandwidthUnit: "Mbit/s",
          bizArea: "跨国",
          cityA: "南京",
          cityZ: "上海",
          flowId: "flow_20200417101028",
          flowTaskId: "202004171020043731k8ulaij0fa163e541bb2",
          index: 2,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          portABdevicePort: "A 端口",
          portAContactPhone: "A端用户技术联系人电话",
          portADetailAdd: "南京A",
          portAInterfaceType: "POS光(155M)",
          portAManager: "A端客户经理",
          portAManagerPhone: "A端客户经理电话",
          portZInterfaceType: "POS光(155M)",
          portZManager: "Z端客户经理",
          portZManagerPhone: "portZManagerPhone",
          preCoverDemand: "预覆盖要求",
          productCode: "productCode-1587089377-2",
          provinceA: "江苏",
          provinceZ: "上海",
          rcdFlag: "变更前",
          remark: "Remark",
          requestId: "1587089377-2",
          serviceType: "服务类型",
          surveyTaskId: "d70c20b6-ac2c-40cf-b482-3e32df3410e4",
          taskExecProvince: "一干",
          urgentDegree: "AAA"
        },{
          
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          bandwidth: "11",
          bandwidthUnit: "Mbit/s",
          bizArea: "跨国",
          cityA: "南京",
          cityZ: "上海",
          flowId: "flow_20200417101028",
          flowTaskId: "202004171020043731k8ulaij0fa163e541bb2",
          index: 0,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          portABdevicePort: "A 端口",
          portAContactPhone: "A端用户技术联系人电话",
          portADetailAdd: "南京A",
          portAInterfaceType: "POS光(155M)",
          portAManager: "A端客户经理",
          portAManagerPhone: "A端客户经理电话",
          portZInterfaceType: "POS光(155M)",
          portZManager: "Z端客户经理",
          portZManagerPhone: "portZManagerPhone",
          preCoverDemand: "预覆盖要求",
          productCode: "productCode-1587089377-2",
          provinceA: "江苏",
          provinceZ: "上海",
          rcdFlag: "变更后",
          remark: "Remark",
          requestId: "1587089377-2",
          serviceType: "服务类型",
          surveyTaskId: "d70c20b6-ac2c-40cf-b482-3e32df3410e4",
          taskExecProvince: "一干",
          urgentDegree: "AAA"
        }
      ]
    };
  },
  methods: {
    show() {
      this.set.forEach(val => {
        this.list.find((value, index, arr) => {
          if (value.productCode === val && value.rcdFlag === "变更前") {
            vm.lineList.push(value);
          }
          if (value.productCode === val && value.rcdFlag === "变更后") {
            vm.lineList.push(value);
          }
        });
      });
    }
  }
};
</script>
<style scoped>
.two-screen {
  padding: 15px;
}
.screen-value {
  border: 1px grey solid;
  padding: 10px;
  width: 400px;
}
</style>