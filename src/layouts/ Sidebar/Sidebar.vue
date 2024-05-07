<template>
    <div class="sidebar">
        <div class="minimap">
            <!-- 미니맵 내용 -->
        </div>
        <div class="status-boxes">
            <div class="status-box">
                <!-- 상태값 1 -->
            </div>
            <div class="status-box">
                <!-- 상태값 2 -->
            </div>
            <div class="status-box">
                <!-- 상태값 3 -->
            </div>
            <div class="status-box">
                <!-- 상태값 4 -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #f5f5f5;
}

.minimap {
    /* 미니맵 스타일 */
}

.status-boxes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.status-box {
    /* 상태 박스 스타일 */
}
</style>
