<template>
  <div class="listContent">
    <div>我是list页面</div>
    <div style="color:red">
      1, 页面中，第一个案例，操作没有显示
      2, 页面中，第四个案例中，拖拽功能未实现
    </div>    
    <div style="display:flex">
      <div class="domeContent">
        <div>1, 我是配置文件中，直接定义data，引入数据的dome</div>
        <Table :columns="columnsListData" :data="dataListTotal" border>
          <!-- 这一块，待处理 -->
          <template slot-scope="{ row }" slot="action" style="border:1px red solid;">
            <button @click="see(row)" style="border:1px red solid;">查看</button>
            <button style="margin-left:8px;" @click="remove(row)">删除</button>
          </template>
        </Table>
      </div>
      <div class="domeContent">
        <div>2, 我是配置文件中，直接定义data为function返回数据的dome</div>
        <Table :columns="columnsFuncData" :data="dataListTotal" border></Table>
      </div>
    </div>
    <div class="domeContent">
      说明：两者区别
      <div>第一种：不需要对下面的数据进行操作，纯展示作用</div>
      <div>第二种：需要对下面的数据进行操作，比如：链接，字体颜色，设置样式等等</div>
    </div>
    <div style="display:flex">
      <div class="domeContent">
        <div>3, 实现页面中，支持列表进行列表头操作宽度，实现列表头支持拖拽形式</div>
        <Table :columns="columnsMore" :data="dataListTotal" border></Table>
      </div>
      <div class="domeContent">
        <div>4, 实现页面中，实现列表头支持拖拽形式</div>
        <Table :columns="columnsDrop" :data="dataListTotal" border ref="table"></Table>
      </div>
    </div>
  </div>
</template>
<script>
import { columnsList, dataList } from "@/config/data.js";
import { columnsListFunction, columnsListMoreData, columnsDropData } from "@/config/data.js";
export default {
  data() {
    return {
      // 第一种数据 演示
      columnsListData: [],
      dataListTotal: [],

      // 第二种数据 演示
      columnsFuncData: [],
      dataListFunc: [],

      // 第三种演示 宽度重置，支持拖拽
      columnsMore: [],

      // 第四种演示，支持列表头拖拽，重新排序
      columnsDrop:[],
      indexEnd:null,
      indexStart:null
    };
  },
  mounted() {
    this.columnsListData = columnsList;
    this.dataListTotal = dataList;
    this.columnsFuncData = columnsListFunction(this);
    this.columnsMore = columnsListMoreData(this);
    this.columnsDrop = columnsDropData(this)
    this.dom = this.$refs.table.$refs.header.getElementsByTagName("th");
  },
  methods:{
    see(){
      console.log('我是行查看')
    },
    remove(){
      console.log('我是行删除')
    }
  }
};
</script>
<style scoped>
.listContent {
  padding: 10px;
}
.domeContent {
  margin-top: 40px;
  padding: 10px;
}
</style>