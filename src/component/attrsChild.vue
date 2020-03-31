
<template>
  <div class="child">
    <div>我是 attrsChild 页面</div>
    <div class="ly">
      <button @click="getValue">获取attrs页面的值</button>
      <div style="margin-left:20px;">attrs：{{attrsValue}}</div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "attrsChild",
  data() {
    return {
        attrsValue:[]
    };
  },
  methods: {
    getValue() {
        console.log(this,'123')
        this.attrsValue = this.$attrs.attrsValue;
    }
  }
};
</script>
<style scoped>
.child {
  padding: 20px;
  width: 380px;
  height: 150px;
  margin: 30px;
  background-color: #be6f6f;
}
.ly {
  display: flex;
  margin-top:20px;
  align-items: center;
}

button{
    width: 140px;
    height: 28px;
    border:0;
    border-radius: 4px;
    color: rgb(56, 56, 56);
    background-color: rgb(216, 216, 216);
}
</style>