<template>
    <div class="nav">
        跳转页面
        <br/>
        <a href="##" @click="prev()" class="brink">返回上一页</a>
        <!-- 返回首页，不管在何处，都直接返回到首页 -->
        <!-- <router-link to="/">返回首页</router-link> -->
    </div>
</template>
<script>
export default {
    data() {
        return{
            isShow:false,
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    }   
}
</script>
<style>
.nav{font-size: 18px;color: #333;width: 1903px;height: 500px;background: palegreen;}
.brink{width: 100px;height: 100px;background: oldlace;color: black;font-size: 20px;margin: auto;}
</style>