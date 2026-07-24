<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1784206742655-d56c9facf2e5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "香酥雞腿便當",
    content: "巷口便當 · NT$95",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1784088912970-185c6d399ac4?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "黑糖珍珠鮮奶",
    content: "鮮茶道 · NT$60",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1784123476733-91638ff25322?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "起司蛋餅",
    content: "活力早餐 · NT$40",
    id: 3,
  },
];
const carouselConfig = {
  autoplay: 3000,
  itemsToShow: 1,
  gap: 5,
  wrapAround: true,
};
</script>

<template>
  <h2 class="text-primary mb-3 fw-bold">大家都在點</h2>
  <Carousel class="mb-3" v-bind="carouselConfig">
    <Slide class="position-relative" v-for="image in images" :key="image.id">
      <img class="img-fluid" :src="image.url" alt="Home carousel" />
      <div class="carousel-caption position-absolute">
        <h3>{{ image.title }}</h3>
        <p>{{ image.content }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<style lang="scss">
:root {
  background-color: #242424;
}

.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}
img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
}
</style>
