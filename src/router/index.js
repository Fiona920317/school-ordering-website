import { createRouter, createWebHistory } from "vue-router";

// 1. 定義路由組件
//Home
import Home from "../views/Home.vue";
//Browse
import Browse from "../views/Browse.vue";
import RestaurantList from "../components/browse/RestaurantList.vue";
import ProductList from "../components/browse/ProductList.vue";
//Cart
import Cart from "../views/Cart.vue";
//Member
import Member from "../views/Member.vue";
import MemberIndex from "../components/member/MemberIndex.vue";
import MemberInfo from "../components/member/MemberInfo.vue";
import OrderHistory from "../components/member/OrderHistory.vue";

// 2. 定義路由規則
const routes = [
  { path: "/", component: Home, name: "Home" },
  {
    path: "/browse",
    component: Browse,
    children: [
      {
        path: "",
        component: RestaurantList,
        name: "Browse",
      },
      {
        path: "products",
        component: ProductList,
        name: "Products",
      },
    ],
  },
  { path: "/cart", component: Cart, name: "Cart" },
  {
    path: "/member",
    component: Member,

    children: [
      {
        path: "",
        component: MemberIndex,
        name: "MemberIndex",
      },
      {
        path: "member-info",
        component: MemberInfo,
        name: "MemberInfo",
      },
      {
        path: "order-history",
        component: OrderHistory,
        name: "OrderHistory",
      },
    ],
  },
];

// 3. 建立路由實例
const router = createRouter({
  history: createWebHistory("/school-ordering-website/"), // 因為config裡面有指定網址，所以這邊也一定要加
  routes,
});

export default router;
