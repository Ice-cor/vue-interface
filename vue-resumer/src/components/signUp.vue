<template>
  <div id="login" class="login">
    <div class="formWrap">
      <h3>注册</h3>
      <el-form status-icon label-width="80px" :label-position="'left'">
        <el-form-item label="用户名">
          <el-input type="username" v-model="formDate.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formDate.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="formVisible=false">
            <router-link to="/signin">登陆</router-link>
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
      formDate: {
        username: "",
        password: ""
      },
      formDate2: {
        username: "",
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
    submitForm() {
      let Users = AV.Object.extend("User");
      let users = new Users();
      users.setUsername(this.formDate.username);
      users.setPassword(this.formDate.password);
      users.signUp().then(loginedUser => {
        console.log(loginedUser);
        alert("注册成功");
        this.$router.push({ path: "/signin" });
        // window.location.reload()
      },
      function(error) {
        console.log(error);
      });
    },
    submitForm2() {
      console.log(this.formDate2.username);
      users.logIn(this.formDate2.username, this.formDate2.password).then(
        function(a) {
          alert("登陆成功");
          console.log(a);
        },
        function(b) {
          console.log(b);
        }
      );
      // alert(111)
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
    transform: translate(-50%,-50%);
    > h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>
