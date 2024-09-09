<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" class="breadCrumb" />
        <Progress style="margin-bottom: 32px" />
        <el-segmented
            v-model="value"
            :options="options"
            @click="handleChange"
            style="border-radius: 4px; margin-bottom: 24px"
        />
        <ResumeCardGroup :value="value" />
    </div>
</template>

<script setup>
import BreadCrumb from "~/components/BreadCrumb.vue";
import Progress from "~/components/UI/Progress.vue";
import ResumeCardGroup from "~/components/resume/ResumeCardGroup.vue";
import { ElSegmented } from "element-plus";
import { ref } from "vue";
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
    { path: "x/xx/xxx", label: "Просмотренные резюме" },
    { path: "x/xx/xxx", label: "Просмотренные резюме" },
]);

const value = ref("Просмотренные");
provide("value", value);

const options = ["Просмотренные", "Входящие"];

const handleChange = () => {
    console.log("Выбрано:", this.value);
};
</script>

<style>
.breadCrumb {
    margin-top: 80px;
    margin-bottom: 16px;
}

.el-segmented__group {
    gap: 5px;
}

.is-selected {
    border-radius: 4px;
}
</style>
