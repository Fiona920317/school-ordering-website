<template>
  <div class="productItem d-flex flex-column h-100">
    <span
      class="productItem__tagBadge badge rounded-pill"
      v-if="product.state"
      :class="{
        'bg-danger': product.state == '熱門',
        'bg-warning': product.state == '新品',
        'bg-primary': product.state == '促銷',
      }"
      >{{ product.state }}</span
    >
    <span
      class="productItem__veganBadge badge rounded-pill bg-success"
      v-if="product.vegan"
    >
      素食
    </span>
    <a href="" @click.prevent="isOpen = true" class="d-flex flex-column h-100">
      <img
        class="product__image img-fluid shadow-sm"
        src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div class="product__textGroup shadow-sm flex-grow-1">
        <h4 class="product__textTitle">{{ product.productName }}</h4>
        <div
          class="d-flex flex-column flex-md-row gap-1"
          v-if="product.discount !== 1"
        >
          <p
            class="product__textContent text-black-50 text-decoration-line-through m-0"
          >
            原價NT${{ product.ori_price }}
          </p>
          <p class="product__textContent">特價NT${{ product.final_price }}</p>
        </div>
        <p class="product__textContent" v-else>NT${{ product.final_price }}</p>
        <button
          class="product-cartBtn btn btn-primary w-100 mt-auto"
          @click.prevent="isCartModalOpen = !isCartModalOpen"
        >
          加入購物車
        </button>
      </div>
    </a>
  </div>
  <BaseModal
    :isOpen="isCartModalOpen"
    :numBtnGroup="true"
    @close="isCartModalOpen = false"
    @productNum="addToCart"
  >
    <template #header>
      <h4 class="text-primary fw-bold">加入購物車</h4>
    </template>
    <template #body>
      <img
        style="max-height: 90px; border-radius: 10px"
        src="https://images.unsplash.com/photo-1783962211635-ef0af72c7759?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h5 class="m-0">{{ product.productName }}</h5>
      <p class="text-muted m-0">單價NT${{ product.final_price }}</p>
    </template>
  </BaseModal>
</template>
<script>
import BaseModal from "../bases/BaseModal.vue";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../../stores/cartStore.js";

export default {
  props: {
    resName: String,
    resId: Number,
    product: Object,
  },
  components: { BaseModal },
  data() {
    return {
      isCartModalOpen: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions(useCartStore, ["addProductToCart"]),
    addToCart(productNum) {
      this.isCartModalOpen = false;
      let temp = {
        resName: this.resName,
        productName: this.product.productName,
        vegan: this.product.vegan,
        productPrice: this.product.final_price,
        productNum: productNum,
      };
      this.addProductToCart(temp);
      console.log(temp);
    },
  },
};
</script>
<style lang="scss">
.productItem {
  position: relative;
}
.productItem__tagBadge {
  position: absolute;
  top: 10px;
  left: 10px;
}
.productItem__veganBadge {
  position: absolute;
  top: 10px;
  right: 10px;
}
.product__image {
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
  margin: 0;

  max-height: 90px; //不定max-height的話會無法統一所有商品img高度
  object-fit: cover; //裁切img避免形變
}
.product__textGroup {
  border-radius: 0 0 10px 10px;
  background-color: $light;
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
