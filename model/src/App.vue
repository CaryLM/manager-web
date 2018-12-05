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
  import RegisterInput from "./components/register-input";
export default {
  components: {RegisterInput}
}
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
