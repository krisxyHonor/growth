<template>
  <el-carousel type="card" :interval="6000" height="400px">
    <el-carousel-item v-for="src in imageSources" :key="src">
      <img class="carousel-img" :src="src" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import fitnessImg1 from "@/assets/fitnessImg1.jpg";
import fitnessImg2 from "@/assets/fitnessImg2.png";
import fitnessImg3 from "@/assets/fitnessImg3.png";
import fitnessImg4 from "@/assets/fitnessImg4.jpg";
import fitnessImg5 from "@/assets/fitnessImg5.jpg";
const imageSources: string[] = [
  fitnessImg1,
  fitnessImg2,
  fitnessImg3,
  fitnessImg4,
  fitnessImg5,
];
</script>

<style scoped>
.el-carousel {
  width: 100%;
}

.carousel-img {
  width: 100%;
}
</style>
