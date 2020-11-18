import axios from 'axios'

// 创建一个axios的对象
const instance = axios.create({
    baseURL: 'https://api.cat-shop.penkuoer.com', //会在调用请求时，拼接在url参数前面
    timeout: 5000 // 超时时间
})


// 请求拦截
// 所有网络请求都会先走这个方法，我们可以在它里面为请求一些自定义的内容
instance.interceptors.request.use(
    function (config) {
        return config
    },
    function (err) {
        return Promise.reject(err)
    }
)


// 响应拦截
// 所有网络请求返回数据之后都会先执行此方法
instance.interceptors.response.use(
    function (res) {
        return res
    },
    function (err) {
        return Promise.reject(err)
    }
)


export function get(url, parmas) {
    if (url) {
        return instance.get(url, parmas)
    } else {
        console.log('缺少key值')
    }

}



// 封装一个调用接口的函数
/** 参数：
 *  url:'',
 *  method:'',
 *  parmas:{},
 *  data: {},
 * **/

function axios({
    //  这里用的是 ES6 解构方法，当不传值时候，设置默认值
    url,
    method = 'GET',
    parmas: { },
    data: { }
}) {
    //  返回一个 Promise 对象
    return new Promise((resolve, reject) => {
        // 1,执行异步请求
        /**
         * 创建 xhr 对象
         * 打开链接
         * 发送请求
         * */ 
        const request = new XMLHttpRequest()
        request.open(method,url,true)
        request.send()
        

        // 2，如果请求成了 resolve

        // 3，如果请求失败了 reject
    })
}