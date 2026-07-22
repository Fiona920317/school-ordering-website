<template>
  <div class="container p-0 mt-3" style="max-width: 767px">
    <div class="row row-cols-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="product">
          <span class="product__badge badge rounded-pill bg-danger">熱門</span>
          <a href="" @click.prevent="isOpen = true" class="d-flex flex-column">
            <img
              class="product__image img-fluid shadow-sm"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="product__textGroup shadow-sm">
              <h4 class="product__textTitle">起司蛋餅</h4>
              <p class="product__textContent">NT$40</p>
              <button class="product-cartBtn btn btn-primary w-100 mt-auto">
                加入購物車
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
};
</script>
<style lang="scss">
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
</style>
