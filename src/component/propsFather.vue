<template>
  <div class="childContent">
    <!-- <div>我是 中间 组件</div>
    value值：{{value}}---{{value}}
    <propsChild :value="value"></propsChild>-->
    <div>我是 中间 组件</div>
    <div style="margin-top:10px;"> value值：{{value}}</div>     
    <propsChild :value="value"></propsChild>
  </div>
</template>

<script>
import propsChild from "@/component/propsChild.vue";

export default {
  name: "child",
  props: {
    value: {
      type: String
    }
  },
  components: {
    propsChild
  },
  data() {
    return {}
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
  width: 600px;
  height: 450px;
}
</style>