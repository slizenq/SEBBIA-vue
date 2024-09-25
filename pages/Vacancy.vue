<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems"/>
        <div class="company__vacancy" @search="sea(message)">
            <div class="company__vacancy__left-part">
                <div class="left__element">
                    <h1 class="direction">{{ vacancyData.description }}</h1>
                    <p class="description">
                        Мобильный разработчик Фулл-стек разработчик Бекенд
                        разработчик
                    </p>
                </div>
                <div class="left__element">
                    <p class="element__title">Чем предстоит заниматься</p>
                    <ul>
                        <li>
                            Это команда профессионалов, стремящаяся к решению
                            сложных задач
                        </li>
                        <li>Это команда профессионалов</li>
                        <li>Это команда профессионалов, стремящаяся к</li>
                        <li>
                            Это команда профессионалов, стремящаяся к решению
                        </li>
                    </ul>
                </div>
                <div class="left__element">
                    <p class="element__title">Желательные навыки</p>
                    <el-tag
                        v-if="vacancyData.requirements"
                        v-for="item in vacancyData.requirements.split(',')"
                        :key="item"
                        type="primary"
                        effect="plain"
                        round
                        class="skills"
                    >
                        <div class="skill_tags">{{ item }}</div>
                    </el-tag>
                </div>
                <div class="left__element">
                    <p class="element__title">О проектах</p>
                    <p class="description">
                        Это команда профессионалов, стремящаяся к решению
                        сложных задач Это команда профессионалов, стремящаяся к
                        решению сложных задач Это команда профессионалов,
                        стремящаяся к решению сложных задач Это...
                    </p>
                </div>
            </div>
            <div class="company__vacancy__right-part">
                <div class="about__company">
                    <div>
                        <div>
                            <p class="right__title text__align">
                                {{ vacancyData.title
                                }}<img
                                    src="./../assets/images/vacancy/confirm.svg"
                                />
                            </p>
                            <p class="right__description">ООО</p>
                        </div>
                        <div class="wrap__margin">
                            <p class="right__description text__align">
                                <img
                                    src="./../assets/images/vacancy/location.svg"
                                />{{ vacancyData.location }}
                            </p>
                            <p class="right__description text__align">
                                <img
                                    src="./../assets/images/vacancy/date.svg"
                                />22.02.2011
                            </p>
                        </div>
                    </div>
                    <img src="./../assets/images/company-logo.svg" alt="logo" />
                </div>
                <p class="company__description">
                    Это команда профессионалов, стремящаяся к решению сложных
                    задач. Мы облао команда профессионалов, стремящаяся к
                    решению сложных задач. Мы обла...
                </p>
                <ElButton
                    @click="openDialog"
                    class="respond"
                    type="primary"
                    v-if="checkCompany"
                    >Откликнуться<img
                        src="./../assets/images/vacancy/micro-link.svg"
                /></ElButton>
                <ElButton
                    @click="editVacancy"
                    class="respond"
                    type="primary"
                    v-else
                    >Редактировать<img
                        src="./../assets/images/vacancy/micro-link.svg"
                /></ElButton>
                <el-dialog
                    v-model="isDialogVisibleVacancy"
                    width="700px"
                    :close-on-click-modal="true"
                    :close-on-press-escape="true"
                    @close="resetDialog"
                    class="login-dialog"
                    top="2%"
                >
                    <EditVacancyCompany/>
                </el-dialog>
                <el-dialog
                    v-model="isDialogVisible"
                    :title="titleModal"
                    width="480px"
                    :close-on-click-modal="true"
                    :close-on-press-escape="true"
                    @close="resetDialog"
                    class="login-dialog"
                >
                    <div class="wrap">
                        <div class="wrap__title">
                            <el-icon
                                ><InfoFilled color="#409EFF" height="22px"
                            /></el-icon>
                            <h2>Заполните резюме</h2>
                        </div>
                        <div class="wrap__content">
                            <p class="wrap__content-text">
                                Для отклика требуется создать резюме в личном
                                кабинете, где есть подсказки, чтобы научиться
                                профессионально о себе рассказать будущему
                                работодателю
                            </p>
                        </div>
                        <div class="wrap__footer">
                            <el-button @click="closeDialog">Позже</el-button>
                            <el-button @click="link" type="primary"
                                >Перейти к резюме</el-button
                            >
                        </div>
                    </div>
                </el-dialog>
                <div class="partner">
                    <p class="contract">Партнеры</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElTag, ElDialog, ElNotification } from "element-plus";
import { InfoFilled } from "@element-plus/icons-vue";
import { IP } from "~/components/UI/auth/Authentication";
import EditVacancyCompany from "./../components/EditAccount/company/EditVacancyCompany.vue"
import { ref } from "vue";
import axios from "axios";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";
const breadcrumbItems = ref([
    { path: "/", label: "Главная" },
    { path: "/about", label: "Поиск компании" },
    { path: "/", label: "Компания" },
]);
const isDialogVisibleVacancy = ref(false)
const isDialogVisible = ref(false);
const editVacancy = function() {
    isDialogVisibleVacancy.value = true
}
const openDialog = () => {
    isDialogVisible.value = true;
    ElNotification({
        title: "Резюме отправлено",
        message: "Вы можете посмотреть его статус в личном кабинете ",
        duration: 2000,
        type: "success",
        showClose: false,
    });
};

const closeDialog = () => {
    isDialogVisible.value = false;
};

const link = () => {
    navigateTo("/account/Student");
};

const checkCompany = ref(true);
const vacancyData = ref({});
const fetchVacancyData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.is_company == true) {
        checkCompany.value = false;
    } else if (!user) {
        checkCompany.value = false;
    } else {
        checkCompany.value = true;
    }
    console.log(checkCompany.value);

    const response = await axios.get(`${IP}/vacancy/vacancies/${localStorage.getItem("vacancy")}`);
    console.log(response.data);
    
    vacancyData.value = response.data;
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
.description,
ul > li {
    color: #303133;
    margin-top: 15px;
}
.right__description {
    margin-top: 8px;
}
</style>
