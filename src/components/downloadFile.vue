<template>
  <div class="downloadFile">
    <div>我是下载页面</div>
    <div :class="[isActive ? 'activeClass':'']">我是绑定的值</div>
    <button @click="downloadFile">下载</button>
    <div>
      <div v-if="useName">
        <label for="账号">
          <!--  key="user" -->
          <input type="text" placeholder="账号" />
        </label>
      </div>
      <div v-else>
        <label for="密码">
          <!--  key="passWord" -->
          <input type="text" placeholder="密码" />
        </label>
      </div>
      <button @click="changeType">切换</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      obj: { name: "xiaoxiao" },
      useName: true
    };
  },
  methods: {
    changeType(){
      this.useName = !this.useName
    },
    downloadFile() {
      console.log(this, "wai");
      return () => {
        console.log(this, "nei"); // undefined
      };
    }
  }
};
</script>
<style scoped>
.downloadFile {
  padding: 10px;
}
button {
  margin-top: 10px;
  padding: 2px 10px;
}
.activeClass {
  color: red;
}
</style>
