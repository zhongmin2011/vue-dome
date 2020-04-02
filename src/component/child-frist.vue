<template>
  <div class="childContent">
    <div>我的子组件1</div>
    <!-- 子组件接受父组件的传值 -->
    <div style="margin:15px;">接父组件传值：{{val2}}</div>
    <input type="text" v-model="value" @change="setValue(value)">
    <button  style="margin-top:10px;">传值给兄弟组件</button>
  </div>
</template>

<script>
import   bus from '@/bus.js'
export default {
  name: "child",
  props: ["val2"],
  data() {
    return {
      value:""
    };
  },
  mounted(){
  },
  methods:{
      setValue(value){
        bus.$emit('sharetext', value)//触发事件sharetext
      }
  }
};
</script>
<style  scoped>
.childContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: #ceb8b8;
  width: 350px;
  height: 200px;
}
</style>