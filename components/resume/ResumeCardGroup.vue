<template>
    <div class="card-group">
        <ResumeCard
            v-for="rezume in filteredRezumes"
            :key="rezume.id"
            :rezume="rezume"
        />
    </div>
</template>

<script setup>
import ResumeCard from "./ResumeCard.vue";
import { useStore } from "~/storage/storage";
import { computed } from "vue";

const store = useStore();
const value = inject("value");

const filteredRezumes = computed(() => {
    if (value === "Просмотренные") {
        return store.rezumes.filter(
            (rezume) =>
                rezume.status === "Отказано" || rezume.status === "Одобрено"
        );
    } else if (value === "Входящие") {
        return store.rezumes.filter(
            (rezume) =>
                rezume.status !== "Отказано" && rezume.status !== "Одобрено"
        );
    } else {
        return store.rezumes;
    }
});
</script>

<style scoped>
.card-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 16px;
}
</style>
