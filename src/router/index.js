import { createRouter, createWebHistory } from "vue-router";

// 1. 定義路由組件
import Home from "../views/Home.vue";
// import About from "../views/About.vue";

// 2. 定義路由規則
const routes = [
  { path: "/", component: Home },
  //   { path: "/about", component: About },
];

// 3. 建立路由實例
const router = createRouter({
  history: createWebHistory("/school-ordering-website/"), // 使用 HTML5 History 模式
  routes,
});

export default router;
