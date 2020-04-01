<template>
  <div class="render">
    <div>我是render函数</div>
    <div>
      <Table :columns="columns1" :data="tableList"></Table>
    </div>
  </div>
</template>
<script>
import { tableList } from "@/config/data";
export default {
  data() {
    return {
      columns1: [
        {
          title: "姓名",
          key: "name",
          align: "center"
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        {
          title: "地址",
          ellipsis: true,
          key: "address",
          align: "center",
          render: (h, params) => {
            console.log(params,'params')
            return h("span", {
              style: {
                display: "inline-block",
                color: "red"
              },
              on:{
                click:()=>{
                  console.log('我被触发了',params.index)
                }
              }
            },params.row.address);
          }
        },
        {
          title: "日期",
          // ellipsis: true,
          key: "date",
          align: "center"
        }
      ],
      tableList: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  mounted() {
    this.getColmmon();
  },
  methods: {
    getColmmon() {
      // console.log(tableTtile,tableList,'colum')
    }
  }
};
</script>
<style scoped>
.render {
  padding: 20px;
}
table {
  width: 800px;
  height: 400px;
  border: 1px red solid;
}
</style>