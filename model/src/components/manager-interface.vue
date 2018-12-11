<template>
  <el-container>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu>
            <!--default-active="2"-->
            <!--class="el-menu-vertical-demo"-->
            <!--@open="handleOpen"-->
            <!--@close="handleClose"-->
            <!--background-color="#545c64"-->
            <!--text-color="#fff"-->
            <!--active-text-color="#ffd04b"-->

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>统计分析</span>
              </template>
              <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <el-submenu index="1-1">
                <template slot="title">平均交易量</template>
                <el-menu-item index="1-1-1"><router-link :to="{name:'daytradetotal'}">平均日交易量</router-link></el-menu-item>
                <el-menu-item index="1-1-2"><router-link :to="{name:'monthtradetotal'}">平均月交易量</router-link></el-menu-item>
                <!--</el-menu-item-group>-->
                <!--<el-menu-item-group title="分组2">-->
                <el-menu-item index="1-1-3"><router-link :to="{name:'yeartradetotal'}">平均年交易量</router-link></el-menu-item>
              </el-submenu>
              <!--</el-menu-item-group>-->
              <el-submenu index="1-4">
                <template slot="title">交易总量</template>
                <el-menu-item index="1-4-1">日交易总量</el-menu-item>
                <el-menu-item index="1-4-2">月交易总量</el-menu-item>
                <el-menu-item index="1-4-3">年交易总量</el-menu-item>
                <el-menu-item index="1-4-4">总收入</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link :to="{name:'managerorders'}">订单管理</router-link></span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">日志历史</span>
            </el-menu-item>
          </el-menu>

        </el-col>
      </el-row>
      <!--<navigation></navigation>-->
    <el-container>
      <el-header>管理界面
        <Exitbutton></Exitbutton>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
    import AvMonthTrade from "./ManagerOrders"
    import Exitbutton from "./exit-button"
    export default {
        name: "manager-interface",
      components: {AvMonthTrade,Exitbutton},
    }
</script>

<style scoped>
  .el-main[data-v-4e59f6b9] {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 800px;
  }
  .el-row {
    background-color: #D3DCE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

  }
  .el-col-12 {

    width: 100%;

  }
  .el-menu {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 640px;
  }
</style>
