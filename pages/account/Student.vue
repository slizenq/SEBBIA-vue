<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" />
        <Progress />
        <div class="rezume__screen">
            <div>
                <Rezume />
                <RezumeState />
            </div>
            <div>
                <RezumeUser />
            </div>
        </div>
    </div>
</template>

<script setup>
import BreadCrumb from "~/components/BreadCrumb.vue";
import { ref } from "vue";
import Progress from "~/components/UI/Progress.vue";
import Rezume from "~/components/account/Rezume.vue";
import RezumeState from "~/components/account/RezumeState.vue";
import RezumeUser from "~/components/account/RezumeUser.vue";

const breadcrumbItems = ref([
    { path: "x/xx/xxx", label: "Профиль" },
    { path: "x/xx/xxx", label: "Аккаунт" },
]);
</script>

<style>
.rezume__screen {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: first baseline;
}
</style>
