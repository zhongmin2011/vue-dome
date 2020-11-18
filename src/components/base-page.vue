<template>
  <div class="basicContent">
      <div>此页面是专门写一些各种input，textarea，时间选择器等，来给全局进行使用</div>
      <basic :orderFormConfig="dataConfig" ></basic>
  </div>
</template>
<script>
import basic from '@/component/basic'
import { dataConfig } from '@/config/configBasic'

export default {
  name:'basic-page',
  components:{
    basic
  },
  data() {
    return {
      configTotal:[],
      fileld:{}
    }
  },
  mounted(){
    this.inteData()
  },
  methods:{
    inteData(){
      this.configTotal = dataConfig
      Object.keys(this.configTotal).map(item=>{

      })
      // this.fileld = this.configTotal.filter(item=>{
      //   return item[propertyName] = item.ddefaultValue
      // })
      console.log(this.fileld,'this.fileld')
    }
  }
};
</script>
<style scoped>
.basicContent{
  padding: 10px;
}
</style>