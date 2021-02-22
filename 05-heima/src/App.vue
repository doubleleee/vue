<template>
  <div id="app">
    <vue-header></vue-header>

    <router-view></router-view>

    <tab-bar>
      <tab-bar-item path="/home" activeColor="#0190ff">
        <img src="./assets/img/tabbar/home.png" slot="icon" />
        <img src="./assets/img/tabbar/home2.png" slot="icon-active" />
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/faxian">
        <img src="./assets/img/tabbar/faxian.png" slot="icon" />
        <img src="./assets/img/tabbar/faxian2.png" slot="icon-active" />
        <div slot="text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/dingdan">
        <img src="./assets/img/tabbar/dingdan.png" slot="icon" />
        <img src="./assets/img/tabbar/dingdan2.png" slot="icon-active" />
        <div slot="text">订单</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img src="./assets/img/tabbar/my.png" slot="icon" />
        <img src="./assets/img/tabbar/my2.png" slot="icon-active" />
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import VueHeader from "./components/Header";
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

export default {
  name: "App",
  components: {
    VueHeader,
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
