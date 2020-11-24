module.export = {
    // 一，配置跨域的方法：

    devServer: {
        // 1，配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效。
        host: 'localhost',// 配置本地的ip地址
        port: 8080,// 配置本地的端口地址
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
}