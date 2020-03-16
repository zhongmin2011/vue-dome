<template>
  <div class="content">
    <div class="left__content">
      <div style="margin-bottom:10px;">我是父组件</div>
      <input v-model="value" v-focus="value" @change="changeChild(value)" v-color="'red'" />
      <!-- 接受子组件传值给父组件 -->
      <div>
        <p>接子组件传的值:</p>
        <span>{{msg}}</span>
      </div>
      <!-- 父组件给子组件传值 -->
      <child-frist :val2="val"></child-frist>
      <child-second @changeFu="changeParent"></child-second>

      <!-- watch与computed区别 -->
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
    </div>
    <div class="right_content">
      <!-- 事件修饰 -->
      <div>
        <!-- 事件修饰符 once-->
        <button @click.once="doThing()">事件修饰符once</button>
        <!-- 事件修饰符 stop-->
        <div @click="stopUp()">
          <button style="width:380px;" @click.stop="doThing()">事件修饰符stop</button>
        </div>
        <!-- 事件修饰符 prevent-->
        <div @click="stopUp()">
          <a href="http://www.baidu.com" @click.prevent="preventThing">百度链接</a>
          <button style="width:380px;" @click.prevent="preventThing()">事件修饰符prevent</button>
        </div>
        <!-- 事件修饰符 capture-->
        <div @click.capture="captureThing()">
          <div @click="stopUp()">
            <button style="width:380px;" @click="doThing()">事件修饰符capture</button>
          </div>
        </div>
        <!-- 事件修饰符可以串联 .stop.prevent-->
        <a href="http://www.baidu.com" @click.stop.prevent="preventThing">百度链接</a>
      </div>
      <div style="margin-top:16px;">
        <!-- 引入 ant design 之后进行封装成组件，在字典调用 -->
        <input type="text" placeholder />
      </div>
      <select-input
        v-model="searchCondition.auditStatus"
        :data="$dict.auditStatus"
        placeholder="请选择审核状态"
      ></select-input>
      <select-input
        v-model="searchCondition.inboundType"
        :data="$dict.inboundType"
        placeholder="请选择审核状态"
      ></select-input>
    </div>
  </div>
</template>
<script>
import childFrist from "@/component/child-frist.vue";
import childSecond from "@/component/child-second.vue";
import selectInput from "@/component/select-input.vue";
export default {
  components: {
    childFrist,
    childSecond,
    selectInput
  },
  data() {
    return {
      value: "",
      val: "",
      userName: "父传子信息",
      msg: "",
      searchCondition:{},
      // computed 计算属性
      firstName: "",
      lastName: "",
      nameValue: "",
      tip: ""
    };
  },
  mounted(){
    console.log(this)
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
    checkName(value) {
      var that = this;
      setTimeout(() => {
        if (value == "admin") {
          that.tip = "用户名已存在";
        } else {
          that.tip = "用户名可以使用";
        }
      }, 2000);
    },
    doThing() {
      console.log(123);
    },
    stopUp() {
      console.log("stopUp");
    },
    preventThing() {
      console.log("preventThing");
    },
    captureThing() {
      console.log("captureThing");
    }
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
  directives: {
    // 这里定义指令的
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    color: {
      // 为元素设置指定的字体颜色
      bind(el, binding) {
        el.style.color = binding.value;
      }
    }
  }
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  width: 1000px;
}
.left__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
  padding: 10px;
  /* height: 500px; */
  width: 450px;
}
.testWatch {
  padding: 15px;
  height: 300px;
  background-color: rgb(251, 243, 243);
  margin: 30px;
  width: 350px;
}

.right_content {
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #faf8f8;
  padding: 15px;
}
.right_content button {
  margin: 8px;
}
</style>