module.export = {
    // 配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效。
    devServer: {
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
        }
    }
}