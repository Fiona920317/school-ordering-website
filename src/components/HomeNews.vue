<template>
  <div class="mb-5 ms-3 me-3 w-100" style="max-width: 767px">
    <h2 class="newsTitle mb-4">最新消息</h2>
    <div class="newsListBackground shadow-sm">
      <ul class="newsList">
        <li>
          <a class="newsList--textTitle" href=""
            >本周新增3間餐廳，校內點餐更方便!</a
          >
        </li>
        <li>
          <a class="newsList--textTitle" href="">9/30前首單滿NT$80折NT$10。</a>
        </li>
        <li>
          <a class="newsList--textTitle" href=""
            >中午尖峰時段請提前20分鐘下單，取餐更順暢。</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div
    class="NewsModal text-center translate-middle"
    :class="{ 'd-none': isModalOpen == false }"
  >
    <h4 class="text-primary fw-bold">最新消息</h4>
    <h5 class="m-0">本周新增3間餐廳，校內點餐更方便!</h5>
    <p class="text-muted mb-1">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo,
      eaque libero ratione est odio eius repudiandae voluptate a mollitia ipsum
      enim recusandae assumenda perspiciatis quidem debitis sunt natus!
      Reiciendis exercitationem deleniti, magnam nihil repellendus maiores
      placeat assumenda ratione, illum commodi vitae iure in vero, aspernatur
      nobis labore! Earum, maiores?
    </p>

    <button
      @click.stop.prevent="toggleForm"
      class="NewsModal__confirmBtn btn btn-primary"
    >
      確認
    </button>
  </div>
  <div
    @click.stop.prevent="toggleForm"
    class="NewsModal-overlay"
    :class="{ 'd-none': isModalOpen == false }"
  ></div>
</template>
<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    toggleForm() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>
<style lang="scss">
//newsList
.newsTitle {
  color: $primary;
  font-weight: bold;
}
.newsListBackground {
  width: 100%;
  background-color: $light;
  padding: 20px;
  border-radius: 20px;
}
.newsList {
  list-style: disc;
  padding-left: 30px;
  line-height: 2;

  margin: 0;
}
//NewsModal
.NewsModal {
  background-color: $light;
  border-radius: 20px;
  padding: 20px 10px;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1002;
}
.NewsModal-overlay {
  background-color: rgba($color: #000000, $alpha: 0.5);
  backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
}
</style>
