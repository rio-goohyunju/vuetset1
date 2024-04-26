import Vue from "vue";
import Router from "vue-router";
import RobotControlTabContents from "@/components/RobotControlTabContents.vue";
import RobotHouseControlTabContents from "@/components/RobotHouseControlTabContents.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: RobotControlTabContents,
        },
        {
            path: "/robot-house-control",
            component: RobotHouseControlTabContents,
        },
    ],
});
