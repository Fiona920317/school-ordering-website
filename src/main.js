import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap-icons/font/bootstrap-icons.css"; //bootsrap icons
import "/src/scss/style.scss"; //客製化變數+bootstrap變數
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //bootstrap js

const app = createApp(App);
import router from "./router"; // 引入路由實例
app.use(router); // 啟用路由

import { createPinia } from "pinia"; //引入pinia
app.use(createPinia()); // 啟用pinia

app.mount("#app"); //裝上App
