<!--
 * @Description: 
 * @Author: houxin
 * @Date: 2024-05-16 15:29:35
 * @LastEditTime: 2024-05-16 16:01:45
 * @LastEditors: houxin
 * @Reference:  
-->
<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="content-left">
        <nuxt-link to="" class="link">
          <span>OPPO官网</span>
        </nuxt-link>
        <nuxt-link to="" class="link">
          <span>一加官网</span>
        </nuxt-link>
      </div>
      <div class="content-right">
        <NuxtLink to="" class="link download">
          <span>下载OPPO商城App</span>
          <div class="app">
            <img class="ecode" src="@/assets/images/ecode.png" alt="" />
            <div class="name">扫码下载OPPO商城App</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/login" class="link_border" target="_blank">
          <i class="iconfont icon-user"></i>登录</NuxtLink
        >
        <NuxtLink to="/register" class="link_border" target="_blank"
          >注册</NuxtLink
        >
        <NuxtLink to="/cart" class="link"
          ><i class="iconfont icon-shoppingcart"></i>购物车</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-header {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: black;
  color: $bgGrayColor;
  font-size: $fontSize12;
}
.content {
  display: flex;
}
.content-left {
  width: 750px;
}
.link {
  display: inline-block;
  margin-right: 10px;
  color: $bgGrayColor;
  font-size: $fontSize12;
  line-height: 14px;
  /* 左右加padding就可以有对齐的竖线 */
  padding: 0 14px;
  opacity: 0.8; // 字体变暗
  text-decoration: none;
}
.link_border {
  display: inline-block;
  margin-right: 10px;
  color: $bgGrayColor;
  font-size: $fontSize12;
  line-height: 14px;
  padding: 0 14px;
  text-decoration: none;
  opacity: 0.8; // 字体变暗
  border-right: 1px solid #fff;
}
.iconfont {
  margin-right: 6px;
}
.icon-user {
  font-size: 12px;
  opacity: 1;
}
.icon-shoppingcart {
  font-size: 12px;
  opacity: 1;
}
.download {
  position: relative;
  .app {
    display: none;
    position: absolute;
    top: 25px;
    left: 0;
    padding: 8px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
    z-index: 10000;
  }
  .ecode {
    z-index: 101;
    width: 140px;
    height: 140px;
  }
  .name {
    color: #000;
    margin-top: 2px;
  }
}
.download:hover .app {
  display: block;
}
</style>
