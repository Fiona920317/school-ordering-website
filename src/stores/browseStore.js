import { defineStore } from "pinia";

export const useBrowseStore = defineStore("browse", {
  actions: {
    selectRestaurant(resItem) {
      this.temp = {
        resName: resItem.name,
        resId: resItem.id,
        products: resItem.products,
      };
    },
  },
  state: () => ({
    temp: { resName: "", resId: "", products: [] },
    restaurants: [
      {
        name: "活力午餐",
        tag: "便當",
        id: 12345678,
        vegan: true,
        state: "新品",
        imgUrl:
          "https://images.unsplash.com/photo-1783962211635-ef0af72c7759?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        products: [
          {
            productName: "雞腿便當",
            vegan: false,
            state: "新品",
            ori_price: 130,
            discount: 0.9,
            final_price: 117,
          },
          {
            productName: "菜飯便當",
            vegan: true,
            state: "",
            ori_price: 90,
            discount: 1,
            final_price: 90,
          },
          {
            productName: "排骨便當",
            vegan: false,
            state: "熱門",
            ori_price: 120,
            discount: 0.8,
            final_price: 96,
          },
        ],
      },
      {
        name: "香味食堂",
        tag: "飯食",
        id: 48291375,
        vegan: false,
        state: "熱門",
        imgUrl:
          "https://images.unsplash.com/photo-1784318519037-7ee0b1668e95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        products: [],
      },
    ],
  }),
});
