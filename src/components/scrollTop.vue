<template>
  <div class="scroll">
    <div>我是实现缓慢滚动到顶部的页面</div>
    <div class="ly content">
      <div class="scrollChild">
        <button @click="scroll()">回到顶部</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: ""
    };
  },
  mounted() {
    this.scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
  },
  methods: {
    scroll() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollToTop() {
      window.requestAnimationFrame(top);
      console.log(this.scrollTop, "this.scrollTop");
    },
    top() {
        debugger
      if (this.scrollTop > 0) {
        window.requestAnimationFrame(this.scrollTop);
        debugger;
        window.scrollTop(0, this.scrollTop - this.scrollTo / 8);
      }
    }
  }
};
</script>
<style scoped>
.scroll {
  padding: 20px;
}
.ly {
  display: flex;
  margin-top: 20px;
}
.scrollChild {
  /* border: 2px grey solid; */
  /* width: 240px; */
  height: 2000px;
  margin-right: 20px;
  /* position: relative; */
}
button {
  position: fixed;
  right: 40px;
  bottom: 40px;
}
</style>