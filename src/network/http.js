// http.js：封装我们的axios

// 1，引入的模块
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import base from './base'; // 导入接口域名列表



// 2，环境的切换

// 开发环境 开发环境时程序员专门用于开发的服务器，配置可以比较随意，
// 为了开发调试方便，一般打开全部错误报告和测试工具，是最基础的环境
if (process.env.NODE_ENV == 'development') {
    // axios.defaults.baseURL = 'https://www.development.com';
}
// 测试环境 一般是克隆一份生产环境的配置，一个程序在测试环境工作不正常，那么肯定不能把它发布到生产机上。
// (程序员开发完成后，交给测试部门全面的测试，看看所实现的功能有没有bug，测试人员会模拟各种操作情况；)
else if (process.env.NODE_ENV == 'testing') {
    axios.defaults.baseURL = 'https://www.testing.com';
}
// 生产环境 是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。
// (就是线上环境，发布到对外环境上，正式提供给客户使用的环境。)
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
}



// 3, 设置请求超时
// 通过axios.defaults.timeout设置默认的请求超时时间。
// 例如超过了10s，就会告知用户当前请求超时，请刷新等。
axios.defaults.timeout = 10000;


// 4, post请求头的设置
// post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置，
// 即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 5 请求拦截要执行判断token值
// 我们在发送请求前可以进行一个请求的拦截，为什么要拦截呢，我们拦截请求是用来做什么的呢？
// 有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据
// 这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。
// 先导入vuex,因为我们要使用到里面的状态对象

// vuex的路径根据自己的路径去写
import store from '@/store/index';

// 请求拦截器  每次响应请求时，拦截器中要执行的操作，判断是否有 token 并且token是否过期了
axios.interceptors.request.use(
    config => {
        // 每次发o送请求之前判断vuex中是否存在tken        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })


// 6 请求响应要执行判断返回值
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import { Toast } from 'vant';

axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error.response) {
            errorHandle(error.response.status, error.response.data)
            return Promise.reject(error.response);
        }
    }
)

// 封装 接口错误信息报错函数
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            Toast({
                message: error.response.data.message,
                duration: 1500,
                forbidClick: true
            });
    }
}


// 7，封装请求方式
/** 
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    })
}