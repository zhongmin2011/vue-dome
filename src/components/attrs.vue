
<template>
  <div class="hello">
    <div class="mg-b20">我是 attrs 页面</div>
    <input type="text" v-model="value" />
    {{value}}---最外面组件
    <attrsFather :value="value"></attrsFather>
  </div>
</template>
 
<script>
import attrsFather from "@/component/attrsFather.vue";

export default {
  name: "attrs",
  components: {
    attrsFather
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