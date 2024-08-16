<template>
    <div class="container">
        <div class="BreadCrumb"><BreadCrumb/></div>
        <div class="about-search"><Search/></div>
        <div class="about-dropdownlist"><DropdownList/></div>
        <div class="company__list">
            <div v-for="item in 9" :key="item">
                <Card/>
            </div>
        </div>
    </div>
</template>

<script setup>
import BreadCrumb from '~/components/BreadCrumb.vue';
import Card from '~/components/card/Card.vue';
import DropdownList from '~/components/UI/DropdownList.vue';
import Search from '~/components/UI/Search.vue';
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