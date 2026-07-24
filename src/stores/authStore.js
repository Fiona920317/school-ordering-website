import { defineStore } from "pinia";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    hasLoggedIn: true,
    userInfo: {
      name: "林同學",
      studentNum: "A1234567",
      phoneNum: "091234567",
      area: "B",
    },
  }),
  actions: {
    toggleLoginState() {
      this.hasLoggedIn = !this.hasLoggedIn;
      router.push("/");
    },

    updateUserInfo(tempUserInfo) {
      this.userInfo = tempUserInfo;
    },
  },
});
