<template>
    <div>
        <!-- Если есть введённый запрос и результаты поиска, отображаем количество вакансий и запрос -->
        <div
            v-if="props.searchInput && filteredCards.length > 0"
            class="status"
        >
            <p class="notFind">Найдено {{ filteredCards.length }} вакансий</p>
            <span class="notFind-span"
                >с запросом "{{ props.searchInput }}"</span
            >
        </div>

        <!-- Проверяем, есть ли отфильтрованные карточки -->
        <div v-if="filteredCards.length > 0" class="card-list">
            <Card
                v-for="(card, index) in filteredCards"
                :key="index"
                :company="card.company"
                :vacancy="card.vacancy"
                :education="card.education"
            />
        </div>

        <!-- Если карточек нет и запрос не пустой, выводим текст "Не найдено" и все карточки -->
        <div v-else-if="props.searchInput" class="searchError">
            <p class="notFind">Упс! По вашему запросу ничего не найдено</p>
            <span class="notFind-span">Попробуйте ввести другой запрос</span>
            <p>Предлагаем вам посмотреть данные компании:</p>
            <div class="card-list">
                <Card
                    v-for="(card, index) in cards"
                    :key="index"
                    :company="card.company"
                    :vacancy="card.vacancy"
                    :education="card.education"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
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
</script>

<style scoped>
.status {
    display: flex;
    padding-block: 24px;
    gap: 10px;
    flex-direction: column;
}

.searchError {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

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
