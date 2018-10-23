<template>
    <div class="login-wrap">
      <p><input type="text" placeholder="请输入用户名" v-model="userInfo.username"></p>
      <p><input type="text" placeholder="请输入密码" v-model="userInfo.password"></p>
      <span class="btn" @click="submit">登录</span>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
    export default {
      name: "login",
      data() {
        return {
          userInfo: {
            username: 'wujunkui444@mshare.cn',
            password: '123kkk',
            remember_login: 1
          }
        }
      },
      methods: {
        ...mapActions(['login']),
        submit(e) {
          // let userInfo = Object.assign({}, this.userInfo)
          // userInfo.password = this.$utils.myEncode(userInfo.password)
          // this.$axios.login(userInfo).then(res => {
          //     this.$router.push('/')
          // })
          e.preventDefault();
          this.login({
            username: 'wujunkui444@mshare.cn',
            password: '123kkk',
          }).then(() => {
            this.$router.push('/')
          }).catch(err => {
            console.log(err);
          })
          // this.$store.dispatch('login')
        }
      }
    }
</script>

<style scoped>
  .login-wrap {
    width: 250px;
    padding: 50px;
    margin: auto;
    background-color: #fff;
  }
  input {
    outline: none;
  }
  .btn {
    margin-top: 20px;
    display: inline-block;
    padding: 5px 20px;
    background-color: #2735ff;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
</style>
