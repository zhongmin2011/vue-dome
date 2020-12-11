import http from '@/utils/http'
// import { SERVER_PREFIX } from '@/config'
const SERVER_PREFIX = '/api/use'

/**
 * 接口list的封装
 * @key  接口地址
 * @condition 搜索条件
 * @pager 传参的页码数据
 */
export const fetchList = (key, condition, pager) => {
  if (!key) { // $message是在其他地方定义的
    return this.$message('缺少key值')
  }
  var url = `${SERVER_PREFIX}/${key}/list`
  return axios.get(url, { condition, pager })
}

Vue.prototype.$api = {
    fetchList
}


export const  getPlaceHolder = function(){
    return (
        {
          book: '请输入或选择书名'
          // TODO 其他类型的placeholder
        }[type] || '请输入或选择'
      )
}

export const  getNameKey = function (type) {
  var res = {}
  switch (type) {
    case 'book': // 图示
      return 'bookName'
    default:
      return 'name'
  }
}

export const  formatData = function (item, type) {
  var res = {
      ...item,
      name: item[getNameKey(type)] || item.name,
      raw: { ...item }
  }
  return res
}