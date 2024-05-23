<!--
 * @Description: 
 * @Author: houxin
 * @Date: 2024-05-16 15:40:17
 * @LastEditTime: 2024-05-23 16:53:38
 * @LastEditors: houxin
 * @Reference:  
-->
<template>
  <div class="layout">
    <app-header />
    <nav-bar :navList="navbars" />
    <slot />
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "~/store";
import { apiGetHomeInfo } from "../service/home";

const homeStore = useHomeStore();
const { navbars } = storeToRefs(homeStore);
homeStore.fetchHomeInfo("oppo");
</script>

<style scoped lang="scss"></style>
