<template>
  <div class="downloadFile">
      <div>我是下载页面</div>
      <button @click="downloadFile">下载</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    downloadFile (type) {
        window.open('/api/group/attachment/download?id=' + id)
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
</style>
