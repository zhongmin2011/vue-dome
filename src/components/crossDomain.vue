<template>
  <div class="crossDomain">
    <div>我是跨域界面页面</div>
    <div>解决方法：vue代理服务器proxy配置</div>
    <hr />
    <div>
      <div>1，需要先安装脚手架，指令：cnpm @vue/cli -g</div>
      <div>2，利用脚手架创建项目名：vue create myProject(项目名)</div>
      <div>3，创建项目后，根据项目根目录创建 vue.config.js</div>
      <div class="blue">
        &nbsp;&nbsp;a，请求时候，先本地请求，之后在本地做一个代理服务器，让代理服务器向跨域的服务器发送请求
      </div>
      <div class="blue">&nbsp;&nbsp;b，操作过程：</div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;*
        文件中请求，以接口基准地址之后的接口信息为准，接口基准地址全局配置，例如：'/news'
      </div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;* 文件中内容：</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;module.export = {</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;devServer: {</div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; host: 'localhost',// 配置本地的ip地址
      </div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;port: 8080,// 配置本地的端口地址
      </div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proxy: {//
        跨域配置，一下的配置就是代理付服务向跨域服务器进行处理的过程
      </div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'api':{ //我们要请求的接口域名，如果不想每次接口都带上/api，可以更改axios的默认配置axios.defaults.baseURL = '/api';
      </div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target: 'http://localhost:3000', //
        即将要跨域的域名
      </div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;changeOrion: true // 是否开启跨域
      </div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;}</div>
      <div class="blue">注：如果是多个跨域接口，那么要配置多个跨域的配置</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效。</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;详情请看vue.config.js文件</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.crossDomain {
  padding: 20px;
}
hr {
  margin: 10px 0;
}
.blue {
  color: blue;
}
</style>