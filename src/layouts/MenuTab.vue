<template>
    <div id="app" style="width: 100%; height: 100%; overflow-y: scroll; position: relative">
        <div class="tabs" style="border-bottom: 1px solid #ccc; width: 100%">
            <router-link to="/" tag="button" class="tab" style="color: white; width: 100%">SPOT / 촬영장비</router-link>
            <router-link to="/monitoring" tag="button" class="tab" style="color: white; width: 100%"
                >모니터링</router-link
            >
            <router-link to="/management" tag="button" class="tab" style="color: white; width: 100%">관리</router-link>
            <router-link to="/admin" tag="button" class="tab" style="color: white; width: 100%">관리자</router-link>
        </div>
        <router-view />
    </div>
</template>
>

<script>
import main from "@/layouts/main/main.vue";
export default {
    name: "MenuTab",
    components: {
        main,
    },
};
</script>

<style scoped>
#app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3000;
}
.tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.tab {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    background: #333;
    border: none;
    cursor: pointer;
}

@media screen and (min-width: 1025px) {
    .tabs {
        width: 100%;
    }
}
</style>
