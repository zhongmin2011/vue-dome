<template>
  <div class="childContent">
    <div style="padding:10px 0;">我的子组件2</div>
    <!-- 全局过滤器 -->
    <div style="margin-top:10px;">
      <span>公有过滤器:</span>
      <div style="padding:10px 0;">{{ msg | allFilter('美丽','123') | allFilter2(msg)}}</div>
    </div>
    <!-- 局部过滤器 -->
    <div style="margin-top:10px;">
      <span>私有过滤器:</span>
      <div style="padding:10px 0;">{{ msgPart | partFilter}}</div>
    </div>
    <!-- 接来自兄弟级的传值 -->
    <div style="margin-top:15px;">接受兄弟组件值：{{value}}</div>
    <!-- 子组件通过事件改变父组件 -->
    <div style="margin-top:15px;">
      <span>传值给父组件：</span>
      <input type="text" v-model="valueFu" @change="setValue(valueFu)" style="margin-top:10px;" />
    </div>
    <!-- <button style="margin-top:10px;">传值给父组件</button> -->
  </div>
</template>
<script>
import bus from "@/bus.js";
export default {
  name: "child",
  props: ["dir"],
  data() {
    return {
      valueFu: "",
      value: "",
      msg: "我是一个单纯的少女，世界上最单纯的人",
      msgPart: "我是一个单纯的少女"
    };
  },
  mounted() {
    bus.$on("sharetext", value => {
      //通过$on监听事件sharetext
      console.log(value, "value");
      this.value = value;
    });
  },
  methods: {
    setValue(value) {
      console.log(value,"2")
      this.$emit("changeFu", value);
    }
  },
  filters: {
    partFilter(val) {
      return val + "我是局部过滤器";
    }
  }
};
</script>
<style  scoped>
.childContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  background: #ceb8b8;
  width: 350px;
  height: 300px;
}
[v-cloak] {
  display: none;
}
.im {
  overflow: hidden;
}
</style>