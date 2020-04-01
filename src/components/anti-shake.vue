<template>
  <div class="shake">
      <div>我是防抖与节流页面,这个 我还没有写好文档哈</div>
      <input type="text" v-model="value" @change="changeInput(value)">
  </div>
</template>
<script>
export default {
  data() {
      return{
          value:''
      }      
  },
  methods:{
      changeInput(value){
          console.log(value,'value')
      }
  }
};
</script>
<style scoped>
.shake {
  padding: 20px;
}
input{
    margin-top: 20px;
}
</style>