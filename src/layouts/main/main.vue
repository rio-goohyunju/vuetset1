<template>
    <div class="main">
        <div class="message">로봇과 프로젝트를 선택해주세요</div>
    </div>
</template>

<script>
export default {
    name: "Main",
};
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #192439;
}

.message {
    color: #ffffff;
    font-size: 24px;
}
</style>
