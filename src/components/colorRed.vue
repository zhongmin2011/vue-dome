<template>
  <div class="colorRed">
    <div>我是标红字段页面</div>
    <div class="red-value">
      <div class="red-item" v-for="(item,index) of list" :key="index">
        <div class="red-it" v-for="(it,i) in item" :key="i">{{it}}</div>
      </div>
    </div>
    <button @click="requestIdSort">展示</button>
    <div style="color:green;margin-top:10px;">这个是根据list中requestId来排序，其中按照改变前-改变后来排序，把变更前后的不同字段进行标红</div>
    <div class="showContent">
      <div>给不同的值进行标红</div>
      <!-- <div class="red-row" v-for="(item,index) of lineList" :key="index">
        <div
          :class="{'hasRedColor': compare(key,index)}"
          class="red-index"
          v-for="(it,key) in item"
          :key="key"
        >{{it}}</div>
      </div> -->
      <!--  2，这里 input 值 为什么 绑定不了  
      3，绑定完之后，怎么获取input值进行标红-->
      <div class="red-row" v-for="(item,index) of lineList" :key="index">
        <div class="red-index" v-for="(value,key) in item" :key="value.index">
            <input type="text" v-model="item[key]" :class="{'hasRedColor': compare(key,index)}">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      set: ["1", "2"],
      lineList: [],
      difKeyList: [],
      list: [
        {
          accessWay: "SDH",
          area: "江苏省",
          city: "苏州市",
          desc: "描述",
          change: "改变前",
          remark: "Remark",
          requestId: "1"
        },
        {
          accessWay: "SDH",
          area: "江苏省",
          city: "苏州市",
          desc: "描述后",
          change: "改变后",
          remark: "Remark",
          requestId: "2"
        },
        {
          accessWay: "SDH",
          area: "江苏省",
          city: "苏州市",
          desc: "描述",
          change: "改变前",
          remark: "Remark",
          requestId: "2"
        },
        {
          accessWay: "SDH",
          area: "江苏省",
          city: "苏州市",
          desc: "描述后",
          change: "改变后",
          remark: "Remark",
          requestId: "1"
        }
      ]
    };
  },
  methods: {
    // 第一步进行排序
    requestIdSort() {
      this.set.forEach(val => {
        this.list.find((item, index) => {
          if (item.requestId === val && item.change === "改变前") {
            this.lineList.push(item);
          }
          if (item.requestId === val && item.change === "改变后") {
            this.lineList.push(item);
          }
        });
      });
    },
    compare(value, index) {
      if (index % 2 == 1) {
        // 索引值为奇数时，其实为偶数数组即改变后
        let preItem = this.lineList[index--]
        let afterItem = this.lineList[index]
        if(preItem[value] !== afterItem[value]){
          return true
        }else{
          return false
        }
        console.log(value, index);
      }else{
        return false
      }
    }
  }
};
</script>
<style scoped>
.hasRedColor{
  color: red;
}
input{
  width: 80px;
}
.colorRed {
  padding: 10px;
}
.red-value {
  border: 1px grey solid;
  padding: 10px;
  width: 800px;
}
.red-item {
  border: 1px grey solid;
  margin: 10px;
  display: flex;
}
button {
  margin-top: 20px;
  padding: 2px 10px;
}
.showContent {
  display: flex;
  border: 1px grey solid;
  flex-direction: column;
  margin-top: 18px;
  padding: 10px;
  width: 800px;
}
.showContent-content {
  display: flex;
}
.red-it {
  padding: 0 16px;
}
.red-item {
  padding: 0 16px;
}
.red-row {
  display: flex;
  margin-top: 5px;
}
.red-index {
  padding: 0 16px;
}
</style>