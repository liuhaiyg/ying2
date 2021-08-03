<template>
  <div class="home">
        <div class="container">
            <div class="con-logo">
                <img src="./assets/img/ia_100000415.png" width="56" height="56" />
            </div>
            <div class="con-nav">
                <ul class="nav-list">
                <li v-for="(p, index) in nav_list" :key="index">
                    <a href="##" class="first">{{ p.name }}</a>
                </li>
                </ul>
            </div>
            <!-- 搜索模块 -->
            <form class="con-search">
                <input type="text" class="search" value="耳机" />
                <button class="submit">
                <img
                    src="./assets/img/搜索.png"
                    width="20"
                    height="20"
                    class="submitimg"
                />
                </button>
                <div class="search-list">
                <ul>
                    <li class="list-first" v-for="l in search_list" :key="l.id">
                    <a href="##">{{ l.name }}</a>
                    </li>
                </ul>
                </div>
            </form>
        </div>
        <!-- 隐藏模块 -->
        <div class="contair1" v-for="(p, index) in nav_list" :key="index">
        <ul>
            <router-link to="/phone">
            <li v-for="(c, index1) in p.imgarr" :key="index1">
                <a href="##">
                <div class="list-img">
                    <img :src="c.pic" width="160" height="110" />
                </div>
                <p class="title">{{ c.title }}</p>
                <p class="price">{{ c.price }}</p>
                </a>
            </li>
            </router-link>
        </ul>
        </div>
        <!-- 轮播 -->
        <div class="lunbo">
            <div class="block">
                <span class="demonstration"></span>
                <el-carousel trigger="click" height="460px">
                    <el-carousel-item v-for="(item,index) in lunbo" :key="index">
                        <img :src="item.pic" />
                    </el-carousel-item>
                    <ul class="aside">
                        <li class="list-item" v-for="(b,index) in aside1" :key="index.id">
                            <a href="##" class="title" id="title">{{b.name}}
                                <em class="item-jiao"><img :src="b.pic" width="16" height="16"></em>
                            </a>
                            <div class="item1" id="item1">
                                <ul class="children-list" v-for="(e,index) in b.item1" :key="index">
                                    <li v-for="(d,index) in e.item2" :key="index">
                                        <a href="##" class="link">
                                            <img :src="d.pic" class="thumb" width="40" height="40">
                                            <span class="text">{{d.name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div> 
                        </li>  
                    </ul>
                </el-carousel>
            </div>         
        </div>
        <div class="hero-sub">
              <ul class="span1">
                  <li v-for="(f,index) in span1" :key="index">
                    <a href="##"><img :src="f.pic">{{f.text}}</a>
                  </li>
              </ul>
              <ul class="span2">
                <router-link to="/nav">
                    <li v-for="(g,index) in span2" :key="index"><a href="##"><img :src="g.pic"></a></li>
                </router-link>
              </ul>
        </div>
        <!-- 中间部分 -->
        <div class="page-main">
            <div class="main-contair">
              <div v-for="(h,index) in bannerbox1" :key="index">
                <!-- 手机模块 -->
                <div class="banner-box1">
                    <img :src="h.pic" width="1226" height="120">
                </div>
                <div class="main-title">
                    <h2>{{h.name}}</h2>
                    <div class="more">
                        <a href="##" style="border-bottom: 0px;" v-for="aa in (h.small)" :key="aa.id">{{aa.r_name}}
                            <b>{{aa.fuhao}}</b>
                        </a>                                           
                    </div>                   
                </div>
                <div class="main-hb">
                    <ul class="hb-R">
                        <li v-for="(i,index) in h.hbR" :key="index"><a href="##"><img :src="i.pic"></a></li>
                    </ul>
                    <div class="hb-L">
                        <ul class="banner1" v-for="(j,index) in h.banner1" :key="index">
                          <router-link to="/nav">
                            <li class="banner1-item" v-for="(k,index) in j.banner1item" :key="index">
                                <a href="##">
                                    <div class="item-img">
                                        <img :src="k.pic" width="160" height="160">
                                    </div>
                                    <h3>{{k.name}}</h3>
                                    <p class="desc">{{k.desc}}</p>
                                    <span class="num">{{k.num}}</span>
                                    <del class="num2">{{k.num2}}</del>
                                </a>
                            </li>
                          </router-link>
                        </ul>
                  </div>
                </div>             
              </div>
              <!-- 视频模块 -->
              <div v-for="(ll,index) in bannerbox2" :key="index.aa">
                <div class="banner-box1">
                    <img :src="ll.pic" width="1226" height="120">
                </div>
                <div class="main-title">
                    <h2>{{ll.name}}</h2>
                    <div class="more">
                        <a href="##" style="border-bottom: 0px;" v-for="(m,index) in ll.small" :key="index.cc">{{m.r_name}}
                            <b>{{m.fuhao}}</b>
                        </a>                                           
                    </div>
                </div>
                <div class="main-hd">
                    <ul class="video-list">
                        <li class="video-item" v-for="(n,index) in ll.videoitem" :key="index">
                            <a href="##" title="点击播放视频">
                                <div class="video-img">
                                    <img :src="n.pic" width="296" height="180">
                                    <span class="play">
                                        <i></i>
                                    </span>                                    
                                </div>
                                <h3>{{n.name}}</h3>
                                <p>{{n.text}}</p>                             
                            </a>
                        </li>
                    </ul>
                </div>
             </div>
            </div>
        </div>
        <!-- 视频播放 -->
        <div class="pop" style="display: none;" v-for="(o,index) in pop" :key="index.dd">
            <div class="pop-opacity"></div>
            <div class="pop-video">
                <div class="pop-header">
                    <span class="pop-text">{{o.text}}</span>
                    <span class="pop-del">{{o.del}}</span>
                </div>
                <div class="pop-mp4">
                    <video class="Player" autoplay="autoplay" loop="loop" controls muted="muted">
                        <source :src="o.video" class="source">
                    </video>
                </div>
            </div>
        </div>
        <div class="aside1">
            <a class="aside1-item" v-for="(q,index) in aside" :key="index">
                <div class="aside1-imgs">
                    <img :src="q.pic" class="aside1-img1">
                </div>
                <span class="aside1-text">{{q.text}}</span>
            </a>
            <div class="aside1-content">
                <img src="./assets/img/ia_100000351.png" class="content-img">  
                <span class="content-desc">扫码领取新人百元红包</span>
            </div>
        </div>

  </div>
</template>
<style>
@import url(./assets/css/home.css);

</style>
<script>
export default {
  data() {
    return {
      nav_list: [
        {
          id: 1,
          name: "小米手机",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000154.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000155.webp",
              title: "小米11 Ultra",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000156.webp",
              title: "小米11 Pro",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000157.webp",
              title: "小米11 青春版",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000158.webp",
              title: "小米10S",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000159.webp",
              title: "小米11",
              price: "9999元起",
            },
          ],
        },
        {
          id: 2,
          name: "Redmin红米",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000244.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000245.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000246.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000247.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000248.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000249.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 3,
          name: "电视",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000244.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000245.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000246.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000247.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000248.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000249.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 4,
          name: "笔记本",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000244.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000245.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000246.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000247.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000248.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000249.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 5,
          name: "家电",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000244.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000245.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000246.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000247.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000248.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000249.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 6,
          name: "路由器",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000244.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000245.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000246.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000247.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000248.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000249.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 7,
          name: "智能硬件",
          imgarr: [
            {
              id: 1,
              pic: "./src/assets/img/ia_200000244.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 2,
              pic: "./src/assets/img/ia_200000245.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 3,
              pic: "./src/assets/img/ia_200000246.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 4,
              pic: "./src/assets/img/ia_200000247.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 5,
              pic: "./src/assets/img/ia_200000248.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
            {
              id: 6,
              pic: "./src/assets/img/ia_200000249.webp",
              title: "小米MIX FOLD",
              price: "9999元起",
            },
          ],
        },
        { id: 8, name: "服务" },
        { id: 9, name: "社区" },
      ],
      search_list: [
        { id: 1, name: "全部商品" },
        { id: 2, name: "空调" },
        { id: 3, name: "小米11" },
        { id: 4, name: "黑鲨4" },
        { id: 5, name: "小米手机" },
        { id: 6, name: "红米" },
        { id: 7, name: "耳机" },
      ],
      lunbo: [
        { id: 1, pic: "./src/assets/img/ia_100000222.jpg" },
        { id: 2, pic: "./src/assets/img/ia_100000218.webp" },
        { id: 3, pic: "./src/assets/img/ia_100000219.webp" },
        { id: 4, pic: "./src/assets/img/ia_100000220.webp" },
        { id: 5, pic: "./src/assets/img/ia_100000221.webp" },
      ],
      aside1:[
          {"id":1,"name":"手机 电话卡","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":4,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}             
          ]},
          {"id":2,"name":"电视 盒子","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":4,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}             
            ]},
            {"id":3,"name":"笔记本 显示器","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}             
            ]},
            {"id":4,"name":"家电 插线板","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":4,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}             
            ]},
            {"id":5,"name":"出行 穿戴","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}             
            ]},
            {"id":6,"name":"智能 路由器","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}           
            ]},
            {"id":7,"name":"电源 配件","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}            
            ]},
            {"id":8,"name":"健康 儿童","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}             
            ]},
            {"id":9,"name":"耳机 音箱","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}            
            ]},
            {"id":10,"name":"生活 箱包","pic":"./src/assets/img/大于号.png",item1:[
              {"id":1,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":2,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":4,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":5,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":6,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]},
                {"id":3,item2:[
                    {"id":1,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":2,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"},
                    {"id":3,"pic":"./src/assets/img/ia_200000074.webp","name":"小米MIX FOLD"}
                ]}          
            ]}
        
      ],
      span1:[
          {"id":1,"text":"小米秒杀","pic":"./src/assets/img/ia_100000004281.png"},
          {"id":2,"text":"企业团购","pic":"./src/assets/img/ia_100000004275.png"},
          {"id":3,"text":"F码通道","pic":"./src/assets/img/ia_100000004273.png"},
          {"id":4,"text":"米粉卡","pic":"./src/assets/img/ia_100000004272.png"},
          {"id":5,"text":"以旧换新","pic":"./src/assets/img/ia_100000004271.png"},
          {"id":6,"text":"话费充值","pic":"./src/assets/img/ia_100000004270.png"}       
      ],
      span2:[
        {"id":1,"pic":"./src/assets/img/ia_100000229.jpg"},
        {"id":1,"pic":"./src/assets/img/ia_100000230.jpg"},
        {"id":1,"pic":"./src/assets/img/ia_100000231.png"}
      ],
      bannerbox1:[
        {"id":1,"pic":"./src/assets/img/ia_100000232.webp","name":"手机",small:[{"id":1,"r_name":"查看更多","fuhao":">"}
            ],hbR:[
            {"id":1,"pic":"./src/assets/img/ia_100000004262.jpg"}              
          ],banner1:[
            {"id":1,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000235.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000236.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000237.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000238.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000239.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000240.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000241.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]}
        ]},
        {"id":2,"pic":"./src/assets/img/ia_100000242.webp","name":"家电",small:[{"id":1,"r_name":"热门"},{"id":2,"r_name":"电视影音"}],
        hbR:[
            {"id":1,"pic":"./src/assets/img/ia_100000243.webp"},
            {"id":2,"pic":"./src/assets/img/ia_100000244.webp"}              
          ],banner1:[
            {"id":1,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000245.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_200000246.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000247.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000248.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000249.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000250.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000251.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
            {"id":2,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000246.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_200000485.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_200000572.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_200000573.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000245.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_200000574.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_200000618.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]}
        ]},
        {"id":3,"pic":"./src/assets/img/ia_100000261.webp","name":"智能",small:[{"id":1,"r_name":"热门"},{"id":2,"r_name":"安防"},{"id":3,"r_name":"出行"}],
        hbR:[
            {"id":1,"pic":"./src/assets/img/ia_100000004226.jpg"},
            {"id":2,"pic":"./src/assets/img/ia_100000004223.jpg"},            
          ],banner1:[
            {"id":1,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000004222.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000004221.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000004220.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000004219.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000004215.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000004214.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000004211.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000004210.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
            {"id":2,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000004209.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000004207.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000004208.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000004206.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              // {"id":5,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              // {"id":6,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              // {"id":7,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              // {"id":8,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
            {"id":3,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000003374.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000003375.png","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000003370.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000003369.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000003366.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000003387.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000003368.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000003362.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]}
        ]},
        {"id":4,"pic":"./src/assets/img/ia_100000284.webp","name":"搭配",small:[{"id":1,"r_name":"热门"},{"id":2,"r_name":"耳机音箱"}],
        hbR:[
            {"id":1,"pic":"./src/assets/img/ia_100000004191.jpg"},
            {"id":2,"pic":"./src/assets/img/ia_100000004192.jpg"},            
          ],banner1:[
            {"id":1,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000004184.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000004188.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000004189.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000004186.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000004187.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000004184.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000003350.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000003351.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
            {"id":2,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000003351.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000003355.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000003354.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000003348.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000003346.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000003343.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000003344.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000003338.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
        ]},
        {"id":5,"pic":"./src/assets/img/ia_100000303.webp","name":"配件",small:[{"id":1,"r_name":"热门"},{"id":2,"r_name":"充电器"}],
        hbR:[
            {"id":1,"pic":"./src/assets/img/ia_100000004129.jpg"},
            {"id":2,"pic":"./src/assets/img/ia_100000004125.jpg"},            
          ],banner1:[
            {"id":1,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000003329.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000003324.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000003323.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000003322.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000003317.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000234.webp","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
            {"id":2,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000003332.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000003328.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000003330.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000003334.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000003332.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000003328.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000003327.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000003333.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]}
        ]},
        {"id":6,"pic":"./src/assets/img/ia_100000318.webp","name":"周边",small:[{"id":1,"r_name":"热门"},{"id":2,"r_name":"出行"}],
        hbR:[
            {"id":1,"pic":"./src/assets/img/ia_100000004098.jpg"},
            {"id":2,"pic":"./src/assets/img/ia_100000004099.jpg"},            
          ],banner1:[
            {"id":1,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000004102.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000004101.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000004096.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000003312.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000003309.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000003310.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000003308.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000003303.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]},
            {"id":2,banner1item:[
              {"id":1,"pic":"./src/assets/img/ia_100000003305.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":2,"pic":"./src/assets/img/ia_100000003316.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":3,"pic":"./src/assets/img/ia_100000003304.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":4,"pic":"./src/assets/img/ia_100000003301.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":5,"pic":"./src/assets/img/ia_100000003300.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":6,"pic":"./src/assets/img/ia_100000003328.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":7,"pic":"./src/assets/img/ia_100000004084.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"},
              {"id":8,"pic":"./src/assets/img/ia_100000004083.jpg","name":"Note 10 Pro","desc":"天玑1100年度旗舰芯，VC液冷散热","num":"1599元起","num2":"1699元"}
            ]}
        ]}
      ],
      bannerbox2:[
        {"id":1,"pic":"./src/assets/img/ia_100000337.webp","name":"视频",small:[{"id":1,"r_name":"查看更多","fuhao":">"}],
        videoitem:[
          {"id":1,"pic":"./src/assets/img/ia_100000338.webp","name":"2021年春季新品发布会第一场"},
          {"id":2,"pic":"./src/assets/img/ia_100000339.webp","name":"Redmi 10X系列发布会","text":"Redmi 10X系列发布会"},
          {"id":3,"pic":"./src/assets/img/ia_100000340.webp","name":"小米10 青春版 发布会"},
          {"id":1,"pic":"./src/assets/img/ia_100000341.webp","name":"小米10 8K手机拍大片"}
        ]}
      ],
      pop:[
        {"id":1,"text":"小米10 8K手机拍大片","del":"x","video":"./src/assets/video/e25d81c4922fca5ebe51877717ef9b76.mp4"},
        {"id":2,"text":"小米10 8K手机拍大片","del":"x","video":"./src/assets/video/e25d81c4922fca5ebe51877717ef9b76.mp4"},
        {"id":3,"text":"小米10 8K手机拍大片","del":"x","video":"./src/assets/video/e25d81c4922fca5ebe51877717ef9b76.mp4"},
        {"id":4,"text":"小米10 8K手机拍大片","del":"x","video":"./src/assets/video/e25d81c4922fca5ebe51877717ef9b76.mp4"}
      ],
      aside:[
        {"id":1,"pic":"./src/assets/img/ia_100000349.png","text":"手机APP"},
        {"id":2,"pic":"./src/assets/img/ia_100000352.png","text":"个人中心"},
        {"id":3,"pic":"./src/assets/img/ia_100000354.png","text":"售后服务"},
        {"id":4,"pic":"./src/assets/img/ia_100000356.png","text":"人工客服"},
        {"id":5,"pic":"./src/assets/img/ia_100000358.png","text":"购物车"},
        {"id":6,"pic":"./src/assets/img/ia_200001667.png","text":"回顶部"}
      ]
    };
  },
};
</script>


