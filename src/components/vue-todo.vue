<template>
  <div class="todo">
    <div>我是vue-todo页面</div>
    <div class="content">
      <div class="todo-header">
        <input type="text" placeholder="添加内容，请按回车键" v-model="value" @keyup.enter="addItem(value)" />
      </div>
      <div class="todo-body">
        <!--展示： 方法一 -->
        <ul>
          <li
            v-for="(item,index) in todoList"
            :key="index"
            @mouseenter="buttonShow(index)"
            @mouseleave="currIndex = null"
          >
            <div class="foot-left">
              <input type="checkbox" size="10" class="checkbox" v-model="item.complete" />
              <div>{{item.title}}</div>
            </div>
            <button
              v-show="currIndex == index"
              :class="{'button': currIndex == index}"
              @click="deleteItem(index)"
            >删除</button>
          </li>
        </ul>
        <!--展示： 方法二 -->
        <!-- <ul>
          <li
            v-for="(item,index) in todoList"
            :key="index"
            @mouseenter="item.show = true"
            @mouseleave="item.show = false"
          >
            <div class="foot-left">
              <input type="checkbox" size="10" class="checkbox" v-model="item.complete" />
              <div>{{item.title}}</div>
            </div>
            <button v-show="item.show" :class="{'button': item.show}" @click="deleteItem(item)">删除</button>
          </li>
        </ul>-->
      </div>
      <div class="todo-foot">
        <div class="foot-left">
          <input type="checkbox" size="10" class="checkbox" v-model="checkValue" @click="checkAll(checkValue)" />
          <div>已完成 / 全部</div>
        </div>
        <button @click="clearAll()">清除已完成任务</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoList: [
        { title: "起床", complete: false, show: false },
        { title: "吃饭", complete: true, show: false },
        { title: "叠被", complete: false, show: false },
        { title: "午饭", complete: true, show: false },
        { title: "午睡", complete: false, show: false },
        { title: "学习", complete: true, show: false }
      ],
      value: "",
      isButtonShow: false,
      bgcolor: "white",
      currIndex: null,
      checkValue:false
    };
  },
  methods: {
    addItem(value) {
      var titleValue = value.trim();
      if (!value) {
        alert("请输入内容");
        return;
      }
      var obj = { title: titleValue, complete: false };
      this.todoList.push(obj);
      this.value = "";
    },
    deleteItem(index) {
      console.log(this.todoList);
      this.todoList.splice(index, 1);
    },
    buttonShow(index) {
      this.currIndex = index;
    },
    clearAll() {
      this.todoList = [];
    },
    checkAll(checkValue) {
      var todoList = [...this.todoList];
      for (var i = 0; i < this.todoList.length; i++) {
        var item = this.todoList[i];
        item.complete = !checkValue;
      }
    }
  }
};
</script>
<style scoped>
.todo {
  padding: 30px;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
}
.content {
  margin-top: 10px;
  width: 700px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border: 1px rgb(175, 175, 175) solid;
  border-radius: 4px;
}
.todo-header {
  padding: 10px;
}
input {
  padding: 0 10px;
  height: 40px;
  width: 360px;
  border: 1px rgb(175, 175, 175) solid;
  border-radius: 4px;
}
::-webkit-input-placeholder {
  padding: 0 10px;
}
.todo-body {
  padding: 10px;
}

li {
  padding: 4px 15px;
  border: 1px rgb(197, 197, 197) solid;
  border-bottom: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li:last-child {
  border-bottom: 1px rgb(196, 196, 196) solid;
}
li:hover {
  background-color: rgb(207, 207, 207);
}
.checkbox {
  width: 18px;
  display: block;
  margin-right: 10px;
}
.todo-foot {
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.foot-left {
  display: flex;
  align-items: center;
}
button {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: 0;
  border-radius: 4px;
}
button:focus {
  border: 0;
}
</style>