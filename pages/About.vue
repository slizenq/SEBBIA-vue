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
import BreadCrumb from "~/components/BreadCrumb.vue";
import DropdownList from "~/components/UI/DropdownList.vue";
import Search from "~/components/UI/Search.vue";
import CardList from "~/components/card/CardList.vue";

const breadcrumbItems = ref([
    { path: "/x/xx/xxx", label: "Главная" },
    { path: "/x/xx/xxx", label: "Поиск компании" },
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
