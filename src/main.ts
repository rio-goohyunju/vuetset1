import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import RobotControlTabContents from "./components/RobotControlTabContents.vue";
import RobotHouseControlTabContents from "./components/RobotHouseControlTabContents.vue";
import Main from "./layouts/main/main.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Main },
        { path: "/", component: RobotControlTabContents },
        { path: "/robot-house-control", component: RobotHouseControlTabContents },
    ],
});

createApp(App).use(router).mount("#app");
