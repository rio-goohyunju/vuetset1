<template>
    <div id="app" style="width: 100%; height: 100%; overflow-y: scroll; position: relative">
        <div class="tabs" style="border-bottom: 1px solid #ccc; width: 100%">
            <router-link to="/" tag="button" class="tab" style="color: white; width: 100%">SPOT / 촬영장비</router-link>
            <router-link to="/robot-house-control" tag="button" class="tab" style="color: white; width: 100%"
                >SPOT 하우스</router-link
            >
        </div>
        <router-view />
    </div>
</template>
>

<script>
import RobotControlTabContents from "@/components/RobotControlTabContents.vue";
import RobotHouseControlTabContents from "@/components/RobotHouseControlTabContents.vue";
export default {
    name: "MenuTab",
    components: {
        RobotControlTabContents,
        RobotHouseControlTabContents,
    },
};
</script>

<style scoped>
#app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3000; /* z-index 값을 높입니다. */
}
.tabs {
    display: flex;
    justify-content: space-between;
    width: 100%; /* 기본적으로 너비를 100%로 설정합니다. */
}
.tab {
    flex: 1; /* 각 탭이 동일한 공간을 차지하도록 합니다. */
    text-align: center;
    padding: 10px 0;
    background: #333;
    border: none;
    cursor: pointer;
}

/* 화면의 너비가 1024px을 넘어갈 때 */
@media screen and (min-width: 1025px) {
    .tabs {
        width: 100%; /* 너비를 100%로 설정합니다. */
    }
}
</style>
