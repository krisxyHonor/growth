<script setup lang="ts">
import Console from "@/components/Console.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-container">
    <Console />
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  display: flex;
  height: 100%;
}
</style>
