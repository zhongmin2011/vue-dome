import Mock from 'mockjs';
import { responseSuccess, responseError } from '@/mock/modules/mock-data';

// 接口调用例子
Mock.mock(/todo\/user/, 'get', (options) => {
  console.log(`%c${decodeURIComponent(options.url)}`, 'color:blue');
  return responseSuccess({
    userId: '@guid',
    userName: '@cname',
    customerId: '@guid',
    'status|1': ['NORMAL', 'PAUSE'],
    provinceId: '@integer(1,23)',
    contacts: '@cname',
    contactsMobile: /^1[385][1-9]\d{8}/,
    email: '@email',
    manager: '@cname',
    managerMobile: /^1[385][1-9]\d{8}/
  });
});

// 业务列表接口
Mock.mock(/order\/todo\/getBusinessList/, 'get', (options) => {
  console.log(`%c${decodeURIComponent(options.url)}`, 'color:blue');
  return responseSuccess(
    Mock.mock({
      'data|30': [
        {
          'businessId|+1': 1, // 业务ID
          businessName: /^[A-Z]{5}-[A-Z]{4}[0-9]{2}/, // 业务名称
          businessType: '云专线PON', //业务类型
          bandwidth: /^[0-9]{2}Mbps/ //带宽
        }
      ]
    }).data
  );
});

// 控制台列表接口
Mock.mock(/order\/todo\/getOrderList/, 'get', (options) => {
  console.log(`%c${decodeURIComponent(options.url)}`, 'color:blue');
  return responseSuccess({
    'list|10': [
      {
        businessID: /^[A-Z0-9]{14}/, // 业务ID
        businessName: /^[A-Z]{5}-[A-Z]{4}[0-9]{2}/, //业务名称
        businessType: '云专线PON', // 业务类型
        bandwidth: /^[0-9]{2}Mbps/, // 带宽
        serviceType: '免费版', // 订购增值服务类型
        orderTime: '@date(yyyy-mm-dd)', //订购时间
        status: /^已开通|开通中|已退订|已暂停/, //开通状态
        serviceTime: '@natural(12,12)个月', // 服务时间
        closeTime: '@date(yyyy-mm-dd)' // 截止时间
      }
    ],
    total: 10,
    page: 1
  });
});