<template>
  <div id="login" class="login">
    <div class="formWrap">
      <h3>登陆</h3>
      <el-form status-icon label-width="80px" :label-position="'left'">
        <el-form-item label="用户名">
          <el-input type="username" v-model="formDate2.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formDate2.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click.prevent="submitForm2">提交</el-button>
          <el-button @click="formVisible = true">
            <router-link to="/signup">注册</router-link>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import AV from "../globle.vue";

export default {
  data() {
    return {
      formDate2: {
        userName: "",
        password: ""
      },
      formVisible: true
    };
  },
  methods: {
    resetForm() {
      for (let key in this.formDate) {
        this.formDate[key] = "";
      }
    },
    submitForm2() {
      let password = this.$md5(this.formDate2.password);
      // let json = {password: password,userName:this.formDate2.userName}

      let json = JSON.stringify({
        password: password,
        userName: this.formDate2.userName
      });
      //我先用JSON转译了一次了
      console.log(json, "json");
      
      this.$axios.post("http://back.nmbjvip.com/api/user/admin/adminLogins",json
      );
      
      //就是这里，要传json到后端，而不是表单数据/////////////

      // console.dir(this.$http)
      // this.$http.post('http://back.nmbjvip.com/api/user/admin/adminLogins', json).then((s)=>{console.log(s)}, (error)=>{console.log(error)});
    }
  }
};
</script>
style
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  > .formWrap {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    box-shadow: 0px 0px 5px #888888;
    padding: 24px 32px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    > h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>
