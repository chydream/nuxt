<template>
  <div class="home-index">
    <div id="uinfo_bar" style="">
      <div class="header_top area w1200">
        <ul class="menu_leo">
          <!--登录前-->
          <li>
            <a href="http://www.jiuky.com/?mod=user&amp;ac=login">登录</a>
          </li>
          <li>
            <a href="http://www.jiuky.com/?mod=user&amp;ac=register">注册</a>
          </li>
          <!--登录后-->

          <li>
            <a href="http://www.jiuky.com/gift" target="_blank" class="msg"
              ><em class="i_member">&nbsp;</em>积分商城</a
            >
          </li>
          <li class="coubei_s">
            <a
              href="http://www.jiuky.com/business"
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
            <li><a href="http://www.jiuky.com" title="九块邮">九块邮</a></li>
            <li>
              <a href="http://m.jiuky.com/wap" target="_blank" class="last"
                >手机版</a
              >
            </li>
            <li>
              <a href="app/" title="九块邮APP" target="_blank" class="last"
                >手机APP</a
              >
            </li>
            <li>
              <a
                href="http://rc.qzone.qq.com/1103421435"
                target="_blank"
                title="九块邮QQ应用"
                rel="nofollow"
                >九块邮QQ应用</a
              >
            </li>
            <li>
              <a href="http://www.jiuky.com/" title="9.9包邮" class="last"
                >9.9包邮</a
              >
            </li>
            <li>
              <a
                href="http://www.jiuky.com/quan/"
                title="卷皮折扣网"
                target="_blank"
                class="last"
                >搜优惠券神器</a
              >
            </li>
            <li>
              <a href="http://www.jiuky.com/gift" target="_blank">消费保障</a>
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
              href="http://www.jiuky.com"
              title="九块邮"
              class="mod_logo_index"
              style="
                background: url('./upload/2016/06/26/22/20160626223439350.png')
                  no-repeat;
              "
            >
              <span class="hidden">九块邮官网</span></a
            >
            <a
              href="https://temai.taobao.com/?pid=mm_49594033_7490956_28816883"
              title="九块九包邮特卖"
              rel="nofollow"
              ><img
                src="/home/template/jiuky/static/images/index/donghua.jpg"
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
          <!-- <img
            width="368"
            height="30"
            src="./home/template/jiuky/static/images/links.png"
            alt="消费保障图片"
            title="九块九包邮"
          /> -->
        </a>

        <a
          href="http://www.jiuky.com/business"
          target="_blank"
          class="fr"
          style="margin-top: -25px; margin-left: 48px"
        >
          <!-- <img
            src="./home/template/jiuky/static/images/top10/apply.gif"
            alt="报名入口图片"
            title="九块邮活动报名入口"
          /> -->
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
            href="app"
            style="
              background: url('/home/template/jiuky/static/images/index/duihao.png')
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
                      href="http://www.jiuky.com/?mod=user&amp;ac=center"
                      target="_blank"
                      >去使用</a
                    >
                  </li>
                  <li>
                    <span>绑定账号：<em class="red_f">2</em>积分</span>
                    <a
                      target="_blank"
                      href="http://www.jiuky.com/?mod=user&amp;ac=base"
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
            <a class="lbl_m" href="http://www.jiuky.com/">首页<i></i></a>
          </li>
          <li class="">
            <a class="lbl_m" href="http://www.jiuky.com/goods/nine"
              >9.9包邮<i></i
            ></a>
          </li>
          <li class="">
            <a class="lbl_m" href="http://www.jiuky.com/goods/nineteen"
              >19.9包邮<i></i
            ></a>
          </li>
          <li class="">
            <a class="lbl_m" href="http://www.jiuky.com/goods/jingpin"
              >精品折扣<i></i
            ></a>
          </li>
          <li class="">
            <a class="lbl_m" href="/quan" target="_blank">查优惠券<i></i></a>
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
            <a href="http://www.jiuky.com/cat-6" class="cat_6" title="女装">
              <i style="background-position: 0px 3px"></i><span>女装</span>
            </a>
            <a href="http://www.jiuky.com/cat-7" class="cat_7" title="男装">
              <i style="background-position: 0px -38px"></i><span>男装</span>
            </a>
            <a href="http://www.jiuky.com/cat-8" class="cat_8" title="鞋品">
              <i style="background-position: 0px -76px"></i><span>鞋品</span>
            </a>
            <a href="http://www.jiuky.com/cat-9" class="cat_9" title="配饰">
              <i style="background-position: 0px -114px"></i><span>配饰</span>
            </a>
            <a href="http://www.jiuky.com/cat-10" class="cat_10" title="美食">
              <i style="background-position: 0px -152px"></i><span>美食</span>
            </a>
            <a href="http://www.jiuky.com/cat-11" class="cat_11" title="美妆">
              <i style="background-position: 0px -190px"></i><span>美妆</span>
            </a>
            <a href="http://www.jiuky.com/cat-12" class="cat_12" title="母婴">
              <i style="background-position: 0px -228px"></i><span>母婴</span>
            </a>
            <a href="http://www.jiuky.com/cat-13" class="cat_13" title="数码">
              <i style="background-position: 0px -266px"></i><span>数码</span>
            </a>
            <a href="http://www.jiuky.com/cat-26" class="cat_26" title="箱包">
              <i style="background-position: 0px -304px"></i><span>箱包</span>
            </a>
            <a href="http://www.jiuky.com/cat-14" class="cat_14" title="居家">
              <i style="background-position: 0px -342px"></i><span>居家</span>
            </a>
            <a href="http://www.jiuky.com/cat-22" class="cat_22" title="内衣">
              <i></i><span>内衣</span>
            </a>
            <a href="http://www.jiuky.com/cat-15" class="cat_15" title="文体">
              <i></i><span>文体</span>
            </a>
            <a href="http://www.jiuky.com/cat-23" class="cat_23" title="儿童">
              <i></i><span>儿童</span>
            </a>
            <a href="http://www.jiuky.com/cat-24" class="cat_24" title="家电">
              <i></i><span>家电</span>
            </a>
            <a href="http://www.jiuky.com/cat-25" class="cat_25" title="其它">
              <i></i><span>其它</span>
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
          <a
            href="goods/nine"
            style="
              background: url(./upload/2019/03/16/21/20190316211335979.jpg)
                center no-repeat;
            "
            class="pic"
            alt="9.9包邮"
            title="9.9包邮"
          ></a>
        </li>
        <li style="display: none">
          <a
            href="/quan/"
            style="
              background: url(./upload/2016/11/20/21/20161120214517246.jpg)
                center no-repeat;
            "
            class="pic"
            alt="淘宝优惠券"
            title="淘宝优惠券"
          ></a>
        </li>
        <li style="display: none">
          <a
            href="/quan/"
            style="
              background: url(./upload/2019/03/16/21/20190316211049242.png)
                center no-repeat;
            "
            class="pic"
            alt="隐藏优惠券"
            title="隐藏优惠券"
          ></a>
        </li>
      </ul>
    </div>

    <div class="wel_tle w1200" id="glist">
      <div class="topbar_link"></div>
      <div class="prolist_type">
        <span>列表：</span>
        <a rel="nofollow" href="javascript:void(0);" class="switch" col="3"
          >五格</a
        >
        <a rel="nofollow" href="javascript:void(0);" class="switch on" col="4"
          >四格</a
        ><span>排序：</span>
        <a href="http://www.jiuky.com/sort-new" class="">最新</a>
        <a href="http://www.jiuky.com/sort-hot" class="">最热</a>
      </div>
      <h2 class="tle"><span class="ico2"></span>人气推荐单品</h2>
      <!--//分类带图标开始-->
      <div class="topbar_link">
        <a class="on" href="#">全部</a>
        <a href="cat-6">
          <i class="cat_1"></i>
          女装
        </a>
        <a href="cat-7">
          <i class="cat_2"></i>
          男装
        </a>
        <a href="cat-8">
          <i class="cat_3"></i>
          鞋包
        </a>
        <a href="cat-9">
          <i class="cat_4"></i>
          配饰
        </a>
        <a href="cat-10">
          <i class="cat_5"></i>
          美食
        </a>
        <a href="cat-11">
          <i class="cat_6"></i>
          美妆
        </a>
        <a href="cat-12">
          <i class="cat_7"></i>
          母婴
        </a>
        <a href="cat-13">
          <i class="cat_8"></i>
          数码
        </a>
        <a href="cat-14">
          <i class="cat_9"></i>
          居家
        </a>
        <a href="cat-15">
          <i class="cat_10"></i>
          文体
        </a>
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
                <a href="http://www.jiuky.com/cat-6" title="女装" class=""
                  >女装</a
                >
                <a href="http://www.jiuky.com/cat-7" title="男装" class=""
                  >男装</a
                >
                <a href="http://www.jiuky.com/cat-8" title="鞋品" class=""
                  >鞋品</a
                >
                <a href="http://www.jiuky.com/cat-9" title="配饰" class=""
                  >配饰</a
                >
                <a href="http://www.jiuky.com/cat-10" title="美食" class=""
                  >美食</a
                >
                <a href="http://www.jiuky.com/cat-11" title="美妆" class=""
                  >美妆</a
                >
                <a href="http://www.jiuky.com/cat-12" title="母婴" class=""
                  >母婴</a
                >
                <a href="http://www.jiuky.com/cat-13" title="数码" class=""
                  >数码</a
                >
                <a href="http://www.jiuky.com/cat-26" title="箱包" class=""
                  >箱包</a
                >
                <a href="http://www.jiuky.com/cat-14" title="居家" class=""
                  >居家</a
                >
                <a href="http://www.jiuky.com/cat-22" title="内衣" class=""
                  >内衣</a
                >
                <a href="http://www.jiuky.com/cat-15" title="文体" class=""
                  >文体</a
                >
                <a href="http://www.jiuky.com/cat-23" title="儿童" class=""
                  >儿童</a
                >
                <a href="http://www.jiuky.com/cat-24" title="家电" class=""
                  >家电</a
                >
                <a href="http://www.jiuky.com/cat-25" title="其它" class=""
                  >其它</a
                >
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
              <a title="查询淘宝|天猫优惠券" href="quan/" target="_blank"
                ><span style="color: #ff0000; font-weight: bold"
                  >查优惠券</span
                ></a
              ><!--<em class="l2">14</em>-->
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main_new clearfix_f" id="ajaxgoods">
      <!-- 主体内容 -->
      <div class="buy_goods fl_1 poster_wall s_page_1">
        <div class="new"></div>

        <a class="my-like" onclick="goodsfav('16340524')" title="加入收藏">
          <i class="like-ico"
            ><span class="heart_left"></span><span class="heart_right"></span
          ></i>
        </a>
        <a
          href="http://www.jiuky.com/goods/detail/iid-543154898533"
          target="_blank"
        >
          <img
            class="shop-img lazy"
            src="https://img.alicdn.com/imgextra/i1/2202445796/O1CN01fV0um81sgcCAdi2aT_!!2202445796.jpg_310x310.jpg"
            data-original="https://img.alicdn.com/imgextra/i1/2202445796/O1CN01fV0um81sgcCAdi2aT_!!2202445796.jpg_310x310.jpg"
            alt="【优香】腰背颈椎暖宫生姜贴20贴"
            rel="nofollow"
            style="display: inline"
          />
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a
              href="http://www.jiuky.com/goods/detail/iid-543154898533"
              target="_blank"
              title="【优香】腰背颈椎暖宫生姜贴20贴"
            >
              【优香】腰背颈椎暖宫生姜贴20贴
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">6.8</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> 2.5 折</span><br /><s>原价¥26.8</s>
            </div>
            <div
              class="pold"
              style="float: right; text-align: right; margin-right: 5px"
            >
              <span class="pnum pnum_tmall"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a
                  href="http://www.jiuky.com/jump/iid-543154898533"
                  target="_blank"
                  num_iid="543154898533"
                  rel="nofollow"
                >
                  <span class="sale-title-font pline">
                    <em>20元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span
                class="fsettime"
                timeof="2020-11-28 07:54:40"
                endtime="1606521280"
                >剩余29天22时34分41秒</span
              >
            </div>
            <a
              title="领券抢购"
              href="http://www.jiuky.com/jump/iid-543154898533"
              target="_blank"
              class="go-buy tmall-buy"
              rel="nofollow"
            >
              领券抢购
            </a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出17889件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a
            href="http://www.jiuky.com/jump/iid-543154898533"
            target="_blank"
            num_iid="543154898533"
            rel="nofollow"
          >
            <span class="qg-img-tag"><em>20元</em></span>
          </a>
        </div>
      </div>
      <div class="buy_goods fl_1 poster_wall s_page_1">
        <div class="new"></div>

        <a class="my-like" onclick="goodsfav('16340615')" title="加入收藏">
          <i class="like-ico"
            ><span class="heart_left"></span><span class="heart_right"></span
          ></i>
        </a>
        <a
          href="http://www.jiuky.com/goods/detail/iid-543266986647"
          target="_blank"
        >
          <img
            class="shop-img lazy"
            src="https://img.alicdn.com/imgextra/i2/3012913363/O1CN01OXfYot1aiIaeuqW5U_!!3012913363.jpg_310x310.jpg"
            data-original="https://img.alicdn.com/imgextra/i2/3012913363/O1CN01OXfYot1aiIaeuqW5U_!!3012913363.jpg_310x310.jpg"
            alt="【南极人】纯棉大毛巾2条"
            rel="nofollow"
            style="display: inline"
          />
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a
              href="http://www.jiuky.com/goods/detail/iid-543266986647"
              target="_blank"
              title="【南极人】纯棉大毛巾2条"
            >
              【南极人】纯棉大毛巾2条
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">9.8</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> 6.6 折</span><br /><s>原价¥14.8</s>
            </div>
            <div
              class="pold"
              style="float: right; text-align: right; margin-right: 5px"
            >
              <span class="pnum pnum_tmall"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a
                  href="http://www.jiuky.com/jump/iid-543266986647"
                  target="_blank"
                  num_iid="543266986647"
                  rel="nofollow"
                >
                  <span class="sale-title-font pline">
                    <em>5元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span
                class="fsettime"
                timeof="2020-11-28 07:54:40"
                endtime="1606521280"
                >剩余29天22时34分41秒</span
              >
            </div>
            <a
              title="领券抢购"
              href="http://www.jiuky.com/jump/iid-543266986647"
              target="_blank"
              class="go-buy tmall-buy"
              rel="nofollow"
            >
              领券抢购
            </a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出146636件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a
            href="http://www.jiuky.com/jump/iid-543266986647"
            target="_blank"
            num_iid="543266986647"
            rel="nofollow"
          >
            <span class="qg-img-tag"><em>5元</em></span>
          </a>
        </div>
      </div>
      <div class="buy_goods fl_1 poster_wall s_page_1">
        <div class="new"></div>

        <a class="my-like" onclick="goodsfav('16340536')" title="加入收藏">
          <i class="like-ico"
            ><span class="heart_left"></span><span class="heart_right"></span
          ></i>
        </a>
        <a
          href="http://www.jiuky.com/goods/detail/iid-544554125911"
          target="_blank"
        >
          <img
            class="shop-img lazy"
            src="http://img.alicdn.com/imgextra/i3/3111150848/O1CN01onbdx71I8QPFO3ciH_!!3111150848.jpg_310x310.jpg"
            data-original="http://img.alicdn.com/imgextra/i3/3111150848/O1CN01onbdx71I8QPFO3ciH_!!3111150848.jpg_310x310.jpg"
            alt="【贝印旗舰店】日本专业修眉刀刮眉"
            rel="nofollow"
            style="display: inline"
          />
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a
              href="http://www.jiuky.com/goods/detail/iid-544554125911"
              target="_blank"
              title="【贝印旗舰店】日本专业修眉刀刮眉"
            >
              【贝印旗舰店】日本专业修眉刀刮眉
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">10.9</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> 8.4 折</span><br /><s>原价¥12.9</s>
            </div>
            <div
              class="pold"
              style="float: right; text-align: right; margin-right: 5px"
            >
              <span class="pnum pnum_tmall"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a
                  href="http://www.jiuky.com/jump/iid-544554125911"
                  target="_blank"
                  num_iid="544554125911"
                  rel="nofollow"
                >
                  <span class="sale-title-font pline">
                    <em>2元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span
                class="fsettime"
                timeof="2020-11-28 07:54:40"
                endtime="1606521280"
                >剩余29天22时34分41秒</span
              >
            </div>
            <a
              title="领券抢购"
              href="http://www.jiuky.com/jump/iid-544554125911"
              target="_blank"
              class="go-buy tmall-buy"
              rel="nofollow"
            >
              领券抢购
            </a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出45354件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a
            href="http://www.jiuky.com/jump/iid-544554125911"
            target="_blank"
            num_iid="544554125911"
            rel="nofollow"
          >
            <span class="qg-img-tag"><em>2元</em></span>
          </a>
        </div>
      </div>
      <div class="buy_goods fl_1 poster_wall s_page_1">
        <div class="new"></div>

        <a class="my-like" onclick="goodsfav('16340622')" title="加入收藏">
          <i class="like-ico"
            ><span class="heart_left"></span><span class="heart_right"></span
          ></i>
        </a>
        <a
          href="http://www.jiuky.com/goods/detail/iid-12999940389"
          target="_blank"
        >
          <img
            class="shop-img lazy"
            src="https://img.alicdn.com/imgextra/i4/3401393037/O1CN0122xyBS1YIzTNcg5hO_!!3401393037.jpg_310x310.jpg"
            data-original="https://img.alicdn.com/imgextra/i4/3401393037/O1CN0122xyBS1YIzTNcg5hO_!!3401393037.jpg_310x310.jpg"
            alt="贝倍舒宝宝润肤霜儿童面霜保湿乳"
            rel="nofollow"
            style="display: inline"
          />
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a
              href="http://www.jiuky.com/goods/detail/iid-12999940389"
              target="_blank"
              title="贝倍舒宝宝润肤霜儿童面霜保湿乳"
            >
              贝倍舒宝宝润肤霜儿童面霜保湿乳
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">33</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> 8.7 折</span><br /><s>原价¥38.0</s>
            </div>
            <div
              class="pold"
              style="float: right; text-align: right; margin-right: 5px"
            >
              <span class="pnum pnum_tmall"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a
                  href="http://www.jiuky.com/jump/iid-12999940389"
                  target="_blank"
                  num_iid="12999940389"
                  rel="nofollow"
                >
                  <span class="sale-title-font pline">
                    <em>5元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span
                class="fsettime"
                timeof="2020-11-28 07:54:40"
                endtime="1606521280"
                >剩余29天22时34分41秒</span
              >
            </div>
            <a
              title="领券抢购"
              href="http://www.jiuky.com/jump/iid-12999940389"
              target="_blank"
              class="go-buy tmall-buy"
              rel="nofollow"
            >
              领券抢购
            </a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出104982件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a
            href="http://www.jiuky.com/jump/iid-12999940389"
            target="_blank"
            num_iid="12999940389"
            rel="nofollow"
          >
            <span class="qg-img-tag"><em>5元</em></span>
          </a>
        </div>
      </div>
      <div class="buy_goods fl_1 poster_wall s_page_1">
        <div class="new"></div>

        <a class="my-like" onclick="goodsfav('16340572')" title="加入收藏">
          <i class="like-ico"
            ><span class="heart_left"></span><span class="heart_right"></span
          ></i>
        </a>
        <a
          href="http://www.jiuky.com/goods/detail/iid-574851036498"
          target="_blank"
        >
          <img
            class="shop-img lazy"
            src="http://img-haodanku-com.cdn.fudaiapp.com/oimg_574851036498_1597559994.jpg_310x310.jpg"
            data-original="http://img-haodanku-com.cdn.fudaiapp.com/oimg_574851036498_1597559994.jpg_310x310.jpg"
            alt="小黑裙香氛控油去屑洗发水"
            rel="nofollow"
            style="display: inline"
          />
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a
              href="http://www.jiuky.com/goods/detail/iid-574851036498"
              target="_blank"
              title="小黑裙香氛控油去屑洗发水"
            >
              小黑裙香氛控油去屑洗发水
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">6.9</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> 1.9 折</span><br /><s>原价¥36.9</s>
            </div>
            <div
              class="pold"
              style="float: right; text-align: right; margin-right: 5px"
            >
              <span class="pnum pnum_tmall"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a
                  href="http://www.jiuky.com/jump/iid-574851036498"
                  target="_blank"
                  num_iid="574851036498"
                  rel="nofollow"
                >
                  <span class="sale-title-font pline">
                    <em>30元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span
                class="fsettime"
                timeof="2020-11-28 07:54:40"
                endtime="1606521280"
                >剩余29天22时34分41秒</span
              >
            </div>
            <a
              title="领券抢购"
              href="http://www.jiuky.com/jump/iid-574851036498"
              target="_blank"
              class="go-buy tmall-buy"
              rel="nofollow"
            >
              领券抢购
            </a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出81188件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a
            href="http://www.jiuky.com/jump/iid-574851036498"
            target="_blank"
            num_iid="574851036498"
            rel="nofollow"
          >
            <span class="qg-img-tag"><em>30元</em></span>
          </a>
        </div>
      </div>
      <div class="buy_goods fl_1 poster_wall s_page_1">
        <div class="new"></div>

        <a class="my-like" onclick="goodsfav('16340599')" title="加入收藏">
          <i class="like-ico"
            ><span class="heart_left"></span><span class="heart_right"></span
          ></i>
        </a>
        <a
          href="http://www.jiuky.com/goods/detail/iid-576250022235"
          target="_blank"
        >
          <img
            class="shop-img lazy"
            src="https://img.alicdn.com/imgextra/i4/2543810588/O1CN01qdoyvs1GDLSyFGUOd_!!2543810588.png_310x310.jpg"
            data-original="https://img.alicdn.com/imgextra/i4/2543810588/O1CN01qdoyvs1GDLSyFGUOd_!!2543810588.png_310x310.jpg"
            alt="【娇赞】潮流嘻哈中筒袜10双"
            rel="nofollow"
            style="display: inline"
          />
          <div class="clear_f"></div>
        </a>
        <div class="goods-detail">
          <p class="name-goods">
            <a
              href="http://www.jiuky.com/goods/detail/iid-576250022235"
              target="_blank"
              title="【娇赞】潮流嘻哈中筒袜10双"
            >
              【娇赞】潮流嘻哈中筒袜10双
            </a>
          </p>
          <div class="info-goods">
            <span title="价格" class="f-18">¥</span>
            <span class="f-14">9.8</span>
            <div title="折扣" class="pold" style="margin-left: 3px">
              <span class="pnum"> 6.6 折</span><br /><s>原价¥14.8</s>
            </div>
            <div
              class="pold"
              style="float: right; text-align: right; margin-right: 5px"
            >
              <span class="pnum pnum_tmall"> </span><br />
              <span class="sale-title">
                <i class="icon icon-pJuan">领券</i>
                <a
                  href="http://www.jiuky.com/jump/iid-576250022235"
                  target="_blank"
                  num_iid="576250022235"
                  rel="nofollow"
                >
                  <span class="sale-title-font pline">
                    <em>5元券</em>
                  </span>
                </a>
              </span>
            </div>
          </div>
          <div class="newdeal">
            <div class="newdeal-left">
              <i class="time"></i>
              <span
                class="fsettime"
                timeof="2020-11-28 07:54:40"
                endtime="1606521280"
                >剩余29天22时34分41秒</span
              >
            </div>
            <a
              title="领券抢购"
              href="http://www.jiuky.com/jump/iid-576250022235"
              target="_blank"
              class="go-buy tmall-buy"
              rel="nofollow"
            >
              领券抢购
            </a>
            <div class="newdeal-right">
              <span class="red_f f-c" style=""> </span>已售出66430件
            </div>
          </div>
          <div class="quanhoujiage"></div>
          <a
            href="http://www.jiuky.com/jump/iid-576250022235"
            target="_blank"
            num_iid="576250022235"
            rel="nofollow"
          >
            <span class="qg-img-tag"><em>5元</em></span>
          </a>
        </div>
      </div>
    </div>

    <div class="clear"></div>
    
    <div class="page area">
      <div class="list_page">
        <span class="page current"><a href="javascript:void(0);">1</a></span
        ><span class="page"><a href="http://www.jiuky.com/start-100">2</a></span
        ><span class="page"><a href="http://www.jiuky.com/start-200">3</a></span
        ><span class="page"><a href="http://www.jiuky.com/start-300">4</a></span
        ><span class="page"><a href="http://www.jiuky.com/start-400">5</a></span
        ><span class="page"><a href="http://www.jiuky.com/start-500">6</a></span
        ><span class="fl"></span
        ><span class="page"
          ><a href="http://www.jiuky.com/start-233400">2335</a></span
        ><span class="next"
          ><a href="http://www.jiuky.com/start-100" style="width: 80px"
            >下一页</a
          ></span
        >
      </div>
    </div>

    <div class="footer-new about">
      <div class="foot auo">
        <div class="foot_info">
          <div class="follow">
            <img src="" alt="九块邮logo" title="九块邮" />
          </div>

          <div class="info_text">
            <p>
              <a href="http://www.jiuky.com" target="_blank">九块邮官网</a>
              九块邮旗下品牌 Rights Reserved 九块邮官网 Copyright @ 2014-2016
              jiuky.com <br />
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
              <img src="" alt="实名验证" title="九块邮官网" />
            </dd>
          </dl>
          <dl class="link_company left_f">
            <dt class="mb10">关于我们</dt>

            <dd class="lh20">
              <a href="http://www.jiuky.com/help/info/cid-3">关于我们</a>
            </dd>
            <dd class="lh20">
              <a href="http://www.jiuky.com/help/info/cid-4">帮助中心</a>
            </dd>
            <dd class="lh20">
              <a href="http://www.jiuky.com/help/info/cid-5">商务合作</a>
            </dd>
          </dl>
          <dl class="link_company left_f">
            <dt class="mb10">商务合作</dt>
            <dd class="lh20">
              <a href="http://www.jiuky.com/help/link" target="_blank"
                >友情链接</a
              >
            </dd>

            <dd class="lh20">
              <a href="./?mod=business" style="color: ">免费报名</a>
            </dd>
            <dd class="lh20">
              <a
                href="http://www.jiuky.com/desktop"
                target="_blank"
                rel="nofollow"
                >放入桌面</a
              >
            </dd>
          </dl>
          <dl class="link_company left_f">
            <dt class="mb10">网站导航</dt>
            <dd class="lh20">
              <a href="http://www.jiuky.com/" target="_blank">九块邮</a>
            </dd>

            <dd class="lh20">
              <a href="http://www.jiuky.com/goods/nine" target="_blank"
                >9.9包邮</a
              >
            </dd>

            <dd class="lh20">
              <a href="http://www.jiuky.com/" target="_blank">九块九包邮</a>
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
              <a href="http://www.jiuky.com/" target="_blank">九块邮官网</a>
            </li>
          </ul>
        </div>
        <a href="http://www.jiuky.com/help/link" target="_blank" class="more">更多&gt;&gt;</a>
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
}
</style>
