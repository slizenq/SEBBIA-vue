<template>
    <div class="container">
        <div class="BreadCrumb"><BreadCrumb /></div>
        <div class="about-search">
            <Search @search-input="handleSearchInput" />
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
import BreadCrumb from "~/components/BreadCrumb.vue";
import DropdownList from "~/components/UI/DropdownList.vue";
import Search from "~/components/UI/Search.vue";
import CardList from "~/components/card/CardList.vue";

const searchText = ref("");

const handleSearchInput = (input) => {
    searchText.value = input;
};
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
