import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [
      {
        resName: "活力午餐",
        resId: 12345678,
        productName: "雞腿便當",
        vegan: false,
        productPrice: 117,
        productNum: 3,
        subtotal: 0,
      },
      {
        resName: "元氣飲料舖",
        resId: 91837465,
        productName: "檸檬紅茶",
        vegan: true,
        productPrice: 41,
        productNum: 2,
        subtotal: 0,
      },
    ],
  }),
  getters: {
    cartWithSubtotal(state) {
      return state.cart.map((item) => ({
        //map()=>把舊陣列全部處理過，並生成一個新陣列
        ...item, //複製cart的item
        subtotal: item.productPrice * item.productNum, //在新陣列加上subtotal屬性並計算完
      }));
    },
    total() {
      let total = 0;
      this.cartWithSubtotal.forEach((item) => (total += item.subtotal));
      return total;
    },
  },
  actions: {
    addProductToCart(product) {
      this.cart.push(product);
    },
    reduceProductNum(index) {
      //因為渲染時用的是getters的cartWithSubtotal，直接改的話只是改到複製品
      //所以需要用index定位搜尋，更改本體(cart)的資料，才能實時更新
      if (this.cart[index].productNum > 1) {
        this.cart[index].productNum--;
      }
    },
    addProductNum(index) {
      this.cart[index].productNum++;
    },
    deleteOrderItem(index) {
      this.cart.splice(index, 1);
    },
    clearCart() {
      this.cart = [];
    },
  },
});
