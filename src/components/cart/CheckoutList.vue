<template>
  <ul class="CheckoutList shadow-sm">
    <li v-for="(product, index) in cartWithSubtotal" :key="index">
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-dot fs-3 text-primary"></i>
        <h4 class="fw-bold m-0">
          {{ product.resName }}
        </h4>
        <a
          @click.prevent="deleteOrderItem(index)"
          class="CheckoutList__deleteBtn btn btn-danger ms-auto"
          href=""
        >
          <i class="bi bi-trash-fill"></i>
        </a>
      </div>

      <div class="d-flex">
        <div>
          <img
            class="img-fluid mb-3"
            style="max-height: 90px; border-radius: 10px"
            src="https://images.unsplash.com/photo-1783962211635-ef0af72c7759?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h5 class="mt-2 mb-2">
            {{ product.productName }}
          </h5>
        </div>
        <div class="ms-auto d-flex flex-column justify-content-center">
          <p class="ms-auto pt-3">單價:NT${{ product.productPrice }}</p>

          <div class="CheckoutList__numBtnGroup ms-auto">
            <a @click.prevent="reduceProductNum(index)" href="">
              <i class="bi bi-dash-circle"></i>
            </a>
            {{ product.productNum }}
            <a @click.prevent="addProductNum(index)" href="">
              <i class="bi bi-plus-circle"></i>
            </a>
          </div>
          <p class="ms-auto pt-3">小計:NT${{ product.subtotal }}</p>
        </div>
      </div>
    </li>
    <div class="CheckoutList__total" v-if="total != 0">
      <h5>總計</h5>
      <h3 class="fw-bold text-primary">NT${{ total }}</h3>
    </div>
    <div
      v-if="cartWithSubtotal.length == 0"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <p class="fs-2 fw-bold text-primary">這邊什麼都沒有QAQ</p>
      <router-link to="/browse" class="btn btn-primary">去點餐</router-link>
    </div>
  </ul>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../../stores/cartStore";

export default {
  computed: { ...mapState(useCartStore, ["cartWithSubtotal", "total"]) },
  methods: {
    ...mapActions(useCartStore, [
      "reduceProductNum",
      "addProductNum",
      "deleteOrderItem",
    ]),
  },
};
</script>
<style lang="scss">
.CheckoutList {
  background-color: $light;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
}
.CheckoutList li {
  border-bottom: 1.5px solid $secondary;
  padding-top: 10px;
}
.CheckoutList__total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
}
.CheckoutList__numBtnGroup {
  font-size: 28px;

  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
