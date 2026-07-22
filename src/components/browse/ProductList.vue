<template>
  <div class="w-100" style="max-width: 767px">
    <router-link class="fs-5 fw-bold" :to="{ name: 'Browse' }">
      <i class="bi bi-arrow-left-circle me-2"></i>回前頁
    </router-link>
    <div class="selectedRes mt-3 shadow-sm">
      <img
        class="img-fluid me-3"
        style="max-width: 90px; border-radius: 10px"
        src="https://images.unsplash.com/photo-1783962211635-ef0af72c7759?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div class="selectedRes__textGroup">
        <h4 class="selectedRes__resName fw-bold">活力早餐</h4>
        <p class="selectedRes__resNumber fw-bold m-0">店家編號A101</p>
      </div>
    </div>
    <ProductItem></ProductItem>
    <div
      class="AddToCartModal translate-middle"
      :class="{ 'd-none': isOpen == false }"
    >
      <h4 class="text-primary fw-bold">加入購物車</h4>
      <img
        style="max-height: 90px; border-radius: 10px"
        src="https://images.unsplash.com/photo-1783962211635-ef0af72c7759?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h5 class="m-0">起司蛋餅</h5>
      <p class="text-muted mb-1">單價$NT40</p>
      <div class="AddToCartModal__numBtnGroup">
        <a @click.prevent="reduceNum" href=""
          ><i class="bi bi-dash-circle fs-2"></i
        ></a>
        {{ productNum }}
        <a @click.prevent="productNum++" href=""
          ><i class="bi bi-plus-circle fs-2"></i
        ></a>
      </div>
      <div class="AddToCartModal__submitBtnGroup">
        <button
          @click="toggleForm"
          class="AddToCartModal__submitBtnGroup__cancelBtn btn btn-danger"
        >
          取消
        </button>
        <button
          class="AddToCartModal__submitBtnGroup__confirmBtn btn btn-primary"
        >
          確認
        </button>
      </div>
    </div>
    <div
      @click.stop.prevent="toggleForm"
      class="AddToCartModal-overlay"
      :class="{ 'd-none': isOpen == false }"
    ></div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: { ProductItem },
  data() {
    return {
      productNum: 1,
      isOpen: false,
    };
  },
  methods: {
    reduceNum() {
      if (this.productNum <= 1) {
        return;
      } else {
        this.productNum--;
      }
    },

    toggleForm() {
      this.isOpen = !this.isOpen;
      this.productNum = 1;
    },
  },
};
</script>

<style lang="scss">
.selectedRes {
  background-color: $light;
  border-radius: 20px;
  padding: 10px 15px;

  display: flex;
  align-items: center;
}
.selectedRes__textGroup {
  color: $primary;
}
.selectedRes__resNumber {
  display: block;
  background-color: $secondary;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
}

//AddToCartModal
.AddToCartModal {
  background-color: $light;
  border-radius: 20px;
  padding: 15px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1002;
}
.AddToCartModal__numBtnGroup {
  font-size: 24px;

  display: flex;
  align-items: center;
  gap: 30px;
}
.AddToCartModal__numBtnGroup a:hover {
  color: $secondary;
}
.AddToCartModal__submitBtnGroup {
  margin-top: 10px;

  display: flex;
  gap: 10px;
}
.AddToCartModal__submitBtnGroup__cancelBtn,
.AddToCartModal__submitBtnGroup__confirmBtn {
  padding: 10px 30px;
  font-weight: bold;
}
.AddToCartModal-overlay {
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
