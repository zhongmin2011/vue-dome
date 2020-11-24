import Mock from 'mockjs';

// 接口调用例子
Mock.mock(/technology\/list/, 'get', (options) => {
  console.log(`%c${decodeURIComponent(options.url)}`, 'color:blue');
  return responseSuccess([// 成功回调返回的数据
    {
      name: 'Vue',
      url: 'https://cn.vuejs.org/',
    },
    {
      name: 'Vue Router',
      url: 'https://router.vuejs.org/zh/',
    }
  ]);
});

const responseSuccess = (data) => Mock.mock({
  state:'OK',
  body: data,
});

const responseError = (data) => Mock.mock({
  state: "ERROR",
  errorCode: "BUSINESS_EXCEPTION",
  errorMessage: "",
});

export { responseSuccess, responseError };