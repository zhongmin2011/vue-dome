if (process.env.NODE_ENV.indexOf('mock') !== -1) {
    //当测试环境是mock的话使用一下mock假数据，否则正常调接口
    require('./modules/mock-data');
    require('./modules/mock-order');
  }