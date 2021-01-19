<template>
  <div class="login">
    <a-form-model layout="inline" ref="ruleForm" :model="formInline" :rules="rules" @submit="handleSubmit" @submit.native.prevent class="formModel">
      <a-form-model-item ref="username" prop="username" label="账号">
        <a-input v-model="formInline.username" placeholder="username">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item ref="password" prop="password" label="密码">
        <a-input v-model="formInline.password" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import Api from '@/utils/http.js';
export default {
  data() {
    return {
      formInline: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    };
  },
  methods:{
    submitForm(){
      debugger
      this.$refs.mode()
      
      
    },
    handleSubmit(e) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          Api.post('/sessions',this.formInline).then(res=>{
            console.log(res,'res')
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(){
      this.form = {
        name:'',
        password: ''
      }
    }
  }
};
</script>
<style>
/* .ant-col{
  width: 80%;
} */
.ant-btn{
  width: 100%;
}
.ant-form-item{
  display: flex;
}
.ant-form-item-label{
  width: 10%;
}
.ant-form-item-control-wrapper{
  margin-left: 10px;
  width: 85%;
}
</style>
<style scoped>
.login{
    background-color: rgb(28, 107, 211);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.formModel{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
}
.ant-form-item{
  margin: 10px 0;
  width: 100%;
}

</style>