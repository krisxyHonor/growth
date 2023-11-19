<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    router
  >
    <el-menu-item index="1" route="home"
      ><span class="menu-text">Home</span></el-menu-item
    >
    <el-menu-item index="2"><span class="menu-text">More</span></el-menu-item>
  </el-menu>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu-text {
  user-select: none;
}
</style>
