<template>
  <div
    class="w-100 d-flex flex-column align-items-center gap-3"
    style="max-width: 767px"
  >
    <div v-if="hasLoggedIn">
      <CheckoutList></CheckoutList>
      <UserInfoForm @tempUserInfo="equalizeUserInfo"></UserInfoForm>
      <div class="mt-3 w-100 d-flex justify-content-center gap-3">
        <router-link
          to="/browse"
          class="cancenlBtn btn btn-light text-primary"
          href=""
        >
          繼續選購
        </router-link>
        <a
          class="submitBtn btn btn-primary"
          href=""
          @click.prevent="isModalOpen = true"
        >
          確定送出
        </a>
      </div>
      <BaseModal :isOpen="isModalOpen">
        <template #header>
          <h4 class="fw-bold">訂單確認</h4>
        </template>
        <template #body>
          <ul
            class="m-0"
            style="width: 70%; list-style: disc; padding-left: 10px"
          >
            <li v-for="product in cartWithSubtotal" class="mb-1">
              <p class="m-0">{{ product.resName }}</p>
              <div class="d-flex justify-content-between">
                <p class="m-0">
                  {{ product.productName }}x{{ product.productNum }}
                </p>
                <p class="m-0">NT${{ product.subtotal }}</p>
              </div>
            </li>
          </ul>
        </template>
        <template #footer>
          <div class="d-flex">
            <input
              type="checkbox"
              id="changeUserInfo"
              value="yes"
              ref="changeUserInfo"
            />
            <label for="changeUserInfo">儲存變更的取餐資訊</label>
          </div>
          <div class="submitBtnGroup">
            <button
              @click="isModalOpen = false"
              class="submitBtnGroup__cancelBtn btn btn-danger"
            >
              取消
            </button>
            <button
              @click="sendOrder"
              class="submitBtnGroup__confirmBtn btn btn-primary"
            >
              確認
            </button>
          </div>
        </template>
      </BaseModal>
    </div>
    <Login v-else></Login>
  </div>
</template>
<script>
import CheckoutList from "../components/cart/CheckoutList.vue";
import UserInfoForm from "../components/cart/UserInfoForm.vue";
import BaseModal from "../components/bases/BaseModal.vue";
import Login from "../components/member/Login.vue";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../stores/cartStore";
import { useAuthStore } from "../stores/authStore.js";
import { useOrderStore } from "../stores/orderStore";

export default {
  components: { CheckoutList, UserInfoForm, BaseModal, Login },
  data() {
    return {
      tempUserInfo: {},
      isModalOpen: false,
    };
  },
  computed: {
    ...mapState(useAuthStore, ["hasLoggedIn", "userInfo"]),
    ...mapState(useCartStore, ["cart", "cartWithSubtotal", "total"]),
    ...mapState(useOrderStore, ["orders"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["updateUserInfo"]),
    ...mapActions(useOrderStore, ["addOrder"]),
    ...mapActions(useCartStore, ["clearCart"]),
    equalizeUserInfo(tempUserInfo) {
      this.tempUserInfo = tempUserInfo;
    },
    sendOrder() {
      //確認是否要儲存UserInfo
      if (this.$refs.changeUserInfo.value == "yes") {
        this.updateUserInfo(this.tempUserInfo);
      }
      // 接下來把cartWithSubtotal、total、userInfo合併成一個新物件，外加訂單id
      let newOrder = {
        orderId: Math.random().toString(36).substring(2, 10),
        orderTime: new Date().toLocaleString(),
        userInfo: { ...this.userInfo },
      };
      newOrder.products = { ...this.cartWithSubtotal };
      newOrder.total = this.total;
      console.log(newOrder);
      //加到歷史訂單
      this.addOrder(newOrder);
      console.log(this.orders);
      //清空購物車
      this.clearCart();
      console.log(this.cart);
      //關閉Modal
      this.isModalOpen = false;
    },
  },
};
</script>
<style lang="scss">
.cancenlBtn,
.submitBtn {
  font-weight: bold;
  width: 30%;
  padding: 10px 0;
}
</style>
