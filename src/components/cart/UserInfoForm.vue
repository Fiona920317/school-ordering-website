<template>
  <div class="w-100">
    <h4 class="text-primary fw-bold">取餐資訊</h4>
    <form class="userInfo shadow-sm">
      <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="userInfo-item d-flex flex-column col">
          <label for="">姓名</label>
          <input type="text" v-model="tempUserInfo.name" />
        </div>
        <div class="userInfo-item d-flex flex-column col">
          <label for="">學號</label>
          <input type="text" v-model="tempUserInfo.studentNum" />
        </div>
        <div class="userInfo-item d-flex flex-column col">
          <label for="">電話</label>
          <input type="text" v-model="tempUserInfo.phoneNum" />
        </div>
        <div class="userInfo-item d-flex flex-column col">
          <label for="">取餐地點</label>
          <div class="d-flex flex-column flex-md-row align-items-md-center">
            <p class="m-0 me-3">誠心樓二樓</p>
            <select
              name="area"
              id="area"
              v-model="tempUserInfo.area"
              style="cursor: pointer; flex: 1"
            >
              <option value="A">A區(醫科院)</option>
              <option value="B">B區(口腔醫學院、健管院)</option>
              <option value="C">C區(醫學院)</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "../../stores/authStore";

export default {
  emits: ["tempUserInfo"],
  data() {
    return {
      tempUserInfo: {
        //先建一個空物件，待會mounted的時候同步
      },
    };
  },
  computed: {
    ...mapState(useAuthStore, ["userInfo"]),
  },
  mounted() {
    this.tempUserInfo = { ...this.userInfo };
    //不能直接在data裡面複製，會失敗
    //因為Options API的執行順序是data=>computed=>methods=>mounted，在data複製會得不到computed時才拿到的值
  },
  watch: {
    tempUserInfo() {
      this.$emit("tempUserInfo", this.tempUserInfo);
    },
  },
};
</script>
<style lang="scss">
.userInfo {
  background-color: $light;
  border-radius: 20px;
  padding: 20px;
}
.userInfo-item label {
  margin-bottom: 5px;
}
.userInfo-item input,
.userInfo-item select {
  border: none;
  padding: 10px;
  border-radius: 10px;
}
</style>
