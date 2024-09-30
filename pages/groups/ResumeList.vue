<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" class="breadCrumb" />
        <Progress style="margin-bottom: 32px" />
        <el-segmented
            v-model="value"
            :options="options"
            @change="handleChange"
            style="border-radius: 4px; margin-bottom: 24px"
        />
        <ResumeCardGroup :value="value" />
    </div>
</template>

<script setup>
import ResumeCardGroup from "~/components/resume/ResumeCardGroup.vue";
import { ElSegmented } from "element-plus";
import { ref, onMounted } from "vue";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";
import Progress from "~/components/UI/interface/bigEl/Progress.vue";

const isAuthorized = ref(false);
const userInfo = ref(null);

onMounted(() => {
    const token = localStorage.getItem("access_token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token || !user) {
        navigateTo("/error");
    } else {
        isAuthorized.value = true;
        userInfo.value = user;
    }
});

const breadcrumbItems = ref([
    { path: "x/xx/xxx", label: "Профиль" },
    { path: "x/xx/xxx", label: "Аккаунт" },
]);

const value = ref("Просмотренные резюме");
const options = ["Просмотренные резюме", "Входящие резюме"];

const handleChange = () => {
    breadcrumbItems.value = [
        { path: "x/xx/xxx", label: "Профиль" },
        { path: "x/xx/xxx", label: "Аккаунт" },
        { path: "x/xx/xxx", label: value.value },
    ];
};

handleChange();
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
