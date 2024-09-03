<template>
    <div class="rezume__state">
        <p class="rezume__state-title">{{ rezumeState[0] }}</p>
        <div class="rezume__state-void contain__margin">
            <div class="current__state">
                <p class="current__state-title">{{ xxx[0] }}</p>
                <p class="current__state-desc">{{ xx[0] }}</p>
            </div>
            <!-- <div>
            </div> -->
        </div>
        <div class="rezume__state-content"></div>
        <ElButton class="rezume-btn contain__margin" plain>{{ sendState[0] }}</ElButton>
    </div>
</template>

<script setup>
import { ElButton } from 'element-plus';
const rezumeState = ['Статус отправки резюме', 'Входящие резюме']
const sendState = ['Найти компанию', 'Посмотреть другие компания']
const xxx = ['Вы еще не отправляли  свое резюме', 'Вы еще не получили резюме']
const xx = ['Найдите компанию и попробуйте отправить свое резюме', 'Заполните информацию о компании, чтобы получить больше входящих резюме']

</script>

<style>
.current__state-title {
    color: #409EFF;
    font-size: 18px;
    font-weight: 700
}
.current__state-desc {
    color: #909399;
}
.rezume-btn {
    width: 100%;
    height: 45px;
}
.current__state {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    height: 120px;
    background-color: rgba(115, 118, 122, 0.060);
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
</style>