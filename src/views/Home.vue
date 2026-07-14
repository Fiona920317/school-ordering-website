<template>
  <div
    class="bg-secondary vh-100 d-flex flex-column align-items-center"
    style="padding: 100px 0"
  >
    <HomeNews></HomeNews>
    <Footer></Footer>
  </div>
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
