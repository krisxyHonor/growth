import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { pinia } from "./store/index.ts";
import { router } from "./router/index.ts";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(pinia).use(router).use(ElementPlus).mount("#app");
