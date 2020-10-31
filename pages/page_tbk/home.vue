<template>
  <div class="home-index">
    <div id="uinfo_bar" style="">
      <div class="header_top area w1200">
        <ul class="menu_leo">
          <!--登录前-->
          <!-- <li>
            <a href="">登录</a>
          </li> -->
          <li class="coubei_s">
            <a href="javascript:void(0)" class="last" id="merchant" style="color: red">卖家报名</a>
          </li>
        </ul>
        <div class="mod_topmenu fl">
          <ul class="mod_hlist">
            <li><a href="javascript:void(0)" title="九块邮">九块邮</a></li>
            <li><a href="javascript:void(0)">消费保障</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div style="background: #fff">
      <div class="sec_header clearfix_f w1200">
        <!--logo-->
        <div class="left_f mod_logo">
          <h1>
            <a href="http://www.jiuky.com" title="九块邮" class="mod_logo_index" style="background: url('./upload/2016/06/26/22/20160626223439350.png') no-repeat;"><span class="hidden">九块邮官网</span></a>
            <!-- <a href="https://temai.taobao.com/?pid=mm_49594033_7490956_28816883" title="九块九包邮特卖" rel="nofollow"><img src="/home/template/jiuky/static/images/index/donghua.jpg" alt="动画标志" /></a> -->
          </h1>
        </div>
        <a href="javascript:void(0);" target="_blank" style="display: block;float: left;margin-top: 30px;position: absolute;right: 375px;">
          <!-- <img width="368" height="30" src="" alt="消费保障图片" title="九块九包邮" /> -->
        </a>

        <a href="http://www.jiuky.com/business" target="_blank" class="fr" style="margin-top: -25px; margin-left: 48px">
          <!-- <img
            src="./home/template/jiuky/static/images/top10/apply.gif"
            alt="报名入口图片"
            title="九块邮活动报名入口"
          /> -->
        </a>
        <!--//搜索-->
        <div class="right_f mod_searchfull" style="position: absolute; right: 122px">
          <div class="mod_search" id="islistshow_new" type="mall">
            <form action="http://www.jiuky.com/" method="GET" class="headersearch">
              <div class="mod_search_bd left_f">
                <input search_type="mall" type="text" class="ipt_search" name="keyword" placeholder="请输入您要找的9.9包邮宝贝" autocomplete="off" id="mall_searchtext" search="searchtext" value=""/>
              </div>
              <button class="ico_gb ico_search left_f" type="submit" title="搜索"></button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="sec_menu">
      <div class="mod_menu w1200">
        <div id="sign_box" class="right_f">
          <!-- <a href="app" style="background: url('/home/template/jiuky/static/images/index/duihao.png') no-repeat 10px 11px;padding-left: 31px;">手机APP下载</a> -->
          <div id="sign_panel">
            <li class="qiandao">
              <a href="javascript:;" class="signin"><span class="sign_txt"><em class="icon-sign"></em>签到领积分</span></a>
              <!-- <div class="sign-mod">
                <div class="sign-count"><em>0</em><i></i></div>
                <p class="rtxt">签到即可获得<em class="red_f">1积分</em>积分</p>
                <ul>
                  <li><span>我的积分：<em class="red_f">0</em>积分</span><a href="http://www.jiuky.com/?mod=user&amp;ac=center" target="_blank">去使用</a></li>
                  <li><span>绑定账号：<em class="red_f">2</em>积分</span><a target="_blank" href="http://www.jiuky.com/?mod=user&amp;ac=base">去完成</a></li>
                </ul>
              </div> -->
            </li>
          </div>
        </div>

        <ul class="mod_hlist">
          <li id="cat_cel" class="show">
            <span>全部商品分类</span>
            <ul class="cat_list clearfix_f"></ul>
          </li>
          <li :class="{menu_on: clickIndex === 0}">
            <a class="lbl_m" href="javascript:void(0)" @click="goUrl('home', 31362)">首页<i></i></a>
          </li>
          <li :class="{menu_on: clickIndex === 1}"><a class="lbl_m" href="javascript:void(0)" @click="goUrl('home', 4094)">特惠<i></i></a></li>
          <li :class="{menu_on: clickIndex === 2}">
            <a class="lbl_m" href="javascript:void(0)" @click="goUrl('home', 32366)">聚划算<i></i></a>
          </li>
          <li :class="{menu_on: clickIndex === 3}">
            <a class="lbl_m" href="javascript:void(0)" @click="goUrl('home', 4092)">精品折扣<i></i></a>
          </li>
          <li :class="{menu_on: clickIndex === 4}">
            <a class="lbl_m" href="javascript:void(0)"  @click="goUrl('home', 3795)">优惠券<i></i></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="top_wrap w1200">
      <div class="top_box">
        <div class="banner_r" style="width: 300px">
          <div style="width: 300px">
            <dl>
              <!-- 右侧四格开始 -->
              <!-- <dd alt="九块邮优惠券人气榜" title="九块邮优惠券人气榜"><div style="margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;" id="ad1000002"><a href="http://www.jiuky.com/cat-6" target="_blank"><img src="./upload/2016/11/20/22/20161120220338183.jpg"></a></div> </dd>
          <dd alt="九块邮" title="九块邮"><div style="margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;" id="ad1000003"><a href="goods/nine" target="_blank"><img src="./upload/2016/11/20/22/20161120220504100.jpg"></a></div></dd>
          <dd alt="淘宝优惠券" title="淘宝优惠券"><div style="margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;" id="ad1000004"><a href="/quan/" target="_blank"><img src="./upload/2019/03/12/11/20190312113950657.jpg"></a></div></dd>
          <dd alt="九块九包邮女装" title="九块九包邮女装"><div style="margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;" id="ad1000005"><a href="/cat-6" target="_blank"><img src="./upload/2016/11/20/21/20161120215457336.jpg"></a></div></dd> -->
              <!-- 右侧四格结束 -->
            </dl>
          </div>
        </div>
        <div class="banner_l">
          <div class="content">
            <a :key="index" v-for="(item, index) in cates"   href="javascript:void(0)" :class="item.class" :title="item.name" @mouseenter="changeStyle('enter', index)" @mouseleave="changeStyle('out', index)" ref="menuItem" @click="goUrl(item.url, item.mid)">
              <i :style="{backgroundPositionX:item.x + 'px', backgroundPositionY:item.y + 'px'}"></i><span>{{item.name}}</span>
            </a>
          </div>
        </div>
        <div class="round">
          <div class="adType">
            <a class="current"></a><a class=""></a><a class=""></a>
          </div>
        </div>
      </div>
    </div>

    <div class="top_bar">
      <ul id="banner_list" class="banner">
        <!-- 轮换图 -->
        <li style="display: list-item">
          <a href="https://s.click.taobao.com/Ym36suu" class="pic item1" alt="9.9包邮" title="9.9包邮"></a>
        </li>
        <li style="display: none">
          <a href="https://s.click.taobao.com/uq5Cpuu" class="pic item2" alt="淘宝优惠券" title="淘宝优惠券"></a>
        </li>
        <li style="display: none">
          <a href="https://s.click.taobao.com/uHe5suu" class="pic item3" alt="隐藏优惠券" title="隐藏优惠券"></a>
        </li>
      </ul>
    </div>

    <div class="wel_tle w1200" id="glist">
      <div class="topbar_link"></div>
      <!-- <div class="prolist_type">
        <span>列表：</span>
        <a rel="nofollow" href="javascript:void(0);" class="switch" col="3">五格</a>
        <a rel="nofollow" href="javascript:void(0);" class="switch on" col="4">四格</a><span>排序：</span>
        <a href="http://www.jiuky.com/sort-new" class="">最新</a>
        <a href="http://www.jiuky.com/sort-hot" class="">最热</a>
      </div> -->
      <h2 class="tle"><span class="ico2"></span>人气推荐单品</h2>
      <!--//分类带图标开始-->
      <div class="topbar_link">
        <a class="on" href="javascript:void(0)">全部</a>
        <a href="javascript:void(0)" v-for="(item, index) in cates" :key="index" @click="goUrl(item.url, item.mid)"><i :class="'cat_'+(index+1)"></i>{{item.name}}</a>
      </div>
    </div>

    <div class="scroll-nav-main" style="display: none">
      <div class="scroll-nav w1200 clearfix_f">
        <div class="cate_logo">
          <!-- <a href="http://www.jiuky.com/"><img src="./home/template/jiuky/static/images/cate_logo.png" alt="九块邮logo" title="九块邮"></a> -->
        </div>
        <div class="nav-item left_f">
          <div class="item-list">
            <ul class="clearfix_f">
              <span class="countdown">
                <a href="http://www.jiuky.com/" class="on">全部</a>
                <a href="http://www.jiuky.com/cat-6" title="女装" class="">女装</a>
                <a href="http://www.jiuky.com/cat-7" title="男装" class="">男装</a>
                <a href="http://www.jiuky.com/cat-8" title="鞋品" class="">鞋品</a>
                <a href="http://www.jiuky.com/cat-9" title="配饰" class="">配饰</a>
              </span>
            </ul>
          </div>
        </div>
        <div class="n_h right_f">
          <!-- <a href="http://www.jiuky.com/quan" target="_blank"><img src="./home/template/jiuky/static/images/sou.png" alt="查询优惠券" title="搜优惠券"></a> -->
        </div>
        <div class="nav-other left_f">
          <ul class="clearfix_f">
            <li>
              <a title="查询淘宝|天猫优惠券" href="quan/" target="_blank"><span style="color: #ff0000; font-weight: bold">查优惠券</span></a>
              <!--<em class="l2">14</em>-->
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main_new clearfix_f" id="ajaxgoods">
      <!-- 主体内容 -->
      <div class="buy_goods fl_1 poster_wall s_page_1" v-for="(item,index) in tableData" :key="index">
        <div class="new"></div>
        <a class="my-like" onclick="goodsfav('16340524')" title="加入收藏">
          <i class="like-ico"><span class="heart_left"></span><span class="heart_right"></span></i>
        </a>
        <a :href="item.click_url" target="_blank">
          <img class="shop-img lazy" :src="item.pict_url" data-original="" :alt="item.title" rel="nofollow" style="display: inline"/>
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a :href="item.click_url" target="_blank" :title="item.title">
              {{item.title}}
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">{{ accSub(item.zk_final_price , item.coupon_amount)}}</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> {{ item.commission_rate }}折</span><br /><s>原价¥{{item.zk_final_price}}</s>
            </div>
            <div class="pold" style="float: right; text-align: right; margin-right: 5px">
              <span class="pnum" :class="{'pnum_tmall': item.user_type === 1, 'pnum_taobao': item.user_type === 0}"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a :href="item.coupon_click_url" target="_blank" num_iid="543154898533" rel="nofollow">
                  <span class="sale-title-font pline">
                    <em>{{item.coupon_amount}}元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span class="fsettime">结束时间：{{ item.coupon_end_time }}</span>
            </div>
            <a title="领券抢购" :href="item.coupon_click_url" target="_blank" class="go-buy tmall-buy" rel="nofollow">领券抢购</a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出{{item.coupon_total_count - item.coupon_remain_count}}件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a :href="item.coupon_click_url" target="_blank"  rel="nofollow">
            <span class="qg-img-tag"><em>{{item.coupon_amount}}元</em></span>
          </a>
        </div>
      </div>
    </div>

    <div class="clear"></div>
    
    <div class="page">
      <el-pagination
        :current-page="page.currentPage"
        background
        :page-sizes="page.pageSizes"
        :page-size="page.pageSize"
        :layout="layout"
        :total="page.total"
        :pager-count="5"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
    </div>
    <!-- <div class="page area">
      <div class="list_page">
        <span class="page current"><a href="javascript:void(0);">1</a></span>
        <span class="page"><a href="http://www.jiuky.com/start-100">2</a></span>
        <span class="page"><a href="http://www.jiuky.com/start-200">3</a></span>
        <span class="page"><a href="http://www.jiuky.com/start-300">4</a></span>
        <span class="page"><a href="http://www.jiuky.com/start-400">5</a></span>
        <span class="page"><a href="http://www.jiuky.com/start-500">6</a></span>
        <span class="fl"></span>
        <span class="page"><a href="http://www.jiuky.com/start-233400">2335</a></span>
        <span class="next"><a href="http://www.jiuky.com/start-100" style="width: 80px">下一页</a></span>
      </div>
    </div> -->

    <div class="footer-new about">
      <div class="foot auo">
        <div class="foot_info">
          <!-- <div class="follow"><img src="" alt="九块邮logo" title="九块邮" /></div> -->

          <div class="info_text">
            <p>
              <a href="javascript:void(0)">九块邮官网</a>
              九块邮旗下品牌 Rights Reserved 九块邮官网 Copyright @ 2020
              <br />
            </p>
            <p style="display: none"></p>
          </div>
        </div>
        <div class="foot_link">
          <dl class="link_safe right_f">
            <dt class="mb10">权威认证</dt>
            <dd style="margin-top: 10px">
              <a class="s360"></a>
              <a class="kx"></a>
              <!-- <img src="" alt="实名验证" title="九块邮官网" /> -->
            </dd>
          </dl>
          <dl class="link_company left_f">
            <dt class="mb10">关于我们</dt>
            <dd class="lh20">
              <a href="javascript:void(0)">关于我们</a>
            </dd>
          </dl>
          <!-- <dl class="link_company left_f">
            <dt class="mb10">商务合作</dt>
            <dd class="lh20">
              <a href="###" target="_blank">友情链接</a>
            </dd>
            <dd class="lh20">
              <a href="###" style="color: ">免费报名</a>
            </dd>
            <dd class="lh20">
              <a href="###" target="_blank" rel="nofollow">放入桌面</a>
            </dd>
          </dl> -->
          <dl class="link_company left_f">
            <dt class="mb10">网站导航</dt>
            <dd class="lh20">
              <a href="javascript:void(0)">九块邮</a>
            </dd>
            <dd class="lh20">
              <a href="javascript:void(0)">九块九包邮</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="linkss">
      <div class="links">
        <span>友情链接：</span>
        <div class="links_list_box">
          <ul class="links_list" style="margin-top: -17px">
            <li>
              <a href="javascript:void(0)">九块邮官网</a>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0)" class="more">更多&gt;&gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
// import cvueTable from '@/components/cvue-table'
import { getClientHeight } from '@/util/tool'
export default {
  name: 'homeIndex',
  data () {
    return {
      imgSrc: require('../../static/img/1.jpg'),
      clickIndex: 0,
      tableData: [],
      tablePage: 1,
      tableLoading: false,
      page: {
        total: 1, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 52, // 每页显示多少条
        pageSizes: [52, 100]
      },
      layout: 'sizes,prev,pager,next,jumper',
      // https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html#/detail/10628875?_k=gpov9a
      // 聚划算 32366 满减  31371 开团 31370 预热   
      // 天猫超市 27160  27162  27161
      // 天猫国际 37088 37089  30015 30014  30013
      // 淘抢购  34616
      // 天天特卖 31362
      // 有好货相关 4092
      // 好券直播 3756 3767 3758 3759 3762 3763  3764 3765 3760 3761 3766
      // 实时热销榜 28026 28029 28027 28028
      // 本地化生活 30443 19812 25378 28636 29105 25885 25886 25888 25890 26077 27913 27914 19811 19810 28888 19814 28397
      // 大额券 27446 27448 27451	27453 27798 27454
      // 高佣榜 13366 13367 13368 13369 13370 13371 13372 13373 13374 13375 13376
      // 品牌券 3786 3788 3792 3793 3796 3794 3790 3787 3789 3791 3795
      // 母婴主题 4040 4041 4044 4042 4043 4045
      // 潮流范 4093 
      // 特惠 4094
      // 相似推荐 13256
      // 猜你喜欢 6708  28017
      // 选品库  31519 31539	 
      material_ids: [],
      cates: [
        { name: '女装', url: 'home', class: 'cat_6', y: 3, x: 0, mid: 13367 },
        { name: '男装', url: 'home', class: 'cat_7', y: -38, x: 0, mid: 13372 },
        { name: '鞋包', url: 'home', class: 'cat_8', y: -76, x: 0, mid: 13370 },
        { name: '内衣', url: 'home', class: 'cat_9', y: -114, x: 0, mid: 13373 },
        { name: '美食', url: 'home', class: 'cat_10', y: -152, x: 0, mid: 13375 },
        { name: '美妆', url: 'home', class: 'cat_11', y: -190, x: 0, mid: 13371 },
        { name: '母婴', url: 'home', class: 'cat_12', y: -228, x: 0, mid: 13374 },
        { name: '数码', url: 'home', class: 'cat_13', y: -266, x: 0, mid: 13369 },
        { name: '运动', url: 'home', class: 'cat_26', y: -304, x: 0, mid: 13376 },
        { name: '居家', url: 'home', class: 'cat_14', y: -342, x: 0, mid: 13368 }
      ],
      left: '' 
    }
  },
  computed: {
    height () {
      var height = getClientHeight() - 170
      return height + 'px'
    }
  },
  mounted () {
    if (process.client) {
      this.handleList() // 获取列表详情
    }
  },
  watch: {
    '$route' (to, from) {
      this.handleList() // 获取列表详情
    }
  },
  head () {
    return {
      title: '首页',
      meta: [
        { hid: 'description', name: 'description', content: '这个是首页' },
        { hid: 'keywords', name: 'keywords', content: '首页' }
      ]
    }
  },
  methods: {
    accSub (arg1, arg2) {
      var r1, r2, m, n
      try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
      try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
      m = Math.pow(10, Math.max(r1, r2))
      n = (r1 >= r2) ? r1 : r2
      return ((arg1 * m - arg2 * m) / m).toFixed(n)
    },
    // 改变pagesize
    handleSizeChange (val) {
      this.page.pageSize = val
      this.handleList()
    },
    // 改变页码
    handleCurrentChange (val) {
      this.tablePage = val
      this.handleList()
    },
    // 列表接口
    handleList () {
      var mid = 31362
      if (this.$route.query.mid) {
        mid = this.$route.query.mid
      }
      this.tableLoading = true
      var params = {
        page: this.tablePage,
        limit: this.page.pageSize,
        material_id: mid
      }
      this.$store.dispatch('tbk/TbkMaterialListGet', params).then((res) => {
        // console.log(res)
        if (res.tbk_dg_optimus_material_response) {
          this.tableData = res.tbk_dg_optimus_material_response.result_list.map_data
          this.tableLoading = false
          this.page.total = 200
          this.page.currentPage = this.tablePage
        }
      })
      .catch((err) => {
        console.log(err)
        this.tableLoading = false
      })
    },
    changeStyle (params, index) {
      if (params == 'enter') {
        this.cates[index].x = -40
      } else {
        this.cates[index].x = 0
      }
    },
    goUrl (url, mid) {
      this.$router.push({
        path: url,
        query: {
          mid: mid
        }
      })
      if (mid === 4094) {
        this.clickIndex = 1
      } else if (mid === 32366) {
        this.clickIndex = 2
      } else if (mid === 4092) {
        this.clickIndex = 3
      } else if (mid === 3795) {
        this.clickIndex = 4
      } else {
        this.clickIndex = 0
      }
    }
  }
}
</script>

<style lang='scss'>
@import url(../../style/tbk/css/base.css);
@import url(../../style/tbk/css/common.css);
@import url(../../style/tbk/css/index_page.css);
.home-index {
  padding: 0px !important;
  height: auto !important;
  overflow: hidden;
  #uinfo_bar {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(238, 238, 238);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(238, 238, 238);
    height: 38px;
    background-color: rgb(245, 245, 245);
  }
  #sign_panel {
    display: inline-block;
  }

  #sign_box {
    position: relative;
    height: 40px;
  }

  #sign_box a {
    display: inline-block;
    _display: inline;
    _zoom: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    padding: 0px 10px;
  }

  #sign_box a:hover {
    text-decoration: none;
    background-color: #e02644;
    color: #fff;
  }

  #sign_box .sign-mod {
    background: #f7f7f7;
    border: 1px solid #c2c2c2;
    border-radius: 3px;
    width: 204px;
    position: absolute;
    right: 0;
    z-index: 2;
    display: none;
  }

  #sign_box .open {
    display: block;
  }

  #sign_box .sign-count {
    // background: url(home/template/jiuky/static/images/index/tiandao.png) no-repeat;
    width: 80px;
    height: 37px;
    padding: 15px 0 0 124px;
  }

  #sign_box .sign-count em {
    font: 26px/1 Arial;
    color: #ce2e20;
    vertical-align: middle;
  }

  #sign_box .sign-count i {
    // background: url(home/template/jiuky/static/images/index/tiandao.png) no-repeat 0 -56px;
    width: 26px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
  }

  #sign_box .sign-mod .rtxt {
    font: 14px/30px 'Microsoft YaHei';
    color: #292929;
    text-align: center;
    padding-right: 10px;
  }

  #sign_box .sign-mod li {
    border-bottom: 1px solid #eee;
    border-top: 1px solid #fff;
    color: #292929;
    clear: both;
    padding: 8px 10px;
    overflow: hidden;
  }

  #sign_box .sign-mod li span {
    float: left;
    line-height: 22px;
  }

  #sign_box .sign-mod li a {
    padding: 0px 3px;
    color: #fff;
    background: #e02644;
    float: right;
    border-radius: 3px;
    width: 42px;
    height: 22px;
    line-height: 22px;
    text-align: center;
  }

  .icon-sign {
    background-position: 0 0;
    width: 16px;
    height: 16px;
    float: left;
    margin-top: 13px;
    _margin-top: 11px;
    margin-right: 5px;
  }

  .icon-signed {
    background-position: -19px 0;
  }
  .w1200 {
    width: 1200px !important;
  }

  .main_new {
    width: 1200px !important;
  }

  .item1{
    background: url(../../static/img/1.jpg) center no-repeat;
  }
  .item2{
    background: url(../../static/img/2.jpg) center no-repeat;
  }
  .item3{
    background: url(../../static/img/3.jpg) center no-repeat;
  }
}
</style>
