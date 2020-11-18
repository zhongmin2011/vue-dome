
<template>
  <div class="hello">
    <div class="mg-b20">我是 props 页面</div>
    <div class="propPage">
      <div>
      <input type="text" v-model="inputValue" />
      {{ inputValue }}---最外面组件
      <propsFather :value="inputValue"></propsFather>
    </div>
    <div class="content">
      <div class="left__content">
        <div style="margin-bottom: 10px">我是父组件</div>
        <input v-model="value" @change="changeChild(value)" />
        <!-- 接受子组件传值给父组件  -->
        <div>
          <p>接子组件传的值:</p>
          <span>{{ msg }}</span>
        </div>
        <!-- 父组件给子组件传值 -->
        <child-frist :val2="val"></child-frist>
        <child-second @changeFu="changeParent"></child-second>
        <div class="ly mg-t20">
          <div>测试window属性:</div>
          <button @click="open()">windows open</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
 
<script>
import propsFather from "@/component/propsFather.vue";
import childFrist from "@/component/child-frist.vue";
import childSecond from "@/component/child-second.vue";

export default {
  name: "props",
  components: {
    propsFather,
    childFrist,
    childSecond
  },
  data() {
    return {
      inputValue: "",
      value: "",
      val: "",
      userName: "父传子信息",
      msg: ""
    };
  },
  methods: {
    changeChild(value) {
      this.val = value;
    },
    changeParent(value) {
      //  出错  子组件向父组件传事件
      console.log(value, "value");
      this.msg = value;
    },
    open() {
      window.open("http://www.baidu.com");
    }
  }
};
</script>
<style scoped>
.hello {
  padding: 20px;
  width: 100%;
  height: 100%;
  border: 1px grey solid;
}
.propPage{
  display: flex;
  justify-content: space-around;
}
.mg-t20 {
  margin-top: 20px;
}
span {
  padding: 5px;
  color: red;
}
.mg-b20 {
  margin-bottom: 20px;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-left: 30px;
}
.left__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
  padding: 10px;
  /* height: 500px; */
  width: 600px;
}
</style>