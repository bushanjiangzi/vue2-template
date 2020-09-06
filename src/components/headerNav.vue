<template>
  <div class="header-box">
    <header>
      <div class="container">
        <a href="/" class="logo">
          <img class="logo-img" src="../assets/image/logo.png" alt="布山姜子">
          <h1 class="logo-title">布山姜子</h1>
        </a>
        <nav class="nav-box flex-beween">
          <div>
            <ul>
              <li>
                <a href="/" :class="activeIndex === 1 ? 'active' : ''" @click="tabClick(1)">首页</a>
              </li>
              <li>
                <a href="#" :class="activeIndex === 2 ? 'active' : ''" @click="tabClick(2)">第二页</a>
              </li>
              <li>
                <a href="#" :class="activeIndex === 3 ? 'active' : ''" @click="tabClick(3)">第三页</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a target="_black" href="https://github.com/bushanjiangzi" alt="bushanjiangzi的GitHub">
                  <i class="iconfont icongithub" title="GitHub"></i>
                </a>
              </li>
              <li>
                <a target="_black" href="https://www.cnblogs.com/bushan/" alt="布山姜子的博客园">
                  <i class="iconfont iconbokexinwen" title="博客园"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconxiaoxi" title="消息"></i>
                </a>
              </li>
              <li v-if="isLogin" >
                <i class="head-img"></i>
              </li>
              <li v-else>
                <el-button @click="showLogin">登录</el-button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <el-dialog
      title="登录"
      :visible.sync="loginDialog"
      width="320px"
      :before-close="handleClose">
      <el-input v-model="username" maxlength="16" placeholder="请输入用户名"></el-input>
      <el-input v-model="password" maxlength="16" type="password" :show-password="true" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="loginClick">登录</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
      activeIndex: 1,
      isLogin: false,
      loginDialog: false,
      username: '',
      password: ''
    }
  },
  methods: {
    tabClick (index) {
      this.activeIndex = index
    },
    showLogin () {
      this.username = ''
      this.password = ''
      this.loginDialog = true
    },
    handleClose () {
      this.loginDialog = false
    },
    loginClick () {
      console.log(this.username, this.password)
      this.isLogin = true
      this.loginDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header-box{
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 60px;
  .container{
    max-width: 960px;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    .logo{
      margin-right: 32px;
      display: flex;
      .logo-img{
        width: 38px;
        height: 38px;
      }
      .logo-title {
        height: 100%;
        font-size: 24px;
        margin-left: 10px;
        padding-top: 6px;
        color: #007fff;
      }
    }
    .nav-box{
      height: 100%;
      flex: 1 0 auto;
      ul{
        display: flex;
        li{
          line-height: 60px;
          padding: 0 12px;
          /deep/.iconfont{
            font-size: 24px;
          }
        }
        .head-img{
          display: inline-block;
          background-image: url('../assets/image/headImg.png');
          background-size: 32px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-top: 12px;
        }
      }
    }
  }
  .el-input {
    margin-bottom: 15px;
  }
  .el-button{
    width: 100%;
  }
}
</style>
