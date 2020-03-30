<template>
  <div class="childContent">
    <!-- <div>我是 中间 组件</div>
    value值：{{value}}---{{value}}
    <attrsChild :value="value"></attrsChild>-->
    <div>我是 中间 组件</div>
    <div style="margin-top:10px;"> value值：{{value}}</div>     
    <attrsChild :value="value"></attrsChild>
  </div>
</template>

<script>
import attrsChild from "@/component/attrsChild.vue";

export default {
  name: "child",
  props: {
    value: {
      type: String
    }
  },
  components: {
    attrsChild
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