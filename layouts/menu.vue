<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :unique-opened="true">
      <template v-for="(item,index) in menu">
        <!-- 一级 -->
        <el-menu-item :index="item.href" @click="goUrl(item.href)" v-if="item.children.length==0" :key="index" v-show="item.show">
          <i :class="item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="item.label" :key="index" v-else>
          <template slot="title" v-show="item.show">
            <i :class="item.icon"></i>
            <span>{{item.label}}</span>
          </template>
          <template v-for="(itemChild,indexChild) in item.children">
            <!-- 二级 -->
            <el-menu-item :index="itemChild.href" @click="goUrl(itemChild.href)" :key="indexChild" v-if="itemChild.children.length==0" v-show="itemChild.show">
              <i :class="itemChild.icon"></i>
              <span slot="title">{{itemChild.label}}</span>
            </el-menu-item>
            <el-submenu :index="itemChild.label" :key="indexChild" v-else>
              <template slot="title" v-show="itemChild.show">
                <i :class="itemChild.icon"></i>
                <span>{{itemChild.label}}</span>
              </template>
              <!-- 三级 -->
              <el-menu-item :index="itemChildchild.href" @click="goUrl(itemChildchild.href)" v-for="(itemChildchild,indexChildchild) in itemChild.children" :key="indexChildchild" v-show="itemChildchild.show">
                <i :class="itemChildchild.icon"></i>
                <span slot="title">{{itemChildchild.label}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'nMenu',
  data () {
    return {
      menuList: []
    }
  },
  mounted () {
    console.log(this.menu)
    this.getMenu()
  },
  fetch ({store, params}) {
    return this.$store.dispatch('user/GetMenu')
  },
  methods: {
    goUrl (path) {
      this.$router.push(path)
    },
    getMenu () {
      this.$store.dispatch('user/GetMenu')
    }
  },
  computed: {
    ...mapGetters(['menu']),
    activeIndex () {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss">
  .el-menu{
    border-right: none!important;
  }
</style>
