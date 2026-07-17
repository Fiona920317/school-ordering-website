import { createRouter, createWebHistory } from "vue-router";

// 1. 定義路由組件
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Browse from "../views/Browse.vue";
import RestaurantList from "../components/RestaurantList.vue";
import ProductList from "../components/ProductList.vue";
import Cart from "../views/Cart.vue";
import Member from "../views/Member.vue";

// 2. 定義路由規則
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/login", component: Login, name: "Login" },
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
  { path: "/member", component: Member, name: "Member" },
];

// 3. 建立路由實例
const router = createRouter({
  history: createWebHistory("/school-ordering-website/"), // 因為config裡面有指定網址，所以這邊也一定要加
  routes,
});

export default router;
