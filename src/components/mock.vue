<template>
  <div class="mock">
    <div>我是mock界面</div>
    <div>
      mock数据意义:前后端同时开发的时候，后端接口数据没有出来，前端可以mock假数据，模拟开发；
    </div>
    <hr style="margin: 10px 0" />
    <div style="display: flex">
      <div>
        <div>
          前后端同时开发的时候，后端接口数据没有出来，前端可以mock假数据，模拟开发
        </div>
        <div>1，安装mock依赖，指令：cnpm install axios --save</div>
        <div>2，在main.js中引入mock：import './mock';</div>
        <div>3，在src下面建一个mock文件夹，方便管理</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;index.js</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;modules文件夹</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mock-data.js</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mock-order.js
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......</div>
        <div>4, index.js内容</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;if (process.env.NODE_ENV.indexOf('mock') !==
          -1) {
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//当测试环境是mock的话使用一下mock假数据，否则正常调接口
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;require('./modules/mock-data');
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;require('./modules/mock-order');
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;}</div>
        <div>5, mock-data.js内容</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;import Mock from 'mockjs';//引入mock.js数据
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;Mock.mock(/\/list/, 'get', (options) =>
          {//匹配以list结尾的，返回
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return responseSuccess([
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: 'Vue',url:
          'https://cn.vuejs.org/'},
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: 'Vue
          Router',url: 'https://router.vuejs.org/zh/'}
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]);</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;});</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;const responseSuccess = (data) =>
          Mock.mock({//成功的回调函数
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state:'OK',</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: data,</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;});</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;const responseError = (data) =>
          Mock.mock({//失败的回调函数
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: "ERROR",
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errorCode: "BUSINESS_EXCEPTION",
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errorMessage: "",
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;});</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;export { responseSuccess, responseError };
        </div>
        <div>6, mock-order.js内容</div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;import Mock from 'mockjs';
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;import { responseSuccess, responseError } from
          '@/mock/modules/mock-data';
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;Mock.mock(/todo\/user/, 'get', (options) => {
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return responseSuccess({
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userId: '@guid',
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userName: '@cname',
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customerId: '@guid',
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;manager: '@cname',
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: '@email',
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;})</div>
      </div>
      <div style="margin-left: 50px">
        <div>补充知识点请看最下方：(process.argv,)</div>
        <div>
          7，在config下dev.env.js文件中，配置一个新的mock的环境变量env=mock
        </div>
        <div class="blue">
          // 如果运行命令中存在--env=mock，那就使用mock数据，否则使用development
        </div>
        <div class="blue">
          NODE_ENV: process.argv[4].indexOf('--env=mock') !== -1 ? '"mock"':'"development"'
        </div>
        <div class="red">
          注：process.argv里面的值，是在终端终中，重新运行打印出来的，可以找到刚刚配置的变量--env=mock
        </div>
        <div>8, 在package.json中配置环境变量，运行mock时候，走的是mock数据</div>
        <div class="blue">
          "mock": "webpack-dev-server --inline --progress --env=mock --config
          build/webpack.dev.conf.js",
        </div>
        <div class="red">
          注：微信复制一般都会出错，最好会手输入一下命令
        </div>
        <div class="red">
          此处配置了mock命令，当我们使用mock数据时，运行命令为：npm run mock
        </div>
        <div>9，在页面中调用(直接使用调用接口的方法)</div>
        <div class="blue">getList(){</div>
        <div class="blue">
          &nbsp;&nbsp;axios.get("technology/list").then((data) => {
        </div>
        <div class="blue">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(data, "data");
        </div>
        <div class="blue">&nbsp;&nbsp;}</div>
        <div class="red">
          注：这样直接就可以获取到mock中的数据了，但是network中，没有显示此接口信息
        </div>
        <div style="color: red; margin-top: 30px; font-size: 18px">
          补充内容：
        </div>
        <div class="blue">
          1,
          项目中，webpack就是通过process.env属性加以区分开发环境、集成环境、生产环境等。
        </div>
        <div class="blue">
          2,
          process.env是Nodejs提供的一个API，那么如果想用process.env.NODE_ENV，就必须先设置其值才能用。
        </div>
        <div class="blue">
          3,
          在webpack项目里，我们可以通过设置package.json来实现(scripts来操作);但是window/MAC配置是不一样的，所以无法两个兼容器打包项目。
        </div>
        <div class="red">
          &nbsp;&nbsp;&nbsp;&nbsp;"dev": "set NODE_ENV=development &&
          webpack-dev-server --open --hot",
        </div>
        <div class="red">
          &nbsp;&nbsp;&nbsp;&nbsp;"build": "set NODE_ENV=production &&
          --progress --hide-modules"
        </div>
        <div class="blue">
          4,解决window/MAC打包问题，插件cross-env出现了，他是一个跨平台设置环境变量的第三方包
        </div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;安装命令：npm install --save-dev cross-env</div>
        <div class="blue">&nbsp;&nbsp;&nbsp;&nbsp;配置package.json就可以了</div>
        <div class="blue">
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"dev": "cross-env NODE_ENV=development webpack-dev-server --open
          --hot",
        </div>
        <div class="blue">
           &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"build": "cross-env NODE_ENV=production webpack --mode=production
          --progress --hide-modules"
        </div>
        <div class="blue">
          5,process.argv 属性会返回一个数组，
          <div class="red">* 数组的第一个元素process.argv[0]——返回启动Node.js进程的可执行文件所在的绝对路径</div>
          <div class="red">* 第二个元素process.argv[1]——为当前执行的JavaScript文件路径</div>
          <div class="red">* 剩余的元素为其他命令行参数</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getList();
    this.getUseInfo()
  },
  methods: {
    getList() {
      axios.get("technology/list").then((data) => {
        // console.log(data, "data");
      });
    },
    getUseInfo(){
      axios.get("todo/user").then((data) => {
        console.log(data, "data");
      });
      
    }
  },
};
</script>
<style scoped>
.mock {
  padding: 20px;
}
.blue {
  color: blue;
}
.red{
  color: red;
}
</style>