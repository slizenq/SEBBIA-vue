<template>
    <div class="rezume">
        <p class="rezume__title">{{ rezumeTitle[0] }}</p>
        <div @click="dialogResume = true">
            <div class="rezume__void contain__margin">
                <p class="not_filled">Не заполнено</p>
                <p class="more_details">Подробнее</p>
            </div>
        </div>
        <ElButton
            type="primary"
            class="rezume-btn contain__margin"
            @click="dialogResume = true"
        >
            {{ createRezume[0] }}
        </ElButton>
        <el-dialog
            v-model="dialogResume"
            width="620"
            top="2%"
            :before-close="handleClose"
            class="my-dialog"
        >
            <div>
                <div v-if="whichDialog"><EditResumeStudent /></div>
                <div v-else>2</div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ElButton, ElDialog } from "element-plus";
import EditResumeStudent from "../EditAccount/student/EditResumeStudent.vue";
const rezumeTitle = ["Резюме", "Вакансия"];
const createRezume = ["Создать резюме", "Добавить информацию"];
const dialogResume = ref(false);
const whichDialog = ref(true);
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
</style>
