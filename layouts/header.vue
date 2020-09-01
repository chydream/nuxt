<template>
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        <n-menu></n-menu>
      </div>
      <div class="header-right user-name">
        <el-tooltip class="item" effect="dark" content="头像" placement="bottom">
          <img class="top-userImg" :src="headImgUrl" @error="loadError" />
        </el-tooltip>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <!-- {{userInfo.nickname}} -->admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleInfo">个人信息</el-dropdown-item>
            <!-- <el-dropdown-item @click.native="handleReset">修改密码</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout('确定要退出吗？')">退出登录</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import nMenu from './menu'
export default {
  name: 'nHeader',
  data () {
    return {
      msg: 'hello',
      oldPwd: '',
      newPwd: '',
      checkNewPwd: '',
      checked: false,
      dialogInfo: false,
      dialogReset: false,
      assetsPhoto: './static/img/main/photo.png',
      activeIndex: '1',
      headImgUrl: require('../static/img/photo.png')
    }
  },
  components: {
    nMenu
  },
  methods: {
    handleSelect () {},
    handleInfo () {
      this.dialogInfo = true
    },
    handleReset () {
      this.dialogReset = true
    },
    // 关闭弹窗
    closeDialog (params) {
      if (params == 'info') {
        this.dialogInfo = false
      }
      if (params == 'reset') {
        this.dialogReset = false
      }
    },
    // 确认
    confirmDialog (params) {
      if (params == 'info') {
        this.dialogInfo = false
        this.logout('修改完个人信息，请重新登录！')
      }
      if (params == 'reset') {
        this.dialogReset = false
        this.logout('修改完密码，请重新登录！')
      }
    },
    loadError () {
      // this.userInfo.headImgUrl = this.assetsPhoto
    },
    toggleCollapse () {
      this.$store.commit('common/SET_COLLAPSE')
    },
    logout (msg) {
      this.handleConfirm(msg, () => {
        this.$store.dispatch('user/Logout').then(res => {
          this.$router.push('/login')
          this.$store.commit('common/CLEAR_TAG')
        }).catch((err) => {
          this.tip(err.resp_msg, 'error')
        })
      })
    }
  },
  mounted () {
    // console.log(this.userInfo)
  },
  computed: {
    // ...mapGetters(['isFullScreen', 'userInfo']),
    headImgUrl1 () {
      // var headImgUrl = this.userInfo.headImgUrl ? this.userInfo.headImgUrl : this.assetsPhoto
      return require('../static/img/photo.png')
    }
  }
}
</script>
<style lang="scss">
.header{
  height: 60px;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 1px 1px 1px #ddd;
}
.header-top {
  height: 60px;
  overflow: hidden;
  padding: 0 20px;
  width: 1200px;
  margin: 0 auto;
  background: #fff;
}
.header-left {
  line-height: 60px;
  width: 50%;
  float: left;
}
.header-left i {
  font-size: 22px;
}
.header-right {
  padding: 13px 0px;
  line-height: 20px;
  width: 50%;
  float: right;
  text-align: right;
}
.top-userImg {
  margin: 0 8px 0 10px;
  padding: 2px;
  width: 30px;
  height: 30px;
  border-radius: 100% !important;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #eee;
  vertical-align: middle;
}
.user-name {
  cursor: default;
}
</style>
