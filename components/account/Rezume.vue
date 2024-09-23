<template>
    <div class="rezume">
        <p class="rezume__title">{{ rezumeTitle[0] }}</p>
        <div @click="dialogResume = true">



            <div v-if="showEvent" class="rezume__void contain__margin">
                <p class="not_filled">Не заполнено</p>
                <p class="more_details">Подробнее</p>
            </div>

            <div v-else class="rezume__void resume__void-update contain__margin">
                <p class="not_filled not_filled__update">{{ (showResume.first_name + ' ' + showResume.middle_name + ' ' + showResume.last_name) || 'Не заполнено' }}</p>
                <p class="more_details resume__update-more">Подробнее</p>
            </div>



        </div>
        <ElButton type="primary" class="rezume-btn contain__margin" @click="dialogResume = true">
            {{ createRezume[0] }}
        </ElButton>
        <el-dialog
            v-model="dialogResume"
            width="620"
            top="2%"
            :before-close="handleClose"
        >
        <div>
            <div v-if="whichDialog">1</div>
            <div v-else>2</div>
        </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ElButton, ElDialog } from "element-plus";
import axios from "axios";
import { IP } from "../UI/auth/Authentication";
const rezumeTitle = ["Резюме", "Вакансия"];
const createRezume = ["Создать резюме", "Добавить информацию"];
const dialogResume = ref(false)
const whichDialog = ref(true)
const showResume = ref({})
const showEvent = ref(true)
let updateResume = async () => {
    try {
        let checkUUid = JSON.parse(localStorage.getItem("user")).uuid
        const getResume = await axios.get(`${IP}/resume/users/${checkUUid}/resumes`);
        showResume.value = getResume.data[0]
        if (getResume.data[0].first_name && getResume.data[0].middle_name && getResume.data[0].last_name) {
            showEvent.value = false
        }
    } catch (error) {
        console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
    }
}
updateResume()
</script>

<style>
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
    background: linear-gradient(to bottom right, rgba(152, 105, 255, 1), rgba(64, 158, 255, 1));
}
.not_filled__update {
    color: #936DFF;
    background-color: #fff;
}
</style>
