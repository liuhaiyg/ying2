<template>
    <div class="footer">
        <div v-for="a in container" :key="a.id">
            <div class="site-footer">
                <div class="container">
                    <div class="footer-service">
                        <ul class="list-service clearfix">
                            <li v-for="(b,index) in a.footerservice" :key="index"><a href="##">{{b.text}}</a></li> 
                        </ul>
                    </div> 
                    <div class="footer-links clearfix">
                        <dl class="col-links col-links-first" v-for="(c,index) in a.collinks" :key="index">
                            <dt>{{c.title}}</dt> 
                            <dd v-for="(d,index) in c.text1" :key="index"><a href="##">{{d.text}}</a></dd> 
                        </dl> 
                        <div class="col-right">
                            <div class="phone">{{a.phone}}</div>
                            <p class="time">{{a.time}}</p>
                            <a class="kefu">
                                <em class="img"></em>
                                <span class="text">{{a.text}}</span>
                            </a>
                            <div class="follow">
                                {{a.text1}}
                                <img :src="a.pic1" width="24" height="24" class="wb">
                                <img :src="a.pic2" width="24" height="24" class="wx">                              
                            </div>
                        </div>
                        <img :src="a.pic3" width="126" height="126" class="wm">
                    </div>
                </div>
            </div> 
            <div class="site-info">
                <div class="container">
                    <div class="logo ir"></div> 
                    <div class="info-text">
                        <p class="sites" v-for="d in a.sites" :key="d.id">
                            <span v-for="(f,index) in d.link" :key="index">
                                <a href="##" >{{f.name}}</a> 
                                <span class="sep">{{f.gang}}</span> 
                            </span>
                        </p>  
                        <p>©
                            <a href="##">mi.com</a> 京ICP证110507号
                            <a href="##">京ICP备10046444号</a> 
                            <a href="##">京公网安备11010802020134号</a> 
                            <a href="##">京网文[2020]0276-042号</a> <br> 
                            <a href="##">（京）网械平台备字（2018）第00005号</a> 
                            <a href="##">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a> 
                            <a href="##">营业执照</a> 
                            <a href="##">医疗器械质量公告</a> <br> 
                            <a href="##">增值电信业务许可证</a>&nbsp;网络食品经营备案 京食药网食备202010048 &nbsp;
                            <a href="##">食品经营许可证</a> <br>
                            违法和不良信息举报电话：171-5104-4404&nbsp;
                            <a href="##">知识产权侵权投诉</a>&nbsp;本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                        </p>
                    </div> 
                    <div class="info-links">
                        <a href="##"><img src="./assets/img/ia_100000343.png"></a> 
                        <a href="##"><img src="./assets/img/ia_100000344.png"></a> 
                        <a href="##"><img src="./assets/img/ia_100000345.png"></a> 
                        <a href="##"><img src="./assets/img/ia_100000346.png"></a>
                        <a href="##" class="safe-auth">
                            <img src="./assets/img/ia_100000347.png" class="img1">
                            <!-- <img src="./assets/img/ia_100000348.png" class="img2"> -->
                        </a>
                    </div>
                </div> 
                <div class="slogan"></div>
            </div>
        </div>
    </div>
</template>
<style>
@import url(./assets/css/footer.css);
</style>
<script>
export default{
    data(){
        return{
            container:[
                {"id":1,"phone":"400-100-5678","time":"8:00-18:00(仅收市话费)","text":"人工客服","text1":"关注小米：","pic1":"./src/assets/img/ia_100000413.png","pic2":"./src/assets/img/ia_100000414.png","pic3":"./src/assets/img/ia_100000342.png",
                footerservice:[
                    {"id":1,"text":"预约维修服务"},
                    {"id":2,"text":"7天无理由退货"},
                    {"id":3,"text":"15天免费换货"},
                    {"id":4,"text":"满69包邮"},
                    {"id":5,"text":"520余家售后网点"}
                ],
                collinks:[
                    {"id":1,"title":"帮助中心",text1:[
                        {"id":1,"text":"账户管理"},
                        {"id":2,"text":"购物指南"},
                        {"id":3,"text":"订单操作"}
                    ]},
                    {"id":2,"title":"服务支持",text1:[
                        {"id":1,"text":"售后政策"},
                        {"id":2,"text":"自助服务"},
                        {"id":3,"text":"相关下载"}
                    ]},
                    {"id":3,"title":"线下门店",text1:[
                        {"id":1,"text":"小米之家"},
                        {"id":2,"text":"服务网点"},
                        {"id":3,"text":"授权体验店"}
                    ]},
                    {"id":4,"title":"关于小米",text1:[
                        {"id":1,"text":"了解小米"},
                        {"id":2,"text":"加入小米"},
                        {"id":3,"text":"投资者关系"},
                        {"id":4,"text":"企业社会责任"},
                        {"id":5,"text":"廉洁举报"}
                    ]},
                    {"id":5,"title":"关注我们",text1:[
                        {"id":1,"text":"新浪微博"},
                        {"id":2,"text":"官方微信"},
                        {"id":3,"text":"联系我们"},
                        {"id":4,"text":"公益基金会"}
                    ]},
                    {"id":6,"title":"特色服务",text1:[
                        {"id":1,"text":"F 码通道"},
                        {"id":2,"text":"礼物码"},
                        {"id":3,"text":"防伪查询"}
                    ]}
                ],
                sites:[
                    {"id":1,link:[
                        {"id":1,"name":"小米商城","gang":"|"},
                        {"id":2,"name":"MIUI","gang":"|"},
                        {"id":3,"name":"米家","gang":"|"},
                        {"id":4,"name":"米聊","gang":"|"},
                        {"id":5,"name":"多看","gang":"|"},
                        {"id":6,"name":"游戏","gang":"|"},
                        {"id":7,"name":"政企服务","gang":"|"},
                        {"id":8,"name":"小米天猫店","gang":"|"},
                        {"id":9,"name":"小米集团隐私政策","gang":"|"},
                        {"id":10,"name":"小米公司儿童信息保护规则","gang":"|"},
                        {"id":11,"name":"小米商城隐私政策","gang":"|"},
                        {"id":12,"name":"小米商城用户协议","gang":"|"},
                        {"id":13,"name":"问题反馈","gang":"|"},
                        {"id":14,"name":"Select Location","gang":""},
                        ]},
                    {"id":2,link:[{"id":1,"name":"北京互联网法院法律服务工作站","gang":"|"},{"id":1,"name":"中国消费者协会","gang":"|"},{"id":1,"name":"北京市消费者协会","gang":"|"}]}
                ]}
            ]
        }
    }
}

   
</script>


