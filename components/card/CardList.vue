<template>
    <div>
        <!-- Проверяем, есть ли отфильтрованные карточки -->
        <div v-if="filteredCards.length > 0" class="card-list">
            <Card
                v-for="(card, index) in filteredCards"
                :key="index"
                :company="card.company"
            />
        </div>
        <!-- Если карточек нет, выводим текст "Не найдено" -->
        <div v-else>
            <p class="notFind">Не найдено</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, defineProps } from "vue";
import Card from "./Card.vue";

// Определение пропсов для получения значения поиска
const props = defineProps({
    searchInput: {
        type: String,
        required: true,
    },
});

// Пример данных для карточек
const cards = ref([
    { id: 1, company: "Sebbia", vacancy: "Backend", education: "ДГТУ, РКСИ" },
    { id: 2, company: "Google", vacancy: "Backend", education: "ДГТУ, РКСИ" },
    { id: 3, company: "Apple", vacancy: "Backend", education: "ДГТУ, РКСИ" },
    { id: 4, company: "Amazon", vacancy: "Backend", education: "ДГТУ, РКСИ" },
    {
        id: 5,
        company: "Facebook",
        vacancy: "Frontend",
        education: "ДГТУ, РКСИ",
    },
    {
        id: 6,
        company: "Microsoft",
        vacancy: "Frontend",
        education: "ДГТУ, РКСИ",
    },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
]);

// Фильтрация карточек на основе ввода
const filteredCards = computed(() => {
    if (!props.searchInput) {
        return cards.value;
    }
    const result = cards.value.filter((card) =>
        card.company.toLowerCase().includes(props.searchInput.toLowerCase())
    );
    console.log("Filtered cards: ", result); // Логируем результат фильтрации
    return result;
});

// Слушаем изменения searchInput
watch(
    () => props.searchInput,
    (newVal) => {
        console.log("Search input changed: ", newVal); // Логируем новое значение поиска
    }
);
</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: clamp(16px, 2.3vw, 40px);
    justify-content: start;
}

.notFind {
    font-size: 34px;
}

@media (min-width: 768px) {
    .card-list {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@media (min-width: 1024px) {
    .card-list {
        grid-template-columns: repeat(3, minmax(300px, 1fr));
    }
}

.card-list > * {
    max-width: 552px;
}

.card-list > *:nth-child(2n):last-child {
    justify-self: start;
}
</style>
