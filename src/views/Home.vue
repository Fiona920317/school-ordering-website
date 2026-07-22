<template>
  <button @click="isModalOpen = !isModalOpen">戳我測試BaseModal</button>
  <BaseModal
    :isOpen="isModalOpen"
    :numBtnGroup="true"
    @close="isModalOpen = false"
  >
    <template #body></template>
  </BaseModal>
  <Carousel></Carousel>
  <HomeNews></HomeNews>
  <Footer></Footer>
</template>
<script>
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import HomeNews from "../components/HomeNews.vue";

import BaseModal from "../components/bases/BaseModal.vue";

export default {
  components: { Carousel, Footer, HomeNews, BaseModal },
  data() {
    return {
      isModalOpen: false,
    };
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
