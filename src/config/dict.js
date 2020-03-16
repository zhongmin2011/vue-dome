export default {
    auditStatus: [
        {
            //审核状态
            id: 0,
            name: '未提交'
        },
        {
            id: 1,
            name: '审核中'
        },
        {
            id: 3,
            name: '已完成'
        },
        {
            id: 2,
            name: '已驳回'
        }
    ],
    inboundType: [
        //入库类型
        { id: 1, name: '采购入库' },
        { id: 2, name: '租赁入库' },
        { id: 3, name: '原始入库' },
        { id: 4, name: '盘盈入库' }
    ],
    restoreType: [
        //归还性质
        { id: 1, name: '领用归还' },
        { id: 2, name: '借用归还' },
        { id: 3, name: '借出归还' }
    ],
}