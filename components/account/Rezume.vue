<template>
    <div class="rezume">
        <p class="rezume__title">{{ rezumeTitle[whichDialog ? 0 : 1] }}</p>
        <div @click="dialogResume = true">
            <div v-if="showEvent" class="rezume__void contain__margin">
                <p class="not_filled">Не заполнено</p>
                <p class="more_details">Подробнее</p>
            </div>

            <div v-else class="rezume__void resume__void-update contain__margin">
                <p class="not_filled not_filled__update">
                    {{ showResume.FirstName + " " + showResume.MiddleName + " " + showResume.LastName || "Не заполнено" }}
                </p>
                <p class="more_details resume__update-more">Подробнее</p>
            </div>
        </div>
        <ElButton type="primary" class="rezume-btn contain__margin" @click="dialogResume = true">
            {{ createRezume[whichDialog ? 0 : 1] }}
        </ElButton>
        <el-dialog v-model="dialogResume" width="620" top="2%" :before-close="handleClose" class="my-dialog">
            <div>
                <div v-if="whichDialog"><EditResumeStudent @updateDialogg="updateDialogg"/></div>
                <div v-else><EditVacancyCompany @updateDialogg="updateDialogg"/></div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ElButton, ElDialog } from "element-plus";
import EditResumeStudent from "../EditAccount/student/EditResumeStudent.vue";
import EditVacancyCompany from "../EditAccount/company/EditVacancyCompany.vue";
import axios from "axios";
import { IP } from "../UI/auth/Authentication";
import { ref, onMounted } from "vue";

const rezumeTitle = ["Резюме", "Вакансия"];
const createRezume = ["Создать резюме", "Добавить информацию"];
const dialogResume = ref(false);
const whichDialog = ref(false);
const showResume = ref({});
const showEvent = ref(true);
const updateDialogg = (value) => { dialogResume.value = value };

const updateResume = async () => {
    try {
        const checkUUid = localStorage.getItem("access_token");
        whichDialog.value = !JSON.parse(localStorage.getItem("user")).isCompany;

        let response;
        if (JSON.parse(localStorage.getItem("user")).isCompany) {
            response = await axios.post(`${IP}/getCompanyByAccessToken`, { checkUUid });
            localStorage.setItem('company_id', response.data.accountId)
            showResume.value = {
                FirstName: response.data.CompanyName || "Не заполнено",
                MiddleName: "",   
                LastName: response.data.CompanyType || "Не заполнено"
            };
        } else {
            response = await axios.post(`${IP}/getStudentByToken`, { checkUUid });
            showResume.value = {
                FirstName: response.data.FirstName || "Не заполнено",
                MiddleName: response.data.MiddleName || "",
                LastName: response.data.LastName || "Не заполнено"
            };
        }
        localStorage.setItem("AccountID", response.data.AccountID);
        showEvent.value = !(showResume.value.FirstName && showResume.value.LastName);
    } catch (error) {
        console.error("Ошибка при выполнении GET запроса:", error.response ? error.response.data : error.message);
    }
};

onMounted(() => {
    updateResume();
});
</script>

<style>
.my-dialog .el-dialog__headerbtn {
    display: none;
}
.rezume-btn {
    width: 100%;
    height: 45px;
}
.not_filled {
    color: #73767a;
    background-color: #dedfe0;
    padding: 7px 20px;
    border-radius: 5px;
    display: inline;
}
.more_details {
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-size: 14px;
    color: #909399;
}
.resume__update-more {
    color: #fff;
}
.contain__margin {
    margin-top: 22px;
}
.rezume__void {
    width: 100%;
    position: relative;
    height: 120px;
    background-color: rgba(115, 118, 122, 0.06);
    border-radius: 5px;
    padding: 16px;
    cursor: pointer;
}
.rezume__title {
    color: #303133;
    font-weight: 700;
    font-size: 26px;
}
.rezume {
    margin-top: 40px;
    width: 600px;
}
.resume__void-update {
    background: linear-gradient(
        to bottom right,
        rgba(152, 105, 255, 1),
        rgba(64, 158, 255, 1)
    );
}
.not_filled__update {
    color: #936dff;
    background-color: #fff;
}
</style>
