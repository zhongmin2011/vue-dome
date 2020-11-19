<template>
  <div class="axios">
    <div>axios封装和api接口的统一管理页面</div>
    <div style="margin-top: 10px">封装的意义：</div>
    <div>axios的封装，主要是用来帮我们进行请求的拦截和响应的拦截。</div>
    <div>
      在请求的拦截中我们可以携带userToken，post请求头、qs对post提交数据的序列化等。
    </div>
    <div>在响应的拦截中，我们可以进行根据状态码来进行错误的统一处理等等。</div>
    <div>
      axios接口的统一管理，是做项目时必须的流程。这样可以方便我们管理我们的接口，在接口更新时我们不必再返回到我们的业务代码中去修改接口。
    </div>
    <div style="margin-top: 10px; color: red">axios封装</div>
    <div>
      <div class="blue">1，npm install axios; // 安装axios复制代码</div>
      <div class="blue">
        2，一般在项目的src目录中，新建一个network文件夹,作为我们的网络请求模块
      </div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;a，http.js：封装我们的axios</div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;b，api.js用来统一管理我们的接口url
      </div>
      <div class="blue">
        &nbsp;&nbsp;&nbsp;&nbsp;c，request.js对外暴露我们放在的api方法
      </div>
      <div style="color: red">
        &nbsp;&nbsp;&nbsp;&nbsp;d，详情内容，请查看该项目中的network下这三个文件
      </div>
      <div class="blue">3，http.js内容</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;a，引入需要的模块</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;b，环境的切换</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;c，设置请求超时</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;d，post请求头的设置</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;e，请求拦截要执行判断token值</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;f，请求响应要执行判断返回值</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;g，封装请求方式</div>
      <div  style="color: red">&nbsp;&nbsp;&nbsp;&nbsp;h，详情请查看该项目下的改文件，里面有详细说明</div>
      <div class="blue">4，api.js内容</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;a，在network下新建一个api文件夹</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;b，在api文件下新建各个模块的接口js</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;c，在api文件夹下各个模块文件中，引入import { get, post } from '../http'，并且封装改模块接口</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;d，在api.js中引入api文件下各个模块文件，并且暴露出</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;e，在main.js中引入api</div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* import api from './network/api' </div>
      <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Vue.prototype.$api = api;</div>
      <div style="color: red">&nbsp;&nbsp;&nbsp;&nbsp;f，详情请看改项目中，api.js文件，有详细说明</div>
      <div class="blue">5，request.js</div>
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
.axios {
  padding: 20px;
}
.blue {
  color: blue;
}
</style>