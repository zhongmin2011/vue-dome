
<template>
  <div class="hello">
    <div style="margin-top:20px;">
      本地存储：
      <span>{{localValue}}</span>
    </div>
    <div>
      <div>$nextTick学习</div>
      <button v-if="showState" @click="changeState()">点击展示input框</button>
      <input type="text" ref="inputShow" v-else />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "nextTick",
  data() {
    return {
      showState: true,
      localValue: localStorage.getItem("valueLocal")
    };
  },
  methods: {
    changeState() {
      this.showState = false;
      this.$nextTick(function() {
        this.$refs.inputShow.focus();
      });
    }
  }
};
</script>
<style scoped>
.hello {
  background-color: rgb(247, 229, 197);
  padding: 20px;
}
button{
  margin-top: 5px;
  padding: 5px 16px;
}
</style>