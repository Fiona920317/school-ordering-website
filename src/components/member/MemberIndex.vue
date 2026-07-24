<template>
  <div
    class="d-flex align-items-center w-100 p-3 shadow-sm"
    style="background-color: #f9ecd4; border-radius: 20px 20px 0 0"
  >
    <img
      class="img-fluid"
      style="height: 80px; width: 80px; border-radius: 100%"
      src="https://images.unsplash.com/photo-1783949247747-210d1403da8a?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
    <div class="ms-3">
      <h5>{{ userInfo.name }}</h5>
      <p class="m-0">學號 {{ userInfo.studentNum }}</p>
    </div>
  </div>
  <ul
    class="userLinksGroup w-100 shadow-sm"
    style="border-radius: 0 0 20px 20px"
  >
    <li>
      <router-link to="/member/member-info" class="userLinksGroup__link">
        <i class="userLinksGroup__link__titleIcon bi bi-person-circle"></i>
        <div class="ms-3">
          <h5>基本資料管理</h5>
          <p class="m-0">姓名、電話、預設取餐地點</p>
        </div>
        <i
          class="userLinksGroup__link__arrowIcon translate-middle bi bi-chevron-right"
        >
        </i>
      </router-link>
    </li>
    <li>
      <router-link to="/member/order-history" class="userLinksGroup__link">
        <i class="userLinksGroup__link__titleIcon bi bi-list"></i>
        <div class="ms-3">
          <h5>我的訂單</h5>
          <p class="m-0">查看歷史訂單</p>
        </div>
        <i
          class="userLinksGroup__link__arrowIcon translate-middle bi bi-chevron-right"
        >
        </i>
      </router-link>
    </li>
    <li>
      <a
        class="userLinksGroup__link"
        style="border-radius: 0 0 20px 20px"
        href=""
        @click.prevent="toggleLoginState"
      >
        <i class="userLinksGroup__link__titleIcon bi bi-box-arrow-right"></i>
        <div class="ms-3">
          <h5>登出</h5>
          <p class="m-0">退出登入狀態</p>
        </div>
        <i
          class="userLinksGroup__link__arrowIcon translate-middle bi bi-chevron-right"
        >
        </i>
      </a>
    </li>
  </ul>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../../stores/authStore";
export default {
  computed: {
    ...mapState(useAuthStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["toggleLoginState"]),
  },
};
</script>
<style lang="scss">
.userLinksGroup__link {
  display: flex;
  align-items: center;

  position: relative;
  padding: 20px;

  color: $primary;
  background-color: $light;
  border-bottom: 1px solid $secondary;
}
.userLinksGroup__link:hover {
  color: $light;
  background-color: $primary;
}
.userLinksGroup__link__titleIcon {
  font-size: 36px;
}
.userLinksGroup__link__arrowIcon {
  position: absolute;
  top: 50%;
  right: 10px;
}
</style>
