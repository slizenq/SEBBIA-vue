<template>
    <div class="card-list">
        <Card
            v-for="(card, index) in cards"
            :key="index"
            :company="card.company"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
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
    gap: clamp(16px, 2.3vw, 40px);
    justify-content: start;
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
