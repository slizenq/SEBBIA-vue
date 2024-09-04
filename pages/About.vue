<template>
    <div class="container">
        <div class="BreadCrumb"><BreadCrumb /></div>
        <div class="about-search">
            <Search :page="'about'" @search-input="handleSearchInput" />
        </div>
        <div class="about-dropdownlist"><DropdownList /></div>
        <div class="company__list">
            <div>
                <CardList :searchInput="searchText" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BreadCrumb from "~/components/BreadCrumb.vue";
import DropdownList from "~/components/UI/DropdownList.vue";
import Search from "~/components/UI/Search.vue";
import CardList from "~/components/card/CardList.vue";

// Текст поиска, который будет передан в CardList
const searchText = ref("");

// Обработчик ввода поиска
const handleSearchInput = (input) => {
    searchText.value = input;
};

// Получаем маршрут
const route = useRoute();

// Если на страницу передан запрос через URL (например, из index.vue)
onMounted(() => {
    const searchQuery = route.query.search;
    if (searchQuery) {
        searchText.value = searchQuery; // Устанавливаем поисковый запрос
        // Можно также вызвать handleSearchInput(searchQuery), если необходимо выполнить дополнительную логику
    }
});
</script>

<style>
.about-dropdownlist {
    margin-top: 40px;
}
.BreadCrumb {
    margin-top: 80px;
}
.about-search {
    margin-top: 40px;
}
</style>
