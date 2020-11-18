
import { FormItemStyle, FormItemType } from '@/config/formConstant'


// 页面中的配置文件，使用配置进行展示info信息
export const dataConfig = {
    'infoData': {
        title: '我是列表一',
        column: 4,
        config: {
            name: {
                label: '姓名',
                key: '',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName:'name',
                placeholder:'',
                defaultValue:'请输入姓名',
                disabled: false
            },
            sex: {
                label: '性别',
                key: '',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName:'sex',
                placeholder:'',
                defaultValue:'请输入性别',
                disabled: false
            },
            age: {
                label: '年龄',
                key: '',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName:'age',
                placeholder:'',
                defaultValue:'请....',
                disabled: false
            },
            color: {
                label: '颜色',
                key: '',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName:'color',
                placeholder:'',
                defaultValue:'请输入喜欢的颜色',
                disabled: false
            },
            work: {
                label: '颜色',
                key: '',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName:'work',
                placeholder:'',
                defaultValue:'',
                disabled: false
            },
        }
    },
    'opData': {
        title: '我是列表二',
        column: 4,
        config: {
            number:{
                chnName: '编号',
                label: '编号',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName: 'number',
                name: 'number',
                required: true,
                placeholder: '',
                defaultValue: '',
                seq: 3,
                disabled: false 
            },
            type:{
                chnName: '类别',
                label: '类别',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName: 'type',
                name: 'type',
                required: true,
                placeholder: '',
                defaultValue: '',
                seq: 3,
                disabled: false 
            },
            type:{
                chnName: '类别',
                label: '类别',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName: 'type',
                name: 'type',
                required: true,
                placeholder: '',
                defaultValue:'',
                seq: 3,
                disabled: false 
            },
            time:{
                chnName: '类别',
                label: '类别',
                fieldStyle: FormItemStyle.input,
                fieldType: FormItemType.text,
                propertyName: 'time',
                name: 'time',
                required: true,
                placeholder: '',
                defaultValue: new Date().getDate().toString(),
                seq: 3,
                disabled: false 
            },
        }
    }
}