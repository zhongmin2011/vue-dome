<template>
  <div class="shake">
    <div>我是防抖与节流页面,这个 我还没有写好文档哈</div>
    <div class="scroll"></div>
    <button class="btn" @click="scroll">回到顶部</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      timeNow: "",
      inputValue: "",
      scrollTop: ""
    };
  },
  created() {
    
  },
  mounted() {
     this.scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    window.onscroll = () => {
      return (() => {
        console.log(this.scrollTop);
        // this.scrollTop = document.body.clientWidth > 1400 ? (document.body.clientWidth - 1400) / 2 : 0;
      })();
    };
  },
  watch: {
    scrollTop(val, oldVal) {
    }
  },
  methods: {
    scroll(value) {
      this.scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    getTime() {
      // console.log("我获取了当前时间");
      this.timeNow = new Date();
      return this.timeNow;
    }
  }
};
</script>
<style scoped>
.shake {
  padding: 20px;
}
.scroll {
  margin-top: 20px;
  height: 2000px;
  width: 400px;
  border: 1px grey solid;
}
.getTime {
  margin-top: 20px;
  width: 380px;
  height: 160px;
  background-color: rgb(182, 182, 182);
}
.btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>