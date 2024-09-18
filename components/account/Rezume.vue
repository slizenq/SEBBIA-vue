<template>
    <div class="rezume">
        <p class="rezume__title">{{ rezumeTitle[0] }}</p>
        <div>
            <div class="rezume__void contain__margin">
                <p class="not_filled">Не заполнено</p>
                <p class="more_details">Подробнее</p>
            </div>
        </div>
        <ElButton type="primary" class="rezume-btn contain__margin">
            {{ createRezume[0] }}
        </ElButton>
        <!-- <el-button plain @click="open1"> Top Right </el-button> -->
    </div>
</template>

<script setup>
import { ElButton } from "element-plus";
// import { ElNotification } from 'element-plus'

// const open1 = () => {
//   ElNotification({
//     title: 'Произошла ошибка при отправке',
//     message: "Проверьте соединение к интернету",
//   })
// }   
const rezumeTitle = ["Резюме", "Вакансия"];
const createRezume = ["Создать резюме", "Добавить информацию"];
</script>

<style>
/* .el-notification  {
    background-color: rgba(245, 108, 108, 0.5);
    width: 400px;

}
.el-notification__title {
    color: pink; 
} */
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
