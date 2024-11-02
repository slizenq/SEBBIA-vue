<template>
    <div class="right__part-screen">
        <p class="right__part-title">{{ isCompany ? titlePage.company.companyTitle : titlePage.student.studentTitle }}</p>
        <div class="right__part-user contain__margin">
            <p class="right__part-elem"><span>{{ isCompany ? companyData.form.Form : studentData.age.Age }}:</span>
                {{ isCompany ? companyData.form.FormContent : studentData.age.StudentAge }}</p>
            <p class="right__part-elem"><span>{{ isCompany ? companyData.city.City : studentData.city.City }}:</span>
                {{ isCompany ? companyData.city.CompanyCity : studentData.city.StudentCity }}</p>
        </div>
        <div class="contain__margin">
            <ElButton type="primary" class="btn-edit right__part-btn" @click="dialogRedactor = true">Редактировать профиль</ElButton>
        </div>
        <ElButton plain class="btn-out right__part-btn" @click="openDialog">Выйти</ElButton>
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
                    <ElButton plain class="" @click="logout">Выйти</ElButton>
                    <ElButton type="primary" class="" @click="closeDialog">Не выходить</ElButton>
                </div>
            </div>
        </el-dialog>

        <el-dialog v-model="dialogRedactor" title="Личные данные" width="620" top="2%" class="dialog_margin" :before-close="handleClose">
            <EditProfileCompany v-if="isCompany" @profileUpdated="updateProfileData"/>
            <EditProfileStudent v-else @profileUpdated="updateProfileData" @updateDialogRedactor="updateDialogRedactor"/>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElButton, ElDialog, ElIcon } from "element-plus";
import { Guide } from "@element-plus/icons-vue";
import axios from "axios";
import { IP } from "../UI/auth/Authentication";
import EditProfileStudent from "../EditAccount/student/EditProfileStudent.vue";
import EditProfileCompany from "../EditAccount/company/EditProfileCompany.vue";

const dialogRedactor = ref(false);
const isCompany = ref(null);
const isDialogVisible = ref(false);
const openDialog = () => { isDialogVisible.value = true; };
const closeDialog = () => { isDialogVisible.value = false; };

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
    city: { City: "Город", CompanyCity: "Не заполнено" },
});

const logout = () => {
    localStorage.clear();
    navigateTo("/");
};

const searchResumes = async () => {
    const checkUUid = localStorage.getItem("access_token");
    const isCompanyUser = JSON.parse(localStorage.getItem("user")).isCompany;
    isCompany.value = isCompanyUser;

    let response;
    if (isCompanyUser) {
        response = await axios.post(`${IP}/getCompanyByAccessToken`, { checkUUid });
        const data = response.data;
        companyData.value.form.FormContent = data?.typeCompany || "Не заполнено";
        companyData.value.city.CompanyCity = data?.location || "Не заполнено";
        titlePage.value.company.companyTitle = data?.title || "Наименование";
    } else {
        response = await axios.post(`${IP}/getStudentByToken`, { checkUUid });
        const data = response.data;
        studentData.value.age.StudentAge = data?.BornDate || "Не заполнено";
        studentData.value.city.StudentCity = data?.Location || "Не заполнено";
        titlePage.value.student.studentTitle = `${data?.LastName || ""} ${data?.FirstName || ""}` || "Фамилия Имя";
    }
};

const updateProfileData = (data) => {
    if (isCompany.value) {
        companyData.value.form.FormContent = data.typeCompany || "Не заполнено";
        companyData.value.city.CompanyCity = data.location || "Не заполнено";
        titlePage.value.company.companyTitle = `${data.title || ""}`;
    } else {
        studentData.value.age.StudentAge = data.BornDate || "Не заполнено";
        studentData.value.city.StudentCity = data.Location || "Не заполнено";
        titlePage.value.student.studentTitle = `${data.LastName || ""} ${data.FirstName || ""}`;
    }
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
