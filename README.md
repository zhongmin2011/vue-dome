# vue-dome
vue组件通信，指令，过滤器，组件的封装调用，时间修饰，vue字典等整理好的一个dome
vue 中，可以随意任用 window 的一些方法，或者属性，具体dome里面都有体现










## 新增知识点记录


### 登录成功后获取 token 值
1，将登录成功过后的 token 保存到客户端的 sessionStorage 中
    1.1  项目中出了登录之外的其他 API 接口，必须在登录后才能访问
    1.2  token 只应在当前网站打开期间生效，所以讲 token 保存在 sessionStorage中
         window.sessionStorage.setItem('token', loginToken)

2，通过编程是导航跳转到后台的主页，路由地址是 xxx

3，为什么不把 token 保存到 localStorage 中，而保存在 sessionStorage中
localStorage：是持久话的存储机制，一旦关闭了该项目，token还是一直保存，不适用
sessionStorage：会话期间的存储机制，一旦关闭了该项目，token就失效了

详情请看 login.vue 文件




### 使用路由导航守卫控制访问权限
这一块操作的是在 route.js 中进行操作的

1，如果用户没有登录，直接通过url访问特定页面，需要重新导航到登录页面
router.beforeEach((to, from, next) => {
   1, to 将要访问的路径
   2, from 代表从哪个路径跳转而来
   3, next 是一个放行即将执行的函数
      3.1, next() 直接放行
      3.2，next('/login') 强制页面跳转到 登录页面

      这里判断 to.path 是否要去登录页 是的话 直接 next() 放行
      从本地获取token值，window.sessionStorage.getItem('token')
      如果 token 值存在的话，可以直接放行，如果不存在的话
      if(!token) return next('/login') token不存在，就强制性的返回登录页
      否则 直接放行 next()
})

详情请看 router 下 index.js 文件


### 退出功能
实现原理：销毁本地token集客，后续请求不会携带token，必须重新登录生成一个新的 token 值才可以访问页面

清空token： window.sessionStorage.clear()
跳转页面：this.$router.push('/login')

详情请看 home.vue 文件


### 设置格式化，不进行替换操作
例如：格式化时，js中，不把单引号 改为双引号，
     js结尾不添加封号

操作：在文件中新建一个文件 .prettierrc，里面格式是 json 格式，写上配置
{
    "semi": false, 封号去掉
    "singleQuote": true,  不把单引号改为双引号
}

详情请看 .prettierrc 文件


### 去掉Slint报错的不必要校验
在文件.eslintrc.js中，rules对象中，加上校验的名称，改为0即可
例如：{'space-before-function-paren': 0}

详情请看 .eslintrc.js 文件



### 优化组件导入
优化 plugins 下文件 element.js
统一导入



### 刷新时，就获取左侧的菜单栏
给左侧菜单栏点击时，添加事件，获取当前的路径，当刷新时，在created中，获取存储的路径，给绑定的左侧菜单栏


到 351 集


### 项目build优化
注：axios.interceptors.request.use() // 每次发送请求时，带的请求头信息
axios.interceptors.response.use() // 每次响应请求时，拦截器中要执行的操作
详情请看 http.js 文件


1，nprogress 插件（进度条）：
    a，安装NProgress插件，在main.js中引入 nprogress.js 并且引入 nprogress 的样式文件
    b，在http.js中，在request拦截器中开启进度条 NProgress.start()，在response拦截器中结束进度条 NProgress.done()


2，去除ESLint报警信息


3，使用插件移除在build期间出现的console
    a，安装babel-plugin-transform-remove-console插件并使用该插件移除console信息
    b，在 babel.config.js 中，plugins 下面声明此安装包 'transform-remove-console'
    c，但是此方法不管是开发环境还是生产环境都会把console给去掉，所以要设置，只有在生产环境下才能去掉
    d，通过 process.env.NOOE_ENV === 'production' || 'development' 来判断 是否给变量添加改插件


4，打包时，生成报告，通过生成的报告，可以看出打包的文件大小，方便进行优化
    a，命令行生成：vue-cli-service build --report
    b，UI 面板


5，项目优化策略，通过 vue.config.js 修改 webpack 的默认配置
    module.exports = {
    }


6，为开发模式与发布模式指定不同的打包入口
    a，两种方法：configureWebpack ：链式编程形式，修改 webpack 配置
                chainWebpack ：操作对象的形式，修改 webpack 配置
    b，通过 process.env.NOOE_ENV === 'production' || 'development' 来判断config的回调函数，添加打包的出口js文件
    c，详情请看 vue.config.js


7，通过 externals 加载外部 CDN 资源，把第三方依赖不打包在项目文件中
    a，在 vue.config.js 中，修改当 process.env.NOOE_ENV === 'production' 时生产环境配置
    b，在生产环境回调时，加上配置

        config.set('externals', {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            axios: 'axios',
            echarts: 'echarts'
        })

    c，要在dist/index.html文件的头部，加上CDN的外部链接
       注：样式也是一样的，要在main.js中，把css样式去掉，之后在打包输出好的文件中引入即可
           此方法也使用与 element-ui 插件的优化（打包时，此插件太大，进行优化）

       例如：<script src="https://cdn.staticfile.org/vue/2.5.22/vue.min.js"></script>
          <script src="https://cdn.staticfile.org/vue-router/3.0.1/vue-router.min.js"></script>


8，通过环境打包，控制 index 中标题的显示

    config.plugin('html').tag(args => {
        args[0].isProd = false
        return args
    })
    
    a，在 vue.config.js 文件中，回调函数中设置变量 args[0].isProd 是否为 true 来控制 index 中标题是否显示
    b，如果不显示时，也要设置 args[0].isProd = false
    

9，路由懒加载，实现高效率
    a，安装 @babel/plugin-syntax-dynamic-import
    b，在babel.config.js中声明该插件，打开babel.config.js
    c，在"plugins"下，声明安装的插件，"@babel/plugin-syntax-dynamic-import"
    d，将路由更改为按需加载的形式，打开router.js，更改引入组件代码如下：
    const Login = () => import(/* webpackChunkName:"login_home_welcome" */ './components/Login.vue')
    注：login_home_welcome 是打包时候，放在一个目录下的文件名


### 项目上线
1，通过 node 创建 web 服务器
    a，创建node项目
    b，安装 express，通过 express 快速创建 web 服务器
    c，将 vue 项目打包生成的 dist 文件夹，托管为静态资源即可
    示例：
    基本操作：
    a，在文件夹中新建此项目的文件名 serve，
    b，之后在vscode中打开，在终端中输入命令，初始化该项目，操作命令为：npm init -y
    c，安装 express 第三方插件，操作命令为：npm i express -S
    d，把vue项目中build打包好的dist文件，复制粘贴到刚刚新建的 serve 文件夹中，
    e，为了让项目能运行起来，在 serve 文件夹中新建一个入口文件 app.js 
    f，以下操作都是在 app.js 中进行操作
    const express = require('express')
    <!-- 创建web服务器 -->
    const app = express()
    <!-- 托管为静态资源 -->
    app.use(express.static('./dist'))
    <!-- 启动 web 服务器 -->
    app.listen(80,()=>{
        console.log('服务器已经跑起来了')
    })
    g，app.js 中都完成之后，在终端中启动命令 node app 来运行起项目


2，开启 gzip 配置，作用：通过 gzip 可以减少文件体积，是传输速度更快
    a，通过服务器端使用 express 做 gzip 压缩，配置如下：
        1)，安装响应的包，操作：npm install compression -D || npm i compression -S
        2)，导入包，const compression = require('compression')
        3)，启动中间件, app.use(compression())，一定要把这行代码写到 app.use(express.static('./dist')) 托管之前，否则无效
        

3，配置 https 服务
   a，为什么要启用 https 服务？
      答：传统的 http 协议传输数据都是文明的，不安全，
          但是https协议对传输数据进行了加密处理，可以防止数据被中间人窃取，使用更加安全

   b，申请 SSL 证书（https://freessl.org）
   c，在后台项目中导入证书 


4，使用 pm2 管理应用
    a，为什么使用？
    答：为了关闭服务窗口后，还能继续打开该项目，
    b，安装 npm2，操作：npm i pm2 -g
    c，启动项目：pm2 start 脚本 --name 为项目起一个自定义名称
    d，查看本机中运行的项目：pm2 ls
    e，重启项目：pm2 restart 自定义名称
    f，停止项目：pm2 stop 自定义项目名 || id
    g，删除项目：pm2 delete 自定义项目 || id

### 