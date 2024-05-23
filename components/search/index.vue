<!--
 * @Description: 
 * @Author: houxin
 * @Date: 2024-05-23 15:04:51
 * @LastEditTime: 2024-05-23 15:12:31
 * @LastEditors: houxin
 * @Reference:  
-->
<template>
  <div class="search">
    <input class="search-input" type="text" :placeholder="placeholder" />
    <img class="search-svg" src="../../assets/images/search.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  placeholder: "Reno9系列",
});
</script>

<style lang="scss" scoped>
.search {
  height: 36px;
  width: 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 16px;

  border-radius: 36px;
  background-color: #f6f6f6;
  cursor: pointer;
  input {
    width: 112px;
    height: 21px;
    font-size: 14px;
    opacity: 0.3;
    outline: none;
    border: none;
    background-color: transparent;
  }

  .search-svg {
    width: 14px;
    height: 14px;
  }
}
</style>
