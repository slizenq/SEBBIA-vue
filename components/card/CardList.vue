<template>
    <div class="card-list">
        <Card v-for="(card, index) in cards" :key="index" />
    </div>
</template>

<script setup>
import Card from "./Card.vue";

// Пример данных для карточек
const cards = ref([
    { id: 1, company: "Sebbia" },
    { id: 2, company: "Google" },
    { id: 3, company: "Apple" },
    { id: 4, company: "Amazon" },
    { id: 5, company: "Facebook" },
    { id: 6, company: "Microsoft" },
    { id: 7, company: "Apple" },
]);
</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 16px;
    justify-content: start;
}

/* Медиа-запросы для адаптации на разных экранах */
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

/* Максимальная ширина карточки */
.card-list > * {
    max-width: 552px;
}

/* Если карточек в строке две, третья пустая */
.card-list > *:nth-child(2n):last-child {
    justify-self: start;
}
</style>
