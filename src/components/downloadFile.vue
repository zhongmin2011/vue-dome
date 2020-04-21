<template>
  <div class="downloadFile">
      <div>我是下载页面</div>
      <div :class="[isActive ? 'activeClass':'']">我是绑定的值</div>
      <button @click="downloadFile">下载</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive:true,
      obj:{name:'xiaoxiao'}
    };
  },
  methods:{
    downloadFile () {
      console.log(this, 'wai')
      return ()=>{        
      console.log(this, 'nei')
      }
    }
  }
};
</script>
<style scoped>
.downloadFile{
  padding: 10px;
}
button{
  margin-top: 10px;
  padding: 2px 10px;
}
.activeClass{
  color: red;
}
</style>
