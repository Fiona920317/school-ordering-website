<template>
  <div class="w-100 d-flex flex-column gap-3 mb-3">
    <router-link class="fs-5 fw-bold" to="/member">
      <i class="bi bi-arrow-left-circle me-2"></i>回前頁
    </router-link>
    <h4 class="text-primary text-center fw-bold">訂單詳情</h4>

    <ul
      v-for="order in orders"
      class="w-100 bg-light p-3"
      style="border-radius: 20px"
    >
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <p class="mb-1">訂單時間:{{ order.orderTime }}</p>
        <p class="mb-1">訂單編號:{{ order.orderId }}</p>
        <p>取餐地點:誠心樓二樓{{ order.userInfo.area }}區</p>
      </div>
      <li v-for="product in order.products" class="d-flex gap-3">
        <p>．{{ product.resName }}</p>
        <div>{{ product.productName }}x{{ product.productNum }}</div>
        <p>NT${{ product.subtotal }}</p>
      </li>
      <p class="m-0">總計:NT${{ order.total }}</p>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useOrderStore } from "../../stores/orderStore";

export default {
  computed: {
    ...mapState(useOrderStore, ["orders"]),
  },
};
</script>
<style lang="scss"></style>
