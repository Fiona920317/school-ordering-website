// import { createApp } from "vue";
//
// import router from "./router"; //引用router

// createApp(home).use(router).mount("#app"); //從路由裡拉出home，再掛載上去
import { createApp } from "vue";
import App from "./App.vue";
import "/src/scss/style.scss";
import router from "./router"; // 引入路由實例

const app = createApp(App);

app.use(router); // 啟用路由
app.mount("#app");
