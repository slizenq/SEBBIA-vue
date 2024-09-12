<template>
    <div>
        <!-- Если есть введённый запрос и результаты поиска, отображаем количество найденных вакансий -->
        <div v-if="props.searchInput && filteredCards.length > 0" class="status">
            <p class="notFind">Найдено {{ filteredCards.length }} вакансий</p>
            <span class="notFind-span">с запросом "{{ props.searchInput }}"</span>
        </div>

        <!-- Отображаем отфильтрованные карточки, если они есть -->
        <div v-if="filteredCards.length > 0" class="card-list">
            <Card
                v-for="(card, index) in filteredCards"
                :key="index"
                :title="card.title"
                :description="card.description"
                :location="card.location"
                :requirements="card.requirements"
                :vacancy_id="card.vacancy_id"
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
                    :title="card.title"
                    :description="card.description"
                    :location="card.location"
                    :requirements="card.requirements"
                    :vacancy_id="card.vacancy_id"
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
import { IP } from '../UI/auth/Authentication';
import { ref, computed, defineProps } from "vue";
import axios from 'axios';
import Card from "./Card.vue";

const cards = ref([]);
const searchResumes = async () => {
    const response = await axios.get(`${IP}/vacancies/search`);
    console.log(response.data.vacancy_id);
    
    response.data.forEach(item => {
        const newCard = {
            vacancy_id: item.vacancy_id,
            title: item.title,
            description: item.description,
            location: item.location,
            requirements: item.requirements,
        };
        cards.value.push(newCard);
    });
};
searchResumes();
const props = defineProps({
    searchInput: {
        type: String,
        required: true,
    },
});

const visible = ref(6);
const handleScroll = () => {
  if (isSpecialPage()) {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.offsetHeight;
    const triggerPoint = 0.7;

    if (scrollPosition >= (documentHeight * triggerPoint)) {
      showMore();
    }
  }
};
const showMore = () => {
    visible.value += 6;
};
const isSpecialPage = () => {
  return window.location.href.includes("/about");
};
onMounted(() => {
  if (isSpecialPage()) {
    window.addEventListener('scroll', handleScroll);
  }
  searchResumes();
});
const filteredCards = computed(() => {
    if (!props.searchInput) {
        return cards.value.slice(0, visible.value);
    }
    // Фильтрация карточек по названию компании
    const result = cards.value.filter((card: { title: string }) =>
        card.title.toLowerCase().includes(props.searchInput.toLowerCase())
    );
    return result.slice(0, visible.value);
});

// Проверка, есть ли ещё карточки для отображения
const hasMoreCards = computed(() => {
    if (!props.searchInput) {
        return visible.value < cards.value.length;
    }
    return visible.value < filteredCards.value.length;
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
