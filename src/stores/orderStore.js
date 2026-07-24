import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orders: [
      {
        orderId: "jms9btmb",
        orderTime: "2026/7/24 上午10:58:01",
        products: [
          {
            productName: "檸檬紅茶",
            productNum: 2,
            productPrice: 41,
            resId: 91837465,
            resName: "元氣飲料舖",
            subtotal: 82,
            vegan: true,
          },
        ],
        total: 82,
        userInfo: {
          area: "B",
          name: "林同學",
          phoneNum: "091234567",
          studentNum: "A1234567",
        },
      },
    ],
  }),
  actions: {
    addOrder(newOrder) {
      this.orders.unshift(newOrder);
    },
  },
});
