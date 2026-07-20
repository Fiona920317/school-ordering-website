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
    <div class="container p-0 mt-3" style="max-width: 767px">
      <div class="row row-cols-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="product">
            <span class="product__badge badge rounded-pill bg-danger"
              >熱門</span
            >
            <a href="" class="d-flex flex-column">
              <img
                class="product__image img-fluid shadow-sm"
                src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div class="product__textGroup shadow-sm">
                <h4 class="product__textTitle">起司蛋餅</h4>
                <p class="product__textContent">NT$40</p>
                <button
                  @click.prevent="isOpen = true"
                  class="product-cartBtn btn btn-primary w-100 mt-auto"
                >
                  加入購物車
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

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
export default {
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

//product-item
.product {
  position: relative;
}
.product__badge {
  position: absolute; //定位badge
  top: 10px;
  left: 10px;
}
.product a {
  border-radius: 10px;
  background-color: $light;
}
.product__image {
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
  margin: 0;

  max-height: 90px; //不定max-height的話會無法統一所有商品img高度
  object-fit: cover; //裁切img避免形變
}
.product__textGroup {
  padding: 15px;
  color: $primary;
  font-weight: bold;

  display: flex;
  flex-direction: column;
}
.product__textTitle {
  font-size: 20px;
  font-weight: bold;
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
