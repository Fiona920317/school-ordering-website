<template>
  <button @click="test">戳我測試pinia</button>
  <Carousel></Carousel>
  <HomeNews></HomeNews>
  <Footer></Footer>
</template>
<script>
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import HomeNews from "../components/HomeNews.vue";

import { mapState, mapActions } from "pinia";
import { useMainStore } from "../stores/mainStore.js";
export default {
  components: { Carousel, Footer, HomeNews },
  computed: {
    ...mapState(useMainStore, ["testNum"]),
  },
  methods: {
    ...mapActions(useMainStore, ["test"]),
  },
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
