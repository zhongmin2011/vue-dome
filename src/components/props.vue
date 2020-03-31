
<template>
  <div class="hello">
    <div class="mg-b20">我是 props 页面</div>
    <input type="text" v-model="value" />
    {{value}}---最外面组件
    <propsFather :value="value"></propsFather>
  </div>
</template>
 
<script>
import propsFather from "@/component/propsFather.vue";

export default {
  name: "props",
  components: {
    propsFather
  },
  data() {
    return {
        value:''
    };
  }
};
</script>
<style scoped>
.hello {
  padding: 20px;
  width: 800px;
  height: 600px;
  border: 1px grey solid;
  /* background-color:#d4d4d4; */
}
.mg-t20 {
  margin-top: 20px;
}
span {
  padding: 5px;
  color: red;
}
.mg-b20{
    margin-bottom: 20px;
}
</style>