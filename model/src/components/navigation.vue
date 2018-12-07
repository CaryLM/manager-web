<template>
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
            <el-menu-item index="1-1-1">平均日交易量</el-menu-item>
            <el-menu-item index="1-1-2">平均月交易量</el-menu-item>
          <!--</el-menu-item-group>-->
          <!--<el-menu-item-group title="分组2">-->
            <el-menu-item index="1-1-3">平均年交易量</el-menu-item>
          </el-submenu>
          <!--</el-menu-item-group>-->
          <el-submenu index="1-4">
            <template slot="title">交易总量</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            <el-menu-item index="1-4-2">选项1</el-menu-item>
            <el-menu-item index="1-4-3">选项1</el-menu-item>
            <el-menu-item index="1-4-4">总收入</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">订单管理</span>
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
</template>

<script>
    export default {
        name: "navigation",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .el-menu {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 640px;
  }
</style>
