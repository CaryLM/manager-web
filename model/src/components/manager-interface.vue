<template>
  <el-container>
    <el-aside>
      <navigation></navigation>
    </el-aside>
    <el-container>
      <el-header>管理界面
        <Exitbutton></Exitbutton>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
    import Navigation from "./navigation";
    import Exitbutton from "./exit-button";
    export default {
        name: "manager-interface",
      components: {Navigation,Exitbutton}
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 640px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 800px;
  }

</style>
