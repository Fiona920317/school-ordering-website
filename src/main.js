import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap-icons/font/bootstrap-icons.css"; //bootsrap icons
import "/src/scss/style.scss"; //客製化變數+bootstrap變數
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //bootstrap js

import router from "./router"; // 引入路由實例

const app = createApp(App);

app.use(router); // 啟用路由
app.mount("#app");
