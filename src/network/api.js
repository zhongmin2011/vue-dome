// api.js用来统一管理我们的接口url
// 1.更加模块化
// 2.更方便多人开发，有效减少解决命名冲突
// 3.处理接口域名有多个情况
import * as article from './apiFile/article.js';

export default {    
    article,
    // ……
}