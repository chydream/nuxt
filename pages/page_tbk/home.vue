<template>
  <div class="home-index" style="height: 1100px">
    <div
      id="uinfo_bar"
      style="
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: rgb(238, 238, 238);
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: rgb(238, 238, 238);
        height: 38px;
        background-color: rgb(245, 245, 245);
      "
    >
      <div class="header_top area w1200">
        <ul class="menu_leo">
          <!--登录前-->
          <li>
            <a
              href="-mod=user&ac=login.htm"
              tppabs="http://www.jiuky.com/?mod=user&ac=login"
              >登录</a
            >
          </li>
          <li>
            <a
              href="-mod=user&ac=register.htm"
              tppabs="http://www.jiuky.com/?mod=user&ac=register"
              >注册</a
            >
          </li>
          <!--登录后-->

          <li>
            <a
              href="gift.htm"
              tppabs="http://www.jiuky.com/gift"
              target="_blank"
              class="msg"
              ><em class="i_member">&nbsp;</em>积分商城</a
            >
          </li>
          <li class="coubei_s">
            <a
              href="business.htm"
              tppabs="http://www.jiuky.com/business"
              target="_blank"
              class="last"
              id="merchant"
              style="color: red"
              >卖家报名</a
            >
          </li>
        </ul>
        <div class="mod_topmenu fl">
          <ul class="mod_hlist">
            <li>
              <a href="index.htm" tppabs="http://www.jiuky.com/" title="九块邮"
                >九块邮</a
              >
            </li>
            <li>
              <a
                href=""
                tppabs="http://m.jiuky.com/wap"
                target="_blank"
                class="last"
                >手机版</a
              >
            </li>
            <li>
              <a
                href="javascript:if(confirm(%27http://www.jiuky.com/app/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Ultra\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://www.jiuky.com/app/%27"
                tppabs="http://www.jiuky.com/app/"
                title="九块邮APP"
                target="_blank"
                class="last"
                >手机APP</a
              >
            </li>
            <li>
              <a
                href="javascript:if(confirm(%27http://rc.qzone.qq.com/1103421435  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://rc.qzone.qq.com/1103421435%27"
                tppabs="http://rc.qzone.qq.com/1103421435"
                target="_blank"
                title="九块邮QQ应用"
                rel="nofollow"
                >九块邮QQ应用</a
              >
            </li>
            <li>
              <a
                href="index.htm"
                tppabs="http://www.jiuky.com/"
                title="9.9包邮"
                class="last"
                >9.9包邮</a
              >
            </li>
            <li>
              <a
                href="quan/index.htm"
                tppabs="http://www.jiuky.com/quan/"
                title="卷皮折扣网"
                target="_blank"
                class="last"
                >搜优惠券神器</a
              >
            </li>
            <li>
              <a
                href="gift.htm"
                tppabs="http://www.jiuky.com/gift"
                target="_blank"
                >消费保障</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div style="background: #fff">
      <div class="sec_header clearfix_f w1200">
        <!--logo-->
        <div class="left_f mod_logo">
          <h1>
            <a
              href="index.htm"
              tppabs="http://www.jiuky.com/"
              title="九块邮"
              class="mod_logo_index"
              style="
                background: url('upload/2016/06/26/22/20160626223439350.png')
                  /*tpa=http://www.jiuky.com/upload/2016/06/26/22/20160626223439350.png*/
                  no-repeat;
              "
            >
              <span class="hidden">九块邮官网</span></a
            >
            <a
              href="javascript:if(confirm(%27https://temai.taobao.com/?pid=mm_49594033_7490956_28816883  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://temai.taobao.com/?pid=mm_49594033_7490956_28816883%27"
              tppabs="https://temai.taobao.com/?pid=mm_49594033_7490956_28816883"
              title="九块九包邮特卖"
              rel="nofollow"
              ><img
                src="home/template/jiuky/static/images/index/donghua.jpg.gif"
                tppabs="http://www.jiuky.com/home/template/jiuky/static/images/index/donghua.jpg"
                alt="动画标志"
            /></a>
          </h1>
        </div>
        <a
          href="javascript:void(0);"
          target="_blank"
          style="
            display: block;
            float: left;
            margin-top: 30px;
            position: absolute;
            right: 375px;
          "
        >
          <img
            width="368"
            height="30"
            src="home/template/jiuky/static/images/links.png"
            tppabs="http://www.jiuky.com/home/template/jiuky/static/images/links.png"
            alt="消费保障图片"
            title="九块九包邮"
          />
        </a>

        <a
          href="business.htm"
          tppabs="http://www.jiuky.com/business"
          target="_blank"
          class="fr"
          style="margin-top: -25px; margin-left: 48px"
        >
          <img
            src="home/template/jiuky/static/images/top10/apply.gif"
            tppabs="http://www.jiuky.com/home/template/jiuky/static/images/top10/apply.gif"
            alt="报名入口图片"
            title="九块邮活动报名入口"
          />
        </a>
        <!--//搜索-->
        <div
          class="right_f mod_searchfull"
          style="position: absolute; right: 122px"
        >
          <div class="mod_search" id="islistshow_new" type="mall">
            <form
              action="http://www.jiuky.com/"
              method="GET"
              class="headersearch"
            >
              <div class="mod_search_bd left_f">
                <input
                  search_type="mall"
                  type="text"
                  class="ipt_search"
                  name="keyword"
                  placeholder="请输入您要找的9.9包邮宝贝"
                  autocomplete="off"
                  id="mall_searchtext"
                  search="searchtext"
                  value=""
                />
              </div>
              <button
                class="ico_gb ico_search left_f"
                type="submit"
                title="搜索"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="sec_menu">
      <div class="mod_menu w1200">
        <div id="sign_box" class="right_f">
          <a
            href="javascript:if(confirm(%27http://www.jiuky.com/app/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Ultra\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://www.jiuky.com/app/%27"
            tppabs="http://www.jiuky.com/app"
            style="
              background: url('home/template/jiuky/static/images/index/duihao.png')
                /*tpa=http://www.jiuky.com/home/template/jiuky/static/images/index/duihao.png*/
                no-repeat 10px 11px;
              padding-left: 31px;
            "
            >手机APP下载</a
          >

          <div id="sign_panel">
            <li class="qiandao">
              <a href="javascript:;" class="signin"
                ><span class="sign_txt"
                  ><em class="icon-sign"></em>签到领积分</span
                ></a
              >
              <div class="sign-mod">
                <div class="sign-count"><em>0</em><i></i></div>
                <p class="rtxt">签到即可获得<em class="red_f">1积分</em>积分</p>
                <ul>
                  <li>
                    <span>我的积分：<em class="red_f">0</em>积分</span>
                    <a
                      href="javascript:if(confirm(%27http://www.jiuky.com/?mod=user&ac=login&gourl=aHR0cDovL3d3dy5qaXVreS5jb20vP21vZD11c2VyJmFjPWNlbnRlcg==  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.jiuky.com/?mod=user&ac=login&gourl=aHR0cDovL3d3dy5qaXVreS5jb20vP21vZD11c2VyJmFjPWNlbnRlcg==%27"
                      tppabs="http://www.jiuky.com/?mod=user&ac=center"
                      target="_blank"
                      >去使用</a
                    >
                  </li>
                  <li>
                    <span>绑定账号：<em class="red_f">2</em>积分</span>
                    <a
                      target="_blank"
                      href="javascript:if(confirm(%27http://www.jiuky.com/?mod=user&ac=login&gourl=aHR0cDovL3d3dy5qaXVreS5jb20vP21vZD11c2VyJmFjPWJhc2U=  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.jiuky.com/?mod=user&ac=login&gourl=aHR0cDovL3d3dy5qaXVreS5jb20vP21vZD11c2VyJmFjPWJhc2U=%27"
                      tppabs="http://www.jiuky.com/?mod=user&ac=base"
                      >去完成</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </div>

        <ul class="mod_hlist">
          <li id="cat_cel" class="show">
            <span>全部商品分类</span>
            <ul class="cat_list clearfix_f"></ul>
          </li>
          <li class="menu_on">
            <a class="lbl_m" href="index.htm" tppabs="http://www.jiuky.com/"
              >首页<i></i
            ></a>
          </li>
          <li class="">
            <a
              class="lbl_m"
              href="goods/nine.htm"
              tppabs="http://www.jiuky.com/goods/nine"
              >9.9包邮<i></i
            ></a>
          </li>
          <li class="">
            <a
              class="lbl_m"
              href="goods/nineteen.htm"
              tppabs="http://www.jiuky.com/goods/nineteen"
              >19.9包邮<i></i
            ></a>
          </li>
          <li class="">
            <a
              class="lbl_m"
              href="goods/jingpin.htm"
              tppabs="http://www.jiuky.com/goods/jingpin"
              >精品折扣<i></i
            ></a>
          </li>
          <li class="">
            <a
              class="lbl_m"
              href="quan/index.htm"
              tppabs="http://www.jiuky.com/quan"
              target="_blank"
              >查优惠券<i></i
            ></a>
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
              <dd alt="九块邮优惠券人气榜" title="九块邮优惠券人气榜">
                <div
                  style="
                    margin-top: auto;
                    margin-bottom: auto;
                    margin-left: auto;
                    margin-right: auto;
                  "
                  id="ad1000002"
                >
                  <a
                    href="cat-6.htm"
                    tppabs="http://www.jiuky.com/cat-6"
                    target="_blank"
                    ><img
                      src="upload/2016/11/20/22/20161120220338183.jpg"
                      tppabs="http://www.jiuky.com/upload/2016/11/20/22/20161120220338183.jpg"
                  /></a>
                </div>
              </dd>
              <dd alt="九块邮" title="九块邮">
                <div
                  style="
                    margin-top: auto;
                    margin-bottom: auto;
                    margin-left: auto;
                    margin-right: auto;
                  "
                  id="ad1000003"
                >
                  <a
                    href="goods/nine.htm"
                    tppabs="http://www.jiuky.com/goods/nine"
                    target="_blank"
                    ><img
                      src="upload/2016/11/20/22/20161120220504100.jpg"
                      tppabs="http://www.jiuky.com/upload/2016/11/20/22/20161120220504100.jpg"
                  /></a>
                </div>
              </dd>
              <dd alt="淘宝优惠券" title="淘宝优惠券">
                <div
                  style="
                    margin-top: auto;
                    margin-bottom: auto;
                    margin-left: auto;
                    margin-right: auto;
                  "
                  id="ad1000004"
                >
                  <a
                    href="quan/index.htm"
                    tppabs="http://www.jiuky.com/quan/"
                    target="_blank"
                    ><img
                      src="upload/2019/03/12/11/20190312113950657.jpg"
                      tppabs="http://www.jiuky.com/upload/2019/03/12/11/20190312113950657.jpg"
                  /></a>
                </div>
              </dd>
              <dd alt="九块九包邮女装" title="九块九包邮女装">
                <div
                  style="
                    margin-top: auto;
                    margin-bottom: auto;
                    margin-left: auto;
                    margin-right: auto;
                  "
                  id="ad1000005"
                >
                  <a
                    href="cat-6.htm"
                    tppabs="http://www.jiuky.com/cat-6"
                    target="_blank"
                    ><img
                      src="upload/2016/11/20/21/20161120215457336.jpg"
                      tppabs="http://www.jiuky.com/upload/2016/11/20/21/20161120215457336.jpg"
                  /></a>
                </div>
              </dd>
              <!-- 右侧四格结束 -->
            </dl>
          </div>
        </div>
        <div class="banner_l">
          <div class="content">
            <a
              href="cat-6.htm"
              tppabs="http://www.jiuky.com/cat-6"
              class="cat_6"
              title="女装"
            >
              <i></i><span>女装</span>
            </a>
            <a
              href="cat-7.htm"
              tppabs="http://www.jiuky.com/cat-7"
              class="cat_7"
              title="男装"
            >
              <i></i><span>男装</span>
            </a>
            <a
              href="cat-8.htm"
              tppabs="http://www.jiuky.com/cat-8"
              class="cat_8"
              title="鞋品"
            >
              <i></i><span>鞋品</span>
            </a>
            <a
              href="cat-9.htm"
              tppabs="http://www.jiuky.com/cat-9"
              class="cat_9"
              title="配饰"
            >
              <i></i><span>配饰</span>
            </a>
            <a
              href="cat-10.htm"
              tppabs="http://www.jiuky.com/cat-10"
              class="cat_10"
              title="美食"
            >
              <i></i><span>美食</span>
            </a>
            <a
              href="cat-11.htm"
              tppabs="http://www.jiuky.com/cat-11"
              class="cat_11"
              title="美妆"
            >
              <i></i><span>美妆</span>
            </a>
            <a
              href="cat-12.htm"
              tppabs="http://www.jiuky.com/cat-12"
              class="cat_12"
              title="母婴"
            >
              <i></i><span>母婴</span>
            </a>
            <a
              href="cat-13.htm"
              tppabs="http://www.jiuky.com/cat-13"
              class="cat_13"
              title="数码"
            >
              <i></i><span>数码</span>
            </a>
            <a
              href="cat-26.htm"
              tppabs="http://www.jiuky.com/cat-26"
              class="cat_26"
              title="箱包"
            >
              <i></i><span>箱包</span>
            </a>
            <a
              href="cat-14.htm"
              tppabs="http://www.jiuky.com/cat-14"
              class="cat_14"
              title="居家"
            >
              <i></i><span>居家</span>
            </a>
            <a
              href="cat-22.htm"
              tppabs="http://www.jiuky.com/cat-22"
              class="cat_22"
              title="内衣"
            >
              <i></i><span>内衣</span>
            </a>
            <a
              href="cat-15.htm"
              tppabs="http://www.jiuky.com/cat-15"
              class="cat_15"
              title="文体"
            >
              <i></i><span>文体</span>
            </a>
            <a
              href="cat-23.htm"
              tppabs="http://www.jiuky.com/cat-23"
              class="cat_23"
              title="儿童"
            >
              <i></i><span>儿童</span>
            </a>
            <a
              href="cat-24.htm"
              tppabs="http://www.jiuky.com/cat-24"
              class="cat_24"
              title="家电"
            >
              <i></i><span>家电</span>
            </a>
            <a
              href="cat-25.htm"
              tppabs="http://www.jiuky.com/cat-25"
              class="cat_25"
              title="其它"
            >
              <i></i><span>其它</span>
            </a>
          </div>
        </div>
        <div class="round">
          <div class="adType"></div>
        </div>
      </div>
    </div>

    <div class="top_bar">
        <ul id="banner_list" class="banner">
            <!-- 轮换图 -->
            <li><a href="goods/nine.htm" tppabs="http://www.jiuky.com/goods/nine"
                  style="background:url(upload/2019/03/16/21/20190316211335979.jpg)/*tpa=http://www.jiuky.com/upload/2019/03/16/21/20190316211335979.jpg*/ center no-repeat;"
                  class="pic" alt="9.9包邮" title="9.9包邮"></a></li>
            <li><a href="quan/index.htm" tppabs="http://www.jiuky.com/quan/"
                  style="background:url(upload/2016/11/20/21/20161120214517246.jpg)/*tpa=http://www.jiuky.com/upload/2016/11/20/21/20161120214517246.jpg*/ center no-repeat;"
                  class="pic" alt="淘宝优惠券" title="淘宝优惠券"></a></li>
            <li><a href="quan/index.htm" tppabs="http://www.jiuky.com/quan/"
                  style="background:url(upload/2019/03/16/21/20190316211049242.png)/*tpa=http://www.jiuky.com/upload/2019/03/16/21/20190316211049242.png*/ center no-repeat;"
                  class="pic" alt="隐藏优惠券" title="隐藏优惠券"></a></li>
        </ul>
    </div>
    <!-- 今日推荐开始 -->
<div class="recommended-box" id="js-recommended-box">
    <div class="wel_tle">
        <h2 class="tle"><span class="ico1"></span>人气推荐单品</h2>

        <span class="countdown"> <span class="left-time">本场剩余：</span> <span id="day_show"></span> </span>
        <div class="right_f bh-control"><a href="javascript:;" class="bh-prev"></a> <a href="javascript:;"
                                                                                       class="bh-next bh-next-allowClick"></a>
        </div>
    </div>
    <div class="product-box clearfix" id="js-recommended-product-box">
    </div>
</div>
<!-- </div> -->
<!-- </div> -->
<!-- 今日推荐结束 -->
<div class="wel_tle w1200" id="glist">
    <div class="topbar_link">
    </div>
    <div class="prolist_type"><span>列表：</span> <a rel="nofollow" href="javascript:void(0);" class="switch"
                                                  col="3">五格</a> <a rel="nofollow" href="javascript:void(0);"
                                                                    class="switch on" col="4">四格</a><span>排序：</span>
        <a href="sort-new.htm" tppabs="http://www.jiuky.com/sort-new"
           class="">最新</a> <a href="sort-hot.htm" tppabs="http://www.jiuky.com/sort-hot"
                              class="">最热</a>
    </div>
    <h2 class="tle"><span class="ico2"></span>人气推荐单品 </h2>
    <!--//分类带图标开始-->
    <div class="topbar_link">
        <a class="on" href="#">全部</a>
        <a href="cat-6.htm" tppabs="http://www.jiuky.com/cat-6">
            <i class="cat_1"></i>
            女装 </a>
        <a href="cat-7.htm" tppabs="http://www.jiuky.com/cat-7">
            <i class="cat_2"></i>
            男装 </a>
        <a href="cat-8.htm" tppabs="http://www.jiuky.com/cat-8">
            <i class="cat_3"></i>
            鞋包 </a>
        <a href="cat-9.htm" tppabs="http://www.jiuky.com/cat-9">
            <i class="cat_4"></i>
            配饰 </a>
        <a href="cat-10.htm" tppabs="http://www.jiuky.com/cat-10">
            <i class="cat_5"></i>
            美食 </a>
        <a href="cat-11.htm" tppabs="http://www.jiuky.com/cat-11">
            <i class="cat_6"></i>
            美妆 </a>
        <a href="cat-12.htm" tppabs="http://www.jiuky.com/cat-12">
            <i class="cat_7"></i>
            母婴 </a>
        <a href="cat-13.htm" tppabs="http://www.jiuky.com/cat-13">
            <i class="cat_8"></i>
            数码 </a>
        <a href="cat-14.htm" tppabs="http://www.jiuky.com/cat-14">
            <i class="cat_9"></i>
            居家 </a>
        <a href="cat-15.htm" tppabs="http://www.jiuky.com/cat-15">
            <i class="cat_10"></i>
            文体 </a>
    </div>
    <!-- </span> -->
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
      // this.handleList() // 获取列表详情
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
}
</style>
