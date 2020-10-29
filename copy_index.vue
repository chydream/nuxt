<template>
  <div class="default">
    <n-header></n-header>
    <div class="main">
      <Nuxt />
    </div>
    <n-footer></n-footer>
  </div>
</template>

<script>
import nHeader from './header'
import nFooter from './footer'
import { getClientHeight } from '@/util/tool'
export default {
  name: 'default',
  components: {
    nHeader,
    nFooter
  },
  computed: {
    height () {
      var height = 500
      if (process.client) {
        height = getClientHeight() - 120
      }
      return height + 'px'
    }
  },
  mounted () {
  },
  methods: {
    getLogin () {
      var params = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('user/Login', params).then(res => {
        console.log(res)
      })
    },
    setProgress () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 5000)
      })
    }
  }
}
</script>
<style lang="scss">
@import url('../style/reset.css');
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
:root #app {
  overflow: hidden;
}
body .el-table th.gutter {
  display: table-cell !important;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
.default {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main {
    width: 100%;
    height: 100%;
    padding: 60px 0 70px;
    box-sizing: border-box;
    overflow: auto;
  }
  .main > div {
    width: 1200px;
    margin: 0 auto;
  }
}
#nprogress .spinner {
  display: none !important;
}
.home-form {
  .el-form-item {
    margin-bottom: 0px !important;
  }
  .search-btn {
    margin-top: 3px;
  }
}
.mt-15 {
  margin-top: 10px;
}
.mb-15 {
  margin-bottom: 10px;
}
.el-tooltip__popper.is-dark {
  background-color: rgba(50, 50, 50, 0.7) !important;
}
.el-tooltip__popper[x-placement^='top'] .popper__arrow {
  border-top-color: rgba(50, 50, 50, 0.7) !important;
}
.el-tooltip__popper[x-placement^='top'] .popper__arrow::after {
  border-top-color: rgba(50, 50, 50, 0.7) !important;
  opacity: 0 !important;
}
.el-card__body .home-body {
  margin-top: -15px;
}
</style>
