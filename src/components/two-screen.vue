<template>
  <div class="two-screen">
    <div>我的双层筛选案例页面</div>
    <div class="screen-value">
      <div class="screen-item" v-for="(item,index) of list" :key="index">{{item}}</div>
    </div>
    <button @click="show">展示</button>
    <div style="color:red;margin-top:5px;">这个是根据list中requestId来排序，其中按照变更前-变更后来排序</div>
    <div class="showContent">
      <div v-for="(item,index) of lineList" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      set: ["1", "2"],
      lineList:[],
      list: [
        {
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          index: 0,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          rcdFlag: "变更前",
          remark: "Remark",
          requestId: "1"
        },
        {
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          index: 0,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          rcdFlag: "变更后",
          remark: "Remark",
          requestId: "2"
        },
        {
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          index: 0,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          rcdFlag: "变更前",
          remark: "Remark",
          requestId: "2"
        },
        {
          accessWay: "SDH",
          areaA: "南京",
          areaZ: "上海",
          index: 0,
          otherDesc: "其他说明",
          particularGuaranteeDesc: "特殊保障说明",
          portA: "南京",
          rcdFlag: "变更后",
          remark: "Remark",
          requestId: "1"
        }
      ]
    };
  },
  methods: {
    show() {
      this.set.forEach(val => {
        this.list.find((item, index) => {
          if (item.requestId === val && item.rcdFlag === "变更前") {
            this.lineList.push(item);
          }
          if (item.requestId === val && item.rcdFlag === "变更后") {
            this.lineList.push(item);
          }
        });
      });
      console.log(this.lineList)
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
  width: 800px;
}
.screen-item {
  border: 1px grey solid;
  margin: 10px;
}
button {
  margin-top: 20px;
  padding: 2px 10px;
}
.showContent {
  margin-top: 18px;
  border: 1px red solid;
  padding: 10px;
  width: 800px;
}
</style>