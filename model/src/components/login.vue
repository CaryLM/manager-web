<template>
  <div id="app">

    <el-container>
      <el-header>管理员登陆</el-header>
      <el-main>
        <RegisterInput></RegisterInput>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import RegisterInput from "./register-input";
    export default {
        name: "login",
      components: {RegisterInput},
    }
</script>

<style scoped>
  .el-header{
    color: #333;
    text-align: center;
    line-height: 100px;
    margin-top: 20px;
  }
  .el-main{
    text-align: center;
    height:850px;
    margin-top: 100px;
  }
</style>
