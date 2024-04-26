<template>
    <div class="container">
        <div class="image-container">
            <img :src="dummyBluePrint" alt="Dummy Blue Print" />
        </div>
        <div class="button-container">
            ----버튼-----
            <div class="button-container2">sdasd</div>
            <div class="button-container2">asdsa</div>
        </div>
    </div>
</template>

<script>
import dummyBluePrint from "@/assets/image/dummyBluePrint.png";

export default {
    data() {
        return {
            dummyBluePrint,
        };
    },
};
</script>

<style scoped>
.container {
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%; /* 부모 요소의 높이를 설정해야 합니다. */
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.button-container {
    justify-content: center;
    align-items: center;
    flex: 1;
}

/* .image-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
} */

.image-container img {
    width: 50%;
    height: auto;
}
.button-container {
    height: 50%;
    margin-top: 20px;
}
.button-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
