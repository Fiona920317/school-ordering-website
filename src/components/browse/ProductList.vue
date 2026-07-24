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
        <h4 class="selectedRes__resName fw-bold">{{ temp.resName }}</h4>
        <p class="selectedRes__resNumber fw-bold m-0">
          店家編號{{ temp.resId }}
        </p>
      </div>
    </div>
    <div class="container p-0 mt-3" style="max-width: 767px">
      <div class="row row-cols-2 row-cols-md-3 g-3">
        <div
          class="col"
          v-for="product in temp.products"
          :key="product.productName"
        >
          <ProductItem
            :resName="temp.resName"
            :resId="temp.resId"
            :product="product"
          ></ProductItem>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <p
          v-if="temp.products.length == 0"
          class="m-0 fs-2 fw-bold text-primary"
        >
          這邊什麼都沒有QAQ
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import { mapState } from "pinia";
import { useBrowseStore } from "../../stores/browseStore.js";

export default {
  components: { ProductItem },
  data() {
    return {
      productNum: 1,
      isOpen: false,
    };
  },
  computed: {
    ...mapState(useBrowseStore, ["temp"]),
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
</style>
