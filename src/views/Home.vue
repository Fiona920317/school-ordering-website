<template>
  <HomeNews></HomeNews>
  <Footer></Footer>
</template>
<script>
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import HomeNews from "../components/HomeNews.vue";
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
