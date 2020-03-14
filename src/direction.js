import Vue from 'vue'
Vue.directive('focus', {// 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      el.focus()// 聚焦元素
    }
  })