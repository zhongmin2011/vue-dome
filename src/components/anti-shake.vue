<template>
  <div class="shake">
    <div>我是防抖与节流页面</div>
    <div class="scroll"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollTopValue: ""
    };
  },
  mounted() {
    window.onscroll = ("scroll", this.debounce(this.scrollTop, 200,true)); //节流
    // window.onscroll = ("scroll", this.throttle(this.scrollTop, 2000)); //节流
  },
  methods: {
    debounce(func,wait,immediate) {
        let timeout;

        return function () {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);
            if (immediate) {
              // debugger
                var callNow = !timeout;// fasle
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait)
                if (callNow) func.apply(context, args)
            } else {
              debugger
                timeout = setTimeout(function(){
                    func.apply(context, args)
                }, wait);
            }
        }
    },



    // debounce(fn, interval) { // 防抖
    //   let timeout;
    //   return function() {
    //     let ctx = this;
    //     let args = arguments;

    //     if (timeout) clearTimeout(timeout);
    //     timeout = setTimeout(() => {
    //       fn.apply(ctx, args);
    //     }, interval);
    //   };
    // },

 
    // throttle(fn, interval) {
    //   // 定时器
    //   let timeOut;
    //   return function() {
    //     let ctx = this;
    //     let args = arguments;

    //     if (!timeOut) {
    //       timeOut = setTimeout(() => {
    //         timeOut = null;
    //         fn.apply(ctx, args);
    //       }, interval);
    //     }
    //   };
    // },

    // throttle(fn, interval) {// 时间轴
    //   let last;
    //   return function() {
    //     let ctx = this;
    //     let args = arguments;

    //     let now = +new Date();
    //     if (now - last > interval) {
    //       last = now;
    //       fn.apply(ctx, args);
    //     }
    //   };
    // },
    scrollTop() {
      this.scrollTopValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      console.log("我是scroll事件" + this.scrollTopValue);
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