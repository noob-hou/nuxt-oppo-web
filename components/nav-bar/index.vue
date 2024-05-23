<!--
 * @Description: 
 * @Author: houxin
 * @Date: 2024-05-23 14:40:37
 * @LastEditTime: 2024-05-23 17:01:44
 * @LastEditors: houxin
 * @Reference:  
-->
<template>
  <div class="navbar">
    <div class="wrapper content">
      <nuxt-link to="/" class="content-left">
        <img class="logo" src="../../assets/images/logo.png" alt="" />
        <h1 class="title">OPPO商城</h1>
      </nuxt-link>
      <ul class="content-center">
        <li
          v-for="(item, index) in navList"
          :key="item.id"
          @click="navClick(index)"
          :class="{ active: currentIndex === index }"
        >
          <nuxt-link
            :to="'/' + item?.type == 'oppo' ? '' : item.type"
            class="link"
            >{{ item.title }}</nuxt-link
          >
        </li>
      </ul>
      <Search class="content-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavList } from "@/types/home";

interface IProps {
  navList: INavList[];
}
const props = withDefaults(defineProps<IProps>(), {
  navList: () => [],
});

const currentIndex = ref<number>(0);

const navClick = (index: number) => {
  currentIndex.value = index;
};
</script>

<style scoped lang="scss">
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* 吸顶 */
  @include elementSticky(36px);
  background-color: white;

  .content {
    height: 100%;
    /* @include border(); */
    @include normalFlex();
    justify-content: flex-start;
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        text-indent: -1000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #000;
        opacity: 0.55;
      }
      .link:hover {
        opacity: 1;
      }
      .active .link {
        opacity: 1;
      }
    }

    .content-right {
      margin-left: 50px;
    }
  }
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
}
</style>
