<template>
  <div class="content">
    我是拷贝页面
    <div class="show">
      <div>objMore：{{objMore}}</div>
    </div>
    <div class="deep">
      <button @click="shallow">我是浅拷贝</button>
      <div class="text">copy: {{copy}}</div>
    </div>
    <div class="deep">
      <button @click="deepFunc(objMore,deepCopy)">我是深拷贝</button>
      <div class="text">deepCopy: {{deepCopy}}</div>
    </div>
    <div class="deep">
      <button @click="change">改变深层次值</button>
      <div class="text">objMore: {{deepCopy}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      objMore: {
        name: "小猪住",
        age: 30,
        sex: "男",
        dog: {
          name: "大黄",
          age: 1,
          color: "金黄色"
        }
      },
      copy: {},
      deepCopy: {}
    };
  },
  methods: {
    shallow() {
      this.copy = {...this.objMore}
    },
    deepFunc(o1, o2) {
      for (var k in o1) {
        //如果第一层中的属性是数组复杂类型
        if (o1[k] instanceof Object) {
          o2[k] ={};//如果o1[k]是数组，那就给o2[k]也准备一个数组存放拷贝过来的内容
          this.deepFunc(o1[k], o2[k]);
        }
          
        o2[k] = o1[k]
      }
       console.log(this.deepCopy)
    },
    change(){
      this.objMore.dog.name = '修改后的狗名'
    },
    copyClick(arr,list){
      for(var key in list){
        arr[key] = list[key]
      }
      console.log(arr)
      return arr
    }
  }
};
</script>
<style scoped>
.content {
  padding: 10px;
}
.show, .deep, .shallow{
  padding: 10px;
}
.deep, .shallow{
  display: flex;
}
.text{
  margin: 0 10px;
}
</style>