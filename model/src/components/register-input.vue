<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="账户">
      <el-input v-model="formInline.user" placeholder="账户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formInline.user" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登陆</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
      data() {
        return {
          formInline: {
            user: '',
            region: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
      }
    }
</script>

<style scoped>

</style>
