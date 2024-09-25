<template>
    <div class="demo-progress">
        <p class="progress__title">Заполни профиль</p>
        <el-progress :percentage="getProgress()" :format="format" />
    </div>
</template>

<script setup>
import { ElProgress } from 'element-plus';

const format = (percentage) => (percentage === 100 ? "Full" : `${percentage}%`);
const getProgress = () => {
    const progress = ref(0)
    let checkProgress = JSON.parse(localStorage.getItem('resume_id'))?.progress
    if (checkProgress) {
        return checkProgress
    } else {
        return progress.value
    }
}
</script>

<style scoped>
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 100%;
}
.demo-progress {
    margin-top: 25px;
}
.progress__title {
    color: #909399;
}
</style>
