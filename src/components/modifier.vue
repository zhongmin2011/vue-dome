<template>
  <div>
    <div>我是修饰符</div>
    <div class="content">
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
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
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
    },
    open() {
      window.open("http://www.baidu.com");
    }    
  }
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #faf8f8;
  padding: 15px;
  border:1px red solid;
}
.content button {
  margin: 8px;
}
</style>