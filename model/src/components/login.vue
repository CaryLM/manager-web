<template>
  <div id="app">

    <el-container>
      <el-header>
        <div class="texttop">管理空间</div>
      </el-header>
      <el-main>
        <div class="regis">
          <div class="rightregis">
            <RegisterInput></RegisterInput>
          </div>
        </div>
        <div class="copyright">Copyright 2018 上海票据撮合公司版权所有</div>
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
    text-align: center;
    margin-top: 20px;
  }
  .el-main{
    text-align: center;
    height:600px;
    margin-top: 100px;
  }
  .copyright{
    margin-top: 200px;
    color:white;
  }
  .regis{
    margin: 1px 300px;
  }

  .rightregis{
    width: 400px;
    height: 300px;
    border: 1px dashed white;
    margin: 0 auto;
    background: white;
  }

</style>

