<template>
  <div class="page">
      我是迭代页面
      <hr style="margin:10px 0;">
      <div v-if="isShow">请看控制台打印出来的区别</div>
      <div class="content">
        <button @click="mapCilk">map</button>
        <button @click="filterCilk">filter</button>
        <button @click="foreachCilk">foreach</button>
      </div>
      <div>map：判断每个item，如果没有值，那么返回undefined，必须有renturn值</div>
      <div>filter：判断每个item，如果没有值，则过滤掉undefined与null，返回一个数组，每个item都有值</div>
      <div>foreach：判断每个item，在每个item值上面进行处理、修改，</div>
      <div>for in：比较适合遍历对象；对象- 输出的对象属性key；数组-返回下标index或者数组的属性/方法(包括原型上所有的可枚举属性/方法);数组遍历顺序不固定</div>
      <div>for of：遍历数组元素值；</div>
      <div></div>
      <div>map: 在原始数据上进行修改；对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。这个数组的每一项都是在原始数据中的对应项上运行传入函数的结果</div>
      <div>filter: 对数组中的每一项运行给定函数，返回该函数会返回true的项所组成的数组。它利用指定的函数确定是否在返回的数组中包含某一项</div>
      <div>foreach: </div>
      <div>every: 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。</div>
      <div>some: 对数组中的每一项运行给定函数，如果该函数任一项返回true，则返回true。</div>
      <hr style="margin:10px 0;">
      <div>
        {{mapList}}
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
.page{
  padding: 20px;
}
.content{
  padding: 5px 10px;
}
button{
  padding: 4px 10px;
  margin: 5px;
  border-radius: 5px;
  border:1px grey solid;
}
</style>