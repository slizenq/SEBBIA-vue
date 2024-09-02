<template>
    <div>
        <!-- Если есть введённый запрос и результаты поиска, отображаем количество найденных вакансий -->
        <div
            v-if="props.searchInput && filteredCards.length > 0"
            class="status"
        >
            <p class="notFind">Найдено {{ filteredCards.length }} вакансий</p>
            <span class="notFind-span"
                >с запросом "{{ props.searchInput }}"</span
            >
        </div>

        <!-- Отображаем отфильтрованные карточки, если они есть -->
        <div v-if="filteredCards.length > 0" class="card-list">
            <Card
                v-for="(card, index) in filteredCards"
                :key="index"
                :company="card.company"
                :vacancy="card.vacancy"
                :education="card.education"
            />
        </div>

        <!-- Если карточек нет и введён запрос, отображаем сообщение об ошибке поиска -->
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

        <!-- Кнопка "Показать больше", отображается если есть ещё карточки для показа -->
        <div v-if="hasMoreCards" class="show-more">
            <button @click="showMore" class="show-more-btn">
                Показать больше
            </button>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import Card from "./Card.vue";

const props = defineProps({
    searchInput: {
        type: String,
        required: true,
    },
});

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
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
    { id: 7, company: "Apple", vacancy: "Frontend", education: "ДГТУ, РКСИ" },
]);

// Состояние для отслеживания количества отображаемых карточек
const visibleCount = ref(9);

// Функция для отображения большего количества карточек
const showMore = () => {
    visibleCount.value += 9;
};

// Фильтрация карточек на основе введённого поиска
const filteredCards = computed(() => {
    if (!props.searchInput) {
        return cards.value.slice(0, visibleCount.value);
    }
    // Фильтрация карточек по названию компании
    const result = cards.value.filter((card: { company: string }) =>
        card.company.toLowerCase().includes(props.searchInput.toLowerCase())
    );
    return result.slice(0, visibleCount.value);
});

// Проверка, есть ли ещё карточки для отображения
const hasMoreCards = computed(() => {
    if (!props.searchInput) {
        return visibleCount.value < cards.value.length;
    }
    return visibleCount.value < filteredCards.value.length;
});
</script>

<style scoped>
/* Стили для состояния поиска */
.status {
    display: flex;
    padding-block: 24px;
    gap: 10px;
    flex-direction: column;
}

/* Стили для ошибки поиска */
.searchError {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* Стили для списка карточек */
.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: clamp(16px, 2.3vw, 40px);
    justify-content: start;
}

/* Стили для текста, если ничего не найдено */
.notFind {
    font-size: 34px;
}

/* Стили для кнопки "Показать больше" */
.show-more {
    text-align: center;
    margin-top: 20px;
}

.show-more-btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.show-more-btn:hover {
    background-color: #0056b3;
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
