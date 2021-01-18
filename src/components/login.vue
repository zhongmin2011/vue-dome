<template>
  <div class="login">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="region">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form:{
        name:'',
        password: ''
      },
      rules: {
        name: [
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
      this.$refs[formName].validate((valid) => {})
      
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
<style scoped>
.login{
    background-color: rgb(28, 107, 211);
    height: 100%;
    width: 100%;
}
</style>