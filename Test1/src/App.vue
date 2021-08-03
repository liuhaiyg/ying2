<template>
  <div id="app">
    <HeaderView class="header"></HeaderView>
    <!-- <HomeView class="home"></HomeView> -->
    <router-view class="home"></router-view>
    <FooterView class="footer"></FooterView>
  </div>
</template>

<script>
import HeaderView from "./Header.vue"
import HomeView from "./Home.vue"
import FooterView from "./Footer.vue"
export default {
  name: 'app',
  components:{
    HeaderView,
    HomeView,
    FooterView
  },
  data () {
    return {
      
    }
  }
}
</script>