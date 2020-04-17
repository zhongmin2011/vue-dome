<template>
  <div class="new-set">
    <div>我是 new set 页面</div>
    <div class="content">
      <div>
        <input type="text" v-model="value" @change.enter="changeIput(value)" />
        <button @click="newSet">new Set</button>
        <button @click="copy">[...拷贝]</button>
      </div>
      <div class="content_value">
        <div>inputList值：{{inputList}}</div>
        <div class="des">点击new Set,实现拷贝并且去重</div>
        <div>set后值：{{inputNewSet}}</div>
        <div class="des">点击cpoy,实现拷贝但是不去重</div>
        <div>copy值：{{inputCopy}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      inputList: [],
      inputCopy: [],
      inputNewSet: []
    };
  },
  methods: {
    changeIput(value) {
      this.inputList.push(value);
      value = "";
    },
    newSet() {
      this.inputNewSet = [...new Set(this.inputList)];
      console.log(this.inputCopy);
    },
    copy() {
      this.inputCopy = [...this.inputList];
    }
  }
};
</script>
<style scoped>
.new-set {
  padding: 10px;
}
.content {
  display: flex;
  flex-direction: column;
}
.content_value {
  margin-top: 10px;
  width: 400px;
  border: 1px grey solid;
  padding: 18px;
}
button {
  padding: 1px 8px;
}
.des {
  color: red;
  margin-top: 10px;
}
</style>