// 方法一：
// const renderHeaderFunction = (vm) => {
//   // 注意：为什么这边会返会一个func，是因为他要是一个方法，而不是结果
//   return (h, params) => {
//       return h('div',{
//         on:{          
//           'mousedown': () => {// 当鼠标指针移动到元素上方，并按下鼠标按键
//             vm.indexStart = params.index
//             vm.indexChangeItem = params.column
//           },
//           'mouseup': () => {// 当在元素上松开鼠标按键（左、右键均可）时，会发生 mouseup 事件
//             debugger
//             vm.indexEnd = params.index
//             let columnsDropCopy = [...vm.columnsDrop]
//             // columnsDropCopy.splice(vm.indexStart,1)
//             // let changeItem={}
//             if(vm.indexStart>vm.indexEnd){// 从后向前拖拉
//               debugger
//               for(var index = 0; index < columnsDropCopy; index ++){
//                 if(vm.indexStart>vm.indexEnd){// 从后向前拖拉
//                   if(index == vm.indexEnd) {// 当元素拖到当前位置时，替换掉原来的item
//                     columnsDropCopy[index]= indexChangeItem
//                   } else if(index > vm.indexEnd && index <= vm.indexStart){
//                     // 当元素在 开始值于结束值之间时，让columnsDropCopy现在值 等于 他的值等于原来数组index-1的值 
//                     columnsDropCopy[index]= vm.columnsDrop[index-1]
//                   } 
//                 }else{// 从前向后拖拉 2-6 例如4
//                   if(index >= vm.indexStart && index < vm.indexEnd) {
//                     // 当元素在 开始值于结束值之间时，让columnsDropCopy现在值 等于 他的值等于原来数组索引+1的值
//                     columnsDropCopy[index]= vm.columnsDrop[index+1]
//                   } else if(index == vm.indexEnd){// 当元素拖到当前位置时，替换掉原来的item
//                     columnsDropCopy[index]= indexChangeItem
//                   } 
//                 }
//               }
//             }


//           }
//         }, 
//       }, params.column.title)
//   }
// }





// 方法二：
const renderHeaderFunction = (vm) => {
  // 注意：为什么这边会返会一个func，是因为他要是一个方法，而不是结果
  return (h, params) => {
    return h('div', {
      on: {
        'mousedown': () => {// 当鼠标指针移动到元素上方，并按下鼠标按键
          // debugger
          // vm.indexStart = params.index
          // vm.indexChangeItem = params.column
        },
        'mouseup': () => {// 当在元素上松开鼠标按键（左、右键均可）时，会发生 mouseup 事件
          // debugger
          // vm.indexEnd = params.index
          // let columnsDropCopy = [...vm.columnsDrop]
          // columnsDropCopy.splice(vm.indexStart, 1)
          // console.log(columnsDropCopy, '删除后')
          // columnsDropCopy.splice(vm.indexEnd, 0, vm.indexChangeItem)
          // vm.columnsDrop = []
          // vm.columnsDrop = [...columnsDropCopy]
          // console.log(vm.columnsDrop, '重组后')
          // // this.$forceUpdate()

        }
      },
    }, params.column.title)
  }
}



// 第一种 直接定义为data 引入
export const columnsList = [
  {
    key: 'name',
    title: '姓名',
    align: 'center',
    width: 90
  },
  {
    key: 'sex',
    title: '性别',
    align: 'center',
    width: 90
  },
  {
    key: 'age',
    title: '年龄',
    sortable: true,
    align: 'center',
    width: 90
  },
  {
    key: 'work',
    title: '职位',
    align: 'center',
    width: 90
  },
  {
    key: 'money',
    title: '金钱',
    sortable: true,
    align: 'center',
    width: 90
  },
  {
    key: 'action',
    title: '操作',
    align: 'center',
    width: 160,
    fixed: 'right'
  }
]

export const dataList = [
  {
    name: '小五',
    sex: '女',
    age: 20,
    work: '大学生',
    money: '5万'
  },
  {
    name: '小四',
    sex: '女',
    age: 15,
    work: '高中生',
    money: '1万'
  },
  {
    name: '小三',
    sex: '女',
    age: 26,
    work: '工人',
    money: '18万'
  },
  {
    name: '小二',
    sex: '男',
    age: 38,
    work: '员工',
    money: '20万'
  },
  {
    name: '小小',
    sex: '男',
    age: 35,
    work: '老板',
    money: '55万'
  }
]


// 第二种 直接定义为data 为function返回数据 引入
export const columnsListFunction = function () {
  let vm = this
  return [
    {
      key: 'name',
      title: '姓名2',
      align: 'center',
      width: 110
    },
    {
      key: 'sex',
      title: '性别2',
      align: 'center',
      width: 110,
    },
    {
      key: 'age',
      title: '年龄2',
      sortable: true,
      align: 'center',
      width: 110,
      render: (h, params) => {
        return h('a', {
          style: {
            color: '#657fff',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          on: {
            click: () => {
              console.log('我是点击事件的操作')
              window.open('https://www.baidu.com/')
            }
          },
        }, params.row.age)
      }
    },
    {
      key: 'work',
      title: '职位2',
      align: 'center',
      width: 110
    },
    {
      key: 'money',
      title: '金钱2',
      sortable: true,
      align: 'center',
      width: 110
    }
  ]
}

// 第三种 支持列表头宽度进行自动切换，支持列表头进行拖拽，重新排序
export const columnsListMore = function () {
  let vm = this
  return [
    {
      key: 'name',
      title: '姓名3',
      align: 'center',
      width: 90,
      resizable: true,
    },
    {
      key: 'sex',
      title: '性别3',
      align: 'center',
      width: 90,
      resizable: true,
    },
    {
      key: 'age',
      title: '年龄3',
      sortable: true,
      align: 'center',
      resizable: true,
      width: 100,
      render: (h, params) => {
        return h('a', {
          style: {
            color: '#657fff',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          on: {
            click: () => {
              console.log('我是点击事件的操作')
              window.open('https://www.baidu.com/')
            }
          },
        }, params.row.age)
      }
    },
    {
      key: 'work',
      title: '职位3',
      align: 'center',
      resizable: true,
      width: 90
    },
    {
      key: 'money',
      title: '金钱3',
      sortable: true,
      align: 'center',
      resizable: true,
      width: 100
    }
  ]
}

// 第四种 支持列表头进行拖拽，重新排序
// 还为实现
export const columnsListDrop = function () {
  let vm = this
  return [
    {
      key: 'name',
      title: '姓名4',
      align: 'center',
      width: 90,
      resizable: true,
      renderHeader: renderHeaderFunction(vm)
    },
    {
      key: 'sex',
      title: '性别4',
      align: 'center',
      width: 90,
      resizable: true,
      renderHeader: renderHeaderFunction(vm)
    },
    {
      key: 'age',
      title: '年龄4',
      sortable: true,
      align: 'center',
      resizable: true,
      width: 120,
      renderHeader: renderHeaderFunction(vm),
      render: (h, params) => {
        return h('a', {
          style: {
            color: '#657fff',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          on: {
            click: () => {
              console.log('我是点击事件的操作')
              window.open('https://www.baidu.com/')
            }
          },
        }, params.row.age)
      }
    },
    {
      key: 'work',
      title: '职位4',
      align: 'center',
      resizable: true,
      width: 90,
      renderHeader: renderHeaderFunction(vm)
    },
    {
      key: 'money',
      title: '金钱4',
      sortable: true,
      align: 'center',
      resizable: true,
      width: 120,
      renderHeader: renderHeaderFunction(vm)
    }
  ]
}


export const columnsFunction = vm => {
  return columnsListFunction.call(vm)
}

export const columnsListMoreData = vm => {
  return columnsListMore.call(vm)
}

export const columnsDropData = vm => {
  return columnsListDrop.call(vm)
}



