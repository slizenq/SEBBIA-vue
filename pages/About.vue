<template>
    <div class="container">
        <div class="BreadCrumb">
            <BreadCrumb :breadcrumbItems="breadcrumbItems"/>
        </div>
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
import DropdownList from "~/components/UI/interface/minEl/DropdownList.vue";
import CardList from "~/components/card/CardList.vue";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";
import Search from "~/components/UI/interface/bigEl/Search.vue";

const breadcrumbItems = ref([
    { path: "/", label: "Главная" },
    { path: "/about", label: "Поиск компании" },
]);
const searchText = ref("");
const handleSearchInput = (input) => {
    searchText.value = input;
};
const route = useRoute();
onMounted(() => {
    const searchQuery = route.query.search;
    if (searchQuery) {
        searchText.value = searchQuery; 
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
