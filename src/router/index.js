// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Browse from "../views/Browse.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/browse", component: Browse },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
