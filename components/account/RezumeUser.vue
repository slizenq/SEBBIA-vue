<template>
    <div class="right__part-screen">
        <p class="right__part-title">
            {{
                isCompany
                    ? titlePage.company.companyTitle
                    : titlePage.student.studentTitle
            }}
        </p>
        <div class="right__part-user contain__margin">
            <p class="right__part-elem">
                <span
                    >{{
                        isCompany ? companyData.form.Form : studentData.age.Age
                    }}:</span
                >
                {{
                    isCompany
                        ? companyData.form.FormContent
                        : studentData.age.StudentAge
                }}
            </p>
            <p class="right__part-elem">
                <span
                    >{{
                        isCompany
                            ? companyData.city.City
                            : studentData.city.City
                    }}:</span
                >
                {{
                    isCompany
                        ? companyData.city.StudentCity
                        : studentData.city.StudentCity
                }}
            </p>
        </div>
        <div class="contain__margin">
            <ElButton
                type="primary"
                class="btn-edit right__part-btn"
                @click="nextStap"
                >Редактировать профиль</ElButton
            >
        </div>
        <ElButton plain class="btn-out right__part-btn" @click="openDialog"
            >Выйти</ElButton
        >
        <el-dialog
            v-model="isDialogVisible"
            :title="titleModal"
            width="480px"
            :close-on-click-modal="true"
            :close-on-press-escape="true"
            @close="resetDialog"
            class="exit-dialog"
        >
            <div class="wrap">
                <div class="title">
                    <el-icon><Guide color="rgba(245, 108, 108, 1)" /></el-icon>
                    <p>Выход из аккаунта</p>
                </div>
                <div class="main">
                    <p>
                        В аккаунте вы отправляете резюме работодателям и
                        получаете уведомления при принятии на практику - если вы
                        выйдете, возможности будут доступны снова только после
                        входа
                    </p>
                </div>
                <div class="buttons">
                    <ElButton plain class="" @click="logout">Выйти</ElButton
                    ><ElButton type="primary" class="" @click="closeDialog"
                        >Не выходить</ElButton
                    >
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElButton, ElDialog, ElIcon } from "element-plus";
import { Guide } from "@element-plus/icons-vue";
import { defineProps } from "vue";
import axios from "axios";
import { IP } from "../UI/auth/Authentication";

const props = defineProps({
    updateAuthStatus: {
        type: Function,
        required: true,
    },
});

const isDialogVisible = ref(false);
const openDialog = () => {
    isDialogVisible.value = true;
};

const closeDialog = () => {
    isDialogVisible.value = false;
};

const nextStap = function() {
    navigateTo('/account/resume/ResumeStudent')
}
const logout = function() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    localStorage.removeItem('resume_id')
    navigateTo('/')
}
const titlePage = ref({
    student: { studentTitle: "Фамилия имя" },
    company: { companyTitle: "Наименование" },
});
const studentData = ref({
    age: { Age: "Возраст", StudentAge: "Не заполнено" },
    city: { City: "Город", StudentCity: "Не заполнено" },
});

const companyData = ref({
    form: { Form: "Форма организации", FormContent: "Не заполнено" },
    city: { City: "Город", StudentCity: "Не заполнено" },
});
const isCompany = ref(null);
isCompany.value = true;
const searchResumes = async () => {
    const resume_id = JSON.parse(localStorage.getItem('resume_id'))?.resume_id
    const response = await axios.get(`${IP}/resumes/${resume_id || 6}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const user = JSON.parse(localStorage.getItem("user")).is_company;
    isCompany.value = user;
    if (isCompany.value) {
        companyData.value.form.FormContent =
            response.data?.test || "Не заполнено";
        companyData.value.city.StudentCity =
            response.data?.test || "Не заполнено";
        titlePage.value.company.companyTitle =
            response.data?.test || "Наименование";
    } else {
        studentData.value.age.StudentAge =
            response.data?.born_date || "Не заполнено";
        studentData.value.city.StudentCity =
            response.data?.about_projects || "Не заполнено";
        titlePage.value.student.studentTitle =
            response.data?.last_name + " " + response.data?.first_name ||
            "Фамилия Имя";
    }
    return response.data;
};
onMounted(() => {
    searchResumes();
});
</script>

<style scoped>
.wrap {
    padding-inline: 14px;
}
.exit-dialog {
    display: flex;
    flex-direction: column;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
    margin-bottom: 14px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: bold;
    color: #303133;
}

.main {
    font-size: 16px;
    margin-bottom: 24px;
}
.btn-out {
    margin-top: 16px;
}
.right__part-screen {
    width: 600px;
}
.right__part-btn {
    width: 100%;
    height: 45px;
}
.right__part-title {
    font-size: 24px;
    font-weight: 700;
}
</style>
