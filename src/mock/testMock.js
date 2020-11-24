const Mock = require('mockjs')
// 以字符串的形式进行输出
let id = Mock.mock('@id')
// 以对象的形式进行输出id值
let objId = Mock.mock({
    id: '@id'
})

// 以对象的形式进行输出
let obj = Mock.mock({
    id: '@id()', //随机生成id值
    username: '@cname()', //随机生成中文名
    date: '@date()', //随机生成日期
    description: '@paragraph()', //随机生成描述
    ip: '@ip()', //随机生成ip值
    email: '@email()' //随机生成email值
})
console.log(id,objId,obj)