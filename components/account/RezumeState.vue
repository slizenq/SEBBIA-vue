<template>
    <div class="rezume__state">
      <p class="rezume__state-title">{{ rezumeState.title }}</p>
  
      <div v-if="!rezumes.length" class="rezume__state-void contain__margin">
        <div class="current__state">
          <p class="current__state-title">{{ rezumeState.empty }}</p>
          <p class="current__state-desc">{{ rezumeState.description }}</p>
        </div>
      </div>
  
      <div v-else class="rezume__state">
        <div v-for="rezume in rezumes" :key="rezume.Id" class="rezume__state-void contain__margin">
          <div class="current__state">
            <p class="current__state-title" :style="{ color: getStatusColor(rezume.status) }">
              {{ rezume.firstName }} {{ rezume.lastName }} в
            </p>
            <p class="current__state-desc" :style="{ color: getStatusColor(rezume.status) }">
              <el-icon v-if="getStatusLabelIcon(rezume.status)">
                <component :is="getStatusLabelIcon(rezume.status)" height="16"/>
              </el-icon>
              {{ rezume.status }} - Направление
            </p>
          </div>
  
          <!-- Добавляем информацию о вакансии -->
          <div v-if="rezume.vacancyDetails" class="vacancy-details">
            <p><strong>Вакансия:</strong> {{ rezume.vacancyDetails.title }}</p>
            <p><strong>Описание вакансии:</strong> {{ rezume.vacancyDetails.description }}</p>
          </div>
  
          <el-button v-if="rezume.status === 'Отказано'" type="default" plain @click="removeRezume(rezume.Id)" class="btn__delete">Удалить</el-button>
          <el-button v-else-if="rezume.status !== 'Отменено'" type="danger" plain class="btn__cancel" @click="cancelRezume(rezume.Id)">Отменить отправку</el-button>
  
          <transition name="fade">
            <div v-if="rezume.status === 'Отменено'" class="cancel-button">
              <el-button type="primary" plain @click="returnRezume(rezume.Id)" class="btn__return">Вернуть ({{ rezume.countdown }} секунд)</el-button>
            </div>
          </transition>
        </div>
  
        <div v-if="rezumes.length > 5" class="show-more-container">
          <el-button type="primary" plain class="show-more" @click="showMoreRezumes">Показать больше</el-button>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElButton, ElNotification } from "element-plus";
import { Hide, CircleCheckFilled, CircleCloseFilled, View } from "@element-plus/icons-vue";
import axios from "axios";
import { IP } from "../UI/auth/Authentication";

const rezumes = ref([]);
const rezumeState = {
    title: "Статус отправки резюме",
    empty: "Вы еще не отправляли свое резюме",
    description: "Найдите компанию и попробуйте отправить свое резюме",
};
console.log(rezumes.value);

const fetchVacancyDetails = async (vacancyId) => {
    try {
        const response = await axios.post(`${IP}/getVacancyById`, { vacancyId });
        return response.data;  
    } catch (error) {
        console.error("Ошибка получения вакансии:", error);
        return null;  
    }
};

const getStudentApplication = async () => {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,  
    };
    const studentId = localStorage.getItem("AccountID"); 
    try {
        if (!JSON.parse(localStorage.getItem("user")).isCompany) {
            const getResumeId = await axios.post(`${IP}/getResumeByStudentId`, { studentId }, { headers });
            const applicationData = {
                resumeId: getResumeId.data.resumeId,  
                page_size: 10,
                page_token: "",
            };
            const responseAppl = await axios.post(`${IP}/getApplicationsVacancyByResumeId`, applicationData, { headers });
            const rezumeData = await Promise.all(
            responseAppl.data.map(async (rezume) => {
                    const vacancyDetails = await fetchVacancyDetails(rezume.vacancyId);
                    return { ...rezume, vacancyDetails };   
                })
            );
        rezumes.value = rezumeData; 
        } else {
            const getResumeId = await axios.post(`${IP}/getResumeByStudentId`, { studentId }, { headers });
            const applicationData = {
                resumeId: getResumeId.data.vacancyId,  
                page_size: 10,
                page_token: "",
            };
            const responseAppl = await axios.post(`${IP}/getApplicationsVacancyByVacancyId`, applicationData, { headers });
            const rezumeData = await Promise.all(
            responseAppl.data.map(async (rezume) => {
                    const vacancyDetails = await fetchVacancyDetails(rezume.vacancyId);
                    return { ...rezume, vacancyDetails };   
                })
            );
        rezumes.value = rezumeData; 
        }




        rezumes.value = rezumeData;  
        console.log(rezumes.value);
    } catch (error) {
        console.error("Ошибка получения заявок:", error);
    }
};
onMounted(() => {
    getStudentApplication();
});
function removeRezume(id) {
    rezumes.value = rezumes.value.filter((rezume) => rezume.Id !== id);
    console.log(rezumes.value);
}
function cancelRezume(id) {
    const rezume = rezumes.value.find((rezume) => rezume.Id === id);
    if (rezume) {
        rezume.status = "Отменено";
        rezume.countdown = 10;
        rezumes.value = rezumes.value.map((r) => (r.Id === id ? rezume : r));

        const notification = ElNotification({
            title: "Вы отменили отправку",
            message: `Резюме будет удалено через 10 секунд, вы еще можете его восстановить`,
            type: "warning",
        });
        setTimeout(() => {
            notification.close();
        }, 8000);

        let intervalId = setInterval(() => {
        rezume.countdown--;
        if (rezume.countdown === 0) {
            clearInterval(intervalId);
            rezumes.value = rezumes.value.filter((rezume) => rezume.Id !== id);
            ElNotification({
                title: "Резюме удалено",
                message: "Резюме удалено без возможности восстановления",
                type: "error",
            });
        }
        }, 1000);
    }
}
function returnRezume(id) {
    const rezume = rezumes.value.find((rezume) => rezume.Id === id);
    if (rezume) {
        rezume.status = "Отправлено";
        rezume.countdown = null;
        rezumes.value = rezumes.value.map((r) => (r.Id === id ? rezume : r));
        ElNotification({
            title: "Резюме восстановлено",
            message: "Резюме восстановлено",
            type: "success",
        });
    }
}
function getStatusColor(status) {
    switch (status) {
        case "Одобрено":
            return "#67c23a";
        case "Отказано":
            return "#f56c6c";
        case "Просмотрено":
            return "#303133";
        case "Не просмотрено":
            return "#909399";
        default:
            return null;
    }
}
function getStatusLabelIcon(status) {
    switch (status) {
        case "Одобрено":
            return CircleCheckFilled;
        case "Отказано":
            return CircleCloseFilled;
        case "Просмотрено":
            return View;
        case "Не просмотрено":
            return Hide;
        default:
            return null;
    }
}
function showMoreRezumes() {
    navigateTo("/groups/ResumeList");
}
</script>

<style>
.rezume__state {
    max-width: 552px;
}

.rezume__state-void {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 74px;
    max-width: 552px;
    background-color: rgba(115, 118, 122, 0.06);
    border-radius: 4px;
    padding-inline: 16px;
}

.current__state-title {
    color: #409eff;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: left;
}

.current__state-desc {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    color: #909399;
    font-size: 15px;
    line-height: 26px;
    text-align: left;
}

.rezume-btn {
    width: 100%;
    height: 45px;
}

.btn__delete,
.btn__cancel {
    min-height: 24px;
    max-height: 40px;
    padding: 8px 20px;
}

.current__state {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 74px;
    border-radius: 5px;
    padding: 16px;
}

.rezume__state-title {
    font-weight: 700;
    font-size: 24px;
}

.rezume__state {
    width: 600px;
    margin-top: 32px;
}

.show-more-container {
    margin-top: 16px;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.5);
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
    transform: scale(1);
}
</style>
