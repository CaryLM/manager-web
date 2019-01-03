<!--<template>-->
<!--<div>-->
<!--<el-form :inline="true" :model="formInline" class="demo-form-inline" >-->
<!--<el-form-item label="账户">-->
<!--<el-input v-model="formInline.user" placeholder="账户名"></el-input>-->
<!--</el-form-item>-->
<!--<el-form-item label="密码">-->
<!--<el-input v-model="formInline.user" placeholder="密码"></el-input>-->
<!--</el-form-item>-->
<!--<el-form-item>-->
<!--<el-button type="primary" @click="send">jfiosdfkl</el-button>-->
<!--&lt;!&ndash;<el-button><router-link to="/ManagerInterface" type="primary">登陆</router-link></el-button>&ndash;&gt;-->
<!--</el-form-item>-->
<!--</el-form>-->
<!--</div>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--formInline: {-->
<!--user: '',-->
<!--region: ''-->
<!--}-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--onSubmit() {-->
<!--console.log('submit!');-->
<!--},-->
<!--send(){-->
<!--this.$router.push('/ManagerInterface')-->
<!--}-->
<!--},-->
<!--afterCreated(){-->
<!--console.log(this.$router)-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->



<template>
  <div id="login">
    <el-form style="margin: 20px auto;display:inline-block" ref='AccountFrom' :model='account' :rules='rules' class="demo-ruleForm-login-container" >
      <a style="size:10px">账号密码登陆</a>
      <div class="logintext">推荐使用指纹登录，防止盗号</div>
      <el-form-item  prop="username" style="width:300px" class="username">
        <el-input  v-model="account.username" placeholder="账户名" type="text" ></el-input>
      </el-form-item>
      <el-form-item style="width:300px"  prop="pwd">
        <el-input  type="password" v-model="account.pwd" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" style="width: 300px" @click.native.prevent="handleLogin" :loading='logining'>登陆</el-button>
        <!--<el-button><router-link to="/ManagerInterface" type="primary">登陆</router-link></el-button>-->
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import {requestLogin} from'../api/api';
  export default {
    name:'login',
    data() {
      return {
        logining:false,
        account:{
          username:'',
          pwd:''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          pwd: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        checked:true
      }
    },
    methods: {
      handleLogin(){
        this.$refs.AccountFrom.validate((valid)=>{
          if(valid){
            this.logining=true;
            const loginParams={cUsername:this.account.username,cPwd:this.account.pwd};
            requestLogin(loginParams).then(data=>{
              this.logining=false;
              if(data.code=='200'){
                sessionStorage.setItem('access-token',data.token);
                this.$router.push({path:'/ManagerInterface'});
              }else{
                this.$message({
                  message:data.msg,
                  type:'error'
                });
              }
            })
          }else{console.log('error submit');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .logintext{
    margin-top:10px;
  }
  .username{
    margin-top:20px;
  }
</style>
