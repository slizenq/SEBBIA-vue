<template>
    <div class="card-group">
        <ResumeCard
            v-for="rezume in filteredRezumes"
            :key="rezume.id"
            :rezume="rezume"
        />
        <section v-if="!filteredRezumes.length" class="no-resume">
            <p class="no-resume__title">Вы еще не получили резюме</p>
            <p class="no-resume__subtitle">
                Заполните информацию о компании, чтобы получить <br />
                больше резюме
            </p>
        </section>
    </div>
</template>

<script setup>
import ResumeCard from "./ResumeCard.vue";
import { useStore } from "~/storage/storage";
import { computed } from "vue";

const store = useStore();

const props = defineProps({
    value: {
        type: String,
        required: true,
    },
});

const filteredRezumes = computed(() => {
    if (props.value === "Просмотренные резюме") {
        return store.rezumes.filter(
            (rezume) =>
                rezume.status === "Отказано" || rezume.status === "Одобрено"
        );
    } else if (props.value === "Входящие резюме") {
        return store.rezumes.filter(
            (rezume) =>
                rezume.status === "Не просмотрено" ||
                rezume.status === "Просмотрено"
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
    grid-template-rows: repeat(auto, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 16px;
}

@media (max-width: 890px) {
    .card-group {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 1024px) {
    .card-group {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1440px) {
    .card-group {
        grid-template-columns: repeat(3, 1fr);
    }
}

.no-resume {
    margin-top: 54px;
    grid-column: 1 / 3;
    text-align: center;
    padding: 24px;
}

.no-resume__title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 6px;
    color: rgba(64, 158, 255, 1);
}

.no-resume__subtitle {
    font-size: 16px;
    color: rgba(144, 147, 153, 1);
}
</style>
