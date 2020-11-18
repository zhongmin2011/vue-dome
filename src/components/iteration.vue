<template>
  <div>
      我是迭代页面
      <div v-if="isShow">请看控制台打印出来的区别</div>
      <div class="content">
        <button @click="mapCilk">map</button>
        <button @click="filterCilk">filter</button>
        <button @click="foreachCilk">foreach</button>
        <!-- <button></button> -->
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        arry: [
            {key:'0',name:'小五', age: 23, area:'苏州', position:'工人'},
            {key:'1',name:'战士', age: 27, area:'北京', sex:'男'},
            {key:'2',name:'慧慧', age: 35, area:'常州', position:'母亲'},
            {key:'3',name:'张三', age: 13, area:'广东', position:'学生'},
            {key:'4',name:'范湖', age: 53, area:'浙江', sex:'男'},
            {key:'5',name:'一会会', age: 63, area:'苏州', position:'奶奶'},
            {key:'6',name:'鬼', age: 23, area:'苏州', position:'worker'},
        ],
        isShow:false,
        mapList:[],
        filterList:[],
        foreachList:[]
    };
  },
  methods:{
    mapCilk(){
      this.mapList = this.arry.map(item=>{
        if(item.sex === '男'){
          return item
        }
      })
      console.log(this.mapList, 'map')
    },
    filterCilk(){
      this.filterList = this.arry.filter(item=>{
        if(item.sex === '男'){
          return item
        }
      })
      console.log(this.filterList, 'filter')
    },
    foreachCilk(){
      // debugger
      this.foreachList = this.arry.forEach(item=>{
        if(item.name === '慧慧'){
          return item
        }
      })
      console.log(this.foreachList, 'forEach')
    }
  }
};
</script>
<style scoped>
.content{
  padding: 5px 10px;
}
button{
  padding: 4px 10px;
  margin: 5px;
  border-radius: 5px;
}
</style>