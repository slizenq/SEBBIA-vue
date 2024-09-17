<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" class="bread_margin" />
        <Progress/>
    </div>
</template>

<script setup>
import { BreadCrumb } from './../../../components/BreadCrumb.vue'
const breadcrumbItems = ref([
    { path: "x/xx/xxx", label: "Профиль" },
    { path: "x/xx/xxx", label: "Аккаунт" },
]);
</script>

<style scoped>
</style>