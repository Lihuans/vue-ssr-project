<template>
    <div class="login-wrap">
      <div class="login-box">
        <p><i class="iconfont icon-login">&#xe7c1;</i><span>欢迎登录</span></p>
        <el-input v-model="userInfo.username" placeholder="请输入用户名">
          <template slot="prepend"><i class="iconfont">&#xe61f;</i></template>
        </el-input>
        <el-input v-model="userInfo.password" placeholder="请输入密码">
          <template slot="prepend"><i class="iconfont">&#xe60a;</i></template>
        </el-input>
        <el-button type="primary" @click="submit" :loading="loading" class="submit">登录</el-button>
      </div>
      <el-dialog title="GA认证" :visible.sync="gaModal">
            <el-form :model="ga" label-width="120px" @submit.native.prevent>
                <el-form-item label="GA验证码">
                    <el-input v-model="ga.pass" @keydown.enter.native="ga_login"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer">
                <el-button @click="gaModal = false">取 消</el-button>
                <el-button type="primary" @click="ga_login">确 定</el-button>
            </div>
      </el-dialog>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
      name: "login",
      data() {
        return {
          gaModal: false,
          ga: {
              pass:'',
              un: ''
          },
          loading: false,
          userInfo: {
            username: 'root',
            password: '123kkk',
          }
        }
      },
      methods: {
        ...mapActions(['login']),
        submit() {
          this.$axios.login({
            username: this.userInfo.username,
            password: this.$utils.myEncode(this.userInfo.password),
          }).then(() => {
            // this.$router.push('/')
          }).catch(err => {
            console.log(err);
            if(err.code === 108) {
              this.gaModal = true
              this.ga.un = err.msg
            }
          })
        },
        ga_login() {
          this.login({
            un: this.ga.un,
            gapass: this.ga.pass,
            username: this.userInfo.username
          }).then((res) => {
            // console.log(this.$store.state);
            this.$router.replace({path: '/index'})
            // history.pushState(null,null,'/index')
          }).catch(err => {
            console.log(err);
          })
        },
        enter_sure() {
            utils.setCookies('token', this.ad_session);
            utils.setCookies('permission', this.permission);
            window.location.href = '/'
        }
      }
    }
</script>

<style lang="stylus" scoped>
.login-wrap {
  min-height 100%
  background url("../static/img/backImg.png")
  overflow hidden
}
  .login-box
      padding 0 30px 30px
      margin 10% auto 0
      width 300px
      background-color #fff
      p
        line-height: 50px
        font-size: 14px
        border-bottom: 1px solid #f1f1f1
        margin-bottom: 27px
        text-align left
        i
          color #999
          margin-right 10px
  .el-input
      margin-bottom: 27px
  .submit {
    width 100%
  }

</style>
