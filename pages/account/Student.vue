<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" class="bread_margin" />
        <Progress />
        <div class="rezume__screen">
            <div>
                <Rezume/>
                <RezumeState />
            </div>
            <div>
                <RezumeUser/>
                <!-- @profileUpdated="updateProfileData" :isCompany="isCompany" :companyData="companyData" :studentData="studentData" :titlePage="titlePage" -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Rezume from "~/components/account/Rezume.vue";
import RezumeState from "~/components/account/RezumeState.vue";
import RezumeUser from "~/components/account/RezumeUser.vue";
import axios from "axios";
import { IP } from "~/components/UI/auth/Authentication";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";
import Progress from "~/components/UI/interface/bigEl/Progress.vue";
const isAuthorized = ref(false);
onMounted(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
        navigateTo("/error");
    } else {
        isAuthorized.value = true;
    }
});
let checkResumeId = async () => {
    try {
        
        let checkUUid = JSON.parse(localStorage.getItem("user")).uuid
        const getResume = await axios.get(`${IP}/resume/users/${checkUUid}/resumes`);
        let data = {
                resume_id: getResume.data[0].resume_id,
                progress: 0,
        };
        localStorage.setItem('resume_id', JSON.stringify(data))
    } catch (error) {
        console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
    }
}
checkResumeId()


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
.bread_margin {
    margin-top: 80px;
}
</style>
