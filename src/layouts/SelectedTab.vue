<template>
    <div class="selection-layout">
        <h2>프로젝트와 로봇을 선택해주세요</h2>
        <select v-model="selectedProject">
            <option v-for="project in projects" :key="project.id" :value="project.id">
                {{ project.name }}
            </option>
        </select>
        <select v-model="selectedRobot">
            <option v-for="robot in robots" :key="robot.id" :value="robot.id">
                {{ robot.name }}
            </option>
        </select>
        <button @click="navigateToSelected">선택 완료</button>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "SelectedTab",
    setup() {
        const router = useRouter();
        const selectedProject = ref(null);
        const selectedRobot = ref(null);
        const projects = ref([
            { id: 1, name: "프로젝트1" },
            { id: 2, name: "프로젝트2" },
        ]);
        const robots = ref([
            { id: 1, name: "로봇1" },
            { id: 2, name: "로봇2" },
        ]);

        const navigateToSelected = () => {
            router.push({
                name: "SelectedScreen",
                params: { projectId: selectedProject.value, robotId: selectedRobot.value },
            });
        };

        return {
            selectedProject,
            selectedRobot,
            projects,
            robots,
            navigateToSelected,
        };
    },
};
</script>

<style scoped>
.selection-layout {
    position: relative;
    width: 100%;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}

.selection-layout > select,
button {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
}

@media screen and (min-width: 1025px) {
    .selection-layout {
        width: 100%;
    }
}
</style>
