<template>
  <div class="testWatch">
    <div>watch与computed区别</div>
    <div style="margin-top:20px">
      <div>computed计算属性</div>
      <span>姓：</span>
      <input type="text" style="margin:5px" v-model="firstName" />
    </div>
    <div>
      <span>名：</span>
      <input type="text" style="margin:5px" v-model="lastName" />
      <div>值：{{fullName}}</div>
    </div>
    <div style="margin-top:25px">
      <div>watch的使用</div>
      <input type="text" v-model="nameValue" style="margin-top:15px" />
      {{tip}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      nameValue: "",
      tip: ""
    };
  },
  watch: {
    nameValue(value) {
      // debugger
      this.checkName(value);
      this.tip = "正在验证......";
    }
  },
  computed: {
    fullName() {
      // 基于data上面的数值进行变化而变化的
      return this.firstName + "" + this.lastName;
    }
  },
  methods: {
    checkName(value) {
      var that = this;
      setTimeout(() => {
        if (value == "admin") {
          that.tip = "用户名已存在";
        } else {
          that.tip = "用户名可以使用";
        }
      }, 2000);
    }
  }
};
</script>
<style scoped>
.testWatch {
  padding: 15px;
  height: 300px;
  background-color: rgb(251, 243, 243);
  margin: 30px;
  width: 350px;
}
</style>