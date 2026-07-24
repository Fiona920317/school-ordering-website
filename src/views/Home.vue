<template>
  <Carousel></Carousel>
  <HomeNews></HomeNews>
  <Footer></Footer>
</template>
<script>
import Carousel from "../components/home/Carousel.vue";
import HomeNews from "../components/home/HomeNews.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Carousel, Footer, HomeNews },
};
</script>
<style lang="scss">
//全域設定
* {
  font-family: "Noto Sans", sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
