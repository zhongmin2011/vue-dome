
<template>
  <div class="hello">
    <div>
      <button id="firstBtn" @click="testClick()" ref="aa">{{testMsg}}</button>
    </div>
    <div style="margin-top:20px;">
      本地存储：<span>{{localValue}}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      testMsg:"原始值",
      localValue: localStorage.getItem('valueLocal')
    }
  },
  methods:{
    testClick:function(){
      let that=this;
      that.testMsg="修改后的值";
      
      that.$nextTick(function(){
        console.log(that.$refs.aa.innerText);  //输出：修改后的值
      });
    }
}}
</script>
<style scoped>
.hello{
    background-color:orange;
    padding: 20px;
}
</style>