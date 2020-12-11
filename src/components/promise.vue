<template>
  <div class="content">
    <div>我是promise页面</div>
    <button @click="getHandle">发送get请求</button>
    <button @click="postHandle">发送post请求</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {};
  },
  mounted() {
    fetchList("https://kunpeng.csdn.net/ad/template/235", {
      positionId: 64,
    }).then(res=>{
        console.log(res,'res')
    })
  },
  methods: {
    getHandle(){
      
    },
    postHandle(){
    }
  }
};
</script>
<style scoped>
.content {
  padding: 10px;
}
</style>