<template>
    <div class="header">
        <div class="topbar">       
            <ul class="nav1">
                <li class="nav_left" v-for="(item,index) in arrList" :key="index.f">
                    <router-link to="/nav">
                        <a href="##">{{item.title}}</a>
                        <span class="sep">{{item.gang}}</span>
                            <span class="download">
                                <div class="jiao"></div>
                                <img src="./assets/img/ia_100000000.png" width="90" height="90">小米商城App
                            </span>
                    </router-link>
                </li>
                <li v-for="(item,index) in list" class="center" :key="index.c">
                    <a href="##">{{item.title}}</a>
                    <span class="sep">{{item.gang}}</span>
                </li>
                <div class="nav_right" id="nav_right">
                    <a href="##" id="r_shop">
                        <img src="./assets/img/ia_100000358.png" width="20" height="20" id="pic">
                        购物车
                        <span class="ling" id="r_shop1">(0)</span>
                    </a>
                    <div class="shopping" id="shopping">
                        <a href="##">购物车还没有商品，赶紧选购吧</a>
                    </div>
                </div>
            </ul>
        </div>
        
    </div>
</template>
<script>
import { realconsole } from "./assets/js/header.js"
export default{
    data(){
        return{
            arrList:[],
            list:[
                {
                    "id":1,
                    "title":"登录",
                    "gang":"|"
                },
                {
                    "id":2,
                    "title":"注册",
                    "gang":"|"
                },
                {
                    "id":3,
                    "title":"消息通知"
                }
            ]
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            var _this = this
            this.$http.get("src/data/header.data").then(function(res){
                _this.arrList = res.data
            }).catch(function(error){
                console.log(error)
            })
        },
        methods1(){
            realconsole()
        }
    }
}
</script>
<style>
@import url(./assets/css/header.css);
</style>

