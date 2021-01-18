<template>
  <div class="downPage">
    <div>我是downAddUp页面</div>
    <div style="padding:20px;">
      <a-upload
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
        @change="handleChange"
      >
        <a-button> <a-icon type="upload" /> 上传文件 </a-button>
      </a-upload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: {
        authorization: "authorization-text",
      },
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.$message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} 文件上传失败`);
      } else if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
      }
    },
  },
};
</script>
<style scoped>
.downPage {
  padding: 20px;
}
</style>