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
import BreadCrumb from "~/components/BreadCrumb.vue";
import { ref } from "vue";
import Progress from "~/components/UI/Progress.vue";
import Rezume from "~/components/account/Rezume.vue";
import RezumeState from "~/components/account/RezumeState.vue";
import RezumeUser from "~/components/account/RezumeUser.vue";
const isAuthorized = ref(false);
const userInfo = ref(null)
onMounted(() => {
    const token = localStorage.getItem('access_token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !user) {
        navigateTo('/error');
    } else {
        isAuthorized.value = true;
        userInfo.value = user;
    }
});
const breadcrumbItems = ref([
    { path: "x/xx/xxx", label: "Профиль" },
    { path: "x/xx/xxx", label: "Аккаунт" },
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
