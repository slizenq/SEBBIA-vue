<template>
    <div>
        <div
            v-if="props.searchInput && filteredCards.length > 0"
            class="status"
        >
            <p class="notFind">Найдено {{ filteredCards.length }} вакансий</p>
            <span class="notFind-span"
                >с запросом "{{ props.searchInput }}"</span
            >
        </div>

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

        <div v-if="hasMoreCards" class="show-more">
            <button @click="showMore" class="show-more-btn">
                Показать больше
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IP } from "../UI/auth/Authentication";
import { ref, computed, defineProps, onMounted } from "vue";
import axios from "axios";
import Card from "./Card.vue";

const cards = ref([]);
const searchResumes = async () => {
    try {
        const response = await axios.post(`${IP}/getCompaniesByFilters`);
        const companies = response.data || []; 
        // console.log(companies);
        // console.log(response.data);
        for (let element of companies) {
            console.log(element);
            // console.log(cards.value)
        }
        console.log(cards.value);
        
        cards.value = companies.map((item: { id: any; title: any; aboutCompany: any; location: any; contracts: any; }) => ({
            vacancy_id: item.id || "",
            title: item.title || "Unknown",
            description: item.aboutCompany || "Unknown",
            location: item.location || "Unknown",
            requirements: item.contracts || [], 
        }));
    } catch (error) {
        console.error("Error fetching companies:", error.message);
    }
};
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

        if (scrollPosition >= documentHeight * triggerPoint) {
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
        window.addEventListener("scroll", handleScroll);
    }
    searchResumes();
});
const filteredCards = computed(() => {
    if (!props.searchInput) {
        return cards.value.slice(0, visible.value);
    }
    const result = cards.value.filter((card: { title: string }) =>
        card.title.toLowerCase().includes(props.searchInput.toLowerCase())
    );
    return result.slice(0, visible.value);
});

const hasMoreCards = computed(() => {
    if (!props.searchInput) {
        return visible.value < cards.value.length;
    }
    return visible.value < filteredCards.value.length;
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
    gap: clamp(16px, 2.3vw, 40px);
    justify-content: center; /* добавьте эту строку */
    grid-template-columns: 1fr;
}

@media (min-width: 680px) {
    .card-list {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
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

.notFind {
    font-size: 34px;
}
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
</style>
