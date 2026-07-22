import { defineStore } from "pinia";

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
});
