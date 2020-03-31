
<template>
  <div class="hello">
    <div>我是 attrsFather 页面</div>
     <div class="ly">
      <button @click="getValue">获取attrs页面的值</button>
      <div style="margin-left:20px;">attrs：{{attrsValue}}</div>
    </div>
    <attrsChild :attrsValue="attrsValue"></attrsChild>
  </div>
</template>
 
<script>
import attrsChild from "@/component/attrsChild.vue";

export default {
  name: "attrsFather",
  components: {
    attrsChild
  },
  data() {
    return {
      attrsValue: []
    };
  },
  methods: {
    getValue() {
      this.attrsValue = this.$attrs.modelType;
    }
  }
};
</script>
<style scoped>
.hello {
  padding: 20px;
  width: 500px;
  height: 300px;
  margin: 40px;
  background-color: #d4d4d4;
}
button{
    width: 140px;
    height: 28px;
    border:0;
    border-radius: 4px;
    color: rgb(56, 56, 56);
    background-color: rgb(240, 240, 240);
}
.ly {
  display: flex;
  margin-top:20px;
  align-items: center;
}
</style>