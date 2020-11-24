<template>
  <div class="uiLoad">
    <div>UI库的按需加载页面</div>
    <hr style="margin: 10px 0" />
    <div>1，指令：npm i element-ui -S</div>
    <div>
      2，安装babel-plugin-import插件使其按需加载：npm i babel-plugin-import -D
    </div>
    <div>3，在 .babelrc文件中中添加插件配置：</div>
    <div class="blue">&nbsp;&nbsp;{</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;"plugins": [</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;... 以上是项目原来的代码部分</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;//... 以下是配置的代码</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;["import", </div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"libraryName": "element-ui",</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"styleLibraryName": "theme-chalk",</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"style": true</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div>
    <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;]</div>
    <div class="blue">&nbsp;&nbsp;}</div>
    <div>4，在main.js中按需加载你需要的插件</div>
    <div class="blue">import {Select,Button} from 'element-ui'</div>
    <div>5，使用组件</div>
    <div class="blue">Vue.use(Select);</div>
    <div class="blue">Vue.use(Button);</div>
    <div>6，在页面中使用</div>
    <div class="blue">{{btnMessage}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        btnMessage: '<el-button type="primary">按钮</el-button>'
    };
  },
};
</script>
<style scoped>
.uiLoad {
  padding: 20px;
}
.blue{
    color: blue;
}
</style>