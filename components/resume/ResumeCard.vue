<template>
    <div class="card">
        <div class="card__left">
            <p class="name">{{ rezume.name }}</p>
            <div class="direction">
                <p class="direction-title">{{ rezume.direction }}</p>
            </div>
        </div>
        <div class="card__right">
            <div v-if="rezume.status == 'Отказано' || 'Одобрено'">
                <div v-if="rezume.status == 'Одобрено'" class="">
                    <el-tag size="large" type="success" effect="light"
                        ><el-icon><CircleCheckFilled height="16" /></el-icon
                        >Принято</el-tag
                    >
                </div>
                <div v-else-if="rezume.status == 'Отказано'" class="">
                    <el-tag size="large" type="danger" effect="light"
                        ><el-icon><CircleCloseFilled height="16" /></el-icon
                        >Отказано</el-tag
                    >
                </div>
                <div v-else class="">
                    <el-button type="success" plain>Принять</el-button>
                    <el-button type="danger" plain>Отклонить</el-button>
                </div>
            </div>
            <div v-else class="">
                <el-button type="success" plain>Принять</el-button>
                <el-button type="success" plain>Отклонить</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElTag } from "element-plus";
import { CircleCheckFilled, CircleCloseFilled } from "@element-plus/icons-vue";

const props = defineProps({
    rezume: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.card__left {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.name {
    font-size: 18px;
    color: #409eff;
}

.direction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
}

.direction-title {
    font-size: 14px;
    color: #909399;
}
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    max-width: 816px;
    max-height: 74px;
    padding: 16px;
    background-color: #fafafa;
}
</style>
