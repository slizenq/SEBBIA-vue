<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" class="bread_margin" />
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
import { ref, onMounted } from "vue";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";
import Progress from "~/components/UI/interface/bigEl/Progress.vue";
import Rezume from "~/components/account/Rezume.vue";
import RezumeState from "~/components/account/RezumeState.vue";
import RezumeUser from "~/components/account/RezumeUser.vue";
const isAuthorized = ref(false);
onMounted(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        navigateTo('/error');
    } else {
        isAuthorized.value = true;
    }
});
const breadcrumbItems = ref([
    { path: "/x/xx/xxx", label: "Профиль" },
    { path: "/x/xx/xxx", label: "Аккаунт" },
]);
</script>

<style>
.rezume__screen {
    display: flex;
    flex-wrap: wrap;
}
.rezume__screen {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: first baseline;
}
.bread_margin {
    margin-top: 80px;
}
</style>
