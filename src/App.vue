<template>
    <div id="app">
        <div class="map-container">
            <MenuTab />
        </div class="RobotControlTabContents-container">
        <div>
            <RobotControlTabContents />
        </div>
    </div>
</template>

<script>
import RobotControlTabContents from "./components/RobotControlTabContents.vue";
import MenuTab from "./layouts/MenuTab.vue";

export default {
    name: "App",
    components: {
        MenuTab,
        // RobotControlTabContents,
    },
};
</script>

<style scoped>
#app {
    padding: 0; /* 패딩을 제거합니다. */
}
.map-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.map-container > MenuTab {
    width: 100%; /* 너비를 100%로 설정합니다. */
    height: auto; /* 높이를 자동으로 설정합니다. */
}
@media screen and (min-width: 1025px) {
    .map-container > MenuTab {
        width: 100%; /* 너비를 100%로 설정합니다. */
    }
}
.RobotControlTabContents-container {
    margin-top: px; /* 이것은 RobotControlTabContents가 MenuTab 아래에 위치하도록 합니다. */
}

</style>
