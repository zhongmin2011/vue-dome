// 路径引入 path
let path = require('path')
// 模板处理
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 第三方库与js进行拆分
let { CommonChunkPlugin } = require('webpack').optimize
// 把css从里面拆出来
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
/** 如果是 vue 文件，我们要在 options中，定义 extractCss:true
 *  extract 方法参数是一个对象
 *  fallback 引入 style-loader 插件
 *  use 属性引入 css-loader 以及预编译加载机
 */ 

module.exports = {
    // 一，配置跨域的方法：

    devServer: {
        // 1，配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效。
        host: 'localhost',// 配置本地的ip地址
        port: 8081,// 配置本地的端口地址
        open: true,
        hot: true, // 热更新
        proxy: {// 跨域配置，一下的配置就是代理付服务向跨域服务器进行处理的过程
            'api':{ // 我们要请求的接口域名。如果不想每次接口都带上/api，可以更改axios的默认配置axios.defaults.baseURL = '/api';
                target: 'http://localhost:3000', // 即将要跨域的域名
                changeOrion: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: require('./mock/index.js') // 引入mock/index.js
    },
    // 2，直接配置跨域的域名及端口号
    // devServer: {
    //     proxy: 'http://localhost:4000'
    // },


    // 二，在项目中使用mock.js,通过devServer来配置监听mock请求
    // 调整webpack配置最简单的方式就是在vue.config.js中的 configureWebpack选项提供一个对象
    // configureWebpack

    // 以下是 webpack 的一些打包命令
    resolve: {
        // 拓展名
        extensions: ['.vue', '.js'],
        // vue 入口
        alias: {
            vue$: 'vue/dist/vue.js'
        }
    },
    // 入口文件，相对于指令执行的位置
    entry: {
        main: './src/main.js',
        // 把库压缩和js文件进行分离
        lib: ['vue','vue-router','axios','vuex']
    },
    output: {
        // 输出文件名称
        filename: "[name].js",
        // 此处加了 hash 值，解决浏览器缓存问题
        // filename: "main[hash:8].js",
        // 输出的绝对路径 ——> 这里就要引用 path
        path: path.join(__dirname, 'dist')
    },

    /**发布资源的规划
     *  css 文件发布到 static/css 目录下
     *  js 文件发布到 static/js 目录下
    */

    // 模块
    module: {
        // 对于某个格式的文件进行转换处理
        rules: [
            //  es6 语法装换  合适 高版本是否只需要安装此插件  不用写
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presents: ['es2015']
                }
            },
            //  vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // scss
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    // style-loader
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                })
            }
        ]
    },
    plugin: [
        new CommonChunkPlugin('lib'),
        new ExtractTextWebpackPlugin('./static/css')
    ]
}