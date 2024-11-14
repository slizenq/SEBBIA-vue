<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" />
        <div class="company__vacancy" @search="sea(message)">
            <div class="company__vacancy__left-part">
                <div class="left__element">
                    <h1 class="direction">{{ vacancyData[0]?.directions[0]?.direction }}</h1>
                    <p class="description">{{  }}</p>
                </div>
                <div class="left__element">
                    <p class="element__title">Чем предстоит заниматься</p>
                    <ul><li>{{ vacancyData[0]?.about_practice }}</li></ul>
                </div>
                <div class="left__element">
                    <p class="element__title">Желательные навыки</p>
                    <el-tag v-if="vacancyData[0]?.expected_skills" v-for="(item, index) in vacancyData[0].expected_skills" :key="index" type="primary" effect="plain" round class="skills">
                        <div class="skill_tags">{{ item.skill }}</div>
                    </el-tag>
                </div>
                <div class="left__element">
                    <p class="element__title">О проектах</p>
                    <p class="description">{{ vacancyData[0]?.about_projects }}</p>
                </div>
            </div>
            <div class="company__vacancy__right-part">
                <div class="about__company">
                    <div>
                        <div>
                            <p class="right__title text__align">
                                {{ companyProfile?.title }}
                                <img src="./../assets/images/vacancy/confirm.svg"/>
                            </p>
                            <p class="right__description">{{ companyProfile?.typeCompany }}</p>
                        </div>
                        <div class="wrap__margin">
                            <p class="right__description text__align"><img src="./../assets/images/vacancy/location.svg"/>{{ companyProfile?.location }}</p>
                            <p class="right__description text__align"><img src="./../assets/images/vacancy/date.svg"/>22.02.2011</p>
                        </div>
                    </div>
                    <img :src="photoUrl" width="126px" height="126px" alt="logo" />
                </div>
                <p class="company__description">{{ vacancyData[0]?.about_projects }} 
                </p>
                <ElButton @click="openDialog" class="respond" type="primary" v-if="checkCompany">Откликнуться
                    <img src="./../assets/images/vacancy/micro-link.svg" />
                </ElButton>
                <ElButton @click="editVacancy" class="respond" type="primary" v-else>Редактировать
                    <img src="./../assets/images/vacancy/micro-link.svg" />
                </ElButton>
                <el-dialog v-model="isDialogVisibleVacancy" width="700px" :close-on-click-modal="true" :close-on-press-escape="true" @close="resetDialog" class="login-dialog" top="2%">
                    <EditVacancyCompany />
                </el-dialog>
                <el-dialog v-model="isDialogVisible" :title="titleModal" width="480px" :close-on-click-modal="true" :close-on-press-escape="true" @close="resetDialog" class="login-dialog">
                    <div class="wrap">
                        <div class="wrap__title">
                            <el-icon><InfoFilled color="#409EFF" height="22px"/></el-icon>
                            <h2>{{ dialogContent.title }}</h2>
                        </div>
                        <div class="wrap__content">
                            <p class="wrap__content-text">
                                {{ dialogContent.description }}
                            </p>
                        </div>
                        <div class="wrap__footer">
                            <el-button @click="closeDialog">Позже</el-button>
                            <el-button @click="link" type="primary">Перейти к резюме</el-button>
                        </div>
                    </div>
                </el-dialog>
                <div class="partner">
                <p class="contract">Партнеры</p>
                <el-tag v-for="(item, index) in companyProfile?.contracts" :key="index" type="primary" effect="plain" round class="skills">
                    <div class="skill_tags">{{ item }}</div> 
                </el-tag>
                {{ companyProfile?.contract }}  
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElTag, ElDialog, ElNotification } from "element-plus";
import { InfoFilled } from "@element-plus/icons-vue";
import { IP } from "~/components/UI/auth/Authentication";
import EditVacancyCompany from "./../components/EditAccount/company/EditVacancyCompany.vue";
import { ref } from "vue";
import axios from "axios";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";

const breadcrumbItems = ref([
    { path: "/", label: "Главная" },
    { path: "/about", label: "Поиск компании" },
    { path: "/", label: "Компания" },
]);
const photoUrl = ref()
const isDialogVisibleVacancy = ref(false);
const isDialogVisible = ref(false);
const editVacancy = function () {
    isDialogVisibleVacancy.value = true;
};
const dialogContent = ref({});
const openDialog = async () => {
    const vacancy_id = localStorage.getItem('vacancy')
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    };
    let studentId = localStorage.getItem("AccountID");
    let getResumeId = await axios.post(`${IP}/getResumeByStudentId`, { studentId: studentId }, { headers }); 
    const resumeData = {
        resumeId: getResumeId.data.resumeId,
        vacancyId: localStorage.getItem('vacancy'),
        studentId: studentId,
    };
    const response = await axios.post(`${IP}/createApplicationVacancy`, resumeData, { headers }); 

    let checkUUid = JSON.parse(localStorage.getItem("user")).uuid;
    const getResume = await axios.get(`${IP}/resume/users/${checkUUid}/resumes`);
    if (getResume.data[0].directions && getResume.data[0].education && getResume.data[0].phone_number && getResume.data[0].portfolio) {
        if (getResume.data[0].directions[0] == getResume.title) {
            dialogContent.value.title = "Направление не совпадает";
            dialogContent.value.description = "Для отклика требуется указать в вашем резюме, направление, которое присутствует в компании, на которую вы хотите откликнуться";
            isDialogVisible.value = true;
        } else {
            isDialogVisible.value = false;
            ElNotification({title: "Резюме отправлено", message: "Вы можете посмотреть его статус в личном кабинете ", duration: 2000, type: "success", showClose: false,});
        }
    } else {
        dialogContent.value.title = "Заполните резюме";
        dialogContent.value.description = "Для отклика требуется создать резюме в личном кабинете, где есть подсказки, чтобы научиться профессионально о себе рассказать будущему работодателю";
        isDialogVisible.value = true;
    }
};

const closeDialog = () => {
    isDialogVisible.value = false;
};

const link = () => {
    navigateTo("/account/Student");
};

const checkCompany = ref(true);
const vacancyData = ref({});
let companyProfile = ref()
const fetchVacancyData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    checkCompany.value = user?.isCompany === true || !user ? false : true;

    let vacancy_id = localStorage.getItem('vacancy')
    const vacancyFilterParams = {
        company_id: vacancy_id                         
    };
    const response = await axios.post(`${IP}/getVacanciesByParams`, vacancyFilterParams);
    vacancyData.value = response.data;
    photoUrl.value = response.photo
    
    let ax = localStorage.getItem('vacancy')
    const companyAccount = await axios.post(`${IP}/getCompanyById`, { id: ax });
    console.log(companyAccount.data.photo);
    photoUrl.value = companyAccount.data.photo
    
    companyProfile.value = {...companyAccount.data} 
    let checkUUid = JSON.parse(localStorage.getItem("user")).uuid;
    const getResume = await axios.get(`${IP}/resume/users/${checkUUid}/resumes`);
};
fetchVacancyData();
</script>

<style>
.el-notification {
    max-width: 484px;
    width: auto;
    height: auto;
    border-radius: 2px;
    background-color: rgba(236, 245, 255, 1);
    color: #409eff;
    padding: 8px 16px;
}

.el-notification__title {
    color: #409eff;
}

.el-notification__content p {
    color: #409eff;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}
</style>

<style scoped>
.text__align {
    display: flex;
    align-items: center;
    gap: 5px;
}

.wrap__title {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
}

.wrap__content {
    padding-block: 10px;
    margin-bottom: 14px;
}
.wrap__content-text {
    font-size: 16px;
    line-height: 157%;
}

.wrap__footer {
    display: flex;
    justify-content: end;
    gap: 8px;
}

.wrap {
    padding: 10px 5px;
}
.skills {
    margin-top: 15px;
    padding: 15px 15px;
    border-radius: 9px;
}
.skills {
    margin-right: 8px;
}
.partner {
    margin-top: 15px;
}
.contract {
    font-weight: 700;
    font-size: 18px;
}
.respond {
    width: 100%;
    height: 44px;
}
ul {
    list-style-type: none;
}
ul li::before {
    content: "—";
    margin-right: 5px;
}
.company__description,
.respond {
    margin-top: 15px;
}
.wrap__margin {
    margin-top: 20px;
}
.right__title {
    font-size: 22px;
    font-weight: 700;
}
.about__company {
    display: flex;
    justify-content: space-between;
}
.company__vacancy__right-part {
    width: 40%;
}
.company__vacancy__left-part {
    width: 60%;
}
.company__vacancy {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 50px;
}

@media (max-width: 850px) {
    .company__vacancy {
        flex-direction: column;
    }
    .company__vacancy__left-part,
    .company__vacancy__right-part {
        width: 100%;
    }
}
.direction {
    font-size: 26px;
}
.element__title {
    font-weight: 700;
    font-size: 17px;
}
.left__element {
    margin-top: 42px;
}

.description {
    font-size: 22px;
    font-weight: 600;
    color: #409eff;
    margin-top: 15px;
}
ul > li {
    color: #303133;
    margin-top: 15px;
}
.right__description {
    margin-top: 8px;
}
</style>
