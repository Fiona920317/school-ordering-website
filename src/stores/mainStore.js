import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    testNum: 1,
    memberInfo: {
      name: "林同學",
      studentNum: "A1234567",
      phoneNum: "091234567",
      area: "B",
    },
  }),

  actions: {
    //類似methods
    test() {
      console.log(this.testNum);
    },
    getMemberInfo() {
      console.log(this.memberInfo);
    },
  },
});
