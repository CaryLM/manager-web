<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" >
      <el-form-item label="账户">
        <el-input v-model="formInline.user" placeholder="账户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formInline.user" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <!--<el-button type="primary" @click="send">jfiosdfkl</el-button>-->
        <el-button><router-link to="/ManagerInterface" type="primary">登陆</router-link></el-button>
      </el-form-item>
    </el-form>
  </div>

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
        // send(){
        //   this.$router.push('/ManagerInterface')
        // }
      },
      afterCreated(){
        console.log(this.$router)
      }
    }
</script>

<style scoped>

</style>
